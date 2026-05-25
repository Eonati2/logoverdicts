import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Star, CheckCircle, Shield, Clock, ChevronRight, Users, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { DESIGNERS } from "@/lib/affiliates";

const DOMAIN = "https://logoverdicts.replit.app";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const urgencyItems = [
  "Most logo projects fail not because of the designer — but because the client didn't know what to look for.",
  "A bad logo costs you twice: once to make it, once to fix it.",
  "These three designers have handled 48,000+ client orders. We tell you exactly who to hire for your situation.",
];

const faqs = [
  {
    q: "Who is the best logo designer on Fiverr right now?",
    a: "Based on our research, Alestra Agency (31,034 reviews, 4.9★), Juhi / Explorance (9,319 reviews, 4.8★), and Valeriia T (8,045 reviews, 4.8★) are consistently the top-performing Fiverr Pro logo designers. Each has a distinct strength — see our comparison for a direct match to your brand.",
  },
  {
    q: "How much does a professional logo design cost on Fiverr?",
    a: "Entry packages start at $41 (Juhi) to $175 (Valeriia). Full brand identity packages with guidelines run $300–$500+. Alestra Agency handles enterprise-tier work with pricing from $75 to $500+. For most small businesses, the $100–$250 range from a vetted Pro delivers professional, scalable results.",
  },
  {
    q: "What is Fiverr Pro and why does it matter for logo design?",
    a: "Fiverr Pro is a manually vetted tier — fewer than 1% of sellers qualify. Pro sellers are reviewed for portfolio quality, communication history, and delivery consistency. For branding work where quality directly affects your revenue, hiring Pro dramatically reduces risk.",
  },
  {
    q: "How many revisions should my logo package include?",
    a: "Industry standard: 2–3 revisions in a standard package, unlimited in premium tiers. All three designers we recommend offer unlimited revisions at their mid and premium tiers. The key is a clear brief upfront — it reduces rounds needed to one or two.",
  },
  {
    q: "What files should I receive when my logo is delivered?",
    a: "A complete professional logo package includes: AI or EPS (vector source), SVG (web), PDF (print), PNG with transparent background, and JPG. Plus a brand guidelines doc with exact color codes (HEX, RGB, CMYK) and typography specs. Never accept PNG-only delivery.",
  },
  {
    q: "Is it safe to pay a logo designer on Fiverr?",
    a: "Yes — Fiverr holds your payment in escrow until you approve delivery. If a designer fails to deliver or the work doesn't match the agreed scope, you can dispute for a full refund. The designers we recommend all have near-zero dispute rates across tens of thousands of orders.",
  },
];

