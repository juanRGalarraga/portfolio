import { Button } from '../ui/button';
import { ContactForm } from '../contact-form';
import { LinkedinIcon, Mail, MapPin } from 'lucide-react';
import { socialLinks } from '@/lib/data';

export default function ContactSection() {
  const linkedinUrl = socialLinks.find(link => link.name === 'LinkedIn')?.url;
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Hablemos de tu Próximo Proyecto
            </h2>
            <p className="text-foreground/80">
              Si buscas un desarrollador backend para un proyecto que demande experiencia en fintech, alta concurrencia y un enfoque en la calidad, estás en el lugar correcto.
            </p>
             <div className="space-y-4">
              <a href="mailto:jgalarraga@outlook.com.ar" className="flex items-center gap-3 transition-colors hover:text-accent">
                <Mail className="h-5 w-5" />
                <span>jgalarraga@outlook.com.ar</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" />
                <span>Gualeguaychú, Entre Ríos</span>
              </div>
              {linkedinUrl && (
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-accent">
                  <LinkedinIcon className="h-5 w-5" />
                  <span>linkedin/galarraga-juan</span>
                </a>
              )}
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-lg sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
