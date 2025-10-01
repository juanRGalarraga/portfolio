import { projects } from '@/lib/data';
import ProjectCard from '../project-card';
import type { GenerateProjectMetadataOutput } from '@/lib/data';

type ProjectData = GenerateProjectMetadataOutput & {
  repoUrl: string;
};

export default function PortfolioSection() {
    const projectsData: ProjectData[] = projects.map(p => ({
        ...p.fallback,
        repoUrl: p.url
    }));

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Portfolio: Soluciones Escalables en Acción
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Los proyectos a continuación demuestran mi capacidad para entregar
            código limpio y arquitecturas sólidas. Puedes explorar el código
            fuente completo en mi GitHub.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