export default function Home() {
  const designers = [
    {
      ...DESIGNERS.alestra,
      slug: "alestra",
      verdict: "Top Pick",
      verdictColor: "bg-accent text-accent-foreground",
      badgeColor: "bg-primary text-primary-foreground",
      summary: "A 45-person agency with 31,034 verified reviews, trusted by Rabobank and Panasonic. Alestra delivers enterprise-grade branding: logos, pitch decks, and full identity systems — fast.",
    },
    {
      ...DESIGNERS.juhi,
      slug: "juhi",
      verdict: "Best Value",
      verdictColor: "bg-chart-3 text-white",
      badgeColor: "bg-primary text-primary-foreground",
      summary: "Fiverr Pro-vetted minimalist specialist with 9,319 reviews. Juhi's geometric precision and sub-$50 entry packages make her the strongest value for tech startups and DTC brands.",
    },
    {
      ...DESIGNERS.valeriia,
      slug: "valeriia",
      verdict: "Most Versatile",
      verdictColor: "bg-chart-5 text-white",
      badgeColor: "bg-chart-4 text-foreground",
      summary: "Ukrainian designer with 10+ years of experience and 8,045+ Pro reviews. Valeriia's range — from minimal wordmarks to ornate emblems — makes her the right call when you're still defining your direction.",
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Best Freelance Logo Designers for Hire | LogoVerdicts by Eonati</title>
        <meta name="description" content="Independent reviews of the best freelance logo designers on Fiverr. Compare Alestra Agency, Juhi, and Valeriia T by price, style, reviews, and delivery. Find the right designer for your brand." />
        <link rel="canonical" href={`${DOMAIN}/`} />
        <meta property="og:title" content="Best Freelance Logo Designers for Hire | LogoVerdicts" />
        <meta property="og:description" content="48,000+ verified reviews analyzed. We tell you exactly which Fiverr Pro designer fits your brand, budget, and timeline." />
        <meta property="og:image" content={`${DOMAIN}/opengraph.jpg`} />
        <meta property="og:url" content={`${DOMAIN}/`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Freelance Logo Designers for Hire | LogoVerdicts" />
        <meta name="twitter:description" content="48,000+ verified reviews analyzed. Compare Alestra, Juhi, and Valeriia T." />
        <meta name="twitter:image" content={`${DOMAIN}/opengraph.jpg`} />
        <meta name="pinterest-rich-pin" content="true" />
      </Helmet>

      {/* URGENCY BAR */}
      <div className="bg-primary/10 border-b border-primary/20 py-2.5 px-4 text-center text-sm font-medium text-primary">
        48,000+ orders reviewed — updated for the current Fiverr Pro roster
      </div>

      {/* HERO */}
      <section className="bg-primary text-primary-foreground py-20 px-4" aria-label="Hero">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-foreground/15 text-primary-foreground/90 text-xs font-semibold uppercase tracking-wider mb-6">
              <CheckCircle className="w-3.5 h-3.5" /> Independently Researched &middot; Curated by Eonati
            </span>
          </motion.div>
          <motion.h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.55 }}
          >
            Best Freelance Logo Designers for Hire
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed mb-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.55 }}
          >
            We spent 40+ hours reviewing Fiverr's top Pro logo designers. Here's exactly who to hire — and why.
          </motion.p>

          {/* Social proof numbers */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-primary-foreground/75"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 fill-chart-4 text-chart-4" /> 31k+ reviews — Alestra</span>
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 fill-chart-4 text-chart-4" /> 9k+ reviews — Juhi</span>
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 fill-chart-4 text-chart-4" /> 8k+ reviews — Valeriia</span>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.5 }}
          >
            <Link href="/compare" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-accent text-accent-foreground font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg" data-testid="hero-cta-compare">
              Find My Designer <ChevronRight className="w-5 h-5" />
            </Link>
            <Link href="/guide/how-to-hire-a-logo-designer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-primary-foreground/15 text-primary-foreground font-semibold hover:bg-primary-foreground/25 transition-colors" data-testid="hero-cta-guide">
              Free Hiring Guide
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TRUST SIGNALS BAR */}
      <section className="py-5 bg-muted/50 border-b border-border" aria-label="Trust signals">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { icon: <Shield className="w-4 h-4" />, stat: "40+ hrs", label: "of research" },
              { icon: <Star className="w-4 h-4" />, stat: "48,000+", label: "reviews analyzed" },
              { icon: <CheckCircle className="w-4 h-4" />, stat: "3 verified", label: "Fiverr Pro picks" },
              { icon: <Clock className="w-4 h-4" />, stat: "Updated", label: "regularly" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1 py-2">
                <div className="text-muted-foreground">{item.icon}</div>
                <span className="font-display font-bold text-foreground text-lg">{item.stat}</span>
                <span className="text-xs text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS — HOOK */}
      <section className="py-10 px-4 bg-accent/5 border-b border-accent/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-4">
            {urgencyItems.map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-4 bg-card rounded-lg border border-border">
                <Zap className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGNER CARDS */}
      <section className="py-16 px-4" aria-labelledby="featured-designers-heading">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 id="featured-designers-heading" className="font-display text-3xl font-bold text-foreground mb-3">
              Our Top-Rated Logo Designers
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Ranked by verified review volume, quality consistency, and delivery reliability. No paid placements.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {designers.map((d, i) => (
              <motion.article
                key={d.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow relative"
                data-testid={`designer-card-${d.slug}`}
              >
                {i === 0 && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary" />
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${d.badgeColor} mb-2`}>
                        {d.badge}
                      </span>
                      <h3 className="font-display text-xl font-bold text-foreground">{d.name}</h3>
                      <p className="text-sm text-muted-foreground font-medium">{d.title}</p>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold ${d.verdictColor}`}>
                      {d.verdict}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} className={`w-4 h-4 ${si < Math.floor(d.rating) ? "fill-chart-4 text-chart-4" : "fill-muted text-muted"}`} />
                    ))}
                    <span className="text-sm font-semibold text-foreground ml-1">{d.rating}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">{d.reviews} verified reviews</p>

                  <p className="text-sm text-foreground/80 leading-relaxed mb-5">{d.summary}</p>

                  <div className="space-y-2 mb-5">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Price range</span>
                      <span className="font-medium text-foreground">{d.priceRange}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Starts at</span>
                      <span className="font-semibold text-accent">{d.priceEntry}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Delivery</span>
                      <span className="font-medium text-foreground">{d.delivery}</span>
                    </div>
                    {d.employees && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Team size</span>
                        <span className="font-medium text-foreground">{d.employees} employees</span>
                      </div>
                    )}
                    {d.notableClients.length > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Trusted by</span>
                        <span className="font-medium text-foreground text-right max-w-[150px]">{d.notableClients.join(", ")}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={d.href}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-md border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors"
                      data-testid={`card-read-review-${d.slug}`}
                    >
                      Read Review
                    </Link>
                    <a
                      href={d.affiliate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                      data-testid={`card-hire-${d.slug}`}
                    >
                      View on Fiverr
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF — FEATURED CLIENTS */}
      <section className="py-8 px-4 bg-muted/40 border-y border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Clients these designers have worked with</p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {["Rabobank", "Panasonic", "Bryter", "Fiverr", "500+ SMBs", "Enterprise teams"].map((c, i) => (
              <span key={i} className="text-sm font-semibold text-foreground/50">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE REVIEW */}
      <section className="py-14 px-4" aria-labelledby="how-we-review-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="how-we-review-heading" className="font-display text-3xl font-bold text-foreground mb-3 text-center">
            How We Choose Who to Recommend
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            Every designer on this site passed a 6-point review. No paid placements. No sponsored rankings.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { n: "01", label: "Review Volume & Authenticity", detail: "We verify review count, recency distribution, and flag suspicious clustering patterns." },
              { n: "02", label: "Portfolio Quality", detail: "Originality, typographic precision, scalability, and whether the work holds up at any size." },
              { n: "03", label: "Communication & Reliability", detail: "Response rate, on-time delivery %, and dispute history. We look for 98%+ completion rates." },
              { n: "04", label: "Pricing Transparency", detail: "We document exactly what each tier includes — concepts, revisions, file formats, turnaround." },
              { n: "05", label: "Revision Policy", detail: "We look at how each designer handles feedback in practice, not just what the listing claims." },
              { n: "06", label: "File Delivery Standards", detail: "Professional work requires AI/EPS, SVG, PDF, and transparent PNG. We verify this is standard practice." },
            ].map((item, i) => (
              <motion.div
                key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-card border border-border rounded-lg p-5"
              >
                <span className="text-xs font-bold text-primary/40 font-mono">{item.n}</span>
                <h3 className="font-display font-semibold text-foreground mt-1 mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-14 px-4 bg-muted/40 border-t border-border" aria-labelledby="testimonials-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="testimonials-heading" className="font-display text-3xl font-bold text-foreground mb-10 text-center">
            Real Clients, Real Results
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "timelapsejay", country: "UK", designer: "Alestra Agency", price: "€400–€600", quote: "The work was done over about three weeks, which I really appreciated since I couldn't afford to pay for everything all at once. Being able to do it in installments made it way easier." },
              { name: "johnc7642", country: "US", designer: "Alestra Agency", price: "€100–€200", quote: "Exceptional experience! The team delivered a sophisticated, high-tier visual identity that perfectly captures the 'Corporate Fortress' aesthetic we required. Fantastic work in just 2 days." },
              { name: "strongkate", country: "UK", designer: "Juhi (Explorance)", price: "Up to €50", quote: "I had a certain logo in mind. Juhi designed exactly to my brief but also produced a second logo demonstrating a more refined version that exceeded my expectations." },
              { name: "hj_wolfe", country: "US", designer: "Juhi (Explorance)", price: "€200–€400", quote: "The Explorance team exceeded my expectations in their level of both strategic thinking and execution. Their responsiveness was superb." },
              { name: "musematter", country: "US", designer: "Valeriia T", price: "€100–€200", quote: "Oh my gosh! Where do I even begin! Valeriia went beyond my wildest imagination with my logo design. Initially I placed my order with a loose idea — what I got back was extraordinary." },
              { name: "heyheyshenay", country: "US", designer: "Valeriia T", price: "Up to €50", quote: "Valeriia is amazing at her craft! She created the original logo for my business a few years ago and I came back for a revision. She was patient and delivered beautifully." },
            ].map((t, i) => (
              <motion.blockquote
                key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-card border border-border rounded-xl p-6" data-testid={`testimonial-${i}`}
              >
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, si) => <Star key={si} className="w-4 h-4 fill-chart-4 text-chart-4" />)}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-5 italic">"{t.quote}"</p>
                <footer>
                  <cite className="not-italic">
                    <p className="text-sm font-semibold text-foreground">{t.name} <span className="text-muted-foreground font-normal">· {t.country}</span></p>
                    <p className="text-xs text-muted-foreground">Hired {t.designer} · {t.price}</p>
                  </cite>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-muted/40 border-t border-border" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="font-display text-3xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-display font-semibold text-foreground mb-3">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 px-4" aria-label="Final CTA">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide">
            <Users className="w-3.5 h-3.5" /> 48,000+ orders — verified
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Not Sure Which Designer Is Right for You?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg max-w-xl mx-auto">
            Our comparison page breaks down all three side by side — price, style, speed, and the exact scenario each is best for.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/compare" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity shadow-md" data-testid="bottom-cta-compare">
              Compare All Three <ChevronRight className="w-5 h-5" />
            </Link>
            <Link href="/guide/how-to-hire-a-logo-designer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border border-border text-foreground font-semibold hover:bg-muted transition-colors" data-testid="bottom-cta-guide">
              Free Hiring Guide
            </Link>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Curated by <span className="font-semibold">Eonati</span> · Independent research, affiliate links disclosed
          </p>
        </div>
      </section>
    </Layout>
  );
}
