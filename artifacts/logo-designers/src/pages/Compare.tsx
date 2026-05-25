import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Star, Check, X, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { AFFILIATE } from "@/lib/affiliates";

const DOMAIN = "https://logoverdicts.replit.app";

const designers = [
  {
    slug: "alestra",
    name: "Alestra Agency",
    title: "The Enterprise Authority",
    badge: "Fiverr Pro Agency",
    badgeColor: "bg-primary text-primary-foreground",
    rating: 4.9,
    reviews: "31,034",
    priceStart: 75,
    priceMax: 500,
    deliveryDays: "2–7",
    revisions: "Unlimited",
    style: "Corporate, Enterprise, Pitch Decks",
    teamSize: "45 people",
    communication: 5,
    portfolioStrength: 5,
    valueForMoney: 4,
    bestFor: [
      "Full-service: logo + pitch deck + website",
      "Finance, law, enterprise, B2B brands",
      "Fast-responding agency (1-hr avg reply)",
      "Trusted by Rabobank & Panasonic",
    ],
    notIdealFor: [
      "Solo designer preference",
      "Purely lifestyle / personal brands",
      "Budgets under $75",
    ],
    fiverrHref: AFFILIATE.alestra,
    reviewHref: "/reviews/alestra",
    verdict: "Top Pick",
    verdictColor: "bg-accent text-accent-foreground",
  },
  {
    slug: "juhi",
    name: "Juhi (Explorance)",
    title: "The Minimalist Pro",
    badge: "Fiverr Pro",
    badgeColor: "bg-primary text-primary-foreground",
    rating: 4.8,
    reviews: "9,319",
    priceStart: 41,
    priceMax: 350,
    deliveryDays: "1–5",
    revisions: "3+ (unlimited on higher tiers)",
    style: "Minimal, Geometric, Tech, Modern Sans",
    teamSize: "Solo designer",
    communication: 5,
    portfolioStrength: 5,
    valueForMoney: 5,
    bestFor: [
      "Budgets $41–$300 (best value tier)",
      "Tech startups, SaaS, DTC brands",
      "Speed — 1-day delivery available",
      "Clean wordmark or geometric icon marks",
    ],
    notIdealFor: [
      "Ornate, vintage, or illustrative styles",
      "Full agency output needed",
      "Luxury or feminine positioning",
    ],
    fiverrHref: AFFILIATE.juhi,
    reviewHref: "/reviews/juhi",
    verdict: "Best Value",
    verdictColor: "bg-chart-3 text-white",
  },
  {
    slug: "valeriia",
    name: "Valeriia T",
    title: "The Versatile Elite",
    badge: "Fiverr Pro",
    badgeColor: "bg-chart-4 text-foreground",
    rating: 4.8,
    reviews: "8,045",
    priceStart: 175,
    priceMax: 500,
    deliveryDays: "2–6",
    revisions: "Unlimited",
    style: "Versatile — minimal to luxury to ornate",
    teamSize: "Solo designer",
    communication: 5,
    portfolioStrength: 5,
    valueForMoney: 5,
    bestFor: [
      "Lifestyle, wellness, beauty, feminine brands",
      "Multi-discipline: logo + packaging + web",
      "Clients unsure of aesthetic direction",
      "10+ years experience, trusted by Fiverr",
    ],
    notIdealFor: [
      "Budgets under $175 (use Juhi)",
      "Ultra-fast 24-hr turnarounds",
      "Enterprise agency need (use Alestra)",
    ],
    fiverrHref: AFFILIATE.valeriia,
    reviewHref: "/reviews/valeriia",
    verdict: "Most Versatile",
    verdictColor: "bg-chart-5 text-white",
  },
];

const scenarios = [
  { title: "Launching a fintech or B2B SaaS", pick: "Alestra Agency", reason: "A 45-person agency with enterprise client logos already in their portfolio. Institutional trust is baked in." },
  { title: "Bootstrapped startup, budget under $150", pick: "Juhi (Explorance)", reason: "Juhi's $41–$112 packages deliver Fiverr Pro-quality work with 1-day options. Best return per dollar at this tier." },
  { title: "Wellness, beauty, or feminine brand", pick: "Valeriia T", reason: "Her portfolio moves from playful food branding to luxury perfume identity. The right range for your category." },
  { title: "Need logo + pitch deck + website together", pick: "Alestra Agency", reason: "They cover all three as a single coordinated team. No briefing three separate designers." },
  { title: "You're not sure about your visual direction", pick: "Valeriia T", reason: "Genuinely different concept directions — not three colorways of the same idea. Let the brief decide." },
  { title: "Fastest possible turnaround", pick: "Juhi (Explorance)", reason: "1-day delivery is available from $23. No other Pro-vetted designer on the list comes close for speed." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" },
  }),
};

function ScoreBar({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full" style={{ width: `${(score / 5) * 100}%` }} />
      </div>
      <span className="text-xs font-medium text-muted-foreground w-6">{score}/5</span>
    </div>
  );
}

