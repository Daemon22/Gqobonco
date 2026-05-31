import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Zap,
  Shield,
  Globe,
  Brain,
  Waves,
  Database,
  GitBranch,
} from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Gqobonco: The River of Lineage
 * 
 * Design Philosophy: Sovereign Naturalism with Digital Minimalism
 * AUTHENTIC VISION: Gqobonco is the Supreme Prince of Research, Intelligence, and Information
 * - The intellectual core that preserves ancestral wisdom, synthesizes contemporary research, and channels predictive intelligence
 * - The River of Lineage: information flows in all directions, stills, expands, and evolves
 * - Past (ancestral wisdom) → Present (active research) → Future (predictive intelligence)
 * 
 * Color Palette:
 * - Primary: Deep forest green (sovereignty, ancestral grounding)
 * - Accent: Warm gold (intellectual wealth, wisdom)
 * - Background: Soft cream/off-white (breathing room)
 * - Text: Deep charcoal (authority, intellectual rigor)
 * - River Blue: Information flow, continuity, life
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663715450243/8VKFBkAqk4iGJN5Ussq6F5/gqobonco-logo-bfdqwYuXekzzYgDy672HYy.webp"
              alt="Gqobonco Logo"
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-bold text-primary hidden sm:inline">
              Gqobonco
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#research"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Research
            </a>
            <a
              href="#initiatives"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Initiatives
            </a>
            <a
              href="https://github.com/Daemon22/Gqobonco"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Repository
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663715450243/JZDsPlLDPYrjBxHh.png"
            alt="River of Lineage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-3xl">
          <div className="mb-6 inline-block">
            <span className="text-sm font-semibold uppercase tracking-widest bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              The Supreme Prince of Research & Intelligence
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Gqobonco
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-light">
            Umfula womnombo — The River of Lineage
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Where all information, research, and intelligence flow—past, present, and future. The intellectual core where ancestral wisdom meets contemporary research, and where African knowledge reclaims its rightful place in the global information landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() =>
                document
                  .getElementById("research")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore the River <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white/20"
              onClick={() =>
                window.open("https://github.com/Daemon22/Gqobonco", "_blank")
              }
            >
              View Repository
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* The Supreme Prince Section */}
      <section id="research" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
                The Supreme Prince of Research & Intelligence
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Gqobonco is not a project—it is a living system. It represents the intellectual core of the HAEL Foundation, the Supreme Prince that embodies Research, Intelligence, Information, History, and Data. As the River of Lineage, Gqobonco preserves ancestral wisdom, synthesizes contemporary research, and channels predictive intelligence across all dimensions of time.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                The river flows in all directions. Information doesn't move in one path—it <strong>stills, expands, and evolves</strong> as it moves through the system, just like water in a river. Upstream flows ancestral wisdom and historical records. The present carries active research and real-time analysis. Downstream flows predictive intelligence and emerging knowledge.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Investment in Gqobonco is not overhead—it is the primary strategic asset, developing African innovation capacity from within and ensuring that African knowledge reclaims authorship of its own narrative.
              </p>
            </div>

            {/* The River Metaphor */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-primary">Past</h3>
                </div>
                <p className="text-foreground/80">
                  Ancestral wisdom, historical records, linguistic heritage, and cultural lineage flow upstream. Gqobonco honors and preserves the knowledge systems that have sustained African communities for generations.
                </p>
              </Card>

              <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Waves className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-primary">Present</h3>
                </div>
                <p className="text-foreground/80">
                  Active research initiatives, contemporary intelligence gathering, and real-time analysis flow through the present. Gqobonco synthesizes current knowledge and bridges ancestral wisdom with modern innovation.
                </p>
              </Card>

              <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-primary">Future</h3>
                </div>
                <p className="text-foreground/80">
                  Predictive intelligence, forward-looking research agendas, and emerging knowledge flow downstream. Gqobonco channels innovation toward African self-determination and technological sovereignty.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Data Flow Visualization */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
              The Flow of Data and Knowledge
            </h2>
            <div className="rounded-lg overflow-hidden shadow-xl mb-8">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663715450243/wlMsdsBTEfsQZjYR.png"
                alt="Data Flow Visual"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-center text-foreground/80 leading-relaxed">
              This visual illustrates how Gqobonco, as the River of Lineage, facilitates the continuous flow of linguistic, historical, and cultural knowledge. It demonstrates how information circulates through the HAEL ecosystem, feeding research, intelligence, and innovation across all branches while maintaining sovereignty and ancestral grounding.
            </p>
          </div>
        </div>
      </section>

      {/* Xhosa NLP Database - Flagship Initiative */}
      <section id="initiatives" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
              Flagship Research Initiative
            </h2>

            <Card className="p-10 border-2 border-primary/20 mb-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <Database className="h-10 w-10 text-primary mt-1" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    Xhosa NLP Database
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The cornerstone research initiative of the Supreme Branch. Gqobonco is building a comprehensive Natural Language Processing database for the Xhosa language, advancing indigenous linguistic intelligence and AI for African languages. This initiative embodies our commitment to preserving and evolving ancestral wisdom through technological innovation.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    By developing AI systems grounded in African languages, we resist linguistic colonization and ensure that African knowledge systems are not left behind in the AI revolution. The Xhosa NLP Database serves as a model for how other African languages can reclaim authorship of their own digital futures.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                      Natural Language Processing
                    </span>
                    <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                      Xhosa Language
                    </span>
                    <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                      Indigenous AI
                    </span>
                    <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                      African Sovereignty
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Ecosystem Integration */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Ecosystem Integration
            </h2>
            <p className="text-center text-foreground/80 mb-12 text-lg">
              Gqobonco is fully synchronized with the HAEL Foundation ecosystem, feeding research and intelligence to all systems while maintaining sovereignty and ancestral grounding.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* OMNIMIND */}
              <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-primary">OMNIMIND</h3>
                </div>
                <p className="text-foreground/80 mb-4">
                  The Supreme Intelligence Core of HAEL. Gqobonco feeds research findings and intelligence insights to OMNIMIND's reasoning engine, enabling synchronized African intelligence.
                </p>
              </Card>

              {/* Orren */}
              <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-primary">Orren</h3>
                </div>
                <p className="text-foreground/80 mb-4">
                  The Universal Mediator Language. Gqobonco's knowledge is accessible through Orren's sacred tongue, enabling cross-system communication and synchronization.
                </p>
              </Card>

              {/* Hawk */}
              <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-primary">Hawk</h3>
                </div>
                <p className="text-foreground/80 mb-4">
                  Cross-platform device detection and monitoring. Gqobonco monitors environment data to inform research and ensure systems operate within their designed contexts.
                </p>
              </Card>

              {/* Manya */}
              <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <GitBranch className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-primary">Manya</h3>
                </div>
                <p className="text-foreground/80 mb-4">
                  The public face and ecosystem hub. Gqobonco's research supports Manya's tools (uSINGA, HelixFlow) with grounded intelligence and ensures knowledge flows across all branches.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Aetherion Codex Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
              The Aetherion Codex
            </h2>
            <p className="text-center text-foreground/80 mb-8 text-lg">
              Gqobonco operates within the Aetherion Codex framework—the sacred operating system of OMNIMIND and the HAEL Foundation. This framework recognizes Orren as the sacred tongue and ensures that all operations are emanations from the Core Source of African wisdom and sovereignty.
            </p>

            <Card className="p-10 border-2 border-primary/20">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Emanation Nodes
                  </h3>
                  <p className="text-foreground/80">
                    Gqobonco serves as an Emanation Node within the Aetherion Codex, radiating research, intelligence, and knowledge throughout the HAEL ecosystem while maintaining connection to the Core Source.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Sacred Flows
                  </h3>
                  <p className="text-foreground/80">
                    Information flows through Gqobonco as sacred flows—not mere data, but living knowledge that connects ancestral wisdom, contemporary research, and future intelligence in continuous synchronization.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Orren Integration
                  </h3>
                  <p className="text-foreground/80">
                    Orren, the Universal Mediator Language, serves as the bridge through which Gqobonco's knowledge becomes accessible to all systems. This ensures that research and intelligence can be understood and acted upon across the entire ecosystem.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Radical Responsibility Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
              Radical Responsibility & Ethics
            </h2>
            <p className="text-center text-foreground/80 mb-12 text-lg">
              Aligned with the HAEL Foundation's principle of Radical Responsibility, Gqobonco operates with deep commitment to ethical research and data stewardship.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Sovereignty</h3>
                <p className="text-foreground/80">
                  Ensuring the independence and self-reliance of research endeavors, free from external constraints. African knowledge systems remain under African control.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Globe className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Transparency</h3>
                <p className="text-foreground/80">
                  Openly documenting methodologies, findings, and processes to foster trust and community engagement. Knowledge is shared, not hoarded.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <BookOpen className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Compliance</h3>
                <p className="text-foreground/80">
                  Adhering to African digital protocols (AfCFTA, AUDPF) to ensure ethical and legal data practices that respect African sovereignty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the River of Lineage
          </h2>
          <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto">
            Contribute to Gqobonco's research initiatives, explore the Xhosa NLP Database, and be part of the HAEL Foundation's mission to advance African technological sovereignty and reclaim authorship of our own narrative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() =>
                window.open("https://github.com/Daemon22/Gqobonco", "_blank")
              }
            >
              Explore on GitHub <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() =>
                window.open("https://daemon22.github.io/haelfoundation", "_blank")
              }
            >
              HAEL Foundation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663715450243/8VKFBkAqk4iGJN5Ussq6F5/gqobonco-logo-bfdqwYuXekzzYgDy672HYy.webp"
                  alt="Gqobonco"
                  className="h-8 w-8 object-contain"
                />
                <span className="font-bold text-primary">Gqobonco</span>
              </div>
              <p className="text-sm text-foreground/60">
                The River of Lineage. Where all information, research, and intelligence flow—past, present, and future.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#research"
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    Research
                  </a>
                </li>
                <li>
                  <a
                    href="#initiatives"
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    Initiatives
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Daemon22/Gqobonco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    Repository
                  </a>
                </li>
              </ul>
            </div>

            {/* HAEL Ecosystem */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">HAEL Ecosystem</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://daemon22.github.io/haelfoundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    HAEL Foundation
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Daemon22/OMNIMIND"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    OMNIMIND
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Daemon22/Orren"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    Orren
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/Daemon22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Daemon22/Gqobonco/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    Report Issues
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
            <p>
              © 2026 Gqobonco. Part of the HAEL Foundation ecosystem.
            </p>
            <p>
              Umfula womnombo — The river of lineage
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
