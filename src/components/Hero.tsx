import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { heroImage } from "@/data/catalog";
import { linkProps, site } from "@/lib/site";

/** Hero com a foto real da Stephani — o momento por trás do "eternizando memórias". */
export function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 800], [0, 140]);

  return (
    <section id="top" className="relative h-[100svh] -mt-16 md:-mt-20 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src={heroImage}
          alt="Stephani Silva, fundadora da Ste Sunshine, observando o pôr do sol"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-charcoal/10" />
      </motion.div>

      <div className="relative container-full h-full flex flex-col items-center justify-end text-center pb-20 md:pb-28 pt-16 md:pt-20">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="text-eyebrow text-white/70 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ímãs de geladeira personalizados
          </motion.p>

          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-white mb-8 leading-[1.05]">
            Eternizando
            <br />
            memórias
          </h1>

          <p className="text-base md:text-lg text-white/85 mb-10 leading-relaxed max-w-xl mx-auto">
            Porque algumas memórias merecem mais do que ficar na galeria do
            celular. Elas merecem um lugar especial na sua casa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink variant="light" {...linkProps(site.links.whatsapp)}>
              <MessageCircle className="mr-3 h-4 w-4" />
              Encomendar pelo WhatsApp
            </ButtonLink>
          </div>
        </motion.div>

        <motion.a
          href={site.links.howItWorks}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/60">Role</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4 text-white/60" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