export default function Compare() {
  return (
    <Layout>
      <Helmet>
        <title>Fiverr Logo Designer Comparison: Alestra vs Juhi vs Valeriia | LogoVerdicts</title>
        <meta name="description" content="Side-by-side comparison of Alestra Agency, Juhi, and Valeriia T — Fiverr's top Pro logo designers. Compare price, style, delivery, team size, and best-fit scenarios to find your match." />
        <link rel="canonical" href={`${DOMAIN}/compare`} />
        <meta property="og:title" content="Fiverr Logo Designer Comparison | LogoVerdicts" />
        <meta property="og:description" content="Alestra Agency vs Juhi vs Valeriia T — full side-by-side comparison on price, style, delivery, and best use cases." />
        <meta property="og:image" content={`${DOMAIN}/opengraph.jpg`} />
        <meta property="og:url" content={`${DOMAIN}/compare`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fiverr Logo Designer Comparison | LogoVerdicts" />
        <meta name="twitter:description" content="Alestra vs Juhi vs Valeriia — side-by-side pricing, style, and best-fit comparison." />
        <meta name="twitter:image" content={`${DOMAIN}/opengraph.jpg`} />
        <meta name="pinterest-rich-pin" content="true" />
      </Helmet>

      <section className="bg-primary text-primary-foreground py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Fiverr Logo Designer Comparison
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-6">
            Alestra Agency, Juhi, and Valeriia T — compared side by side on every dimension that matters before you hire.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/70">
            <span>31,034 reviews — Alestra</span>
            <span>·</span>
            <span>9,319 reviews — Juhi</span>
            <span>·</span>
            <span>8,045 reviews — Valeriia</span>
          </div>
        </div>
      </section>

      <section className="py-14 px-4" aria-labelledby="comparison-table-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="comparison-table-heading" className="font-display text-2xl font-bold text-foreground mb-8">
            Head-to-Head Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" data-testid="comparison-table">
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground w-36 border-b border-border">Criteria</th>
                  {designers.map((d) => (
                    <th key={d.slug} className="py-4 px-4 text-center border-b border-border">
                      <div className="flex flex-col items-center gap-1">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${d.badgeColor}`}>{d.badge}</span>
                        <span className="font-display font-bold text-foreground text-lg">{d.name}</span>
                        <span className="text-xs text-muted-foreground">{d.title}</span>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold mt-1 ${d.verdictColor}`}>{d.verdict}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  {
                    label: "Rating",
                    render: (d: typeof designers[0]) => (
                      <div className="flex items-center justify-center gap-1">
                        <Star className="w-4 h-4 fill-chart-4 text-chart-4" />
                        <span className="font-semibold text-foreground">{d.rating}</span>
                      </div>
                    ),
                  },
                  { label: "Verified Reviews", render: (d: typeof designers[0]) => <span className="font-medium text-foreground">{d.reviews}</span> },
                  { label: "Team", render: (d: typeof designers[0]) => <span className="text-sm text-foreground">{d.teamSize}</span> },
                  { label: "Starts At", render: (d: typeof designers[0]) => <span className="font-bold text-accent text-base">${d.priceStart}</span> },
                  { label: "Price Range", render: (d: typeof designers[0]) => <span className="font-medium text-foreground">${d.priceStart} – ${d.priceMax}+</span> },
                  { label: "Delivery", render: (d: typeof designers[0]) => <span className="text-foreground">{d.deliveryDays} days</span> },
                  { label: "Revisions", render: (d: typeof designers[0]) => <span className="text-sm text-foreground">{d.revisions}</span> },
                  { label: "Style Range", render: (d: typeof designers[0]) => <span className="text-sm text-foreground">{d.style}</span> },
                  { label: "Communication", render: (d: typeof designers[0]) => <ScoreBar score={d.communication} /> },
                  { label: "Portfolio", render: (d: typeof designers[0]) => <ScoreBar score={d.portfolioStrength} /> },
                  { label: "Value", render: (d: typeof designers[0]) => <ScoreBar score={d.valueForMoney} /> },
                ].map((row) => (
                  <tr key={row.label} className="hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 text-sm font-medium text-muted-foreground">{row.label}</td>
                    {designers.map((d) => (
                      <td key={d.slug} className="py-4 px-4 text-center">{row.render(d)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {designers.map((d) => (
              <div key={d.slug} className="bg-card border border-border rounded-lg p-5">
                <h3 className="font-display font-semibold text-foreground mb-3">{d.name} is best for:</h3>
                <ul className="space-y-1.5 mb-4">
                  {d.bestFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <h4 className="font-semibold text-sm text-muted-foreground mb-2">Not ideal for:</h4>
                <ul className="space-y-1.5 mb-5">
                  {d.notIdealFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <Link href={d.reviewHref} className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-md border border-border text-xs font-medium hover:bg-muted transition-colors" data-testid={`compare-read-${d.slug}`}>
                    Full Review
                  </Link>
                  <a href={d.fiverrHref} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-md bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity" data-testid={`compare-hire-${d.slug}`}>
                    Hire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-muted/40 border-t border-border" aria-labelledby="scenarios-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="scenarios-heading" className="font-display text-2xl font-bold text-foreground mb-3">
            Which Designer Is Right for You?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl">
            Real hiring decisions are situational. Here's exactly how we'd advise on common scenarios:
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {scenarios.map((s, i) => (
              <motion.div
                key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-card border border-border rounded-lg p-5" data-testid={`scenario-${i}`}
              >
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Scenario</p>
                <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-xs font-bold text-primary mb-2">Our pick: {s.pick}</p>
                <p className="text-sm text-foreground/80 leading-relaxed">{s.reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4" aria-label="Final CTA">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Ready to Hire?</h2>
          <p className="text-muted-foreground mb-8">
            Read the full review or go straight to Fiverr with your affiliate-tracked link.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {designers.map((d) => (
              <a key={d.slug} href={d.fiverrHref} target="_blank" rel="noopener noreferrer"
                className="inline-flex flex-col items-center gap-0.5 px-4 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                data-testid={`final-cta-${d.slug}`}>
                <span>Hire {d.name.split(" ")[0]}</span>
                <span className="text-xs font-normal text-primary-foreground/70">from ${d.priceStart} <ChevronRight className="inline w-3 h-3" /></span>
              </a>
            ))}
          </div>
          <p className="mt-5 text-xs text-muted-foreground">Curated by Eonati · Affiliate links disclosed · Independent research</p>
        </div>
      </section>
    </Layout>
  );
}
