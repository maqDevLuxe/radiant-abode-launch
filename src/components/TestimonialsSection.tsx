/* ========================================================================
   TESTIMONIALS — Center aligned with avatars
   ======================================================================== */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Alexander Rothschild",
    role: "CEO, Rothschild Capital",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    quote: "NexusHome transformed our 15,000 sq ft estate into a seamlessly intelligent environment. The AI anticipates our every need — it's like having an invisible butler.",
  },
  {
    name: "Sophia Chen-Williams",
    role: "Interior Designer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    quote: "As a designer, I demand invisible technology. NexusHome delivers exactly that — powerful automation that enhances aesthetics rather than compromising them.",
  },
  {
    name: "Marcus Van Der Berg",
    role: "Tech Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    quote: "I've tested every smart home platform on the market. NexusHome's latency, reliability, and AI capabilities are in a league of their own. Simply unmatched.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Testimonials</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 text-foreground">
            What Our Clients Say
          </h2>
          <div className="neon-line w-24 mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel rounded-2xl p-8 md:p-12 relative"
        >
          <Quote className="text-primary/20 mx-auto mb-6" size={48} />

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 italic">
              "{testimonials[active].quote}"
            </p>
            <div className="flex flex-col items-center gap-3">
              <img
                src={testimonials[active].avatar}
                alt={testimonials[active].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                loading="lazy"
              />
              <div>
                <h4 className="font-display font-semibold text-foreground">{testimonials[active].name}</h4>
                <p className="text-muted-foreground text-sm">{testimonials[active].role}</p>
              </div>
            </div>
          </motion.div>

          {/* Nav */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border hover:border-primary flex items-center justify-center transition-colors" aria-label="Previous testimonial">
              <ChevronLeft size={18} className="text-muted-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-primary" : "bg-border"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border hover:border-primary flex items-center justify-center transition-colors" aria-label="Next testimonial">
              <ChevronRight size={18} className="text-muted-foreground" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
