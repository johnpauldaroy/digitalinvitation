import { motion } from 'framer-motion';

const shapes = [
  { id: 1, size: 90, left: '8%', top: '18%', color: 'bg-candy-pink/35', delay: 0.2, duration: 5.2 },
  { id: 2, size: 70, left: '78%', top: '10%', color: 'bg-candy-sky/40', delay: 0.4, duration: 4.6 },
  { id: 3, size: 56, left: '12%', top: '70%', color: 'bg-candy-mint/35', delay: 0.1, duration: 4.8 },
  { id: 4, size: 84, left: '82%', top: '63%', color: 'bg-candy-violet/35', delay: 0.6, duration: 5.5 },
  { id: 5, size: 64, left: '48%', top: '5%', color: 'bg-candy-peach/40', delay: 0.3, duration: 4.9 },
];

function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-confetti">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute rounded-full blur-[1px] ${shape.color}`}
          style={{ width: shape.size, height: shape.size, left: shape.left, top: shape.top }}
          animate={{ y: [0, -18, 0], rotate: [0, 12, -12, 0] }}
          transition={{ repeat: Infinity, duration: shape.duration, delay: shape.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

export default BackgroundDecor;

