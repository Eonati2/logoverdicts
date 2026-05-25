import { Helmet } from "react-helmet-async";
import { Star, CheckCircle, ChevronRight, Award } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { AFFILIATE } from "@/lib/affiliates";

const DOMAIN = "https://logoverdicts.replit.app";
const PINTEREST_IMAGE = `${DOMAIN}/images/valeriia-pin.png`;
const PAGE_URL = `${DOMAIN}/reviews/valeriia`;
const FIVERR_HREF = AFFILIATE.valeriia;

function PinterestButton() {
  const url = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(PAGE_URL)}&media=${encodeURIComponent(PINTEREST_IMAGE)}&description=${encodeURIComponent("Valeriia T Fiverr Review — 8,045 reviews, Fiverr Pro, luxury & feminine logo specialist from Ukraine")}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#E60023] text-white text-sm font-semibold hover:opacity-90 transition-opacity" data-testid="pinterest-share-valeriia">
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
      Save to Pinterest
    </a>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function CtaBox({ label = "View Valeriia T on Fiverr" }: { label?: string }) {
  return (
    <a href={FIVERR_HREF} target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity shadow-md"
      data-testid="valeriia-cta">
      {label} <ChevronRight className="w-4 h-4" />
    </a>
  );
}

export default function ValeriiaReview() {
  return (
    <Layout>
      <Helmet>
        <title>Valeriia T Fiverr Review — 8,045 Reviews, Luxury & Feminine Branding | LogoVerdicts</title>
        <meta name="description" content="Valeriia T Fiverr review: 8,045 verified reviews, 4.8★, Fiverr Pro. Ukrainian designer with 10+ years experience. Specializes in luxury, feminine, and versatile brand identity from $175." />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Valeriia T Fiverr Review | LogoVerdicts" />
        <meta property="og:description" content="8,045 reviews, 4.8★, Fiverr Pro. Luxury and feminine logo specialist with 10+ years experience. Full review and pricing." />
        <meta property="og:image" content={PINTEREST_IMAGE} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Valeriia T Fiverr Review | LogoVerdicts" />
        <meta name="twitter:description" content="8,045 reviews, 4.8★. Luxury and feminine branding specialist from Ukraine." />
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
              <li className="text-primary-foreground">Valeriia T</li>
            </ol>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-foreground/20 text-primary-foreground">Fiverr Pro</span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-chart-5 text-white">Most Versatile</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-foreground/10 text-primary-foreground/80">10+ years experience</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Valeriia T Fiverr Review
          </h1>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 ${i < 4 ? "fill-chart-4 text-chart-4" : "fill-muted text-muted"}`} />)}
            </div>
            <span className="text-primary-foreground font-semibold text-lg">4.8 / 5.0</span>
            <span className="text-primary-foreground/70 text-sm">8,045 verified reviews</span>
          </div>
          <p className="text-lg text-primary-foreground/85 max-w-2xl leading-relaxed">
            Ukrainian designer with a decade of experience, Fiverr Pro-vetted, and trusted by Fiverr itself. Specializes in luxury, feminine, and versatile brand identity across logo, packaging, and website design.
          </p>
        </div>
      </section>

      <div className="bg-accent/10 border-b border-accent/20 py-3 px-4 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-sm font-medium text-accent">From $175 · Vetted for Logo, Packaging & Website Design · Trusted by Fiverr</p>
        <CtaBox label="See Valeriia's Packages" />
      </div>

      <article className="max-w-3xl mx-auto px-4 py-14">
        <div className="flex flex-wrap gap-3 mb-10">
          <PinterestButton />
          <CtaBox />
        </div>

        <div className="bg-card border border-border rounded-xl p-6 mb-10" data-testid="valeriia-quick-stats">
          <h2 className="font-display font-bold text-lg text-foreground mb-4">At a Glance</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: "Platform Status", value: "Fiverr Pro" },
              { label: "Verified Reviews", value: "8,045" },
              { label: "Overall Rating", value: "4.8 / 5.0" },
              { label: "Experience", value: "10+ years" },
              { label: "Entry Price", value: "$175" },
              { label: "Price Range", value: "$175 – $500+" },
              { label: "Delivery", value: "2–6 days" },
              { label: "Location", value: "Ukraine" },
              { label: "Notable Client", value: "Fiverr" },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-primary pl-3">
                <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                <p className="font-semibold text-foreground text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Who Is Valeriia T?</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Valeriia is a full-time freelance graphic and web designer from Kyiv, Ukraine, with over 10 years of professional experience. She operates as a solo Fiverr Pro-vetted designer and has been trusted by Fiverr itself as a notable client — a rare signal.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Fiverr Pro vetted Valeriia across four specializations: Book Design, Logo Design, Packaging & Label Design, and Website Design. That breadth of vetting is unusual — most Pro-vetted designers are approved for one or two categories. It reflects genuine multi-discipline capability rather than focused niche depth.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Her style range — from playful and modern (Bastis food brand) to sophisticated and feminine (Auréan Perfume House) — is real. Her portfolio doesn't look like one hand made every piece. That range is what we recommend her for: clients who haven't fully committed to a visual direction yet.
          </p>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Services Offered</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: "Modern Minimalist Logo", rating: 4.8, reviews: "1k+", price: "From $175" },
              { name: "Elegant Minimalist Feminine Logo", rating: 4.8, reviews: "465", price: "From $175" },
              { name: "Playful & Modern Logo Design", rating: 4.8, reviews: "953", price: "From $175" },
              { name: "Website UI/UX Design (Figma)", rating: 5.0, reviews: "55", price: "From $336" },
              { name: "Product Packaging & Label Design", rating: 4.9, reviews: "1k+", price: "From $175" },
              { name: "Book / Ebook Cover Design", rating: 5.0, reviews: "27", price: "From $246" },
            ].map((s, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4 flex items-center justify-between gap-3">
                <div>
                  <p className="font-medium text-foreground text-sm">{s.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{s.reviews} reviews · {s.rating}★</p>
                </div>
                <span className="text-sm font-semibold text-accent shrink-0">{s.price}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Pricing Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" data-testid="valeriia-pricing-table">
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
                  <td className="py-3 px-4 font-medium">Logo Design (any style)</td>
                  <td className="py-3 px-4 text-accent font-bold">$175</td>
                  <td className="py-3 px-4 text-muted-foreground">Custom logo design, full vector files, revisions</td>
                  <td className="py-3 px-4">3–5 days</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Packaging / Label Design</td>
                  <td className="py-3 px-4">$175</td>
                  <td className="py-3 px-4 text-muted-foreground">Product label, packaging, or box design</td>
                  <td className="py-3 px-4">3–5 days</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Book Cover Design</td>
                  <td className="py-3 px-4">$246</td>
                  <td className="py-3 px-4 text-muted-foreground">Book or ebook cover with print-ready files</td>
                  <td className="py-3 px-4">2–4 days</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Website UI/UX Design</td>
                  <td className="py-3 px-4">$336</td>
                  <td className="py-3 px-4 text-muted-foreground">Unique web / landing page design in Figma</td>
                  <td className="py-3 px-4">4–7 days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-3">Prices approximate. Check Valeriia's Fiverr profile for current rates.</p>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Real Client Reviews</h2>
          <div className="space-y-5">
            {[
              { name: "musematter", country: "US", rating: 5, price: "€100–€200", duration: "2 days", note: "Repeat Client", quote: "Oh my gosh! Where do I even begin! Valeriia went beyond my wildest imagination. Initially I placed my order with a loose idea — what I got back was extraordinary." },
              { name: "heyheyshenay", country: "US", rating: 4.3, price: "Up to €50", duration: "2 days", note: "Repeat Client", quote: "Valeriia is amazing at her craft! She created the original logo for my business a few years ago and I came back for a revision. She was patient with me and delivered beautifully." },
              { name: "allyw14", country: "US", rating: 3, price: "€200–€400", duration: "4 weeks", note: "Verified", quote: "I absolutely love the logo she created — it truly captured my vision. The experience was somewhat mixed on additional items, but the core logo work was genuinely excellent." },
            ].map((t, i) => (
              <blockquote key={i} className="bg-muted/40 border-l-4 border-primary rounded-r-lg p-5" data-testid={`valeriia-testimonial-${i}`}>
                <div className="flex items-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, si) => <Star key={si} className={`w-3.5 h-3.5 ${si < Math.floor(t.rating) ? "fill-chart-4 text-chart-4" : "fill-muted text-muted"}`} />)}
                  <span className="ml-2 text-xs text-muted-foreground">{t.rating}★ · {t.note}</span>
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
            <p className="text-sm text-muted-foreground">7,509 five-star reviews · 4.8 communication · 4.8 quality · 4.8 value</p>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Who Should Hire Valeriia T?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Strong Fit If...</h3>
              <ul className="space-y-2 text-sm text-green-800">
                {["Lifestyle, wellness, beauty, or feminine brands", "You need multi-discipline: logo + packaging + web", "Budget $175–$500", "You want genuine stylistic range in your concepts", "Luxury or high-end consumer positioning"].map((item, i) => <li key={i} className="flex gap-2"><span>•</span>{item}</li>)}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-semibold text-red-900 mb-3">Consider Others If...</h3>
              <ul className="space-y-2 text-sm text-red-800">
                {["Budget is under $175 (use Juhi)", "You need a full agency team (use Alestra)", "Ultra-fast turnaround is the primary priority"].map((item, i) => <li key={i} className="flex gap-2"><span>•</span>{item}</li>)}
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
          <div className="bg-primary text-primary-foreground rounded-xl p-7" data-testid="valeriia-verdict">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-6 h-6 text-chart-4" />
              <h2 className="font-display text-2xl font-bold">Our Verdict</h2>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 ${i < 4 ? "fill-chart-4 text-chart-4" : "fill-primary-foreground/30 text-primary-foreground/30"}`} />)}
              </div>
              <span className="font-bold text-lg">4.8 / 5.0 — Most Versatile Choice</span>
            </div>
            <p className="text-primary-foreground/85 leading-relaxed mb-5">
              Valeriia T's combination of 10+ years of experience, Fiverr Pro vetting across four specializations, and 8,045 verified reviews makes her the safest choice for clients in lifestyle, wellness, beauty, and feminine brand categories. Her real range — from playful food branding to luxury perfume identity — is backed by the portfolio to prove it. If your brand is still defining its visual direction, this is your designer.
            </p>
            <CtaBox label="Hire Valeriia T on Fiverr" />
          </div>
        </motion.section>

        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground mb-4">Compare all three or read the next review:</p>
          <div className="flex flex-wrap gap-3">
            <a href="/compare" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-border text-sm font-medium hover:bg-muted transition-colors">Compare All Three</a>
            <a href="/reviews/alestra" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-border text-sm font-medium hover:bg-muted transition-colors">Alestra Review</a>
            <a href="/reviews/juhi" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-border text-sm font-medium hover:bg-muted transition-colors">Juhi Review</a>
          </div>
        </div>
      </article>
    </Layout>
  );
}
