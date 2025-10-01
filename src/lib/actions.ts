'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

export type FormState = {
  message: string;
  status: 'success' | 'error' | 'idle';
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Por favor, corrige los errores en el formulario.',
      status: 'error',
    };
  }
  
  try {
    // Here you would typically send an email, e.g., using Nodemailer or a service like Resend.
    // For this example, we'll just log the data to the console.
    console.log('New contact form submission:');
    console.log(validatedFields.data);

    return {
      message: '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.',
      status: 'success',
    };
  } catch (e) {
    console.error(e);
    return {
      message: 'Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.',
      status: 'error',
    };
  }
}
