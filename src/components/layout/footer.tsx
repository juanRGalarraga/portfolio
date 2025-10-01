import { socialLinks } from "@/lib/data"
import { Button } from "../ui/button"

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
                <p className="text-sm text-foreground/60">
                    © {new Date().getFullYear()} Juan Galarraga. Todos los derechos reservados.
                </p>
                <div className="flex items-center gap-2">
                    {socialLinks.map((link) => (
                        <Button key={link.name} variant="ghost" size="icon" asChild>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                <link.icon className="h-5 w-5" />
                                <span className="sr-only">{link.name}</span>
                            </a>
                        </Button>
                    ))}
                </div>
            </div>
        </footer>
    )
}
