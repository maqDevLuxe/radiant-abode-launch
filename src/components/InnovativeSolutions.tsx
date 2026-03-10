/* ========================================================================
   INNOVATIVE SOLUTIONS — Image left, text right
   ======================================================================== */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const points = [
  "AI-powered predictive automation for every room",
  "Voice & gesture control with 99.7% accuracy",
  "Seamless multi-platform ecosystem integration",
  "Energy optimization reducing bills by up to 40%",
];

const InnovativeSolutions = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop"
                alt="Smart home control panel interface"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl bg-primary/20 blur-3xl" />
          </motion.div>

          {/* Text Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Innovative Solutions</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-6 text-foreground">
              Technology That <span className="neon-text">Thinks Ahead</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our proprietary NexusAI engine learns your daily patterns and anticipates your needs before you even ask. From lighting moods to security protocols, everything adapts in real-time.
            </p>
            <ul className="space-y-4">
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle size={18} className="text-primary shrink-0" />
                  <span className="text-sm">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InnovativeSolutions;
