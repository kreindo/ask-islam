import { motion } from 'framer-motion';
import Link from 'next/link';

import { MessageIcon } from './icons';

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p className="flex flex-row justify-center gap-4 items-center">
          <span className="text-4xl text-emerald-600 dark:text-emerald-400">☪</span>
          {/* <MessageIcon size={24} /> */}
        </p>
        <h1 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
          Welcome to Ask Islam
        </h1>
        <p>
          Ask Islam is your AI-powered Islamic knowledge assistant. You can ask questions about the Quran, Hadith, Islamic history, practices, beliefs, and more.
        </p>
        <p>
          This assistant aims to provide accurate and respectful information about Islam, citing sources from the Quran and authentic Hadith collections when possible.
        </p>
        <p className="text-sm text-muted-foreground">
          Note: This is an educational tool and not a substitute for consulting with qualified Islamic scholars for religious rulings (fatwas) or personal spiritual guidance.
        </p>
      </div>
    </motion.div>
  );
};
