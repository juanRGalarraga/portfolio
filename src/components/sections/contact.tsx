import { Button } from '../ui/button';
import { ContactForm } from '../contact-form';
import { LinkedinIcon } from '../icons/linkedin';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-secondary/50 py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              ¿Necesitas un Software Sólido? Hablemos de tu Proyecto.
            </h2>
            <p className="text-foreground/80">
              Si buscas un Desarrollador Web Freelance para un proyecto que
              demande experiencia en Fintech, alta concurrencia y un enfoque en
              la arquitectura de microservicios, estás en el lugar correcto.
            </p>
            <p className="text-foreground/80">
              Ofrezco desarrollo full-stack de principio a fin, garantizando una
              solución robusta que cumplirá con los estándares más altos de la
              industria.
            </p>
            <Button asChild variant="link" className="p-0 text-base">
               <a href="#" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="mr-2 h-5 w-5" />
                Ver Perfil Completo en LinkedIn
              </a>
            </Button>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-lg sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
