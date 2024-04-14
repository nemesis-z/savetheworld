'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TITLE = 'WE ALL LOVE';

const IntroText = () => {
  const [subVisible, setSubVisibility] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setSubVisibility(true), 2000);

    return () => clearTimeout(t);
  });

  return (
    <div>
      <AnimatePresence>
        <motion.div
          layout="position"
          className="text-8xl font-bold"
          variants={{ reveal: { transition: { staggerChildren: 0.2 } } }}
          animate="reveal"
        >
          {TITLE.split(' ').map((t) => (
            <motion.span key={t} variants={{ reveal: { y: 0, opacity: 1 } }} initial={{ y: -10, opacity: 0 }}>
              {t}{' '}
            </motion.span>
          ))}
        </motion.div>
        {subVisible && (
          <motion.div
            className="mt-10 text-center text-9xl"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            MEEEEEEEMES
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntroText;
