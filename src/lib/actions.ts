'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

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
  console.log("EMAIL USER", process.env.EMAIL_USER)
  console.log("EMAIL PASS", process.env.EMAIL_PASS)
  debugger
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });
  

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.errors.map((e) => e.message).join('\n'),
      status: 'error',
    };
  }

  const { name, email, message } = validatedFields.data;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Nuevo mensaje de ${name} <${email}>`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
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
