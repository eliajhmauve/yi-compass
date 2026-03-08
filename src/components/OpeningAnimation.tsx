import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  onComplete: () => void;
}

const trigrams = ['☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷'];

const OpeningAnimation = ({ onComplete }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        onAnimationComplete={() => {
          setTimeout(onComplete, 2000);
        }}
      >
        {/* Background energy particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`p-${i}`}
            className="absolute w-1 h-1 rounded-full bg-accent/40"
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              x: Math.cos((i * Math.PI * 2) / 12) * 200,
              y: Math.sin((i * Math.PI * 2) / 12) * 200,
            }}
            transition={{ duration: 2, delay: i * 0.08, ease: 'easeOut' }}
            style={{ left: '50%', top: '50%' }}
          />
        ))}

        {/* Trigrams circle */}
        {trigrams.map((t, i) => {
          const angle = (i * Math.PI * 2) / 8 - Math.PI / 2;
          const radius = 140;
          return (
            <motion.span
              key={t}
              className="absolute text-2xl md:text-3xl text-accent"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.4, ease: 'backOut' }}
              style={{
                left: `calc(50% + ${Math.cos(angle) * radius}px - 16px)`,
                top: `calc(50% + ${Math.sin(angle) * radius}px - 16px)`,
              }}
            >
              {t}
            </motion.span>
          );
        })}

        {/* Taichi symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 100 100" className="w-28 h-28 md:w-36 md:h-36" style={{ animation: 'taichi-spin 4s linear infinite' }}>
            <circle cx="50" cy="50" r="48" fill="none" stroke="hsl(42, 85%, 55%)" strokeWidth="2"/>
            <path d="M50 2 A48 48 0 0 1 50 98 A24 24 0 0 0 50 50 A24 24 0 0 1 50 2"
              fill="hsl(40, 25%, 90%)" />
            <path d="M50 98 A48 48 0 0 1 50 2 A24 24 0 0 0 50 50 A24 24 0 0 1 50 98"
              fill="hsl(20, 12%, 7%)" />
            <circle cx="50" cy="26" r="6" fill="hsl(20, 12%, 7%)"/>
            <circle cx="50" cy="74" r="6" fill="hsl(40, 25%, 90%)"/>
          </svg>
        </motion.div>

        {/* Yao lines below */}
        <div className="absolute bottom-24 md:bottom-32 flex flex-col items-center gap-2 w-40">
          {[1, 0, 1, 0, 1, 1].map((yang, i) => (
            <motion.div
              key={i}
              className="w-full"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.8 + i * 0.12, duration: 0.3 }}
            >
              {yang ? (
                <div className="h-[5px] bg-accent rounded-sm" />
              ) : (
                <div className="flex gap-3">
                  <div className="h-[5px] flex-1 bg-accent rounded-sm" />
                  <div className="h-[5px] flex-1 bg-accent rounded-sm" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Title text */}
        <motion.div
          className="absolute bottom-8 md:bottom-14 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <p className="text-accent text-sm tracking-[0.3em]">天地之道的流轉</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OpeningAnimation;
