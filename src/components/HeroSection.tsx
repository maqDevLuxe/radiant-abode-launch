/* ========================================================================
   HERO SECTION — Split layout with dynamic text and image grid
   ======================================================================== */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Play } from "lucide-react";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30 z-0" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 z-0" />

      <motion.div
        className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center section-padding pt-32"
        style={{ opacity }}
      >
        {/* Left — Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest border border-primary/30 text-primary">
              Next-Gen Living — Since 2009
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
          >
            Redefine Your
            <br />
            <span className="neon-text">Smart Home</span>
            <br />
            Experience
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-lg mb-10 font-light leading-relaxed"
          >
            Experience unparalleled luxury through intelligent automation.
            Every detail, perfectly orchestrated for modern living.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a href="#contact" className="btn-neon">Get Started</a>
            <a href="#video" className="btn-outline-neon flex items-center gap-2">
              <Play size={16} /> Watch Demo
            </a>
          </motion.div>
        </div>

        {/* Right — Image Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative hidden lg:block"
          style={{ y }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden neon-border">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop"
                  alt="Modern smart home living room"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=500&fit=crop"
                  alt="Luxury interior design"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=500&fit=crop"
                  alt="Smart home exterior at dusk"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden neon-border">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop"
                  alt="Automated home kitchen"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          {/* Floating glass stat */}
          <div className="absolute -bottom-4 -left-6 glass-panel rounded-xl px-6 py-4 z-20">
            <span className="neon-text font-display font-bold text-2xl">4,200+</span>
            <p className="text-muted-foreground text-xs">Smart Homes Deployed</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#partners"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-primary animate-float"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
