import { useEffect, useMemo, useState, type CSSProperties } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Cpu,
  Database,
  Droplets,
  Factory,
  Github,
  Globe,
  Leaf,
  Menu,
  Search,
  Shield,
  Sprout,
  Users,
  Waves,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

type Project = {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  stage: string;
  category: string;
  tags: string[];
  image: string;
  logoImage?: string;
  icon: LucideIcon;
  color: string;
  statusNote: string;
};

const projects: Project[] = [
  {
    id: "xhosa-nlp",
    name: "Xhosa NLP Database",
    eyebrow: "Language intelligence",
    description:
      "A research initiative advancing natural-language technology for isiXhosa and other African language futures.",
    stage: "Active research",
    category: "Language",
    tags: ["Language", "Research", "AI"],
    image: "/assets/project-xhosa.jpg",
    icon: Waves,
    color: "#b8d279",
    statusNote:
      "The public project description identifies the Xhosa NLP Database as Gqobonco’s cornerstone research initiative. This page presents it as research in progress—not as a completed or validated language model.",
  },
  {
    id: "production-sentinel",
    name: "Production Sentinel",
    eyebrow: "Industrial intelligence",
    description:
      "A proposed modular architecture for sensing, comparing, understanding, locating, alerting and responding across industrial systems.",
    stage: "Research stage · not built",
    category: "Industry",
    tags: ["Industry", "Research", "Systems"],
    image: "/assets/project-sentinel.jpg",
    logoImage: "/assets/production-sentinel-logo.webp",
    icon: Factory,
    color: "#e2bb65",
    statusNote:
      "The public research registry describes Production Sentinel as a research-stage invention. It has not yet been physically built; illustrations are concepts, not proof of a completed prototype or validated performance.",
  },
  {
    id: "smartwater-guardian",
    name: "SmartWater Guardian",
    eyebrow: "Water monitoring",
    description:
      "A planned three-zone first proof of Production Sentinel, exploring differential-flow monitoring across water infrastructure.",
    stage: "Planned demonstration · not built",
    category: "Water",
    tags: ["Water", "Research", "Resilience"],
    image: "/assets/project-water.jpg",
    logoImage: "/assets/smartwater-guardian-logo.webp",
    icon: Droplets,
    color: "#73cdbd",
    statusNote:
      "The public research registry describes SmartWater Guardian as a planned first physical proof of Production Sentinel. The three-zone demonstration is a plan; no physical prototype or test results are claimed here.",
  },
  {
    id: "energy-guardian",
    name: "Energy Guardian",
    eyebrow: "Future direction",
    description:
      "A future architecture extension exploring how the research family could extend into energy and electrical monitoring.",
    stage: "Future direction · not built",
    category: "Energy",
    tags: ["Energy", "Roadmap"],
    image: "/assets/project-energy.jpg",
    icon: Zap,
    color: "#d6ba76",
    statusNote:
      "Energy Guardian appears in the public registry as a future architecture extension. It is not a built product or active deployment.",
  },
];

const research = [
  {
    title: "Indigenous Language Intelligence",
    summary: "Xhosa NLP Database · language research",
    projectId: "xhosa-nlp",
    image: "/assets/project-xhosa.jpg",
    label: "Research",
  },
  {
    title: "Industrial Intelligence Architecture",
    summary: "Production Sentinel · research stage",
    projectId: "production-sentinel",
    image: "/assets/project-sentinel.jpg",
    label: "Systems",
  },
  {
    title: "Three-Zone Water Monitoring",
    summary: "SmartWater Guardian · planned demonstration",
    projectId: "smartwater-guardian",
    image: "/assets/project-water.jpg",
    label: "Water",
  },
  {
    title: "Future System Extensions",
    summary: "Energy, production and maintenance directions",
    projectId: "energy-guardian",
    image: "/assets/project-energy.jpg",
    label: "Roadmap",
  },
];

const roadmap = [
  {
    name: "Production Intelligence",
    note: "Future architecture extension",
    icon: Cpu,
    color: "#d8b963",
  },
  {
    name: "Maintenance Intelligence",
    note: "Future architecture extension",
    icon: Shield,
    color: "#9bbd7d",
  },
];

