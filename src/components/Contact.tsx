import { motion } from 'framer-motion';
import { Calendar, Phone, MapPin, MessageCircle, Camera, ArrowRight } from 'lucide-react';
import {
  WHATSAPP_URL,
  PHONE,
  PHONE_DISPLAY,
  FACEBOOK_URL,
  CITY,
  SALON_NAME,
} from './utils';

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: '-10% 0px -10% 0px' } as const;

export default function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden bg-[#2A1F18] py-24 sm:py-32">
      {/* Ambient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(70% 60% at 30% 100%, rgba(200,149,109,0.18) 0%, rgba(42,31,24,0) 60%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — CTA */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease }}
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8956D]"
            >
              08 — Vamos conversar
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease, delay: 0.06 }}
              className="mt-4 font-[var(--font-display)] text-[2.25rem] font-light leading-[1.05] tracking-[-0.02em] text-[#F4EFE6] sm:text-5xl lg:text-[3.25rem]"
            >
              Que tal a sua história ser a próxima evidência?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease, delay: 0.12 }}
              className="mt-6 max-w-md text-[15px] leading-relaxed text-[#C9B89E]"
            >
              Agende seu horário pelo WhatsApp ou telefone. Em poucos minutos confirmamos a
              disponibilidade e combinamos os detalhes do seu atendimento. Sem complicação, sem
              fila — só o cuidado que você merece.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease, delay: 0.18 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center justify-center gap-2 rounded-full bg-[#C8956D] px-7 py-4 text-sm font-semibold text-[#1A130E] shadow-[0_10px_30px_rgba(200,149,109,0.35)] transition-colors hover:bg-[#E8C9A8]"
              >
                <Calendar size={17} />
                Agendar pelo WhatsApp
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>
              <a
                href={`tel:+55${PHONE}`}
                className="flex items-center justify-center gap-2 rounded-full border-2 border-[#C8956D] bg-[#34281F] px-7 py-4 text-sm font-semibold text-[#F4EFE6] transition-colors hover:border-[#E8C9A8] hover:bg-[#4A3A2E]"
              >
                <Phone size={16} className="text-[#C8956D]" />
                {PHONE_DISPLAY}
              </a>
            </motion.div>
          </div>

          {/* Right — contact cards */}
          <motion.div
            initial={{ y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease, delay: 0.14 }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-2xl border-2 border-[#C8956D] bg-[#34281F] p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C8956D]/15 text-[#E8C9A8]">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8956D]">
                    Onde estamos
                  </p>
                  <p className="mt-1 font-[var(--font-display)] text-lg text-[#F4EFE6]">
                    {CITY}
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#C9B89E]">
                    {SALON_NAME} atende em {CITY} e região. Endereço completo confirmado no momento
                    do agendamento.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border-2 border-[#C8956D] bg-[#34281F] p-5 transition-colors hover:border-[#E8C9A8]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C8956D]/15 text-[#E8C9A8]">
                  <MessageCircle size={18} />
                </span>
                <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[#C8956D]">
                  WhatsApp
                </p>
                <p className="mt-1 text-[14px] font-medium text-[#F4EFE6]">{PHONE_DISPLAY}</p>
              </a>

              <a
                href={`tel:+55${PHONE}`}
                className="group rounded-2xl border-2 border-[#C8956D] bg-[#34281F] p-5 transition-colors hover:border-[#E8C9A8]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C8956D]/15 text-[#E8C9A8]">
                  <Phone size={18} />
                </span>
                <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[#C8956D]">
                  Telefone
                </p>
                <p className="mt-1 text-[14px] font-medium text-[#F4EFE6]">{PHONE_DISPLAY}</p>
              </a>
            </div>

            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border-2 border-[#C8956D] bg-[#1A130E] p-5 transition-colors hover:border-[#E8C9A8]"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C8956D]/15 text-[#E8C9A8]">
                  <Camera size={20} />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8956D]">
                    Facebook
                  </p>
                  <p className="mt-1 text-[14px] font-medium text-[#F4EFE6]">
                    Acompanhe novidades e bastidores
                  </p>
                </div>
              </div>
              <ArrowRight
                size={18}
                className="text-[#C9B89E] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#C8956D]"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
