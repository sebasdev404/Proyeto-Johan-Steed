'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';

const links = [
  ['Problema', '#problema'], ['Solución', '#solucion'], ['Funcionamiento', '#funcionamiento'], ['Dashboard', '#dashboard'], ['Desarrollo', '#desarrollo'],
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 24));

  return <motion.header animate={{ backgroundColor: scrolled ? 'rgba(7,17,31,.94)' : 'rgba(7,17,31,.42)', borderColor: scrolled ? 'rgba(255,255,255,.13)' : 'rgba(255,255,255,.08)' }} className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
    <nav className="mx-auto flex h-20 max-w-[1180px] items-center justify-between px-6">
      <a href="#inicio" className="leading-none text-white"><b className="text-xl tracking-[-.08em]">CIVIA</b><span className="mt-1 block text-[9px] uppercase tracking-[.13em] text-slate-300">Propuesta de Inteligencia Ciudadana</span></a>
      <div className="hidden gap-7 text-sm font-semibold text-slate-100 md:flex">{links.map(([label, href]) => <a key={href} className="transition hover:text-[#b7f170]" href={href}>{label}</a>)}</div>
      <span className="rounded-full border border-white/25 px-3 py-1.5 text-xs font-semibold text-white">Concepto</span>
    </nav>
  </motion.header>;
}
