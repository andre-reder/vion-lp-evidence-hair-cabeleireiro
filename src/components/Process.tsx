import { motion } from 'framer-motion';
import { MessageCircle, Search, Scissors, Check } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: '-10% 0px -10% 0px' } as const;

const STEPS = [
  {
    icon: MessageCircle,
    title: 'Agendamento',
    desc: 'Você fala conosco pelo WhatsApp ou telefone. Confirmamos data, horário e o serviço desejado — e já combinamos se será necessário algum preparo prévio (como vir com o cabelo seco, sem produto, etc.).',
  },
  {
    icon: Search,
    title: 'Diagnóstico',
    desc: 'No salão, antes de qualquer tesoura, conversamos sobre sua rotina, histórico capilar e o que você quer mudar (ou manter). Avaliamos a saúde do fio e propomos o caminho mais adequado para o resultado que você busca.',
  },
  {
    icon: Scissors,
    title: 'Execução',
    desc: 'Com o plano definido, o profissional conduz o serviço com calma e técnica. Você acompanha cada etapa e pode pedir ajustes no meio do caminho — o espelho está ali para isso.',
  },
  {
    icon: Check,
    title: 'Finalização & orientação',
    desc: 'No fim, levamos você ao espelho para validar o resultado. Explicamos como manter em casa, quais produtos combinam com seu fio e quando será o retorno ideal. Você sai sabendo cuidar.',
  },
];

export default function Process() {
  return (
    <section id="processo" className="relative overflow-hidden bg-[#2A1F18] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease }}
            className="md:col-span-5"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8956D]">
              04 — Como funciona
            </span>
            <h2 className="mt-4 font-[var(--font-display)] text-[2rem] font-light leading-[1.08] text-[#F4EFE6] sm:text-4xl lg:text-[2.75rem]">
              Do primeiro contato ao espelho final.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#C9B89E]">
              Um processo simples e transparente, desenhado para que você saiba exatamente o que
              esperar em cada etapa. Sem surpresas desagradáveis — só as boas.
            </p>
          </motion.div>

          <div className="md:col-span-7">
            <ol className="relative flex flex-col gap-10 sm:gap-12">
              {/* Vertical line */}
              <span
                aria-hidden="true"
                className="absolute left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-[#C8956D]/40 via-[#C8956D]/20 to-transparent sm:left-[27px]"
              />
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.li
                    key={step.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.55, ease, delay: i * 0.08 }}
                    className="relative flex gap-5 sm:gap-6"
                  >
                    <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C8956D]/40 bg-[#1A130E] text-[#E8C9A8] shadow-lg sm:h-14 sm:w-14">
                      <Icon size={20} />
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#C8956D] text-[10px] font-bold text-[#1A130E]">
                        {i + 1}
                      </span>
                    </span>
                    <div className="min-w-0 flex-1 pt-1.5 sm:pt-2">
                      <h3 className="font-[var(--font-display)] text-xl font-medium text-[#F4EFE6] sm:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-md text-[14px] leading-relaxed text-[#C9B89E]">
                        {step.desc}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
