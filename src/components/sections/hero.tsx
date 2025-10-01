import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section id="home" className="py-24 sm:py-32 md:py-40">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Juan Galarraga: Desarrollador Web Full-Stack
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 md:text-xl">
            Transformando ideas complejas en software de alto rendimiento.
            Especialista en desarrollo Freelance de sistemas Fintech de alta
            concurrencia. Código robusto, escalable y optimizado.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <a href="#projects">Ver Proyectos Destacados</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Contactar Ahora</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
