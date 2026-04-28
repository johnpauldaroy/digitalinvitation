import { motion } from 'framer-motion';

function HeroSection({ heroImage, celebrant, event }) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-soft backdrop-blur-lg sm:p-10">
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-candy-yellow/50 blur-2xl" />
      <div className="absolute -bottom-10 left-0 h-36 w-36 rounded-full bg-candy-sky/40 blur-2xl" />
      <div className="relative z-10 grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <motion.p
            className="mb-2 inline-block rounded-full bg-candy-violet/35 px-4 py-1 text-sm font-semibold tracking-wide text-slate-700"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {event.theme} Birthday Party
          </motion.p>
          <motion.h1
            className="font-heading text-4xl leading-tight text-slate-800 sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {celebrant.headline}
          </motion.h1>
          <motion.h2
            className="mt-4 text-2xl font-bold text-candy-pink sm:text-3xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {celebrant.name} Turns {celebrant.age}
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl text-base text-slate-700 sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Join us for a magical and memory-filled celebration for {celebrant.name}.
          </motion.p>
        </div>
        <motion.div
          className="mx-auto w-full max-w-sm"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
        >
          <img
            src={heroImage}
            alt={`${celebrant.name} birthday portrait`}
            className="h-72 w-full rounded-3xl border-4 border-white/80 object-cover shadow-soft sm:h-80"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
