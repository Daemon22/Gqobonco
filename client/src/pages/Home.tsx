import { useMemo, useState } from "react";
import { ArrowDown, ArrowRight, ChevronDown, ExternalLink, Search, Sun, Waves, Zap } from "lucide-react";
import { Link } from "wouter";
import { assetUrl, projects, researchItems, type Project } from "@/data/catalog";

const sectors = ["Technology", "Water", "Industry", "Human Communication", "Materials", "Intelligence"];
const featuredSlugs = ["smartwater-guardian", "production-sentinel", "glass-healing", "lizwi-hcip", "sovereign-intelligence", "hael-studio"];

function ProjectMark({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <span className="lineage-project-mark" style={{ "--mark": project.color } as React.CSSProperties}>
      {project.logoImage ? <img src={assetUrl(project.logoImage)} alt={project.logoAlt ?? `${project.name} logo`} /> : <Icon size={22} strokeWidth={1.4} aria-hidden="true" />}
    </span>
  );
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link className="lineage-project-card" href={`/projects/${project.slug}`}>
      <div className="lineage-card-image">
        <img src={assetUrl(project.presentationImage ?? project.image)} alt={`${project.name} presentation visual`} />
        <div className="lineage-card-image-shade" />
        <ProjectMark project={project} />
        <span className="lineage-card-index">0{index + 1}</span>
      </div>
      <div className="lineage-card-body">
        <span className="lineage-card-eyebrow">{project.category} · {project.stageKind}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="lineage-card-foot"><span>{project.stage}</span><ArrowRight size={15} /></div>
      </div>
    </Link>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState("All");
  const normalized = query.trim().toLowerCase();
  const featured = useMemo(() => featuredSlugs.map((slug) => projects.find((project) => project.slug === slug)).filter((project): project is Project => Boolean(project)), []);
  const visible = useMemo(() => featured.filter((project) => {
    const matchesSector = sector === "All" || project.category.toLowerCase().includes(sector.toLowerCase().split(" ")[0]);
    const text = `${project.name} ${project.description} ${project.category}`.toLowerCase();
    return matchesSector && (!normalized || text.includes(normalized));
  }), [normalized, sector, featured]);

  return (
    <div className="lineage-home">
      <header className="lineage-topbar">
        <Link className="lineage-brand" href="/">
          <img src={assetUrl("assets/brandkit/02-gqobonco-logo-the-river-of-lineage.jpg")} alt="Gqobonco" />
          <span><strong>GQOBONCO</strong><small>THE RIVER OF LINEAGE</small></span>
        </Link>
        <nav className="lineage-nav" aria-label="Primary navigation">
          <Link className="is-active" href="/research">Research</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/ecosystem">Ideas</Link>
          <Link href="/library">Archive</Link>
          <Link href="/about">About</Link>
        </nav>
        <div className="lineage-actions">
          <label className="lineage-search"><span className="sr-only">Search Gqobonco</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search" /><Search size={16} /></label>
          <button className="lineage-icon-button" type="button" aria-label="Toggle light mode"><Sun size={17} /></button>
          <Link className="lineage-explore" href="/explore">Explore <ChevronDown size={14} /></Link>
        </div>
      </header>

      <main>
        <section className="lineage-hero">
          <div className="lineage-hero-bg" />
          <div className="lineage-hero-overlay" />
          <div className="lineage-hero-copy">
            <p className="lineage-kicker">GQOBONCO RESEARCH &amp; PROJECTS PLATFORM</p>
            <h1>The River of<br /><em>Lineage</em></h1>
            <p className="lineage-hero-dek">Knowledge flows across generations, disciplines and projects — connecting people, ideas and possibilities.</p>
          <Link className="lineage-outline-button" href="/explore">Explore the collection <ArrowRight size={16} /></Link>
          </div>
          <div className="lineage-time-axis"><span>PAST</span><i /><span>PRESENT</span><i /><span>FUTURE</span></div>
          <ArrowDown className="lineage-hero-down" size={19} />
        </section>

        <section className="lineage-intro-band">
          <div><p className="lineage-kicker dark">RESEARCH &amp; PROJECTS</p><h2>Independent Works.<br />One Living Ecosystem.</h2></div>
          <div className="lineage-intro-copy"><p>GQOBONCO brings together a growing collection of research, projects and ideas. Each work is an independent exploration, organized by sector, topic or category. This is not a fixed taxonomy — it evolves as new knowledge, technologies and ideas emerge.</p></div>
          <Link className="lineage-sector-callout" href="/explore"><Waves size={21} /><span><small>EXPLORE THE RESEARCH FIELD</small>Compare public research with GOBONCO’s own projects and directions.</span><ArrowRight size={19} /></Link>
          <div className="lineage-sector-list">
            {sectors.map((item) => <button key={item} className={sector === item ? "is-selected" : ""} type="button" onClick={() => setSector(sector === item ? "All" : item)}><span className="lineage-sector-orb"><Zap size={15} /></span>{item}</button>)}
            <button type="button" onClick={() => setSector("All")}>+ More <ArrowRight size={14} /></button>
          </div>
        </section>

        <section className="lineage-featured-section">
          <div className="lineage-section-head"><div><p className="lineage-kicker">FEATURED PROJECTS</p><h2>Works in motion.</h2></div><Link href="/projects">View all projects <ArrowRight size={15} /></Link></div>
          <div className="lineage-featured-grid">{visible.map((project, index) => <FeaturedCard key={project.slug} project={project} index={index} />)}</div>
          {visible.length === 0 && <p className="lineage-empty">No projects match this search or sector yet.</p>}
        </section>

        <section className="lineage-archive-band">
          <div className="lineage-archive-heading"><p className="lineage-kicker dark">RESEARCH ARCHIVE</p><h2>Knowledge Builds<br />Further Knowledge.</h2><p>Explore research papers, technical reports, datasets and other knowledge artifacts from GQOBONCO’s growing archive.</p><Link className="lineage-dark-button" href="/library">Browse all documents <ArrowRight size={15} /></Link></div>
          <div className="lineage-archive-list">{researchItems.slice(0, 5).map((item) => <Link key={item.title} href={`/projects/${item.projectSlug}`} className="lineage-archive-item"><img src={assetUrl(item.image)} alt="" /><span><strong>{item.title}</strong><small>{item.summary} · {item.stage}</small></span><span className="lineage-archive-view">View <ArrowRight size={14} /></span></Link>)}</div>
        </section>

        <section className="lineage-connections">
          <div className="lineage-connections-copy"><p className="lineage-kicker">LINEAGE &amp; CONNECTIONS</p><h2>Ideas Intertwine.<br />Progress Accelerates.</h2><p>Every project, research thread and idea is part of a larger whole. Explore how different domains, concepts and discoveries influence one another.</p><Link className="lineage-outline-button" href="/ecosystem">Explore the knowledge map <ArrowRight size={16} /></Link></div>
          <div className="lineage-flow-art"><img src={assetUrl("assets/data-flow-visual.png")} alt="Flowing lines of knowledge, systems, and connected ideas" /><span>Knowledge flows. Capability returns.</span></div>
        </section>
      </main>

      <footer className="lineage-footer"><Link className="lineage-brand" href="/"><img src="assets/gqobonco-emblem.png" alt="Gqobonco" /><span><strong>GQOBONCO</strong><small>THE RIVER OF LINEAGE</small></span></Link><nav><Link href="/research">Research</Link><Link href="/projects">Projects</Link><Link href="/ecosystem">Ideas</Link><Link href="/library">Archive</Link><Link href="/about">About</Link></nav><div className="lineage-footer-note">Preserving wisdom.<br /><em>Building tomorrow.</em></div><a className="lineage-footer-github" href="https://github.com/Daemon22/Gqobonco" target="_blank" rel="noreferrer"><ExternalLink size={14} /> Project source &amp; downloads on GitHub</a></footer>
    </div>
  );
}
