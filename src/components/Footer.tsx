import { Phone, MessageCircle, Camera, MapPin, ArrowUp } from 'lucide-react';
import {
  WHATSAPP_URL,
  PHONE,
  PHONE_DISPLAY,
  FACEBOOK_URL,
  CITY,
  SALON_NAME,
} from './utils';

const NAV = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Processo', href: '#processo' },
  { label: 'Ambiente', href: '#ambiente' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#1A130E] pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C8956D]/50 bg-[#C8956D]/15 text-sm font-semibold text-[#E8C9A8]">
                E
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-[var(--font-display)] text-base font-medium text-[#F4EFE6]">
                  Evidence Hair
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#C8956D]">
                  Cabeleireiro
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-[#C9B89E]">
              Cortes autorais, coloração refinada e tratamentos que devolvem vida ao seu cabelo.
              O resultado é a evidência do nosso trabalho.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8956D]">Navegação</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-[#C9B89E] transition-colors hover:text-[#F4EFE6]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8956D]">Contato</p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[13px] text-[#C9B89E] transition-colors hover:text-[#F4EFE6]"
                >
                  <MessageCircle size={16} className="text-[#C8956D]" />
                  WhatsApp · {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+55${PHONE}`}
                  className="flex items-center gap-3 text-[13px] text-[#C9B89E] transition-colors hover:text-[#F4EFE6]"
                >
                  <Phone size={16} className="text-[#C8956D]" />
                  Telefone · {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[13px] text-[#C9B89E] transition-colors hover:text-[#F4EFE6]"
                >
                  <Camera size={16} className="text-[#C8956D]" />
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-3 text-[13px] text-[#C9B89E]">
                <MapPin size={16} className="text-[#C8956D]" />
                {CITY} · SP
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-center text-[12px] text-[#C9B89E]/70 sm:text-left">
            © {new Date().getFullYear()} {SALON_NAME}. Proposta conceitual — conteúdo ilustrativo.
          </p>
          <a
            href="#top"
            className="flex items-center gap-2 text-[12px] font-medium text-[#C9B89E] transition-colors hover:text-[#F4EFE6]"
          >
            Voltar ao topo
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C8956D] bg-[#C8956D]/10 text-[#C8956D] transition-colors hover:border-[#E8C9A8]">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
