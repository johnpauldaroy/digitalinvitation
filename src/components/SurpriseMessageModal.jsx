import { AnimatePresence, motion } from 'framer-motion';

function SurpriseMessageModal({ open, message, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-slate-900/40 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-md rounded-3xl border border-white/70 bg-white p-6 text-center shadow-soft"
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
          >
            <p className="text-3xl" aria-hidden="true">
              🎀
            </p>
            <h4 className="mt-2 font-heading text-3xl text-slate-800">Special Message</h4>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{message}</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-full bg-candy-pink px-5 py-2.5 text-sm font-bold text-white"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SurpriseMessageModal;

