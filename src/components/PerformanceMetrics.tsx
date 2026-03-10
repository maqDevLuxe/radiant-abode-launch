/* ========================================================================
   PERFORMANCE METRICS — Dark bg, stats and lists
   ======================================================================== */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Activity, Cpu, Globe, Gauge } from "lucide-react";

const metrics = [
  { icon: Gauge, value: "0.3ms", label: "Command Latency" },
  { icon: Cpu, value: "18 TOPS", label: "AI Processing Power" },
  { icon: Globe, value: "99.99%", label: "Uptime Guarantee" },
  { icon: Activity, value: "500+", label: "Device Integrations" },
];

const capabilities = [
  "Real-time energy consumption analytics dashboard",
  "Automated threat detection & instant lockdown",
  "Cross-room audio synchronization under 5ms",
  "Predictive maintenance alerts with 95% accuracy",
  "Dynamic scene creation via natural language",
  "Multi-tenant management for luxury estates",
];

const PerformanceMetrics = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="performance" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Performance</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 text-foreground">
            Engineered for Excellence
          </h2>
          <div className="neon-line w-24 mx-auto mt-6" />
        </motion.div>

        {/* Stat boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel rounded-xl p-6 text-center"
            >
              <m.icon className="text-primary mx-auto mb-3" size={28} />
              <span className="font-display font-bold text-3xl text-foreground block">{m.value}</span>
              <span className="text-muted-foreground text-xs uppercase tracking-wider mt-1">{m.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Capabilities list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-panel rounded-xl p-8 max-w-3xl mx-auto"
        >
          <h3 className="font-display font-semibold text-xl text-foreground mb-6 text-center">Platform Capabilities</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {capabilities.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5">▸</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;
