import { useEffect, useMemo, useState } from 'react';

const getTimeLeft = (targetDate) => {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) {
    return null;
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

function CountdownSection({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = useMemo(() => {
    if (!timeLeft) {
      return [];
    }

    return [
      { label: 'Days', value: timeLeft.days },
      { label: 'Hours', value: timeLeft.hours },
      { label: 'Minutes', value: timeLeft.minutes },
      { label: 'Seconds', value: timeLeft.seconds },
    ];
  }, [timeLeft]);

  return (
    <section className="rounded-[2rem] border border-white/60 bg-gradient-to-br from-candy-sky/20 via-white/80 to-candy-violet/20 p-6 shadow-soft sm:p-10">
      <h3 className="font-heading text-3xl text-slate-800">Countdown To Party Time</h3>
      <p className="mt-2 text-slate-600">We are counting every happy moment until the celebration starts.</p>
      {!timeLeft ? (
        <p className="mt-6 rounded-xl bg-candy-pink/15 p-4 text-center font-bold text-slate-700">
          It is party time. See you at the venue.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {units.map((unit) => (
            <div key={unit.label} className="rounded-2xl border border-white/60 bg-white/85 p-4 text-center">
              <p className="font-heading text-4xl text-candy-pink">{unit.value}</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{unit.label}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default CountdownSection;

