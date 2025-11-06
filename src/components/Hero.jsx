import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle gradient top overlay for readability; allow interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/0 dark:from-black/70 dark:via-black/40" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center md:px-6">
        <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-extrabold tracking-tight text-black drop-shadow-sm dark:text-white sm:text-5xl md:text-6xl">
          Crafting playful, modern web experiences
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-4 max-w-2xl text-base text-black/70 dark:text-white/70 sm:text-lg">
          We blend interactive 3D, snappy performance, and thoughtful design to help ambitious brands stand out across devices.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#features" className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/30 dark:bg-white dark:text-black">
            Explore features
          </a>
          <a href="#work" className="rounded-full border border-black/15 bg-white/70 px-5 py-3 text-sm font-semibold text-black backdrop-blur hover:bg-white dark:border-white/15 dark:bg-black/60 dark:text-white">
            See our work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
