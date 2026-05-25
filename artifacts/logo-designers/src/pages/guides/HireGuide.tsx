import { Helmet } from "react-helmet-async";
import { CheckCircle, AlertTriangle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const DOMAIN = "https://logoverdicts.replit.app";
const PAGE_URL = `${DOMAIN}/guide/how-to-hire-a-logo-designer`;
const OG_IMAGE = `${DOMAIN}/opengraph.jpg`;

function PinterestButton() {
  const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(PAGE_URL)}&media=${encodeURIComponent(OG_IMAGE)}&description=${encodeURIComponent("How to Hire a Freelance Logo Designer — The Complete 2025 Guide. What to look for, red flags, file formats, and pricing.")}`;
  return (
    <a
      href={pinterestUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#E60023] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
      data-testid="pinterest-share-guide"
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
      Save to Pinterest
    </a>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HireGuide() {
  return (
    <Layout>
      <Helmet>
        <title>How to Hire a Freelance Logo Designer in 2025 — The Complete Guide | LogoVerdicts</title>
        <meta name="description" content="Everything you need to know before hiring a freelance logo designer: what to look for, red flags to avoid, how to write a brief, file formats, revision policy, and realistic pricing expectations." />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="How to Hire a Freelance Logo Designer in 2025 | LogoVerdicts" />
        <meta property="og:description" content="The complete guide to hiring a freelance logo designer. Red flags, brief writing, file formats, pricing, and revision best practices." />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Hire a Freelance Logo Designer in 2025 | LogoVerdicts" />
        <meta name="twitter:description" content="The complete hiring guide — brief writing, red flags, file formats, pricing." />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="pinterest-rich-pin" content="true" />
      </Helmet>

      <section className="bg-primary text-primary-foreground py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <li><a href="/" className="hover:text-primary-foreground/90 transition-colors">Home</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary-foreground">Hiring Guide</li>
            </ol>
          </nav>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-foreground/20 text-primary-foreground mb-4">Complete Guide &middot; 2025</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-5 leading-tight">
            How to Hire a Freelance Logo Designer: The Complete 2025 Guide
          </h1>
          <p className="text-lg text-primary-foreground/85 max-w-2xl leading-relaxed">
            Everything you need to know before spending a dollar — from writing a brief that actually works to knowing exactly which files to demand on delivery.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-14">
        <div className="flex flex-wrap gap-3 mb-10">
          <PinterestButton />
          <a href="/compare" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
            See Our Top Designer Picks <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="bg-muted/50 border border-border rounded-xl p-6 mb-10 text-sm">
          <h2 className="font-display font-bold text-foreground mb-3">In This Guide</h2>
          <ol className="space-y-1 text-muted-foreground list-decimal list-inside">
            <li><a href="#what-to-look-for" className="hover:text-primary transition-colors">What to look for in a logo designer</a></li>
            <li><a href="#red-flags" className="hover:text-primary transition-colors">Red flags to avoid</a></li>
            <li><a href="#write-a-brief" className="hover:text-primary transition-colors">How to write a logo design brief</a></li>
            <li><a href="#file-formats" className="hover:text-primary transition-colors">File format checklist</a></li>
            <li><a href="#revisions" className="hover:text-primary transition-colors">Revision best practices</a></li>
            <li><a href="#pricing" className="hover:text-primary transition-colors">Realistic pricing expectations</a></li>
            <li><a href="#next-steps" className="hover:text-primary transition-colors">Next steps: who to hire</a></li>
          </ol>
        </div>

        <motion.section id="what-to-look-for" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. What to Look For in a Logo Designer</h2>
          <p className="text-foreground/80 leading-relaxed mb-5">
            The freelance logo design market is enormous. Thousands of sellers are available at every price point, which means the filtering work falls entirely on you. Here's the signal checklist that separates professional designers from amateurs who learned software last week.
          </p>
          {[
            {
              label: "A focused portfolio, not an everything portfolio",
              detail: "Designers who claim mastery of every style — minimalist, vintage, illustrative, geometric, typographic — typically excel at none. A focused portfolio signals craft over volume. Look for 15–30 high-quality examples rather than 100 mediocre ones.",
            },
            {
              label: "Industry-appropriate reference points",
              detail: "If you're launching a law firm, look for designers whose portfolios include other professional services work. If you're in tech, look for clean modern marks. Style familiarity is a real advantage — designers who know your category's conventions can deliberately play with or break them.",
            },
            {
              label: "Verified review consistency",
              detail: "Volume matters, but so does recency. 10,000 reviews from 3 years ago is less reliable than 3,000 recent reviews. Check the review date distribution. A designer who stopped delivering at their previous quality level is now a different risk profile than their overall rating suggests.",
            },
            {
              label: "On-time delivery rate",
              detail: "Fiverr shows completion and on-time rates for each seller. Treat anything below 95% on-time delivery as a yellow flag. Creative work is deadline-sensitive — a delayed logo can hold up an entire launch.",
            },
            {
              label: "Communication quality in responses",
              detail: "Send a detailed brief before ordering and evaluate the response. Does the designer ask clarifying questions? Do they push back on anything they think is wrong? A designer who immediately agrees to everything without questions is not engaged in your project.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 mb-4">
              <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground mb-1">{item.label}</p>
                <p className="text-sm text-foreground/75 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </motion.section>

        <motion.section id="red-flags" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Red Flags to Avoid</h2>
          <p className="text-foreground/80 leading-relaxed mb-5">
            The logo design market has specific failure modes that are predictable if you know what to look for. These are the most common patterns that lead to wasted money.
          </p>
          {[
            {
              label: "Stock logo templates presented as original work",
              detail: "Some sellers purchase logo template packs and deliver slightly modified versions as original designs. The tells: logos that look almost identical across different portfolio entries, or marks you can find with a reverse image search on stock sites like Creative Market or GraphicRiver.",
            },
            {
              label: "Portfolios mismatched to your industry",
              detail: "A designer whose entire portfolio is playful children's brand logos charging premium prices for a fintech rebrand is a risk. Strong aesthetic range is rare — verify it before assuming it.",
            },
            {
              label: "No delivery of vector source files",
              detail: "PNG and JPG are raster formats. They degrade when scaled. A professional logo deliverable must include vector source files (AI or EPS) that can be scaled to any size without quality loss. Any designer who refuses to provide source files is delivering an incomplete product.",
            },
            {
              label: "Reviews with suspicious clustering patterns",
              detail: "Look at the review date distribution. A sudden cluster of 200 five-star reviews in a single week, followed by silence, is a purchased-review pattern. Authentic review histories are distributed more gradually.",
            },
            {
              label: "Zero pushback on a vague brief",
              detail: "If you send a brief that says 'make me a modern logo for my company' and the designer immediately accepts without any questions, they're not engaged. Good designers ask: What does your company do? Who are your competitors? What feeling do you want the logo to create? What are you explicitly trying to avoid?",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 mb-4">
              <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground mb-1">{item.label}</p>
                <p className="text-sm text-foreground/75 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </motion.section>

        <motion.section id="write-a-brief" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. How to Write a Logo Design Brief That Works</h2>
          <p className="text-foreground/80 leading-relaxed mb-5">
            The quality of your brief is the single largest variable under your control in the outcome of your logo project. A strong brief doesn't constrain creative output — it focuses it. Here's what to include:
          </p>
          <div className="space-y-5">
            {[
              {
                label: "Company description (3–5 sentences)",
                detail: "What does your company do? Who are your customers? What problem do you solve? How long have you been operating? This context shapes every design decision the designer will make.",
                example: "Example: 'We run a subscription wine education platform for adults aged 30–50 who want to develop their palate without attending formal classes. We're three years old, have 8,000 subscribers, and compete with wine apps and local wine schools.'",
              },
              {
                label: "Target audience and tone",
                detail: "Who sees this logo, and what do you need them to feel? 'Professional but approachable' is more useful than 'clean and modern.' Be specific about the emotional register: confident, playful, authoritative, warm, disruptive, etc.",
                example: null,
              },
              {
                label: "3–5 competitor or reference logos",
                detail: "Show the designer where you sit in the market and what conventions you're working within (or against). Reference logos are not templates — they're calibration points.",
                example: null,
              },
              {
                label: "3–5 logos you admire (not competitors)",
                detail: "These tell the designer about your aesthetic preferences independent of your category. They help surface whether you prefer serif or sans, abstract marks or wordmarks, simple or complex.",
                example: null,
              },
              {
                label: "Hard constraints",
                detail: "Colors you must use or avoid. Symbols with negative associations in your market. Regulatory requirements (some industries have restrictions on logo elements). Technical constraints like embroidery or one-color printing requirements.",
                example: null,
              },
              {
                label: "What success looks like",
                detail: "If the logo works perfectly, what does it make your customer think or feel when they see it? One specific sentence is better than a paragraph of adjectives.",
                example: "Example: 'When a 45-year-old professional sees our logo, I want them to feel like this is the service that respects their intelligence.'",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-5">
                <p className="font-semibold text-foreground mb-2">{i + 1}. {item.label}</p>
                <p className="text-sm text-foreground/75 leading-relaxed mb-2">{item.detail}</p>
                {item.example && <p className="text-sm text-muted-foreground italic bg-muted/50 rounded p-2">{item.example}</p>}
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="file-formats" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. The File Format Checklist</h2>
          <p className="text-foreground/80 leading-relaxed mb-5">
            This is the most common area where clients are under-delivered and don't realize it until months later. Confirm that the following files are included before closing the order.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" data-testid="file-formats-table">
              <thead>
                <tr className="bg-muted/60">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">File Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Use Case</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Required?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { type: "AI (Adobe Illustrator)", use: "Master vector source file. Required for all future modifications.", req: "Essential" },
                  { type: "EPS", use: "Universal vector format. Printers and sign shops require this.", req: "Essential" },
                  { type: "SVG", use: "Web vector format. Required for web/app use without quality loss.", req: "Essential" },
                  { type: "PDF (vector)", use: "Print-ready format. Required for professional printing.", req: "Essential" },
                  { type: "PNG (transparent background)", use: "Digital use on colored backgrounds. Multiple sizes needed.", req: "Essential" },
                  { type: "JPG", use: "Digital use on white backgrounds.", req: "Useful" },
                  { type: "Color variations", use: "Full color, reversed (white), and one-color (black) versions.", req: "Recommended" },
                  { type: "Brand guidelines doc", use: "Color codes (HEX, RGB, CMYK, Pantone), typography, usage rules.", req: "Recommended for full packages" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-muted/20 transition-colors">
                    <td className="py-3 px-4 font-medium text-foreground">{row.type}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.use}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${row.req === "Essential" ? "bg-green-100 text-green-800" : "bg-muted text-muted-foreground"}`}>
                        {row.req}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section id="revisions" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Revision Best Practices</h2>
          <p className="text-foreground/80 leading-relaxed mb-5">
            Revisions are where most client-designer relationships go wrong. Follow these principles to keep the process productive.
          </p>
          {[
            {
              label: "Wait 24 hours before giving feedback",
              detail: "First reactions to logo concepts are almost always wrong. The mark you instinctively dislike at first glance is often the one that grows on everyone after a week. Give yourself time to live with the concepts before responding.",
            },
            {
              label: "Give direction, not solutions",
              detail: "'Make the icon bigger' is a solution. 'The icon feels secondary to the wordmark and I need them to feel more balanced' is direction. Designers respond better to direction — they know how to solve the technical problem better than you do.",
            },
            {
              label: "Be specific about what isn't working",
              detail: "'I don't like it' tells a designer nothing. 'The typeface feels dated — it reminds me of 1990s corporate logos, and we need something that reads as contemporary' gives them something to work with.",
            },
            {
              label: "Batch your feedback",
              detail: "Send all your revision notes in one message, not a drip of comments over several days. Batched feedback is more efficient and prevents confusion about what's been addressed.",
            },
            {
              label: "Understand what unlimited revisions actually means",
              detail: "'Unlimited revisions' typically means revisions within the original scope — modifications to the presented concept. Starting over from scratch, switching to a fundamentally different style, or requesting an entirely new concept usually constitutes a scope change, even with unlimited revision policies.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 mb-4">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground mb-1">{item.label}</p>
                <p className="text-sm text-foreground/75 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </motion.section>

        <motion.section id="pricing" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Realistic Pricing Expectations</h2>
          <p className="text-foreground/80 leading-relaxed mb-5">
            Logo design pricing on Fiverr ranges from $5 to $1,000+. Here's how to calibrate your expectations at each tier.
          </p>
          <div className="space-y-4">
            {[
              { range: "Under $50", what: "Template modifications, clip art combinations, or heavily automated logo generators presented as custom work. Not suitable for any brand that will be publicly used.", suitable: false },
              { range: "$50–$100", what: "Entry-level professional work from newer designers building their portfolio, or base packages from more established designers. Suitable for very early-stage projects or internal tools.", suitable: true },
              { range: "$100–$300", what: "The sweet spot for most small and medium businesses. This range, from a credentialed designer with strong reviews, reliably produces professional, original work with full file delivery.", suitable: true },
              { range: "$300–$500", what: "Full identity systems — logo plus brand guidelines, color system, typography, and usage documentation. Appropriate for funded startups or established businesses doing serious rebrands.", suitable: true },
              { range: "Over $500", what: "Premium packages that compete with agency pricing. Justified for complex identity systems, highly regulated industries, or businesses where brand equity represents real capital value.", suitable: true },
            ].map((tier, i) => (
              <div key={i} className={`border rounded-lg p-5 ${tier.suitable ? "border-border" : "border-muted bg-muted/30"}`}>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-foreground">{tier.range}</p>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${tier.suitable ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {tier.suitable ? "Viable" : "Avoid"}
                  </span>
                </div>
                <p className="text-sm text-foreground/75 leading-relaxed">{tier.what}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="next-steps" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
          <div className="bg-primary text-primary-foreground rounded-xl p-7">
            <h2 className="font-display text-2xl font-bold mb-4">7. Ready to Hire? Start Here</h2>
            <p className="text-primary-foreground/85 leading-relaxed mb-5">
              We've spent 40+ hours reviewing the top Fiverr logo designers so you have a verified starting point. All three designers we recommend have 10,000+ reviews, Pro or Top Rated Seller status, and consistent delivery track records.
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              <a href="https://www.fiverr.com/search/gigs?query=alestra+logo+designer" target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center gap-1 px-4 py-3 rounded-md bg-primary-foreground/15 hover:bg-primary-foreground/25 transition-colors text-center" data-testid="guide-cta-alestra">
                <span className="font-semibold text-sm">Alestra</span>
                <span className="text-xs text-primary-foreground/70">Luxury & Corporate</span>
              </a>
              <a href="https://www.fiverr.com/search/gigs?query=juhi+logo+designer" target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center gap-1 px-4 py-3 rounded-md bg-primary-foreground/15 hover:bg-primary-foreground/25 transition-colors text-center" data-testid="guide-cta-juhi">
                <span className="font-semibold text-sm">Juhi</span>
                <span className="text-xs text-primary-foreground/70">Minimalist & Tech</span>
              </a>
              <a href="https://www.fiverr.com/search/gigs?query=valeriia+logo+designer" target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center gap-1 px-4 py-3 rounded-md bg-primary-foreground/15 hover:bg-primary-foreground/25 transition-colors text-center" data-testid="guide-cta-valeriia">
                <span className="font-semibold text-sm">Valeriia</span>
                <span className="text-xs text-primary-foreground/70">Versatile Premium</span>
              </a>
            </div>
            <div className="mt-4">
              <a href="/compare" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                Compare all three side by side <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.section>
      </article>
    </Layout>
  );
}
