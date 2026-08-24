import { motion } from 'framer-motion';
import { Scissors, Palette, Sparkles, Leaf, Activity, Star, ArrowUpRight } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: '-10% 0px -10% 0px' } as const;

const SERVICES = [
  {
    icon: Scissors,
    title: 'Cortes autorais',
    tag: 'Feminino · Masculino',
    desc: 'Cortes que valorizam o formato do seu rosto e respeitam a queda natural dos fios. Trabalhamos com navalha e tesoura para criar movimento, textura e uma transição que cresce bonita — sem aquele momento "precisa voltar já na semana que vem".',
  },
  {
    icon: Palette,
    title: 'Coloração & mechas',
    tag: 'Luzes · Global · Ombré',
    desc: 'Do retoque de raiz à transformação completa. Usamos tecnologias de baixa amônia e protocolos de proteção para preservar a fibra capilar. O tom é estudado contra sua pele e personalidade — nunca uma cor de catálogo.',
  },
  {
    icon: Sparkles,
    title: 'Tratamentos profundos',
    tag: 'Hidratação · Reconstrução · Botox',
    desc: 'Diagnóstico capilar para identificar o que seu fio realmente precisa: água, óleo, proteína ou massa. Cronograma personalizado que devolve brilho, encorpamento e elasticidade — visível já na primeira sessão.',
  },
  {
    icon: Activity,
    title: 'Progressiva & alisamento',
    tag: 'Sem formol · Volume reduzido',
    desc: 'Alisamento com tecnologia de aminoácidos que disciplina o volume sem comprometer a saúde do fio. Resultado natural, movimento preservado e manutenção espaçada. Indicado para quem quer praticidade sem perder identidade.',
  },
  {
    icon: Star,
    title: 'Penteados & eventos',
    tag: 'Noivas · Formandas · Festas',
    desc: 'Penteados para datas que merecem durar da cerimônia à última foto. Atendimento com hora marcada, ambiente reservado e acabamento que resiste ao calor, ao vento e à emoção do dia.',
  },
  {
    icon: Leaf,
    title: 'Cuidados & finalização',
    tag: 'Barba · Sobrancelha · Diário',
    desc: 'Os pequenos rituais que completam o visual: modelagem de barba, design de sobrancelha e orientação de finalização para você reproduzir o resultado do salão em casa, com os produtos certos para o seu fio.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative bg-[#1A130E] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease }}
            className="md:col-span-5"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8956D]">
              02 — Serviços
            </span>
            <h2 className="mt-4 font-[var(--font-display)] text-[2rem] font-light leading-[1.08] text-[#F4EFE6] sm:text-4xl lg:text-[2.75rem]">
              Tudo o que seu cabelo precisa, em um só lugar.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="md:col-span-7 md:pt-12 text-[15px] leading-relaxed text-[#C9B89E]"
          >
            Do corte à coloração, do tratamento ao penteado de evento — cada serviço é executado com
            técnica, produtos selecionados e tempo suficiente para que o resultado seja à altura da
            sua expectativa. Não fazemos volume: fazemos cuidado.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#2A1F18] p-6 transition-colors duration-300 hover:border-[#C8956D]/40 sm:p-7"
              >
                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#C8956D]/0 blur-2xl transition-all duration-500 group-hover:bg-[#C8956D]/15"
                />
                <div className="relative flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C8956D]/30 bg-[#C8956D]/10 text-[#E8C9A8] transition-colors duration-300 group-hover:border-[#C8956D]/60 group-hover:bg-[#C8956D]/20">
                    <Icon size={20} />
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-[#C9B89E]/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C8956D]"
                  />
                </div>

                <h3 className="mt-5 font-[var(--font-display)] text-xl font-medium text-[#F4EFE6] sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#C9B89E]">
                  {service.desc}
                </p>

                <span className="mt-6 self-start rounded-full border border-[#C8956D]/30 bg-[#C8956D]/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#C8956D]">
                  {service.tag}
                </span>
              </motion.article>
            );
          })}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="relative z-10 mt-16 max-w-2xl w-full mx-auto px-4 text-center text-[13px] leading-relaxed text-[#C9B89E]/80"
        >
          Não encontrou o que procura? Entre em contato — atendemos casos específicos como cabelos
          muito longos, transições de química e cuidados pós-cirurgia capilar.
        </motion.p>
      </div>
    </section>
  );
}
