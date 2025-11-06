import { Sparkles, Layout, Smartphone, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: Sparkles,
    title: 'Interactive 3D',
    desc: 'Delight users with immersive scenes powered by lightweight WebGL.',
  },
  {
    icon: Layout,
    title: 'Polished UI',
    desc: 'Clean, accessible interfaces that feel right at home on any device.',
  },
  {
    icon: Smartphone,
    title: 'Responsive by design',
    desc: 'Fluid layouts and touch-friendly interactions for phones, tablets, and desktops.',
  },
  {
    icon: Zap,
    title: 'Fast and optimized',
    desc: 'Best practices baked in for performance, SEO, and snappy loads.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            Everything you need to make it memorable
          </h2>
          <p className="mt-3 text-black/70 dark:text-white/70">
            Thoughtful details, modern tooling, and a focus on usability — all wrapped in a stunning package.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-black/60">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow-md">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white">{title}</h3>
              <p className="mt-1 text-sm text-black/70 dark:text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
