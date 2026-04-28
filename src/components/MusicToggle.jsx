import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

const MusicToggle = forwardRef(function MusicToggle({ musicUrl, hidden = false }, ref) {
  const audioRef = useRef(null);
  const fadeTimerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const targetVolume = 0.35;
  const fadeDurationMs = 1400;

  const clearFadeTimer = () => {
    if (fadeTimerRef.current) {
      window.clearInterval(fadeTimerRef.current);
      fadeTimerRef.current = null;
    }
  };

  const fadeInMusic = () => {
    if (!audioRef.current) return;

    clearFadeTimer();
    audioRef.current.volume = 0;
    audioRef.current.muted = false;

    const startedAt = Date.now();
    fadeTimerRef.current = window.setInterval(() => {
      if (!audioRef.current) {
        clearFadeTimer();
        return;
      }

      const progress = Math.min((Date.now() - startedAt) / fadeDurationMs, 1);
      audioRef.current.volume = targetVolume * progress;

      if (progress >= 1) {
        clearFadeTimer();
      }
    }, 50);
  };

  const playMusic = async () => {
    if (!audioRef.current || typeof audioRef.current.play !== 'function') return false;

    try {
      audioRef.current.muted = true;
      audioRef.current.volume = 0;
      await audioRef.current.play();
      fadeInMusic();
      setPlaying(true);
      setAutoplayBlocked(false);
      return true;
    } catch {
      setPlaying(false);
      setAutoplayBlocked(true);
      return false;
    }
  };

  const pauseMusic = () => {
    clearFadeTimer();
    if (audioRef.current && typeof audioRef.current.pause === 'function') {
      audioRef.current.pause();
    }
    setPlaying(false);
  };

  useImperativeHandle(
    ref,
    () => ({
      play: playMusic,
      pause: pauseMusic,
    }),
    [],
  );

  useEffect(() => {
    audioRef.current = new Audio(musicUrl);
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0;
      audioRef.current.muted = true;
      audioRef.current.preload = 'auto';
    }

    void playMusic();

    return () => {
      pauseMusic();
      audioRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [musicUrl]);

  const handleToggle = async () => {
    if (playing) {
      pauseMusic();
      return;
    }

    await playMusic();
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`fixed right-4 top-4 z-40 rounded-full border border-white/80 bg-white/85 px-4 py-2 text-xs font-bold text-slate-700 shadow-lg backdrop-blur transition hover:-translate-y-0.5 ${
        hidden ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-label="Toggle birthday background music"
      aria-hidden={hidden}
    >
      {playing ? 'Pause Music' : autoplayBlocked ? 'Tap to Play Music' : 'Play Music'}
    </button>
  );
});

export default MusicToggle;
