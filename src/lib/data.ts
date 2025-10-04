import { GithubIcon } from '@/components/icons/github';
import { LinkedinIcon } from '@/components/icons/linkedin';


export const navLinks = [
  { href: '#about', label: 'Sobre Mí' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#contact', label: 'Contacto' },
];

export const technicalSkills = [
    'PHP', 'Node.js', 'TypeScript', 'NestJS', 'Symfony', 'Laravel',
    'JavaScript', 'React', 'Astro',
    'MySQL', 'PostgreSQL', 'GraphQL',
    'Prisma', 'Eloquent', 'Doctrine', 'Mongoose',
    'AWS (SQS, S3, EC2)', 'Docker',
    'Git', 'CI/CD', 'RESTful APIs',
    'PHPUnit', 'Tailwind', 'Bootstrap'
];

export const softSkills = [
    "Comunicación efectiva",
    "Liderazgo",
    "Compromiso",
    "Resolución de problemas",
    "Creatividad",
    "Razonamiento lógico",
    "Abstracción",
];

export type ProjectData = {
  projectName: string;
  description: string;
  technologies: string[];
  repoUrl: string;
};

export const projects: ProjectData[] = [
  {
    repoUrl: '',
    projectName: 'Ecomdrop - Core de Dropshipping',
    description: 'Desarrollo de funcionalidades para el core de un sistema de dropshipping, trabajando en un equipo ágil con microservicios.',
    technologies: ['NestJS', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Docker'],
  },
  {
    repoUrl: '',
    projectName: 'Quiena - Sistema de Inversiones',
    description: 'Mantenimiento y desarrollo de un sistema de inversiones bursátiles con más de 20 mil usuarios, reescribiendo partes del core.',
    technologies: ['PHP', 'Symfony', 'MySQL', 'Doctrine', 'PHPUnit'],
  },
  {
    repoUrl: '',
    projectName: 'Rebrit - Sistemas Fintech',
    description: 'Desarrollo de sistemas de otorgamiento de créditos y liderazgo de un equipo. Core multitenant con arquitectura de microservicios.',
    technologies: ['PHP', 'MySQL', 'Microservicios', 'AWS', 'jQuery'],
  },
  {
    repoUrl: '',
    projectName: 'Proyecto Personal Actual',
    description: 'Actualmente desarrollando un proyecto personal con NestJS, GraphQL, MongoDB y Mongoose para seguir profundizando en estas tecnologías.',
    technologies: ['NestJS', 'GraphQL', 'MongoDB', 'Mongoose'],
  }
];

export const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/juanRGalarraga', icon: GithubIcon },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/galarraga-juan/', icon: LinkedinIcon },
];

export type Experience = {
    company: string;
    role: string;
    period: string;
    description: string;
    technologies: string[];
};

export const professionalExperience: Experience[] = [
    {
        company: "Bombieri",
        role: "Backend Developer",
        period: "Sep 2024 – Ene 2025 (Remoto)",
        description: "Desarrollé funcionalidades para el core de un sistema de dropshipping llamado Ecomdrop. Participaba en la definición de requerimientos e implementación, dando soporte y mantenimiento constante bajo metodologías ágiles (Scrum).",
        technologies: ["NestJS", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "Docker", "Prisma" ],
    },
    {
        company: "Quiena Inversiones",
        role: "Backend Developer",
        period: "Sep 2023 – Nov 2023",
        description: "Participé en el mantenimiento y desarrollo de un sistema de inversiones en la bolsa de valores para más de 20.000 usuarios activos. Colaboré con un desarrollador senior en la reescritura del core e implementación de nuevos requerimientos.",
        technologies: ["PHP", "Symfony", "MySQL", "Doctrine", "PHPUnit", "AWS"],
    },
    {
        company: "Rebrit S.R.L",
        role: "Full Stack Developer",
        period: "Oct 2020 – Sep 2024",
        description: "Mi primera experiencia profesional, donde desarrollé sistemas para clientes locales y nacionales. Me especialicé en backend para sistemas fintech y llegué a liderar un equipo de 2 personas. Gestioné tickets de incidencia y participé en la definición de soluciones para sistemas de otorgamiento de créditos.",
        technologies: ["PHP", "MySQL", "JavaScript", "Microservicios", "jQuery", "Bootstrap", "AWS"],
    }
];
