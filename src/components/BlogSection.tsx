/* ========================================================================
   LATEST TECH NEWS — 3-column blog cards
   ======================================================================== */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    category: "AI & Automation",
    date: "Mar 5, 2026",
    title: "How GPT-5 Is Revolutionizing Smart Home Conversations",
    excerpt: "Natural language processing reaches new heights, enabling truly conversational home control.",
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    category: "Hardware",
    date: "Feb 28, 2026",
    title: "Wi-Fi 7: The Backbone of Next-Gen Smart Homes",
    excerpt: "Exploring how the latest wireless standard eliminates latency in multi-device ecosystems.",
  },
  {
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=400&fit=crop",
    category: "Design",
    date: "Feb 20, 2026",
    title: "Invisible Tech: Designing Homes That Hide Their Intelligence",
    excerpt: "The art of integrating smart systems without compromising minimalist aesthetics.",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Blog</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 text-foreground">
            Latest Tech News
          </h2>
          <div className="neon-line w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-panel-hover rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                  <span className="text-primary font-medium uppercase">{post.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
