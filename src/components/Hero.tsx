import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { heroImage } from "@/data/catalog";
import { linkProps, site } from "@/lib/site";

export function Hero() {
  const { scrollY } = useScroll();
  // Parallax leve: a imagem sobe mais devagar que o conteúdo.
  const imageY = useTransform(scrollY, [0, 800], [0, 140]);

  return (
    <section id="top" className="relative h-[100svh] -mt-16 md:-mt-20 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src={heroImage}
          alt="Sala de estar com peças artesanais e luz natural"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/10 to-charcoal/60" />
      </motion.div>

      <div className="relative container-full h-full flex flex-col justify-end pb-20 md:pb-28 pt-16 md:pt-20">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="text-eyebrow text-white/70 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Curadoria para uma vida com intenção
          </motion.p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white mb-8 leading-[0.9] tracking-tight">
            Objetos de
            <br />
            <span className="italic font-normal">Beleza Silenciosa</span>
          </h1>

          <p className="text-base md:text-lg text-white/80 mb-10 leading-relaxed max-w-lg">
            Peças artesanais de casa e lifestyle, desenhadas para trazer calor e
            intenção aos momentos do dia a dia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink {...linkProps(site.links.shopAll)}>
              Comprar agora
              <ArrowRight className="ml-3 h-4 w-4" />
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">Role</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4 text-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
