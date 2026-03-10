/* ========================================================================
   COMPREHENSIVE SERVICES — 3-column cards
   ======================================================================== */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, Lightbulb, HeadphonesIcon } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Design & Consultation",
    description: "Bespoke smart home blueprints crafted by our in-house architects and IoT engineers. Every wire, sensor, and touchpoint planned to perfection.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "White-glove installation by certified technicians. Zero disruption to your daily routine with our silent deployment process.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Concierge Support",
    description: "Dedicated account managers and round-the-clock technical support. Average response time under 90 seconds.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Services</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 text-foreground">
            Comprehensive Solutions
          </h2>
          <div className="neon-line w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-panel-hover rounded-xl overflow-hidden group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
