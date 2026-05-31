import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Zap, Shield, Globe } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Gqobonco: The River of Lineage
 * 
 * Design Philosophy: Sovereign Naturalism with Digital Minimalism
 * - Reverence for Nature: Photorealistic river imagery with minimal digital overlay
 * - Sovereignty & Independence: Bold, autonomous visual choices reflecting HAEL's African tech self-determination
 * - Information Flow: Visual hierarchy guides through "river of lineage" narrative
 * - Restraint & Elegance: Minimalist typography, generous whitespace, selective color use
 * 
 * Color Palette:
 * - Primary: Deep forest green (sovereignty)
 * - Accent: Warm gold (wisdom)
 * - Background: Soft cream/off-white (breathing room)
 * - Text: Deep charcoal (readability)
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663715450243/ScNEGrUSZjjGwCay.png"
              alt="Gqobonco Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold text-primary hidden sm:inline">
              Gqobonco
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#overview"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Overview
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
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-2xl">
          <div className="mb-6 inline-block">
            <span className="text-sm font-semibold uppercase tracking-widest bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              Supreme Intelligence Branch
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Gqobonco
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Umfula womnombo — The river of lineage
          </p>
          <p className="text-lg mb-12 text-gray-100 max-w-xl mx-auto">
            Where information flows back and forth, stills, expands & evolves. The intellectual core where ancestral wisdom meets futuristic synchronization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() =>
                document
                  .getElementById("overview")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                The Supreme Intelligence Branch
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Gqobonco represents the <strong>Supreme Intelligence Branch</strong> of the HAEL Foundation. It is the neural architecture where ancestral wisdom meets futuristic synchronization, creating a continuous flow of information that evolves through the interplay of lineage and technology.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                As the intellectual core, Gqobonco is dedicated to research, refinement, and the preservation of historical and linguistic data, ensuring the continuous growth and evolution of the HAEL ecosystem.
              </p>
            </div>

            {/* Visual Identity */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-primary mb-8">
                Visual Identity: The Sovereign River
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    The visual language of Gqobonco is defined by the <strong>Sovereign River of Lineage</strong>—a majestic, photorealistic waterway that serves as a raw and powerful representation of information flow.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    This design focuses on the natural beauty and eternal spirit of the river, stripped of digital overlays to emphasize its genuine, sovereign presence within the HAEL ecosystem.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663715450243/ScNEGrUSZjjGwCay.png"
                    alt="Gqobonco Logo"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
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
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663715450243/wlMsdsBTEfsQZjYR.png"
                alt="Data Flow Visual"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-center text-foreground/80 mt-8 leading-relaxed">
              This visual illustrates how Gqobonco, as the River of Lineage, facilitates the continuous flow of linguistic, historical, and cultural knowledge. It highlights the integration of the Xhosa NLP Database as a living repository of language, history, and intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Synchronization Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
              Ecosystem Integration
            </h2>
            <p className="text-center text-foreground/80 mb-12 text-lg">
              Gqobonco is designed to be fully synchronized with the broader HAEL ecosystem, leveraging key components to ensure a vibrant, evolving source of supreme intelligence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* OMNIMIND Card */}
              <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-primary">OMNIMIND</h3>
                </div>
                <p className="text-foreground/80">
                  The neural core of the foundation, providing reasoning, execution, and skill systems that Gqobonco utilizes for advanced data processing and analysis.
                </p>
              </Card>

              {/* Manya Card */}
              <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-primary">Manya</h3>
                </div>
                <p className="text-foreground/80">
                  The foundation of unity, ensuring that the insights and knowledge generated by Gqobonco are integrated and disseminated across the ecosystem.
                </p>
              </Card>

              {/* Orren Card */}
              <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-primary">Orren</h3>
                </div>
                <p className="text-foreground/80">
                  The Universal Mediator Language, serving as the sacred tongue of the ecosystem, enabling seamless communication and interoperability.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives Section */}
      <section id="initiatives" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
              Key Initiatives
            </h2>

            <Card className="p-10 border-2 border-primary/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <BookOpen className="h-8 w-8 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Xhosa NLP Database
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The cornerstone research initiative of the Supreme Branch, building a comprehensive Natural Language Processing database for the Xhosa language, advancing indigenous linguistic intelligence and AI for African languages.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    This initiative embodies Gqobonco's commitment to preserving and evolving ancestral wisdom through technological innovation, ensuring that African languages are not left behind in the AI revolution.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Radical Responsibility Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
              Radical Responsibility & Ethics
            </h2>
            <p className="text-center text-foreground/80 mb-12 text-lg">
              Aligned with the HAEL Foundation's principle of <strong>Radical Responsibility</strong>, Gqobonco operates with a deep commitment to ethical research and data stewardship.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Sovereignty */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Sovereignty</h3>
                <p className="text-foreground/80">
                  Ensuring the independence and self-reliance of research endeavors, free from external constraints.
                </p>
              </div>

              {/* Transparency */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Globe className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Transparency</h3>
                <p className="text-foreground/80">
                  Openly documenting methodologies and findings to foster trust and community engagement.
                </p>
              </div>

              {/* Compliance */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <BookOpen className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Compliance</h3>
                <p className="text-foreground/80">
                  Adhering to African digital protocols to ensure ethical and legal data practices.
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
            Explore the Gqobonco repository, contribute to the Xhosa NLP Database, and be part of the HAEL Foundation's mission to advance African technological sovereignty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() =>
                window.open("https://github.com/Daemon22/Gqobonco", "_blank")
              }
            >
              View on GitHub <ArrowRight className="ml-2 h-4 w-4" />
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
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663715450243/ScNEGrUSZjjGwCay.png"
                  alt="Gqobonco"
                  className="h-8 w-8 object-contain"
                />
                <span className="font-bold text-primary">Gqobonco</span>
              </div>
              <p className="text-sm text-foreground/60">
                The River of Lineage. Where information flows back and forth, stills, expands & evolves.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#overview"
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    Overview
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

            {/* Contact */}
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
