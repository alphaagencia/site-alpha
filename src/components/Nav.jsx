import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import AlphaMark from "./AlphaMark";
import { cn } from "../lib/utils";
import { NAV_LINKS, WHATSAPP_URL } from "../lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  // Fundo do nav aparece ao rolar — mantém legibilidade sobre qualquer seção.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <motion.header
      initial={reduce ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        solid
          ? "border-linha bg-preto/85 backdrop-blur-md"
          : "border-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 md:px-10 md:py-6">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2.5 text-offwhite"
          aria-label="Alpha Agência Digital — início"
        >
          <AlphaMark className="h-6 w-6 text-dourado" />
          <span className="font-display text-[15px] font-semibold tracking-[0.18em] text-offwhite">
            ALPHA
          </span>
        </a>

        {/* Links — desktop */}
        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] font-normal tracking-[0.04em] text-texto-claro transition-colors duration-300 hover:text-offwhite"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA WhatsApp — desktop */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="hidden items-center gap-2 border border-dourado/55 px-6 py-3 text-[13px] font-medium tracking-[0.04em] text-dourado transition-all duration-300 hover:border-dourado hover:bg-dourado hover:text-preto md:inline-flex"
        >
          WhatsApp
        </a>

        {/* Toggle mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-offwhite md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-linha bg-preto/95 backdrop-blur md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 font-display text-lg text-texto-claro"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 bg-dourado px-5 py-3 text-[14px] font-semibold tracking-[0.04em] text-preto"
                >
                  Conversar pelo WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
