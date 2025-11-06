import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neon Finance Dashboard',
    img: 'https://images.unsplash.com/photo-1551281044-8e8a2c2a3a6b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Ecom Product Explorer',
    img: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: '3D Portfolio Playground',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Showcase() {
  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">Selected work</h2>
            <p className="mt-2 max-w-xl text-black/70 dark:text-white/70">A peek at recent builds that combine delightful motion, clarity, and performance.</p>
          </div>
          <a href="#contact" className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow-lg dark:bg-white dark:text-black">Start a project</a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.figure key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-black/60">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <figcaption className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-black dark:text-white">{p.title}</h3>
                  <span className="text-xs text-black/60 dark:text-white/60">Case study →</span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
