/* ========================================================================
   CUSTOMER SATISFACTION — Overlapping images and text
   ======================================================================== */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const CustomerSatisfaction = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/20 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Overlapping images */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <div className="absolute top-0 left-0 w-2/3 h-3/4 rounded-2xl overflow-hidden z-10 neon-border">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=500&fit=crop"
                alt="Happy homeowners in smart home"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 h-3/4 rounded-2xl overflow-hidden z-20">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=500&fit=crop"
                alt="Luxury smart home interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Rating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute bottom-4 left-4 z-30 glass-panel rounded-xl px-5 py-3 flex items-center gap-2"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-primary fill-primary" />
                ))}
              </div>
              <span className="text-foreground text-sm font-semibold">4.9/5</span>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Customer Satisfaction</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-6 text-foreground">
              Loved by <span className="neon-text">Thousands</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With a 98% satisfaction rate and an average 4.9-star rating, NexusHome has become the gold standard in luxury smart home automation. Our clients don't just use our systems — they can't imagine living without them.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "98%", label: "Retention Rate" },
                { value: "4.9★", label: "Average Rating" },
                { value: "2hrs", label: "Avg. Install Time" },
                { value: "24/7", label: "Support Available" },
              ].map((s) => (
                <div key={s.label}>
                  <span className="neon-text font-display font-bold text-2xl">{s.value}</span>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSatisfaction;
