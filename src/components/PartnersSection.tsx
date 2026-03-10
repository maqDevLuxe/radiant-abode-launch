/* ========================================================================
   TRUSTED PARTNERS — Logo cloud section
   ======================================================================== */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  "Google", "Amazon", "Apple", "Samsung", "Philips", "Sonos", "Ring", "Nest"
];

const PartnersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="partners" className="py-16 px-6 border-y border-border/30">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest">Trusted by Industry Leaders</p>
        </motion.div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-muted-foreground/40 hover:text-primary transition-colors duration-300 font-display font-bold text-xl md:text-2xl tracking-tight cursor-default"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
