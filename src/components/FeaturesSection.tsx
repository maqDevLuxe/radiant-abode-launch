/* ========================================================================
   CORE FEATURES — Dark bg, 3-column icons with hover-reveal
   ======================================================================== */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Wifi, Eye, Thermometer, Lock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Automation",
    description: "Trigger complex routines with a single gesture. Lights, climate, and entertainment — synchronized.",
  },
  {
    icon: Shield,
    title: "Military-Grade Security",
    description: "256-bit encrypted protocols safeguard every device. Your privacy is non-negotiable.",
  },
  {
    icon: Wifi,
    title: "Mesh Intelligence",
    description: "Self-healing Wi-Fi 7 mesh network ensures zero dead zones across your entire estate.",
  },
  {
    icon: Eye,
    title: "AI Vision System",
    description: "Advanced computer vision recognizes faces, gestures, and ambient conditions in real-time.",
  },
  {
    icon: Thermometer,
    title: "Climate Orchestration",
    description: "Zone-by-zone temperature control learns your preferences and adapts to weather patterns.",
  },
  {
    icon: Lock,
    title: "Biometric Access",
    description: "Fingerprint, facial recognition, and voice authentication for every entry point.",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-panel-hover rounded-xl p-8 group cursor-default"
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
        <feature.icon className="text-primary" size={24} />
      </div>
      <h3 className="font-display font-semibold text-xl text-foreground mb-3">{feature.title}</h3>
      <div className="relative min-h-[3rem]">
        <p className="text-muted-foreground text-sm leading-relaxed absolute inset-0 group-hover:opacity-0 transition-opacity duration-300">
          Hover to discover →
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="section-padding relative bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Core Features</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 text-foreground">
            Intelligent by Design
          </h2>
          <div className="neon-line w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
