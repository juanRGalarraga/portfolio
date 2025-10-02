# Gemini Collaboration Guide

This document outlines the conventions and guidelines for the Gemini AI assistant when working on this project. Following these rules ensures consistency and quality in all contributions.

## 1. Project Overview

- **Project Name:** Modern Portfolio Website
- **Description:** A personal portfolio website to showcase projects, skills, and experience. Includes a functional contact form.
- **Primary Goal:** To create a clean, professional, and responsive online presence for a developer.

## 2. Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Primarily uses `shadcn/ui` components. When adding new UI elements, prefer using or composing existing `shadcn/ui` components from `/src/components/ui`.
- **Package Manager:** `npm`. Do not use `yarn` or `pnpm`.

## 3. Development Workflow

### File Structure

- **Pages:** Located in `src/app/`.
- **Components:** All React components are in `src/components/`.
  - **UI Primitives:** Reusable, un-styled base components are in `src/components/ui/`.
  - **Layout:** Major layout components (Header, Footer) are in `src/components/layout/`.
  - **Page Sections:** Components that represent a full section of a page (e.g., Hero, About) are in `src/components/sections/`.
- **Business Logic:** Server-side logic and Server Actions are located in `src/lib/actions.ts`.
- **Static Data:** Static data, like project details or experience, is stored in `src/lib/data.ts`.

### Coding Style & Conventions

- **Formatting:** Adhere strictly to the existing code format. Use Prettier with the project's default settings for formatting.
- **Naming:**
  - Component files and functions: `PascalCase` (e.g., `ProjectCard.tsx`).
  - Variable and function names: `camelCase`.
  - CSS classes: Use Tailwind CSS utility classes.
- **TypeScript:** Use TypeScript features appropriately. Define types for all function parameters and return values. Use `zod` for schema validation, especially for forms and API boundaries as seen in `src/lib/actions.ts`.
- **Imports:** Use absolute paths (`@/components/...`) where possible, following the convention set in `tsconfig.json`.

## 4. Commits and Version Control

- **Commit Messages:** Follow the Conventional Commits specification.
  - **Format:** `<type>(<scope>): <subject>`
  - **Example:** `feat(contact): add email validation using zod`
  - **Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
- **Branching:** Work on feature branches and submit pull requests to `main`. (Assumed workflow).

## 5. Dependencies

- **Adding Dependencies:** Before adding a new dependency, discuss its necessity. Prefer using existing libraries in the project.
- **Updating Dependencies:** Do not update dependencies unless explicitly asked to do so.

## 6. Specific Instructions

- **Contact Form:** The email sending logic is located in `src/lib/actions.ts`. It is configured to use Gmail with an App Password. Do not commit credentials to version control; they must be stored in `.env.local`.
- **UI Components:** When creating new components, check `src/components/ui` first to see if a suitable primitive already exists.
