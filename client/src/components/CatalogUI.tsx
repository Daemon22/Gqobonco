import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { assetUrl, type Project } from "@/data/catalog";

export function LogoMark({ item, detail=false }: { item: Project | { name:string; icon: typeof ArrowRight; color?:string; logoImage?:string; monogram?:string }; detail?: boolean }) {
  const Icon = item.icon;
  return <span className={`catalog-logo ${detail ? "catalog-logo--detail" : ""}`} style={{ "--mark-color": (item as Project).color ?? "#d4ab54" } as React.CSSProperties}>{"logoImage" in item && item.logoImage ? <img src={assetUrl(item.logoImage)} alt={`${item.name} logo`} /> : "monogram" in item && item.monogram ? <strong>{item.monogram}</strong> : <span><Icon size={detail ? 28 : 21} strokeWidth={1.5} /></span>}</span>;
}
export function StagePill({ stage, kind }: { stage:string; kind:string }) { return <span className={`stage-pill stage-pill--${kind}`}>{stage}</span>; }
export function ProjectCard({ project }: { project: Project }) { return <Link className="catalog-project-card" href={`/projects/${project.slug}`}><div className="catalog-project-image" style={{ backgroundImage:`linear-gradient(145deg,rgba(2,20,14,.06),rgba(2,20,14,.75)),url(${assetUrl(project.presentationImage ?? project.image)})` }}><LogoMark item={project} /></div><div className="catalog-project-content"><div className="catalog-card-top"><span>{project.category}</span><StagePill stage={project.stage} kind={project.stageKind} /></div><h3>{project.name}</h3><p>{project.description}</p>{project.identityNote && <span className="catalog-identity-note">{project.identityNote}</span>}<span className="catalog-arrow">Open project <ArrowRight size={15} /></span></div></Link>; }
export function SourceLink({ href, label }: { href:string; label:string }) { return <a className="source-link" href={href} target="_blank" rel="noreferrer">{label} <ArrowUpRight size={13} /></a>; }
