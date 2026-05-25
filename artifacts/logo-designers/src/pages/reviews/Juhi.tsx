import { Helmet } from "react-helmet-async";
import { Star, CheckCircle, ChevronRight, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { AFFILIATE } from "@/lib/affiliates";

const DOMAIN = "https://logoverdicts.replit.app";
const PINTEREST_IMAGE = `${DOMAIN}/images/juhi-pin.png`;
const PAGE_URL = `${DOMAIN}/reviews/juhi`;
const FIVERR_HREF = AFFILIATE.juhi;

function PinterestButton() {
  const url = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(PAGE_URL)}&media=${encodeURIComponent(PINTEREST_IMAGE)}&description=${encodeURIComponent("Juhi (Explorance) Fiverr Review — 9,319 reviews, Fiverr Pro, minimalist logo specialist from $41")}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#E60023] text-white text-sm font-semibold hover:opacity-90 transition-opacity" data-testid="pinterest-share-juhi">
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
      Save to Pinterest
    </a>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function CtaBox({ label = "View Juhi on Fiverr" }: { label?: string }) {
  return (
    <a href={FIVERR_HREF} target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity shadow-md"
      data-testid="juhi-cta">
      {label} <ChevronRight className="w-4 h-4" />
    </a>
  );
}

export default function JuhiReview() {
  return (
    <Layout>
      <Helmet>
        <title>Juhi (Explorance) Fiverr Review — 9,319 Reviews, From $41 | LogoVerdicts</title>
        <meta name="description" content="Juhi (Explorance) Fiverr review: 9,319 verified reviews, 4.8★, Fiverr Pro vetted. Minimalist logo specialist with same-day delivery. Full pricing, portfolio analysis, and verdict." />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Juhi (Explorance) Fiverr Review | LogoVerdicts" />
        <meta property="og:description" content="9,319 reviews, 4.8★, Fiverr Pro. Minimalist logo specialist from $41, 1-day delivery option." />
        <meta property="og:image" content={PINTEREST_IMAGE} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Juhi (Explorance) Fiverr Review | LogoVerdicts" />
        <meta name="twitter:description" content="9,319 reviews, 4.8★. Best value Fiverr Pro logo designer from $41." />
        <meta name="twitter:image" content={PINTEREST_IMAGE} />
        <meta name="pinterest-rich-pin" content="true" />
      </Helmet>

      <section className="bg-primary text-primary-foreground py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <li><a href="/" className="hover:text-primary-foreground/90">Home</a></li>
              <li aria-hidden="true">/</li>
              <li><span className="text-primary-foreground/80">Reviews</span></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary-foreground">Juhi (Explorance)</li>
            </ol>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-foreground/20 text-primary-foreground">Fiverr Pro</span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-chart-3 text-white">Best Value</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-foreground/10 text-primary-foreground/80"><Zap className="w-3 h-3" /> 1-day delivery available</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Juhi (Explorance) Fiverr Review
          </h1>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 ${i < 4 ? "fill-chart-4 text-chart-4" : "fill-muted text-muted"}`} />)}
            </div>
            <span className="text-primary-foreground font-semibold text-lg">4.8 / 5.0</span>
            <span className="text-primary-foreground/70 text-sm">9,319 verified reviews</span>
          </div>
          <p className="text-lg text-primary-foreground/85 max-w-2xl leading-relaxed">
            Fiverr Pro-vetted minimalist specialist with the strongest quality-to-price ratio on the platform. Packages start at $41 with same-day delivery options.
          </p>
        </div>
      </section>

      <div className="bg-accent/10 border-b border-accent/20 py-3 px-4 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-sm font-medium text-accent">Starts at $41 · 1-day delivery option · 9,319 verified reviews</p>
        <CtaBox label="Check Juhi's Packages" />
      </div>

      <article className="max-w-3xl mx-auto px-4 py-14">
        <div className="flex flex-wrap gap-3 mb-10">
          <PinterestButton />
          <CtaBox />
        </div>

        <div className="bg-card border border-border rounded-xl p-6 mb-10" data-testid="juhi-quick-stats">
          <h2 className="font-display font-bold text-lg text-foreground mb-4">At a Glance</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: "Platform Status", value: "Fiverr Pro" },
              { label: "Verified Reviews", value: "9,319" },
              { label: "Overall Rating", value: "4.8 / 5.0" },
              { label: "Entry Price", value: "$41" },
              { label: "Price Range", value: "$41 – $350" },
              { label: "Fastest Delivery", value: "1 day" },
              { label: "Location", value: "India" },
              { label: "Vetted For", value: "Logo Design, Branding" },
              { label: "5-Star Reviews", value: "8,245" },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-primary pl-3">
                <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                <p className="font-semibold text-foreground text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Who Is Juhi?</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Juhi operates under the profile name "Explorance" — a nod to her philosophy of exploring new things in design, nature, and work. She's a Fiverr Pro-vetted solo designer based in India, specializing in minimalist logo design and brand identity with 9,319 verified reviews.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Her entry package at $41 — including vectorized AI logo delivery — is the most accessible high-credentialed option we reviewed. For bootstrapped founders, early-stage startups, and DTC brands watching their budget, that price-to-quality ratio is hard to match anywhere on the platform.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Fiverr Pro vetted Juhi specifically for Logo Design, Brand Style Guides, Business Cards & Stationery, and Logo Animation. Her portfolio is built around geometric precision: clean negative-space marks, refined sans-serif wordmarks, and tech-legible color palettes.
          </p>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Pricing Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" data-testid="juhi-pricing-table">
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
                  <td className="py-3 px-4 font-medium">Vectorize / Quick Logo</td>
                  <td className="py-3 px-4 text-accent font-bold">$41</td>
                  <td className="py-3 px-4 text-muted-foreground">Vectorized professional logo, AI/SVG files</td>
                  <td className="py-3 px-4">1 day</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Business Logo in 24 hrs</td>
                  <td className="py-3 px-4 text-accent font-bold">$23</td>
                  <td className="py-3 px-4 text-muted-foreground">Business logo design, fast turnaround</td>
                  <td className="py-3 px-4">1 day</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Logo Design Creation</td>
                  <td className="py-3 px-4">$112</td>
                  <td className="py-3 px-4 text-muted-foreground">Full logo creation, multiple concepts, full file package</td>
                  <td className="py-3 px-4">2–3 days</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Brand Style Guide</td>
                  <td className="py-3 px-4">$99</td>
                  <td className="py-3 px-4 text-muted-foreground">Brand book, color, typography, logo usage rules</td>
                  <td className="py-3 px-4">3–5 days</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Business Card + Stationery</td>
                  <td className="py-3 px-4">$135</td>
                  <td className="py-3 px-4 text-muted-foreground">Professional card + letterhead + stationery set</td>
                  <td className="py-3 px-4">2–4 days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-3">Prices approximate. Check Juhi's Fiverr profile for current rates.</p>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Real Client Reviews</h2>
          <div className="space-y-5">
            {[
              { name: "editant", country: "DE", price: "Up to €50", duration: "1 day", note: "Repeat Client", quote: "Project actually took less than 1 day and was excellent. First time using Fiverr, first time using Juhi — will be back if I have any more requirements like this." },
              { name: "strongkate", country: "UK", price: "Up to €50", duration: "3 days", note: "Pro Client", quote: "I had a certain logo in mind and requested a specific design. Juhi designed exactly to my brief but also produced a second logo demonstrating a more refined version that exceeded my expectations." },
              { name: "kemeredith", country: "US", price: "Up to €50", duration: "1 day", note: "Verified", quote: "AI made a logo concept for me that I liked, but it was poor quality and I couldn't edit colors. I submitted my special order, received the quote, and in less than 1 day had a perfect professional logo." },
              { name: "hj_wolfe", country: "US", price: "€200–€400", duration: "9 weeks", note: "Repeat Client", quote: "The Explorance team exceeded my expectations in their level of both strategic thinking and execution. Their responsiveness was superb throughout a complex multi-deliverable project." },
            ].map((t, i) => (
              <blockquote key={i} className="bg-muted/40 border-l-4 border-primary rounded-r-lg p-5" data-testid={`juhi-testimonial-${i}`}>
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
            <p className="text-sm text-muted-foreground">8,245 five-star reviews · 4.8 communication · 4.8 quality · 4.7 value</p>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Who Should Hire Juhi?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Strong Fit If...</h3>
              <ul className="space-y-2 text-sm text-green-800">
                {["Budget is $41–$300", "You need a logo fast (1-day option available)", "Tech startup, SaaS, or DTC brand", "Minimalist, geometric, or clean wordmark style", "You want Fiverr Pro quality at accessible pricing"].map((item, i) => <li key={i} className="flex gap-2"><span>•</span>{item}</li>)}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-semibold text-red-900 mb-3">Consider Others If...</h3>
              <ul className="space-y-2 text-sm text-red-800">
                {["You need ornate, vintage, or illustrative styles", "You need a full agency team (use Alestra)", "Budget exceeds $500 and you want maximum range (use Valeriia)"].map((item, i) => <li key={i} className="flex gap-2"><span>•</span>{item}</li>)}
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
          <div className="bg-primary text-primary-foreground rounded-xl p-7" data-testid="juhi-verdict">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-6 h-6 text-chart-4" />
              <h2 className="font-display text-2xl font-bold">Our Verdict</h2>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 ${i < 4 ? "fill-chart-4 text-chart-4" : "fill-primary-foreground/30 text-primary-foreground/30"}`} />)}
              </div>
              <span className="font-bold text-lg">4.8 / 5.0 — Best Value in Her Tier</span>
            </div>
            <p className="text-primary-foreground/85 leading-relaxed mb-5">
              Juhi offers the strongest quality-to-price ratio of any Fiverr Pro designer we reviewed. At $41 for a vectorized logo with 1-day delivery, the entry point is unmatched. Her 9,319-review track record at 4.8 stars makes her the lowest-risk choice for tech-forward, minimalist brands that want professional results without enterprise-level pricing.
            </p>
            <CtaBox label="Hire Juhi on Fiverr" />
          </div>
        </motion.section>

        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground mb-4">Compare all three or read the next review:</p>
          <div className="flex flex-wrap gap-3">
            <a href="/compare" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-border text-sm font-medium hover:bg-muted transition-colors">Compare All Three</a>
            <a href="/reviews/alestra" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-border text-sm font-medium hover:bg-muted transition-colors">Alestra Review</a>
            <a href="/reviews/valeriia" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-border text-sm font-medium hover:bg-muted transition-colors">Valeriia Review</a>
          </div>
        </div>
      </article>
    </Layout>
  );
}
