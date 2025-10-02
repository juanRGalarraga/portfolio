import { professionalExperience } from '@/lib/data';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Experiencia Profesional
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
                Un recorrido por mi carrera, destacando los desafíos y tecnologías clave en cada etapa.
            </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-0 top-0 h-full w-[2px] bg-border md:left-1/2 md:-translate-x-1/2"></div>
          {professionalExperience.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 flex w-full items-center md:justify-normal ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 md:left-1/2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Briefcase className="h-5 w-5" />
                </div>
              </div>
              <div className="w-full pl-12 md:w-1/2 md:px-8">
                <Card className="transition-all hover:shadow-xl">
                  <CardHeader>
                    <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                    <CardDescription className="font-semibold">{exp.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
