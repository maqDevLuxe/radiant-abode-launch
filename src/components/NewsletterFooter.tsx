/* ========================================================================
   NEWSLETTER SUBSCRIBE & FULL FOOTER
   ======================================================================== */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  Company: ["About Us", "Careers", "Press Kit", "Contact"],
  Resources: ["Documentation", "API Reference", "Blog", "Community"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
};

const NewsletterFooter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Welcome aboard! Check your inbox for confirmation.");
    setEmail("");
  };

  return (
    <>
      {/* Newsletter */}
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(199_89%_48%/0.08),transparent_60%)]" />
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Stay Updated</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-4 text-foreground">
              Join the <span className="neon-text">Future</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get exclusive insights, product updates, and smart home tips delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
              <button type="submit" className="btn-neon flex items-center justify-center gap-2 whitespace-nowrap">
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Full Footer */}
      <footer className="border-t border-border/30 py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <span className="font-display font-bold text-xl text-foreground">
                NEXUS<span className="neon-text">HOME</span>
              </span>
              <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                The gold standard in luxury smart home automation since 2009.
              </p>
              <div className="flex flex-col gap-2 mt-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Silicon Valley, CA</span>
                <span className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +1 (800) NEXUS-01</span>
                <span className="flex items-center gap-2"><Mail size={14} className="text-primary" /> hello@nexushome.io</span>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-display font-semibold text-foreground mb-4">{title}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="neon-line w-full mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} NexusHome. All rights reserved.</span>
            <div className="flex gap-6">
              {["Twitter", "LinkedIn", "Instagram", "YouTube"].map((s) => (
                <a key={s} href="#" className="hover:text-primary transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default NewsletterFooter;
