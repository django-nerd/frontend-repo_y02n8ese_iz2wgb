export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-black/10 bg-white dark:border-white/10 dark:bg-black/60">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-xl font-bold">MiniMax Studio</h4>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">We build interactive experiences for bold teams and creators.</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold">Explore</h5>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#features" className="text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">Features</a></li>
              <li><a href="#work" className="text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">Work</a></li>
              <li><a href="#contact" className="text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold">Contact</h5>
            <ul className="mt-2 space-y-2 text-sm text-black/70 dark:text-white/70">
              <li>hello@minimax.studio</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold">Newsletter</h5>
            <form className="mt-2 flex gap-2">
              <input type="email" placeholder="Your email" className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black dark:border-white/15 dark:bg-black/40 dark:text-white dark:focus:ring-white" />
              <button type="submit" className="rounded-lg bg-black px-4 text-sm font-semibold text-white dark:bg-white dark:text-black">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 text-sm text-black/60 dark:border-white/10 dark:text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} MiniMax Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-black dark:hover:text-white">Privacy</a>
            <a href="#" className="hover:text-black dark:hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
