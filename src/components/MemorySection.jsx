import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function MemorySection({ celebrant, gallery }) {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedImage]);

  return (
    <>
      <section className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-soft sm:p-10">
        <h3 className="font-heading text-3xl text-slate-800">Photo Memories</h3>
        <p className="mt-2 text-slate-600">{celebrant.about}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              className="overflow-hidden rounded-2xl border border-white/60 bg-white text-left"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-contain"
              />
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[92vh] w-auto max-w-full rounded-2xl border-2 border-white/70 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MemorySection;
