import { Button } from '@/components/ui/button';
import { socialLinks } from '@/lib/data';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function HeroSection() {
  const githubUrl = socialLinks.find(link => link.name === 'GitHub')?.url;
  const linkedinUrl = socialLinks.find(link => link.name === 'LinkedIn')?.url;

  return (
    <section id="home" className="relative overflow-hidden py-24 sm:py-32 md:py-40">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[10px_10px] [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-400/[0.05]"></div>
      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative">
        <div className="mx-auto max-w-3xl text-center">
           <Badge variant="secondary" className="mb-4">Disponible para Trabajar</Badge>
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Juan Galarraga: Desarrollador Backend
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 md:text-xl">
            Especializado en el desarrollo de sistemas fintech de alta concurrencia. Código robusto, escalable y optimizado para un rendimiento superior.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <Button asChild size="lg">
              <a href="#contact">Contactar Ahora</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">Ver Proyectos</a>
            </Button>
          </div>
           <div className="mt-8 flex justify-center gap-4">
            {githubUrl && (
              <Button asChild variant="ghost" size="icon" aria-label="GitHub">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="h-6 w-6" />
                </a>
              </Button>
            )}
            {linkedinUrl && (
              <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon className="h-6 w-6" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
