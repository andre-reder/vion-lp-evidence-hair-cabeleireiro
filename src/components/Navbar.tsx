import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Calendar, Phone } from "lucide-react";
import { PHONE, WHATSAPP_URL, SALON_NAME } from './utils';

const LINKS = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Processo', href: '#processo' },
  { label: 'Ambiente', href: '#ambiente' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');
  const [isDesktop, setIsDesktop] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 120], ['rgba(26,19,14,0.55)', 'rgba(26,19,14,0.92)']);
  const headerBorder = useTransform(
    scrollY,
    [0, 120],
    ['rgba(244,239,230,0.06)', 'rgba(244,239,230,0.14)']
  );

  // Track viewport for conditional rendering (avoids display:none invisible elements)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Active section tracking
  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        style={{ backgroundColor: headerBg, borderBottomColor: headerBorder }}
        className="sticky top-0 z-50 border-b backdrop-blur-md"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-12">
          {/* Logo */}
          <a href="#top" className="group flex items-center gap-2.5" aria-label={SALON_NAME}>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C8956D]/50 bg-[#C8956D]/15 text-[13px] font-semibold tracking-tight text-[#E8C9A8] transition-colors group-hover:border-[#C8956D]">
              E
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-[var(--font-display)] text-[15px] font-medium tracking-tight text-[#F4EFE6]">
                Evidence Hair
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#C8956D]">
                Cabeleireiro
              </span>
            </span>
          </a>

          {/* Desktop links */}
          {isDesktop && (
            <ul className="flex items-center gap-1">
              {LINKS.map((link) => {
                const isActive = active === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`relative px-3 py-2 text-[13px] font-medium transition-colors duration-200 ${
                        isActive ? 'text-[#F4EFE6]' : 'text-[#C9B89E] hover:text-[#F4EFE6]'
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute bottom-1 left-3 right-3 h-px origin-left bg-[#C8956D] transition-transform duration-300 ${
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}

          {/* Desktop CTAs */}
          {isDesktop && (
            <div className="flex items-center gap-3">
              <a
                href={`tel:+55${PHONE}`}
                className="flex items-center gap-1.5 text-[13px] font-medium text-[#C9B89E] transition-colors hover:text-[#F4EFE6]"
              >
                <Phone size={14} className="text-[#C8956D]" />
                (12) 99106-9668
              </a>
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-full bg-[#C8956D] px-5 py-2.5 text-[13px] font-semibold text-[#1A130E] shadow-[0_4px_14px_rgba(200,149,109,0.35)] transition-colors hover:bg-[#E8C9A8]"
              >
                <Calendar size={15} />
                Agendar
              </motion.a>
            </div>
          )}

          {/* Mobile toggle */}
          {!isDesktop && (
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-[#F4EFE6] transition-colors hover:bg-white/10"
            >
              <Menu size={22} />
            </button>
          )}
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80]"
          >
            <div
              className="absolute inset-0 bg-[#1A130E]/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 32 }}
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-[360px] flex-col bg-[#2A1F18] p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-[var(--font-display)] text-lg text-[#F4EFE6]">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Fechar menu"
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-[#F4EFE6] transition-colors hover:bg-white/10"
                >
                  <X size={22} />
                </button>
              </div>

              <ul className="mt-8 flex flex-col gap-1">
                {LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-4 py-3.5 text-[15px] font-medium text-[#F4EFE6] transition-colors hover:bg-white/5 hover:text-[#C8956D]"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3 pt-8">
                <a
                  href={`tel:+55${PHONE}`}
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-[#C8956D] bg-[#1A130E] px-5 py-3 text-sm font-semibold text-[#F4EFE6] transition-colors hover:border-[#E8C9A8]"
                >
                  <Phone size={16} className="text-[#C8956D]" />
                  (12) 99106-9668
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#C8956D] px-5 py-3.5 text-sm font-semibold text-[#1A130E] transition-colors hover:bg-[#E8C9A8]"
                >
                  <Calendar size={16} />
                  Agendar pelo WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
