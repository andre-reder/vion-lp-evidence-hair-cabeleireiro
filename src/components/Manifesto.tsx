import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: '-10% 0px -10% 0px' } as const;

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative overflow-hidden bg-[#F4EFE6] py-24 sm:py-32"
    >
      {/* Decorative oversized word */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-8 select-none font-[var(--font-display)] text-[18vw] font-light leading-none text-[#C8956D]/[0.06] sm:top-12 sm:text-[12vw]"
      >
        evidência
      </span>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Left — eyebrow + label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease }}
            className="md:col-span-4"
          >
            <div className="flex items-center gap-3">
              <Sparkles size={16} className="text-[#A87651]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A87651]">
                Manifesto
              </span>
            </div>
            <p className="mt-5 max-w-xs text-[13px] uppercase tracking-[0.18em] text-[#6B5A48]">
              01 — Por que existimos
            </p>
          </motion.div>

          {/* Right — statement */}
          <div className="md:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease }}
              className="font-[var(--font-display)] text-[1.75rem] font-light leading-[1.18] tracking-[-0.02em] text-[#2A1F18] sm:text-4xl lg:text-[2.75rem]"
            >
              Um corte não é só uma forma. É a maneira como você se apresenta ao mundo — e como o
              mundo reconhece você.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease, delay: 0.12 }}
              className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8"
            >
              <p className="text-[15px] leading-relaxed text-[#4A3A2E]">
                No <strong className="font-semibold text-[#2A1F18]">Evidence Hair</strong>,
                acreditamos que cabelo é identidade. Por isso não fazemos fórmulas prontas: cada
                atendimento começa pela escuta. Entendemos seu estilo de vida, seu formato facial,
                a textura natural dos seus fios e o que você espera ver no espelho ao final.
              </p>
              <p className="text-[15px] leading-relaxed text-[#4A3A2E]">
                Trabalhamos com técnica e sensibilidade — da navalha à coloração, do tratamento
                profundo ao acabamento final. O objetivo é sempre o mesmo: que o resultado dure,
                que combine com você, e que você saia do salão com a sensação de ter sido
                compreendida.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
              className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-[#2A1F18]/10 pt-8"
            >
              {[
                ['Escuta', 'Cada visita começa com conversa, não com tesoura.'],
                ['Técnica', 'Profissionais que estudam o ofício continuamente.'],
                ['Resultado', 'Cabelo que dura, combina e se mantém saudável.'],
              ].map(([title, desc]) => (
                <div key={title} className="max-w-[220px]">
                  <p className="font-[var(--font-display)] text-lg text-[#2A1F18]">{title}</p>
                  <p className="mt-1 text-[13px] leading-snug text-[#6B5A48]">{desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