const mainNav = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Library", href: "#library" },
  { label: "About", href: "#about" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

const sideNav = [
  { label: "Home", href: "#home", icon: Globe },
  { label: "Projects", href: "#projects", icon: BookOpen },
  { label: "Research", href: "#research", icon: Database },
  { label: "Knowledge Library", href: "#library", icon: BookOpen },
  { label: "Initiatives", href: "#initiatives", icon: Sprout },
  { label: "People & Partners", href: "#community", icon: Users },
  { label: "About Gqobonco", href: "#about", icon: Leaf },
];

const filters = ["All work", "Language", "Industry", "Water", "Energy"];
const repositoryUrl = "https://github.com/Daemon22/Gqobonco";
const registryUrl = `${repositoryUrl}/blob/main/docs/research-registry.md`;

function ProjectLogo({ project, small = false }: { project: Project; small?: boolean }) {
  const Mark = project.icon;
  const style = { "--mark-color": project.color } as CSSProperties;
  return (
    <span
      className={`project-logo${small ? " project-logo--small" : ""}`}
      style={style}
      role="img"
      aria-label={`${project.name} logo mark`}
    >
      <span className="project-logo__ring">
        <Mark aria-hidden="true" strokeWidth={1.7} />
      </span>
    </span>
  );
}

function AppMark({ className = "" }: { className?: string }) {
  return (
    <img
      className={className}
      src="/assets/gqobonco-emblem.png"
      alt="Gqobonco — The River of Lineage"
    />
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All work");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const normalizedQuery = query.trim().toLowerCase();
  const visibleProjects = useMemo(
    () =>
      projects.filter((project) => {
        const inCategory = category === "All work" || project.category === category;
        const searchable = [
          project.name,
          project.eyebrow,
          project.description,
          project.stage,
          ...project.tags,
        ]
          .join(" ")
          .toLowerCase();
        return inCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
      }),
    [category, normalizedQuery],
  );
  const visibleResearch = useMemo(
    () =>
      research.filter((item) =>
        !normalizedQuery ||
        `${item.title} ${item.summary} ${item.label}`.toLowerCase().includes(normalizedQuery),
      ),
    [normalizedQuery],
  );

  useEffect(() => {
    if (!activeProject) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activeProject]);

  const openProject = (id: string) => {
    const project = projects.find((item) => item.id === id);
    if (project) setActiveProject(project);
  };

  return (
    <div className="site-shell">
      <aside className="sidebar" aria-label="Main site navigation">
        <a className="brand-lockup" href="#home" aria-label="Gqobonco home">
          <AppMark className="brand-lockup__logo" />
          <span className="brand-lockup__name">GQOBONCO</span>
          <span className="brand-lockup__tagline">THE RIVER OF LINEAGE</span>
        </a>

        <nav className="sidebar-nav" aria-label="Explore Gqobonco">
          {sideNav.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                className={`sidebar-link${index === 0 ? " is-current" : ""}`}
                href={item.href}
                key={item.label}
              >
                <Icon aria-hidden="true" size={17} strokeWidth={1.8} />
                <span>{item.label}</span>
                {index === 0 && <span className="sidebar-link__glow" aria-hidden="true" />}
              </a>
            );
          })}
        </nav>

        <div className="sidebar-rule" />
        <p className="sidebar-kicker">QUICK ACCESS</p>
        <a className="quick-link" href={registryUrl} target="_blank" rel="noreferrer">
          <BookOpen aria-hidden="true" size={15} />
          <span>Public Research Registry</span>
          <ArrowUpRight aria-hidden="true" size={13} />
        </a>
        <a className="quick-link" href={repositoryUrl} target="_blank" rel="noreferrer">
          <Github aria-hidden="true" size={15} />
          <span>Project Repository</span>
          <ArrowUpRight aria-hidden="true" size={13} />
        </a>

        <blockquote className="sidebar-quote">
          <span>“We are the generation that remembers.”</span>
          <cite>— HAEL Foundation</cite>
        </blockquote>
      </aside>

      <div className="site-main">
        <header className="topbar">
          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav className={`topnav${menuOpen ? " topnav--open" : ""}`} aria-label="Primary">
            {mainNav.map((item, index) => (
              <a
                className={index === 0 ? "topnav-link is-current" : "topnav-link"}
                href={item.href}
                key={item.label}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <label className="search-box">
            <span className="sr-only">Search projects and research</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects, research, knowledge…"
            />
            <Search aria-hidden="true" size={16} />
          </label>
          <a className="topbar-brand" href="#home" aria-label="Gqobonco home">
            <AppMark className="topbar-brand__logo" />
            <span>GQOBONCO</span>
          </a>
        </header>

        <main>
          <section className="hero" id="home" aria-labelledby="hero-title">
            <div className="hero__image" aria-hidden="true" />
            <div className="hero__shade" aria-hidden="true" />
            <div className="hero__content">
              <p className="eyebrow hero__eyebrow">GQOBONCO FOUNDATION · EASTERN CAPE</p>
              <h1 id="hero-title">The River<br />of Knowledge</h1>
              <p className="hero__dek">
                Umfula womnombo — where knowledge flows between nature, people and technology.
              </p>
              <p className="hero__support">
                Grounded research. Living heritage. African futures shaped from within.
              </p>
              <div className="hero__actions">
                <a className="button button--gold" href="#projects">
                  Explore our projects <ArrowRight aria-hidden="true" size={16} />
                </a>
                <a className="button button--outline" href="#about">Learn about Gqobonco</a>
              </div>
            </div>
            <div className="hero-pillars" aria-label="Our foundation pillars">
              <div className="hero-pillar">
                <span className="hero-pillar__icon"><Leaf aria-hidden="true" size={19} /></span>
                <span><strong>Nature</strong><small>Our foundation</small></span>
              </div>
              <div className="hero-pillar">
                <span className="hero-pillar__icon"><Users aria-hidden="true" size={19} /></span>
                <span><strong>People</strong><small>Our strength</small></span>
              </div>
              <div className="hero-pillar">
                <span className="hero-pillar__icon"><Cpu aria-hidden="true" size={19} /></span>
                <span><strong>Technology</strong><small>Our multiplier</small></span>
              </div>
            </div>
            <span className="hero__index" aria-hidden="true">01 — KNOWLEDGE IN FLOW</span>
          </section>

          <section className="discovery" id="projects" aria-labelledby="projects-title">
            <div className="featured-column">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">RESEARCH · PEOPLE · POSSIBILITY</p>
                  <h2 id="projects-title">Featured projects <span className="heading-rule" /></h2>
                </div>
                <a className="text-link" href="#initiatives">Explore the portfolio <ArrowRight size={15} /></a>
              </div>
              <p className="section-intro">Distinct ideas, one living system. Progress is shared with care and clarity.</p>

              <div className="filter-row" role="group" aria-label="Filter projects by area">
                {filters.map((filter) => (
                  <button
                    className={category === filter ? "filter-chip is-selected" : "filter-chip"}
                    type="button"
                    onClick={() => setCategory(filter)}
                    aria-pressed={category === filter}
                    key={filter}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="project-grid" aria-live="polite">
                {visibleProjects.map((project) => (
                  <button
                    className="project-card"
                    type="button"
                    key={project.id}
                    onClick={() => setActiveProject(project)}
                    aria-haspopup="dialog"
                  >
                    <span className="project-card__art">
                      <img src={project.image} alt={`${project.name} concept visual`} loading="lazy" />
                      <span className="project-card__art-shade" aria-hidden="true" />
                      <ProjectLogo project={project} />
                      <span className="project-card__number">0{projects.indexOf(project) + 1}</span>
                    </span>
                    <span className="project-card__body">
                      <span className="project-card__eyebrow">{project.eyebrow}</span>
                      <span className="project-card__title">{project.name}</span>
                      <span className="project-card__description">{project.description}</span>
                      <span className="project-card__meta">
                        <span className="project-status"><i aria-hidden="true" />{project.stage}</span>
                        <span className="round-arrow" aria-hidden="true"><ArrowUpRight size={15} /></span>
                      </span>
                    </span>
                  </button>
                ))}
                {visibleProjects.length === 0 && (
                  <div className="empty-state">
                    <Search size={22} aria-hidden="true" />
                    <strong>No matching projects</strong>
                    <span>Try another search or select “All work”.</span>
                  </div>
                )}
              </div>
            </div>

            <aside className="research-panel" id="research" aria-labelledby="research-title">
              <div className="research-panel__heading">
                <div>
                  <p className="eyebrow">FROM THE PUBLIC REGISTRY</p>
                  <h2 id="research-title"><BookOpen aria-hidden="true" size={16} /> Research in motion</h2>
                </div>
                <a className="text-link text-link--compact" href={registryUrl} target="_blank" rel="noreferrer" aria-label="View public research registry">
                  <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="research-list" aria-live="polite">
                {visibleResearch.map((item) => (
                  <button className="research-item" type="button" key={item.title} onClick={() => openProject(item.projectId)}>
                    <span className="research-item__image"><img src={item.image} alt="" loading="lazy" /></span>
                    <span className="research-item__copy">
                      <strong>{item.title}</strong>
                      <small>{item.summary}</small>
                      <span className="research-tag">{item.label}</span>
                    </span>
                    <ArrowRight className="research-item__arrow" aria-hidden="true" size={16} />
                  </button>
                ))}
                {visibleResearch.length === 0 && <p className="research-empty">No registry topics match this search.</p>}
              </div>
              <p className="research-note"><Shield aria-hidden="true" size={14} /> Research-stage work is clearly identified. No unverified results are presented.</p>
            </aside>
          </section>

          <section className="system-band" id="library" aria-labelledby="system-title">
            <div className="system-band__identity">
              <div className="tree-mark" aria-hidden="true">
                <Sprout size={43} strokeWidth={1.35} />
                <span />
              </div>
              <div>
                <p className="eyebrow">OUR LIVING SYSTEM</p>
                <h2 id="system-title">One ecosystem.<br />Many expressions.</h2>
              </div>
            </div>
            <div className="system-step"><span className="system-step__icon"><Leaf size={18} /></span><strong>Roots</strong><small>Nature · land · culture<br />knowledge · community</small></div>
            <div className="system-step"><span className="system-step__icon"><Sprout size={18} /></span><strong>Trunk</strong><small>HAEL Foundation<br />shared systems & people</small></div>
            <div className="system-step"><span className="system-step__icon"><Cpu size={18} /></span><strong>Branches</strong><small>Enterprise · technology<br />research · industry</small></div>
            <div className="system-step"><span className="system-step__icon"><Globe size={18} /></span><strong>Canopy</strong><small>Participation · markets<br />institutions</small></div>
            <a className="system-cta" href="#community">Join our journey <ArrowRight size={14} /></a>
          </section>

          <section className="horizon-section" id="initiatives" aria-labelledby="horizon-title">
            <div className="horizon-heading">
              <div>
                <p className="eyebrow">LOOKING DOWNSTREAM</p>
                <h2 id="horizon-title">On the horizon</h2>
              </div>
              <p>Future extensions are shown as directions—not as built products.</p>
            </div>
            <div className="horizon-list">
              {roadmap.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="horizon-item" key={item.name}>
                    <span className="horizon-item__logo" style={{ "--mark-color": item.color } as CSSProperties}><Icon size={19} strokeWidth={1.7} /></span>
                    <span><strong>{item.name}</strong><small>{item.note}</small></span>
                    <span className="future-pill">Roadmap</span>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="about-strip" id="about" aria-labelledby="about-title">
            <div className="about-strip__icon"><Waves size={22} /></div>
            <div><p className="eyebrow">UMFULA WOMNOMBO</p><h2 id="about-title">Knowledge has a lineage. The future has many authors.</h2></div>
            <p>Gqobonco carries research, information and intelligence through time—honoring what came before while making room for what can come next.</p>
            <a className="round-arrow round-arrow--large" href={registryUrl} target="_blank" rel="noreferrer" aria-label="Read the public research registry"><ArrowUpRight size={18} /></a>
          </section>
        </main>

        <footer className="site-footer" id="contact">
          <a className="footer-brand" href="#home"><AppMark className="footer-brand__logo" /><span>GQOBONCO<small>THE RIVER OF LINEAGE</small></span></a>
          <div className="footer-location"><span>HAEL Foundation</span><i />Eastern Cape, South Africa<i />Africa<i />Planet Earth</div>
          <a className="footer-contact" id="community" href={repositoryUrl} target="_blank" rel="noreferrer"><Github size={16} /> <span>Connect through the public repository</span><ArrowUpRight size={13} /></a>
          <span className="footer-signoff">KNOWLEDGE <i /> PEOPLE <i /> NATURE <i /> TECHNOLOGY</span>
        </footer>
      </div>

      {activeProject && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.currentTarget === event.target) setActiveProject(null);
        }}>
          <section className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
            <button className="dialog-close" type="button" onClick={() => setActiveProject(null)} aria-label="Close project details"><X size={19} /></button>
            <div className="dialog-art"><img src={activeProject.image} alt="" /><span className="dialog-art__shade" /></div>
            <div className="dialog-content">
              <div className="dialog-title-row">
                {activeProject.logoImage ? (
                  <img className="project-dialog-logo" src={activeProject.logoImage} alt={`${activeProject.name} logo`} />
                ) : (
                  <ProjectLogo project={activeProject} />
                )}
                <div><p className="eyebrow">{activeProject.eyebrow}</p><h2 id="project-dialog-title">{activeProject.name}</h2></div>
              </div>
              <span className="project-status project-status--dialog"><i aria-hidden="true" />{activeProject.stage}</span>
              <p className="dialog-description">{activeProject.description}</p>
              <p className="disclosure-note"><Shield size={16} aria-hidden="true" />{activeProject.statusNote}</p>
              <div className="dialog-tags">{activeProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="dialog-actions">
                <a className="button button--gold" href={registryUrl} target="_blank" rel="noreferrer">Read public registry <ArrowUpRight size={15} /></a>
                <a className="button button--outline-dark" href={repositoryUrl} target="_blank" rel="noreferrer"><Github size={15} /> Repository</a>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
