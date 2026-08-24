import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Info } from "lucide-react";

export default function ConceptBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem('evidence-concept-dismissed');
      if (!dismissed) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem('evidence-concept-dismissed', '1');
    } catch {
      /* ignore */
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: 24, scale: 0.96 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-6 mb-6 max-w-[320px] rounded-xl border-2 border-[#A87651] bg-[#F4EFE6] p-4 pr-10 text-left shadow-2xl"
          role="status"
        >
          <button
            onClick={close}
            aria-label="Fechar aviso"
            className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-md text-[#4A3A2E] transition-colors hover:bg-[#2A1F18]/10 hover:text-[#2A1F18]"
          >
            <X size={15} />
          </button>
          <div className="flex items-start gap-2.5">
            <Info size={16} className="mt-0.5 shrink-0 text-[#A87651]" />
            <p className="text-[11px] leading-relaxed text-[#4A3A2E]">
              Proposta conceitual não oficial. Conteúdo e dados podem ser fictícios e devem ser
              confirmados antes da publicação.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
