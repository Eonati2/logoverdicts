import { Helmet } from "react-helmet-async";
import { Star, CheckCircle, ChevronRight, Users, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { AFFILIATE } from "@/lib/affiliates";

const DOMAIN = "https://logoverdicts.replit.app";
const PINTEREST_IMAGE = `${DOMAIN}/images/alestra-pin.png`;
const PAGE_URL = `${DOMAIN}/reviews/alestra`;
const FIVERR_HREF = AFFILIATE.alestra;

function PinterestButton() {
  const url = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(PAGE_URL)}&media=${encodeURIComponent(PINTEREST_IMAGE)}&description=${encodeURIComponent("Alestra Agency Fiverr Review — 31,034 reviews, Fiverr Pro Agency, trusted by Rabobank & Panasonic")}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#E60023] text-white text-sm font-semibold hover:opacity-90 transition-opacity" data-testid="pinterest-share-alestra">
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
      Save to Pinterest
    </a>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function CtaBox({ label = "View Alestra Agency on Fiverr" }: { label?: string }) {
  return (
    <a href={FIVERR_HREF} target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity shadow-md"
      data-testid="alestra-cta">
      {label} <ChevronRight className="w-4 h-4" />
    </a>
  );
}

export default function AlestraReview() {
  return (
    <Layout>
      <Helmet>
        <title>Alestra Agency Fiverr Review — 31,034 Reviews, Enterprise Branding | LogoVerdicts</title>
        <meta name="description" content="Alestra Agency Fiverr review: 31,034 verified reviews, 4.9★, 45-person team. Trusted by Rabobank and Panasonic. Full pricing, portfolio analysis, and our honest verdict." />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Alestra Agency Fiverr Review | LogoVerdicts" />
        <meta property="og:description" content="31,034 reviews, 4.9★, Fiverr Pro Agency. Trusted by Rabobank & Panasonic. Full review, pricing & verdict." />
        <meta property="og:image" content={PINTEREST_IMAGE} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alestra Agency Fiverr Review | LogoVerdicts" />
        <meta name="twitter:description" content="31,034 reviews, 4.9★. Enterprise branding agency on Fiverr." />
        <meta name="twitter:image" content={PINTEREST_IMAGE} />
        <meta name="pinterest-rich-pin" content="true" />
      </Helmet>

      <section className="bg-primary text-primary-foreground py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <li><a href="/" className="hover:text-primary-foreground/90 transition-colors">Home</a></li>
              <li aria-hidden="true">/</li>
              <li><span className="text-primary-foreground/80">Reviews</span></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary-foreground">Alestra Agency</li>
            </ol>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-foreground/20 text-primary-foreground">Fiverr Pro Agency</span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-accent text-accent-foreground">Our Top Pick</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-foreground/10 text-primary-foreground/80"><Users className="w-3 h-3" /> 45 employees</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Alestra Agency Fiverr Review
          </h1>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-chart-4 text-chart-4" />)}
            </div>
            <span className="text-primary-foreground font-semibold text-lg">4.9 / 5.0</span>
            <span className="text-primary-foreground/70 text-sm">31,034 verified reviews</span>
          </div>
          <p className="text-lg text-primary-foreground/85 max-w-2xl leading-relaxed">
            A 45-person branding agency with 31,034 verified reviews, trusted by Rabobank, Panasonic, and Bryter. Here's the full picture — what you get, what it costs, and who should hire them.
          </p>
        </div>
      </section>

      {/* STICKY URGENCY CTA */}
      <div className="bg-accent/10 border-b border-accent/20 py-3 px-4 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-sm font-medium text-accent">Average response time: 1 hour · Avg delivery: 2–7 days</p>
        <CtaBox label="Check Current Availability" />
      </div>

      <article className="max-w-3xl mx-auto px-4 py-14">
        <div className="flex flex-wrap gap-3 mb-10">
          <PinterestButton />
          <CtaBox />
        </div>

        {/* QUICK STATS */}
        <div className="bg-card border border-border rounded-xl p-6 mb-10" data-testid="alestra-quick-stats">
          <h2 className="font-display font-bold text-lg text-foreground mb-4">At a Glance</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: "Platform Status", value: "Fiverr Pro Agency" },
              { label: "Verified Reviews", value: "31,034" },
              { label: "Overall Rating", value: "4.9 / 5.0" },
              { label: "Team Size", value: "45 employees" },
              { label: "Price Range", value: "$75 – $500+" },
              { label: "Avg. Delivery", value: "2–7 days" },
              { label: "Founded", value: "2022" },
              { label: "Location", value: "Pakistan" },
              { label: "Notable Clients", value: "Rabobank, Panasonic" },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-primary pl-3">
                <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                <p className="font-semibold text-foreground text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Who Is Alestra Agency?</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Alestra isn't a solo designer — it's a 45-person agency operating on Fiverr under Pro certification since 2022. The team specializes in branding, pitch decks, and websites, with a client roster that includes institutional names like Rabobank and Panasonic alongside hundreds of funded startups and SMBs.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            The Fiverr Pro designation means Alestra was manually reviewed and approved by Fiverr's curation team — a process that fewer than 1% of sellers pass. For an agency of this size to maintain a 4.9 average across 31,034 reviews is not a statistical accident. It reflects a quality control system, structured client communication, and repeatable delivery processes.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Their average response time of 1 hour is a meaningful operational signal. For clients working on launches or investor timelines, the ability to get fast answers on revision direction makes a material difference.
          </p>
        </motion.section>

        {/* TEAM SECTION */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">The Team</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: "Umer", role: "CEO / Co-Founder", note: "Leads the high-performing team delivering design and strategy." },
              { name: "Azeem", role: "Co-Founder / Pitch Deck Consultant", note: "Oversees operations, specializes in pitch decks." },
              { name: "Iman", role: "Brand Designer", note: "Specializes in logo design and visual identity — clean, confident work." },
              { name: "Rehan", role: "Pitch Deck / Presentation Designer", note: "Creates impactful presentations for fundraises and enterprise clients." },
              { name: "Faisal", role: "AI Video / Animation Director", note: "Leads AI video production with Hollywood-level experience." },
              { name: "Usama", role: "Project Manager", note: "Manages web projects end-to-end, ensuring timely delivery." },
            ].map((m, i) => (
              <div key={i} className="bg-muted/40 rounded-lg p-4 border border-border">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">{m.name[0]}</div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{m.name}</p>
                    <p className="text-xs text-muted-foreground">{m.role}</p>
                  </div>
                </div>
                <p className="text-xs text-foreground/70 leading-relaxed ml-11">{m.note}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Services They Cover</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { category: "Visual Identity & Branding", items: ["Logo design", "Brand style guides", "Business cards & stationery"] },
              { category: "Web & App Design", items: ["Website design", "Website UI/UX design", "Shopify & WordPress development"] },
              { category: "Marketing & Advertising", items: ["Social media design", "Presentation design", "Signage design"] },
              { category: "Content Creation", items: ["AI video production", "Character modeling", "Storyboards"] },
            ].map((s, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4">
                <p className="font-semibold text-foreground text-sm mb-2">{s.category}</p>
                <ul className="space-y-1">
                  {s.items.map((item, ii) => (
                    <li key={ii} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Pricing Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" data-testid="alestra-pricing-table">
              <thead>
                <tr className="bg-muted/60">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Package</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Price</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">What's Included</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Delivery</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 px-4 font-medium">Logo Design (Basic)</td>
                  <td className="py-3 px-4">~$75</td>
                  <td className="py-3 px-4 text-muted-foreground">1 concept, PNG + JPG delivery</td>
                  <td className="py-3 px-4">5–7 days</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Brand Identity (Standard)</td>
                  <td className="py-3 px-4">~$112</td>
                  <td className="py-3 px-4 text-muted-foreground">Logo + brand guidelines, full vector files</td>
                  <td className="py-3 px-4">3–5 days</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Pitch Deck</td>
                  <td className="py-3 px-4">~$130–175</td>
                  <td className="py-3 px-4 text-muted-foreground">Investor / startup presentation, Google Slides or PowerPoint</td>
                  <td className="py-3 px-4">3–5 days</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Shopify / Website</td>
                  <td className="py-3 px-4">~$443+</td>
                  <td className="py-3 px-4 text-muted-foreground">Full design and development</td>
                  <td className="py-3 px-4">1–3 weeks</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">AI Video / Promo</td>
                  <td className="py-3 px-4">~$179</td>
                  <td className="py-3 px-4 text-muted-foreground">High-impact promotional video with AI motion</td>
                  <td className="py-3 px-4">3–5 days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-3">Prices approximate. Check Alestra's Fiverr profile for current rates. Installment arrangements have been accommodated for larger projects.</p>
        </motion.section>

        {/* REAL REVIEWS */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Real Client Reviews</h2>
          <div className="space-y-5">
            {[
              { name: "timelapsejay", country: "UK", price: "€400–€600", duration: "3 weeks", note: "Repeat Client", quote: "The work was done over about three weeks, which I really appreciated since I couldn't afford to pay for everything all at once. Being able to do it in installments made it way easier." },
              { name: "johnc7642", country: "US", price: "€100–€200", duration: "2 days", note: "Pro Client", quote: "Exceptional experience! The team delivered a sophisticated, high-tier visual identity that perfectly captures the 'Corporate Fortress' aesthetic we required. Fantastic work." },
              { name: "vpnstore", country: "UK", price: "€100–€200", duration: "3 days", note: "Verified", quote: "Excellent work from Alestra and the team. I came in with a very specific brief — a dark cyberpunk PCB padlock logo for a tech/VPN brand — and they nailed it on the first concept." },
              { name: "sci2ibbles", country: "US", price: "€200–€400", duration: "6 days", note: "Pro Client · Repeat", quote: "I hired a company (brick and mortar) that MASSIVELY dropped the ball on our project and Irfan and his team came in and saved us completely. The praise I want to express speaks volumes." },
            ].map((t, i) => (
              <blockquote key={i} className="bg-muted/40 border-l-4 border-primary rounded-r-lg p-5" data-testid={`alestra-testimonial-${i}`}>
                <div className="flex items-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, si) => <Star key={si} className="w-3.5 h-3.5 fill-chart-4 text-chart-4" />)}
                  <span className="ml-2 text-xs text-muted-foreground">{t.note}</span>
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed italic mb-3">"{t.quote}"</p>
                <footer className="not-italic flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">{t.name} · {t.country}</span>
                  <span>Paid: {t.price}</span>
                  <span>Duration: {t.duration}</span>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">28,633 five-star reviews · 4.9 seller communication · 4.9 quality of delivery</p>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Who Should Hire Alestra Agency?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Strong Fit If...</h3>
              <ul className="space-y-2 text-sm text-green-800">
                {["You need a full-service team: logo + pitch deck + website", "Your industry is finance, tech, enterprise, or B2B", "You want a fast-responding agency (avg. 1 hour reply)", "Budget is $75–$500 and you need quality from day one", "You want installment-friendly project management"].map((item, i) => <li key={i} className="flex gap-2"><span>•</span>{item}</li>)}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-semibold text-red-900 mb-3">Consider Others If...</h3>
              <ul className="space-y-2 text-sm text-red-800">
                {["You want a single individual designer (not agency)", "Your brand is highly personal / lifestyle-focused", "You only need a logo — no broader brand work"].map((item, i) => <li key={i} className="flex gap-2"><span>•</span>{item}</li>)}
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
          <div className="bg-primary text-primary-foreground rounded-xl p-7" data-testid="alestra-verdict">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-6 h-6 text-chart-4" />
              <h2 className="font-display text-2xl font-bold">Our Verdict</h2>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-chart-4 text-chart-4" />)}
              </div>
              <span className="font-bold text-lg">4.9 / 5.0 — Highest Recommendation</span>
            </div>
            <p className="text-primary-foreground/85 leading-relaxed mb-5">
              31,034 reviews at 4.9 stars is genuinely extraordinary. Alestra Agency operates with the structure of a professional studio and the speed of a freelancer. For any business that needs branding, pitch decks, or web design handled by a single accountable team — with enterprise-level clients already on their roster — this is our strongest recommendation.
            </p>
            <CtaBox label="Hire Alestra Agency on Fiverr" />
          </div>
        </motion.section>

        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground mb-4">Compare all three designers or read the next review:</p>
          <div className="flex flex-wrap gap-3">
            <a href="/compare" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-border text-sm font-medium hover:bg-muted transition-colors">Compare All Three</a>
            <a href="/reviews/juhi" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-border text-sm font-medium hover:bg-muted transition-colors">Juhi Review</a>
            <a href="/reviews/valeriia" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-border text-sm font-medium hover:bg-muted transition-colors">Valeriia Review</a>
          </div>
        </div>
      </article>
    </Layout>
  );
}
