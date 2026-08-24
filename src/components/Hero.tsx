import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Calendar, Phone, Star, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL, PHONE, PEXELS_IMAGE } from './utils';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Small parallax — keep text readable (max 10%)
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.78]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[calc(100svh-5.25rem)] items-center overflow-hidden bg-[#1A130E] pt-4 pb-6 sm:pt-10 sm:pb-10"
    >
      {/* Ambient background — warm radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 80% 20%, rgba(200,149,109,0.18) 0%, rgba(26,19,14,0) 55%), radial-gradient(90% 70% at 10% 90%, rgba(168,118,81,0.12) 0%, rgba(26,19,14,0) 60%)',
        }}
      />
      {/* Subtle grain via gradient lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #F4EFE6 0px, #F4EFE6 1px, transparent 1px, transparent 3px)',
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-5 sm:px-8 md:grid-cols-2 md:gap-12 lg:px-12 lg:gap-16">
        {/* Text column */}
        <motion.div
          style={prefersReduced ? undefined : { y: textY }}
          className="order-2 flex flex-col md:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-4 flex items-center gap-3 sm:mb-5"
          >
            <span className="h-px w-8 bg-[#C8956D]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#C8956D]">
              Cabeleireiro · São José dos Campos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className="font-[var(--font-display)] text-[2rem] font-light leading-[1.04] tracking-[-0.02em] text-[#F4EFE6] sm:text-5xl lg:text-[3.75rem]"
          >
            O resultado é a{' '}
            <span className="relative inline-block font-medium italic text-[#E8C9A8]">
              evidência
              <svg
                aria-hidden="true"
                viewBox="0 0 200 12"
                className="absolute -bottom-1 left-0 h-2 w-full text-[#C8956D]"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 Q 50 2, 100 6 T 198 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            do nosso trabalho.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.18 }}
            className="mt-4 max-w-md text-[15px] leading-relaxed text-[#C9B89E] sm:mt-5 sm:text-base"
          >
            Cortes autorais, coloração refinada e tratamentos que devolvem movimento e brilho ao
            seu cabelo. Aqui, cada visita termina com você se reconhecendo no espelho — melhor.
          </motion.p>

          {/* CTAs — flex-row even on mobile to save vertical space */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.28 }}
            className="mt-5 flex flex-row flex-wrap items-center gap-3 sm:mt-7"
          >
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 rounded-full bg-[#C8956D] px-5 py-3 text-[13px] font-semibold text-[#1A130E] shadow-[0_8px_24px_rgba(200,149,109,0.35)] transition-colors hover:bg-[#E8C9A8] sm:px-6 sm:py-3.5 sm:text-sm"
            >
              <Calendar size={16} />
              Agendar pelo WhatsApp
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
            <a
              href={`tel:+55${PHONE}`}
              className="flex items-center gap-2 rounded-full border-2 border-[#C8956D] bg-[#2A1F18] px-5 py-3 text-[13px] font-semibold text-[#F4EFE6] transition-colors hover:border-[#E8C9A8] hover:bg-[#34281F] sm:px-6 sm:py-3.5 sm:text-sm"
            >
              <Phone size={15} className="text-[#C8956D]" />
              (12) 99106-9668
            </a>
          </motion.div>

          {/* Social proof — hidden on mobile to save space */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-6 hidden items-center gap-3 sm:mt-8 sm:flex"
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-[#C8956D] text-[#C8956D]" />
              ))}
            </div>
            <span className="text-[12px] text-[#C9B89E]">
              Avaliações de clientes reais do segmento — exemplos ilustrativos abaixo.
            </span>
          </motion.div>
        </motion.div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.15 }}
          className="relative order-1 md:order-2"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <motion.img
              src={PEXELS_IMAGE}
              alt="Interior elegante e espaçoso de um salão de beleza com móveis sofisticados e vegetação."
              loading="eager"
              style={prefersReduced ? undefined : { y: imageY }}
              className="h-[34vh] w-full object-cover sm:h-[52vh] md:h-[60vh] lg:h-[68vh]"
            />
            <motion.div
              style={{ opacity: prefersReduced ? 0.6 : overlayOpacity }}
              className="absolute inset-0 bg-gradient-to-t from-[#1A130E] via-[#1A130E]/20 to-transparent"
            />
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.6 }}
              className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-xl border border-white/15 bg-[#1A130E]/70 px-4 py-3 backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#C8956D]">Ambiente</p>
                <p className="mt-0.5 text-[13px] font-medium text-[#F4EFE6]">
                  Espaço pensado para você respirar
                </p>
              </div>
              <a
                href="#ambiente"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C8956D] text-[#1A130E] transition-colors hover:bg-[#E8C9A8]"
                aria-label="Ver ambiente"
              >
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>

          {/* Decorative frame offset */}
          <div
            aria-hidden="true"
            className="absolute -right-3 -top-3 -z-10 h-24 w-24 rounded-tr-2xl border-r-2 border-t-2 border-[#C8956D]/30 sm:-right-5 sm:-top-5 sm:h-32 sm:w-32"
          />
        </motion.div>
      </div>
    </section>
  );
}
