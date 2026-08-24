import { motion } from 'framer-motion';
import { Heart, Clock, Shield, Users, Coffee, Eye } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: '-10% 0px -10% 0px' } as const;

const REASONS = [
  {
    icon: Heart,
    title: 'Escuta antes da tesoura',
    desc: 'Cada atendimento começa com uma conversa real sobre sua rotina, expectativas e histórico capilar. Sem pressa, sem fórmula pronta.',
  },
  {
    icon: Clock,
    title: 'Tempo que respeita seu cabelo',
    desc: 'Não encaixamos 12 clientes na mesma manhã. Trabalhamos com hora marcada e intervalos suficientes para que o serviço seja feito com calma.',
  },
  {
    icon: Shield,
    title: 'Produtos selecionados a dedo',
    desc: 'Trabalhamos com marcas profissionais que conhecemos a fundo. Nada de produto por modismo — só o que realmente funciona para o seu fio.',
  },
  {
    icon: Users,
    title: 'Profissionais em formação contínua',
    desc: 'Nossa equipe participa de workshops e atualizações técnicas ao longo do ano. O que aprendemos volta para suas cadeiras.',
  },
  {
    icon: Coffee,
    title: 'Ambiente que acolhe',
    desc: 'Café, água, música no volume certo e uma cadeira onde você pode desligar. O salão é o seu intervalo — não mais uma corrida no dia.',
  },
  {
    icon: Eye,
    title: 'Resultado que você aprende a manter',
    desc: 'No final, levamos você ao espelho e explicamos como reproduzir o visual em casa. Você sai sabendo cuidar, não dependendo.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative bg-[#F4EFE6] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease }}
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A87651]"
          >
            03 — Por que o Evidence
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease, delay: 0.06 }}
            className="mx-auto mt-4 w-full font-[var(--font-display)] text-[2rem] font-light leading-[1.1] tracking-[-0.02em] text-[#2A1F18] sm:text-4xl lg:text-[2.75rem]"
          >
            Seis razões para confiar o seu cabelo a nós.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease, delay: 0.12 }}
            className="mx-auto mt-5 w-full max-w-xl text-[15px] leading-relaxed text-[#4A3A2E]"
          >
            Não prometemos milagres. Prometemos método, cuidado e honestidade — do primeiro contato
            ao resultado final.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease, delay: (i % 3) * 0.08 }}
                className="group relative flex flex-col"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2A1F18] text-[#E8C9A8] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={20} />
                  </span>
                  <span className="font-[var(--font-display)] text-3xl font-light text-[#C8956D]/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-5 font-[var(--font-display)] text-xl font-medium text-[#2A1F18]">
                  {reason.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-[#4A3A2E]">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
