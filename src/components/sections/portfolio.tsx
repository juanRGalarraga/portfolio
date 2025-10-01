import { generateProjectMetadata } from '@/ai/flows/generate-project-metadata';
import { projects } from '@/lib/data';
import ProjectCard from '../project-card';
import type { GenerateProjectMetadataOutput } from '@/ai/flows/generate-project-metadata';

type ProjectData = GenerateProjectMetadataOutput & {
  repoUrl: string;
};

export default async function PortfolioSection() {
  const projectPromises = projects.map(async (p) => {
    try {
      const aiData = await generateProjectMetadata({ repoUrl: p.url });
      return { ...aiData, repoUrl: p.url, status: 'fulfilled' };
    } catch (error) {
      console.error(`Failed to fetch metadata for ${p.url}`, error);
      // Using fallback data if AI call fails
      return { ...p.fallback, technologies: p.fallback.technologies, repoUrl: p.url, status: 'rejected' };
    }
  });

  const projectsData = await Promise.all(projectPromises);

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
