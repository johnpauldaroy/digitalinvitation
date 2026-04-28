import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const OPEN_DELAY_MS = 1050;

function InvitationGate({ onOpen }) {
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    if (!opening) return undefined;

    const timer = window.setTimeout(() => {
      onOpen();
    }, OPEN_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [opening, onOpen]);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
  };

  return (
    <motion.section
      className="fixed inset-0 z-50 grid place-items-center bg-slate-900/35 px-4 py-6 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.button
        type="button"
        onClick={handleOpen}
        disabled={opening}
        className="relative w-full max-w-2xl overflow-hidden rounded-[2.75rem] bg-white/92 px-5 py-4 text-left shadow-[0_30px_80px_rgba(31,41,55,0.25)] disabled:cursor-default sm:px-6 sm:py-5"
        initial={{ scale: 0.92, y: 18 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, y: 10, opacity: 0 }}
        whileHover={{ scale: opening ? 1 : 1.01 }}
        whileTap={{ scale: opening ? 1 : 0.985 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-candy-pink/6 via-white to-candy-sky/8" />
        <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-candy-pink/10 blur-3xl" />
        <div className="absolute -right-8 top-16 h-28 w-28 rounded-full bg-candy-sky/10 blur-3xl" />
        <div className="absolute -bottom-8 left-10 h-24 w-24 rounded-full bg-candy-violet/10 blur-3xl" />

        <div className="relative z-10 flex justify-center py-1 sm:py-2">
          <div className="w-full max-w-[24rem] sm:max-w-[36rem]">
            <EnvelopeArt opening={opening} />
          </div>
        </div>
      </motion.button>
    </motion.section>
  );
}

export default InvitationGate;

function EnvelopeArt({ opening }) {
  const idleEnvelope = {
    y: [0, -6, 0],
    scale: [1, 1.012, 1],
  };

  const idleFlap = {
    rotate: [0, 1.5, 0],
    y: [0, -1.5, 0],
  };

  const idleSeal = {
    scale: [1, 1.08, 1],
  };

  return (
    <motion.svg
      viewBox="0 0 420 320"
      className="h-auto w-full"
      style={{ filter: 'drop-shadow(0 22px 32px rgba(255,134,200,0.18))' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="envBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fffdfd" />
          <stop offset="100%" stopColor="#eef7ff" />
        </linearGradient>
        <linearGradient id="envFlap" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd6ea" />
          <stop offset="100%" stopColor="#d9b8ff" />
        </linearGradient>
      </defs>

      <motion.g
        animate={opening ? { y: -10, scale: 1 } : idleEnvelope}
        transition={
          opening
            ? { duration: 0.45, ease: 'easeOut' }
            : { duration: 3.8, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
        }
      >
        <rect x="54" y="60" width="312" height="220" rx="30" fill="#ffffff" opacity="0.78" />
        <rect x="66" y="72" width="288" height="196" rx="26" fill="url(#envBody)" stroke="#f2dbe9" strokeWidth="2.5" />

        <motion.path
          d="M78 92L210 176L342 92V236H78V92Z"
          fill="#fff"
          stroke="#f0d7e6"
          strokeWidth="2"
          animate={opening ? { y: 14 } : { y: [0, 2, 0] }}
          transition={
            opening
              ? { duration: 0.5, ease: 'easeOut' }
              : { duration: 4.2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
          }
        />

        <motion.path
          d="M78 92L210 176L342 92"
          fill="none"
          stroke="#f1c7df"
          strokeWidth="3"
          strokeLinecap="round"
          animate={opening ? { opacity: 0 } : { opacity: [1, 0.8, 1] }}
          transition={
            opening
              ? { duration: 0.35, ease: 'easeOut' }
              : { duration: 3.2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
          }
        />

        <motion.path
          d="M66 72L210 168L354 72"
          fill="none"
          stroke="url(#envFlap)"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={
            opening
              ? { rotate: -6, y: -22, scaleY: 1.1, opacity: 0.98 }
              : idleFlap
          }
          style={{ transformOrigin: '50% 100%' }}
          transition={
            opening
              ? { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
              : { duration: 2.9, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
          }
        />

        <motion.path
          d="M66 72L210 168L354 72"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          animate={opening ? { opacity: 0.55 } : { opacity: [0.9, 0.6, 0.9] }}
          transition={
            opening
              ? { duration: 0.35, ease: 'easeOut' }
              : { duration: 3.2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
          }
        />

        <motion.rect
          x="118"
          y="112"
          width="184"
          height="38"
          rx="19"
          fill="#fff"
          stroke="#f6e6ef"
          strokeWidth="2"
          animate={opening ? { y: -18, opacity: 0.98 } : { y: [0, -2, 0], opacity: [1, 0.98, 1] }}
          transition={
            opening
              ? { duration: 0.58, ease: 'easeOut' }
              : { duration: 3.8, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
          }
        />

        <motion.text
          x="210"
          y="137"
          textAnchor="middle"
          fill="#1f2937"
          fontFamily="Nunito, sans-serif"
          fontSize="23"
          fontWeight="800"
          animate={opening ? { y: -18 } : { y: [0, -2, 0] }}
          transition={
            opening
              ? { duration: 0.58, ease: 'easeOut' }
              : { duration: 3.8, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
          }
        >
          You&apos;re Invited!
        </motion.text>

        <motion.circle
          cx="210"
          cy="170"
          r="24"
          fill="#ff86c8"
          stroke="#fff"
          strokeWidth="4"
          animate={opening ? { scale: [1, 1.2, 0], opacity: [1, 1, 0] } : idleSeal}
          transition={
            opening
              ? { duration: 0.55, times: [0, 0.6, 1], ease: 'easeOut' }
              : { duration: 2.4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
          }
        />

        <motion.circle
          cx="210"
          cy="170"
          r="9"
          fill="#fff"
          animate={opening ? { scale: [1, 1.15, 0], opacity: [1, 1, 0] } : { scale: [1, 1.06, 1] }}
          transition={
            opening
              ? { duration: 0.55, times: [0, 0.6, 1], ease: 'easeOut' }
              : { duration: 2.4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
          }
        />

        <motion.path
          d="M94 236H326"
          stroke="#e7d7ff"
          strokeWidth="5"
          strokeLinecap="round"
          animate={opening ? { y: 14, opacity: 0.18 } : { y: [0, 2, 0], opacity: [0.38, 0.46, 0.38] }}
          transition={
            opening
              ? { duration: 0.45, ease: 'easeOut' }
              : { duration: 3.4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
          }
        />
      </motion.g>
    </motion.svg>
  );
}
