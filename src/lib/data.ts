import { Code, ServerCog, Zap } from 'lucide-react';
import { GithubIcon } from '@/components/icons/github';
import { LinkedinIcon } from '@/components/icons/linkedin';
import { ReactIcon } from '@/components/icons/react-icon';
import { NodejsIcon } from '@/components/icons/nodejs-icon';
import { JavascriptIcon } from '@/components/icons/javascript-icon';
import { TypescriptIcon } from '@/components/icons/typescript-icon';
import { DockerIcon } from '@/components/icons/docker-icon';
import { PhpIcon } from '@/components/icons/php-icon';
import { ExpressIcon } from '@/components/icons/express-icon';

export const navLinks = [
  { href: '#about', label: 'Sobre Mí' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#contact', label: 'Contacto' },
];

export const skills = [
    { name: 'JavaScript', icon: JavascriptIcon },
    { name: 'TypeScript', icon: TypescriptIcon },
    { name: 'React', icon: ReactIcon },
    { name: 'Node.js', icon: NodejsIcon },
    { name: 'Express', icon: ExpressIcon },
    { name: 'Docker', icon: DockerIcon },
    { name: 'PHP', icon: PhpIcon },
    { name: 'Microservicios', icon: ServerCog },
    { name: 'Alta Concurrencia', icon: Zap },
    { name: 'Desarrollo Frontend', icon: Code },
];

export type GenerateProjectMetadataOutput = {
  projectName: string;
  description: string;
  technologies: string[];
};

export const projects = [
  {
    url: 'https://github.com/juanRGalarraga/hosterlan-site',
    fallback: {
      projectName: 'Hosterlan: Plataforma de Hosting y Servidores',
      description: 'Solución completa de front-end (sitio) y back-end (API) diseñada para gestionar alta concurrencia de usuarios y transacciones.',
      technologies: ['React', 'Node.js', 'Express', 'Docker'],
    },
  },
  {
    url: 'https://github.com/juanRGalarraga/hosterlan-server',
    fallback: {
      projectName: 'Servidor de Aplicación Hosterlan (Backend)',
      description: 'La columna vertebral del sistema, optimizada para rendimiento y escalabilidad. Incluye manejo de base de datos y lógica de negocio.',
      technologies: ['Node.js', 'Express', 'Microservicios'],
    },
  },
  {
    url: 'https://github.com/juanRGalarraga/hosterlan-app',
    fallback: {
      projectName: 'Aplicación Móvil/Web Hosterlan',
      description: 'Interfaz de usuario intuitiva para la gestión de servicios por parte del cliente. Foco en performance y experiencia de usuario.',
      technologies: ['React', 'UI/UX', 'Componentes Modulares'],
    },
  },
  {
    url: 'https://github.com/juanRGalarraga/componentes.js',
    fallback: {
      projectName: 'Componentes Reutilizables (componentes.js)',
      description: 'Librería personal para acelerar el desarrollo de UI/UX, enfocada en modularidad y mantenibilidad.',
      technologies: ['JavaScript Modular', 'UI/UX', 'Frontend'],
    },
  },
  {
    url: 'https://github.com/juanRGalarraga/docker-php',
    fallback: {
      projectName: 'Ejemplo de Arquitectura Backend (Docker/PHP)',
      description: 'Demostración de configuración y despliegue optimizado para un entorno de producción con PHP y Docker.',
      technologies: ['Docker', 'PHP', 'Despliegue', 'CI/CD'],
    },
  },
  {
    url: 'https://github.com/juanRGalarraga/nodejs-express',
    fallback: {
      projectName: 'Ejemplo de Arquitectura Backend (Node.js/Express)',
      description: 'Demostración de configuración y despliegue optimizado para un entorno de producción con Node.js y Express.',
      technologies: ['Node.js', 'Express', 'Docker', 'Despliegue'],
    },
  },
];


export const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/juanRGalarraga', icon: GithubIcon },
    { name: 'LinkedIn', url: '#', icon: LinkedinIcon },
]
