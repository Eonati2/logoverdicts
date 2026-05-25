import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { AFFILIATE } from "@/lib/affiliates";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [reviewsOpen, setReviewsOpen] = useState(false);
  const [location] = useLocation();

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors hover:text-primary ${
        location === href ? "text-primary" : "text-foreground/70"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm" data-testid="site-header">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2" data-testid="nav-logo">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">LV</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-foreground leading-none block">LogoVerdicts</span>
                <span className="text-[10px] text-muted-foreground leading-none">by Eonati</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              <div
                className="relative"
                onMouseEnter={() => setReviewsOpen(true)}
                onMouseLeave={() => setReviewsOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
                  Reviews <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {reviewsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-card border border-border rounded-lg shadow-md py-1 z-50">
                    <Link href="/reviews/alestra" className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors" onClick={() => setReviewsOpen(false)}>
                      <span className="font-medium">Alestra Agency</span>
                      <span className="block text-xs text-muted-foreground">31,034 reviews · Enterprise</span>
                    </Link>
                    <Link href="/reviews/juhi" className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors" onClick={() => setReviewsOpen(false)}>
                      <span className="font-medium">Juhi (Explorance)</span>
                      <span className="block text-xs text-muted-foreground">9,319 reviews · From $41</span>
                    </Link>
                    <Link href="/reviews/valeriia" className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors" onClick={() => setReviewsOpen(false)}>
                      <span className="font-medium">Valeriia T</span>
                      <span className="block text-xs text-muted-foreground">8,045 reviews · Versatile</span>
                    </Link>
                  </div>
                )}
              </div>
              {navLink("/compare", "Compare")}
              {navLink("/guide/how-to-hire-a-logo-designer", "Hiring Guide")}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href={AFFILIATE.alestra}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                data-testid="nav-cta-browse"
              >
                Hire a Designer
              </a>
            </div>

            <button
              className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4" aria-label="Mobile navigation">
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Designer Reviews</p>
                <Link href="/reviews/alestra" className="block py-2.5 border-b border-border/50 text-sm" onClick={() => setMobileOpen(false)}>
                  <span className="font-medium text-foreground">Alestra Agency</span>
                  <span className="text-xs text-muted-foreground ml-2">31,034 reviews</span>
                </Link>
                <Link href="/reviews/juhi" className="block py-2.5 border-b border-border/50 text-sm" onClick={() => setMobileOpen(false)}>
                  <span className="font-medium text-foreground">Juhi (Explorance)</span>
                  <span className="text-xs text-muted-foreground ml-2">From $41</span>
                </Link>
                <Link href="/reviews/valeriia" className="block py-2.5 text-sm" onClick={() => setMobileOpen(false)}>
                  <span className="font-medium text-foreground">Valeriia T</span>
                  <span className="text-xs text-muted-foreground ml-2">8,045 reviews</span>
                </Link>
              </div>
              <Link href="/compare" className="py-2 text-sm font-medium text-foreground/80 hover:text-primary" onClick={() => setMobileOpen(false)}>Compare All Three</Link>
              <Link href="/guide/how-to-hire-a-logo-designer" className="py-2 text-sm font-medium text-foreground/80 hover:text-primary" onClick={() => setMobileOpen(false)}>Free Hiring Guide</Link>
              <a
                href={AFFILIATE.alestra}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center px-4 py-3 rounded-md bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90"
              >
                Hire a Designer on Fiverr
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1" id="main-content">
        {children}
      </main>

      <footer className="border-t border-border bg-card mt-16" data-testid="site-footer">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-xs">LV</span>
                </div>
                <div>
                  <span className="font-display font-bold text-base text-foreground block leading-none">LogoVerdicts</span>
                  <span className="text-[10px] text-muted-foreground">by Eonati</span>
                </div>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                Independent reviews of the best freelance logo designers for hire. We research so you don't have to.
              </p>
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                This site contains affiliate links. Eonati may earn a commission if you purchase through our links, at no extra cost to you. All reviews are independent and unsponsored.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Designer Reviews</h3>
              <ul className="space-y-2">
                <li><Link href="/reviews/alestra" className="text-sm text-muted-foreground hover:text-primary transition-colors">Alestra Agency Review</Link></li>
                <li><Link href="/reviews/juhi" className="text-sm text-muted-foreground hover:text-primary transition-colors">Juhi (Explorance) Review</Link></li>
                <li><Link href="/reviews/valeriia" className="text-sm text-muted-foreground hover:text-primary transition-colors">Valeriia T Review</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/compare" className="text-sm text-muted-foreground hover:text-primary transition-colors">Compare Designers</Link></li>
                <li><Link href="/guide/how-to-hire-a-logo-designer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Free Hiring Guide</Link></li>
              </ul>
              <div className="mt-5">
                <a href={AFFILIATE.alestra} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-accent text-accent-foreground text-xs font-semibold hover:opacity-90 transition-opacity">
                  Hire on Fiverr
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Eonati / LogoVerdicts. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Not affiliated with Fiverr. Independent research and affiliate disclosures apply.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
