import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, HelpCircle } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: '-10% 0px -10% 0px' } as const;

const FAQS = [
  {
    q: 'Como faço para agendar um horário?',
    a: 'O agendamento é feito pelo WhatsApp ou telefone. Informamos a próxima disponibilidade, confirmamos o serviço desejado e enviamos as orientações de preparo (se houver). Recomendamos agendar com antecedência, principalmente aos finais de semana.',
  },
  {
    q: 'Vocês atendem com hora marcada?',
    a: 'Sim. Trabalhamos exclusivamente com hora marcada para garantir que cada cliente tenha tempo suficiente e atenção integral. Assim evitamos filas e corrida — o que resulta em um serviço melhor para todos.',
  },
  {
    q: 'Quais formas de pagamento são aceitas?',
    a: 'Aceitamos dinheiro, cartões de débito e crédito (principais bandeiras), PIX e transferência. Para pacotes maiores ou serviços de evento, podemos combinar condições especiais — basta conversar com a recepção.',
  },
  {
    q: 'Fazem atendimento a domicílio?',
    a: 'O atendimento padrão é no salão, onde temos estrutura e produtos adequados. Para casos especiais (mobilidade reduzida, noivas, eventos), é possível avaliar a viabilidade — consulte com antecedência pelo WhatsApp.',
  },
  {
    q: 'Tem estacionamento próximo?',
    a: 'O salão fica em região com facilidade de estacionamento na rua e opções de estacionamento pago nas proximidades. Ao agendar, enviamos orientações de como chegar e onde parar com tranquilidade.',
  },
  {
    q: 'Quanto tempo dura um atendimento?',
    a: 'Depende do serviço: um corte simples costuma levar de 40 minutos a 1 hora; coloração e mechas entre 2 e 4 horas; tratamentos profundos cerca de 1 hora. Ao agendar, informamos uma estimativa realista para o seu caso.',
  },
  {
    q: 'Posso levar referência de foto?',
    a: 'Sempre! Referências ajudam muito a alinhar expectativas. Leve fotos do que você gosta — e, se possível, também do que você não gosta. Isso acelera a conversa e melhora o resultado final.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-[#F4EFE6] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Left header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease }}
            className="md:col-span-4"
          >
            <div className="flex items-center gap-3">
              <HelpCircle size={16} className="text-[#A87651]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A87651]">
                07 — Dúvidas
              </span>
            </div>
            <h2 className="mt-4 font-[var(--font-display)] text-[2rem] font-light leading-[1.1] tracking-[-0.02em] text-[#2A1F18] sm:text-4xl lg:text-[2.5rem]">
              Perguntas que talvez você esteja fazendo.
            </h2>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-[#4A3A2E]">
              Não encontrou sua resposta? Fale com a gente — respondemos pelo WhatsApp em poucos
              minutos durante o horário de atendimento.
            </p>
          </motion.div>

          {/* Accordion */}
          <div className="md:col-span-8">
            <ul className="divide-y divide-[#2A1F18]/10 border-y border-[#2A1F18]/10">
              {FAQS.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <motion.li
                    key={faq.q}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.5, ease, delay: (i % 4) * 0.06 }}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-3 py-5 text-left transition-colors hover:text-[#A87651] sm:gap-4 sm:py-6"
                    >
                      <span className="min-w-0 flex-1 break-words text-pretty font-[var(--font-display)] text-[15px] font-medium leading-snug text-[#2A1F18] sm:text-lg">
                        {faq.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                          isOpen
                            ? 'rotate-45 border-[#C8956D] bg-[#C8956D] text-[#1A130E]'
                            : 'border-[#A87651] bg-[#A87651]/10 text-[#2A1F18]'
                        }`}
                      >
                        <Plus size={16} />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-xl pb-6 pr-12 text-[14px] leading-relaxed text-[#4A3A2E]">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
