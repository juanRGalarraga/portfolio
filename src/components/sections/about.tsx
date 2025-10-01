import { skills } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="bg-secondary/50 py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Más de 4 Años de Experiencia en Desarrollo Web con Foco en
              Escalabilidad
            </h2>
            <p className="text-foreground/80">
              Soy Juan Galarraga, Desarrollador Web Full-Stack Freelance con más
              de 4 años de experiencia profesional. Mi trabajo se centra en
              diseñar, construir e implementar soluciones digitales eficientes y
              modernas.
            </p>
            <p className="text-foreground/80">
              A lo largo de mi carrera, he adquirido un conocimiento profundo en
              la creación de aplicaciones que no solo funcionan, sino que están
              preparadas para crecer.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-headline text-2xl font-bold text-primary">
              Mi Stack de Tecnologías
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {skills.map((skill) => (
                <Card key={skill.name} className="flex flex-col items-center justify-center p-4 text-center transition-transform hover:scale-105 hover:shadow-lg">
                  <skill.icon className="h-10 w-10 text-accent" />
                  <p className="mt-2 text-sm font-medium">{skill.name}</p>
                </Card>
              ))}
            </div>
             <p className="text-sm text-foreground/60">
                <span className="font-semibold">Especialización:</span> Arquitecturas de Microservicios, Sistemas de Alta Concurrencia, y desarrollo de soluciones Fintech seguras y rápidas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
