// Framer Motion page transition wrapper for Next.js App Router
'use client';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useLayoutTransition } from './layout-transition-context';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { applyLayoutChange } = useLayoutTransition();
  return (
    <AnimatePresence mode="wait" onExitComplete={applyLayoutChange}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        style={{ height: '100%' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
