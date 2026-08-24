import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Coffee, Sun, Leaf, Sparkles } from 'lucide-react';
import { PEXELS_IMAGE, PEXELS_PHOTOGRAPHER, PEXELS_PHOTOGRAPHER_URL } from './utils';

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: '-10% 0px -10% 0px' } as const;

const FEATURES = [
  {
    icon: Sun,
    title: 'Luz natural',
    desc: 'Janelas amplas que deixam você ver a cor real do cabelo — sem surpresas na rua.',
  },
  {
    icon: Coffee,
    title: 'Café & água',
    desc: 'Bebida à disposição enquanto você espera ou faz a pausa entre etapas.',
  },
  {
    icon: Leaf,
    title: 'Vegetação',
    desc: 'Plantas que trazem vida e frescor ao espaço, quebrando o ar clínico do salão.',
  },
  {
    icon: Sparkles,
    title: 'Higiene rigorosa',
    desc: 'Esterilização de ferramentas e troca de toalhas a cada cliente. Sem exceções.',
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const decorY = useTransform(scrollYProgress, [0, 1], ['12%', '-12%']);

  return (
    <section id="ambiente" className="relative overflow-hidden bg-[#F4EFE6] py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image with parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.9, ease }}
            className="relative order-1"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <motion.img
                src={PEXELS_IMAGE}
                alt="Interior elegante e espaçoso de um salão de beleza com móveis sofisticados e vegetação."
                loading="lazy"
                style={prefersReduced ? undefined : { y: imageY, scale: 1.15 }}
                className="h-[60vh] w-full object-cover sm:h-[68vh]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A130E]/30 to-transparent" />
            </div>
            {/* Decorative offset frame */}
            <motion.div
              aria-hidden="true"
              style={prefersReduced ? undefined : { y: decorY }}
              className="absolute -bottom-4 -left-4 -z-10 h-28 w-28 rounded-bl-2xl border-b-2 border-l-2 border-[#C8956D]/40 sm:-bottom-6 sm:-left-6 sm:h-36 sm:w-36"
            />
          </motion.div>

          {/* Text */}
          <div className="order-2">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease }}
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A87651]"
            >
              05 — O ambiente
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease, delay: 0.06 }}
              className="mt-4 font-[var(--font-display)] text-[2rem] font-light leading-[1.1] tracking-[-0.02em] text-[#2A1F18] sm:text-4xl lg:text-[2.5rem]"
            >
              Um espaço pensado para você desacelerar.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease, delay: 0.12 }}
              className="mt-5 max-w-md text-[15px] leading-relaxed text-[#4A3A2E]"
            >
              O salão é o seu intervalo no dia. Por isso cuidamos de cada detalhe — da luz que
              entra pela janela ao som ambiente, das plantas que quebram a rigidez ao café que
              servimos enquanto você espera. Nada aqui é por acaso.
            </motion.p>

            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              {FEATURES.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.5, ease, delay: 0.15 + i * 0.07 }}
                    className="flex gap-3.5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2A1F18]/5 text-[#A87651]">
                      <Icon size={18} />
                    </span>
                    <div>
                      <h3 className="font-[var(--font-display)] text-base font-medium text-[#2A1F18]">
                        {f.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-snug text-[#6B5A48]">{f.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Photo credit — sibling of grid, separate container */}
        <div className="mx-auto mt-16 max-w-2xl w-full px-4">
          <p className="text-center text-[12px] leading-relaxed text-[#6B5A48]/70">
            Fotografia de{' '}
            <a
              href={PEXELS_PHOTOGRAPHER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#C8956D]/50 underline-offset-2 transition-colors hover:text-[#A87651]"
            >
              {PEXELS_PHOTOGRAPHER}
            </a>{' '}
            via Pexels — imagem ilustrativa do ambiente de um salão.
          </p>
        </div>
      </div>
    </section>
  );
}
