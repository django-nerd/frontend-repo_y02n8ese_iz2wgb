import { useState, useEffect } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow-lg shadow-fuchsia-500/20">
            <Rocket size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight">MiniMax Studio</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/30 dark:bg-white dark:text-black">
            Let’s talk
          </a>
        </div>

        <button aria-label="Toggle menu" className="md:hidden rounded-lg p-2 hover:bg-black/5 dark:hover:bg-white/5" onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`md:hidden transition-[max-height] duration-300 overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 pb-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-base font-medium text-black/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/5">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="rounded-lg bg-black px-3 py-2 text-base font-semibold text-white dark:bg-white dark:text-black">
            Let’s talk
          </a>
        </div>
      </div>
    </header>
  );
}
