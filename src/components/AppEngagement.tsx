/* ========================================================================
   APP ENGAGEMENT — Image right, text left
   ======================================================================== */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Bell, BarChart3 } from "lucide-react";

const AppEngagement = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="app" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Mobile App</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-6 text-foreground">
              Control at Your <span className="neon-text">Fingertips</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The NexusHome app gives you complete command over your entire estate, from anywhere in the world. Real-time monitoring, instant alerts, and intuitive controls.
            </p>
            <div className="space-y-6">
              {[
                { icon: Smartphone, title: "Intuitive Interface", desc: "Designed for speed — control any room in under 2 taps." },
                { icon: Bell, title: "Smart Notifications", desc: "AI-filtered alerts so you only see what matters." },
                { icon: BarChart3, title: "Usage Analytics", desc: "Track energy, security events, and device health in real-time." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
                alt="Smart home mobile app interface"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-xl bg-primary/20 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppEngagement;
