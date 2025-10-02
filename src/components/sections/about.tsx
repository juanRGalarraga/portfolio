import { technicalSkills, softSkills } from '@/lib/data';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

export default function AboutSection() {
  return (
    <section id="about" className="bg-secondary/50 py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Sobre Mí
            </h2>
            <p className="text-foreground/80">
              Desarrollador Backend con más de 3 años de experiencia, especializado en el desarrollo de sistemas fintech pero con gran flexibilidad en la construcción de diferentes productos. Sólidos conocimientos en PHP y bases de datos relacionales como MySQL o PostgreSQL.
            </p>
            <p className="text-foreground/80">
              Tengo experiencia en entornos ágiles (Scrum) y sistemas críticos de alta concurrencia. Soy proactivo, enfocado en la calidad del código y en constante formación en tecnologías como TypeScript, Node.js y herramientas de IA. Busco aportar a soluciones innovadoras que impacten positivamente.
            </p>
          </div>
          <div className="space-y-8">
             <div>
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                  Habilidades Técnicas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
             </div>
             <div>
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                  Habilidades Blandas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
