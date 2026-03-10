/* ========================================================================
   PROMO VIDEO / LARGE IMAGE CONTAINER
   ======================================================================== */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

const VideoSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="video" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden group cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1400&h=700&fit=crop"
            alt="NexusHome smart home showcase"
            className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-[0_0_40px_hsl(199_89%_48%/0.4)]"
            >
              <Play className="text-primary-foreground ml-1" size={32} />
            </motion.div>
          </div>
          <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-background to-transparent">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground">See NexusHome in Action</h3>
            <p className="text-muted-foreground text-sm mt-2">A 3-minute walkthrough of our flagship installation</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
