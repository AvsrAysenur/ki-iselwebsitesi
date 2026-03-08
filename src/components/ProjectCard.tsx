import { useState } from "react";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import type { Project } from "@/data/projects";

const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 ease-out ${
        isExpanded ? "shadow-lg" : "card-hover cursor-pointer"
      }`}
    >
      {/* Image */}
      <div
        className="relative aspect-[16/10] overflow-hidden cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

        {/* Tags overlay */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Year */}
        <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm text-muted-foreground">
          {project.year}
        </span>

        {/* Title overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-primary-foreground text-xl font-bold font-serif">
            {project.title}
          </h3>
          <p className="text-primary-foreground/70 text-sm mt-1 line-clamp-1">
            {project.description}
          </p>
        </div>
      </div>

      {/* Expand indicator */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-center py-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label={isExpanded ? "Daralt" : "Genişlet"}
      >
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expandable detail section */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 space-y-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.longDescription}
          </p>

          {/* All tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                Canlı Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-muted transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
                Kaynak Kod
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
