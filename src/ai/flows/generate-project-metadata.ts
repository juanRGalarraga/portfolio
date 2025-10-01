'use server';
/**
 * @fileOverview This file defines a Genkit flow to automatically extract relevant repository and technology data from GitHub repositories.
 *
 * generateProjectMetadata - A function that triggers the project metadata generation flow.
 * GenerateProjectMetadataInput - The input type for the generateProjectMetadata function.
 * GenerateProjectMetadataOutput - The return type for the generateProjectMetadata function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectMetadataInputSchema = z.object({
  repoUrl: z
    .string()
    .describe('The URL of the GitHub repository to extract metadata from.'),
});
export type GenerateProjectMetadataInput = z.infer<typeof GenerateProjectMetadataInputSchema>;

const GenerateProjectMetadataOutputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  description: z.string().describe('A short description of the project.'),
  technologies: z.array(z.string()).describe('A list of the key technologies used in the project.'),
});
export type GenerateProjectMetadataOutput = z.infer<typeof GenerateProjectMetadataOutputSchema>;

export async function generateProjectMetadata(
  input: GenerateProjectMetadataInput
): Promise<GenerateProjectMetadataOutput> {
  return generateProjectMetadataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectMetadataPrompt',
  input: {schema: GenerateProjectMetadataInputSchema},
  output: {schema: GenerateProjectMetadataOutputSchema},
  prompt: `You are an AI expert in analyzing GitHub repositories.
  Given the URL of a GitHub repository, you will extract the project name, a short description, and a list of the key technologies used.
  Analyze the repository at the following URL: {{{repoUrl}}}.
  Provide the output in the requested JSON format.`,
});

const generateProjectMetadataFlow = ai.defineFlow(
  {
    name: 'generateProjectMetadataFlow',
    inputSchema: GenerateProjectMetadataInputSchema,
    outputSchema: GenerateProjectMetadataOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
