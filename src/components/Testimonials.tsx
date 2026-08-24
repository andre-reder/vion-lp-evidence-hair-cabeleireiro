import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Star, Quote, ChevronRight, ChevronLeft } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: '-10% 0px -10% 0px' } as const;

type Review = {
  name: string;
  role: string;
  stars: number;
  text: string;
};

const REVIEWS: Review[] = [
  {
    name: 'Marina Alves',
    role: 'Cliente desde o primeiro corte',
    stars: 5,
    text: 'Saí do salão me reconhecendo no espelho pela primeira vez em anos. A escuta antes da tesoura faz toda a diferença — não foi só um corte, foi um corte pensado pra mim.',
  },
  {
    name: 'Patrícia Gomes',
    role: 'Coloração e tratamento',
    stars: 5,
    text: 'Fiz mechas pela primeira vez aqui e não reconheci meu cabelo — de tão saudável. O diagnóstico capilar antes da química me deu segurança. Recomendo de olhos fechados.',
  },
  {
    name: 'Renato Lima',
    role: 'Corte masculino',
    stars: 5,
    text: 'Atendimento pontual, ambiente limpo e o corte cresceu bonito. Não precisei voltar correndo. Pra quem cansou de barbearia lotada, é uma ótima pedida.',
  },
  {
    name: 'Camila Ferreira',
    role: 'Progressiva',
    stars: 4,
    text: 'Resultado muito bom, volume controlado sem perder o movimento. Só achei o processo um pouco longo, mas o profissional explicou cada etapa e valeu a pena.',
  },
  {
    name: 'Juliana Reis',
    role: 'Penteado de formanda',
    stars: 5,
    text: 'Meu penteado durou da cerimônia até a última foto da festa, mesmo com calor e emoção. Atendimento reservado, calma total no dia. Me senti cuidada de verdade.',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReduced = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % REVIEWS.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length), []);

  useEffect(() => {
    if (paused || prefersReduced) return;
    timerRef.current = setInterval(next, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, prefersReduced, next]);

  const current = REVIEWS[index];

  return (
    <section
      id="avaliacoes"
      className="relative overflow-hidden bg-[#1A130E] py-24 sm:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Avaliações de clientes"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(80% 60% at 50% 0%, rgba(200,149,109,0.14) 0%, rgba(26,19,14,0) 60%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease }}
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8956D]"
          >
            06 — Avaliações
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease, delay: 0.06 }}
            className="mx-auto mt-4 w-full font-[var(--font-display)] text-[2rem] font-light leading-[1.1] text-[#F4EFE6] sm:text-4xl lg:text-[2.75rem]"
          >
            O que dizem quem já sentou na nossa cadeira.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease, delay: 0.12 }}
            className="mx-auto mt-5 w-full max-w-xl text-[14px] leading-relaxed text-[#C9B89E]"
          >
            Avaliações ilustrativas, representativas do que clientes do segmento costumam relatar.
            Exemplos para você sentir o tipo de experiência que oferecemos.
          </motion.p>
        </div>

        {/* Carousel stage */}
        <div className="relative mx-auto mt-14 max-w-3xl">
          <Quote
            aria-hidden="true"
            className="mx-auto mb-6 text-[#C8956D]/30"
            size={48}
          />

          <div
            className="relative min-h-[260px] sm:min-h-[220px]"
            aria-live="polite"
          >
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < current.stars
                          ? 'fill-[#C8956D] text-[#C8956D]'
                          : 'fill-transparent text-[#C8956D]/30'
                      }
                    />
                  ))}
                </div>
                <p className="mx-auto mt-5 max-w-2xl font-[var(--font-display)] text-xl font-light leading-relaxed text-[#F4EFE6] sm:text-2xl">
                  “{current.text}”
                </p>
                <footer className="mt-6">
                  <p className="text-[15px] font-semibold text-[#E8C9A8]">{current.name}</p>
                  <p className="mt-0.5 text-[12px] uppercase tracking-[0.16em] text-[#C9B89E]/70">
                    {current.role}
                  </p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Avaliação anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#C8956D] bg-[#2A1F18] text-[#F4EFE6] transition-colors hover:border-[#E8C9A8] hover:bg-[#34281F]"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Ir para avaliação ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? 'w-7 bg-[#C8956D]'
                      : 'w-2 bg-[#C8956D]/30 hover:bg-[#C8956D]/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Próxima avaliação"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#C8956D] bg-[#2A1F18] text-[#F4EFE6] transition-colors hover:border-[#E8C9A8] hover:bg-[#34281F]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
