import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GithubIcon } from './icons/github';
import type { ProjectData } from '@/lib/data';

export default function ProjectCard({
  projectName,
  description,
  technologies,
  repoUrl,
}: ProjectData) {
  const hasRepo = repoUrl && repoUrl !== '';

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 bg-card">
      <CardHeader>
        <CardTitle className="font-headline text-xl">{projectName}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        {hasRepo && (
          <Button asChild variant="ghost" className="gap-2">
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-4 w-4" />
              Ver en GitHub
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
