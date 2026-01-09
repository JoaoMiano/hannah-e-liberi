import { z } from 'zod';

export const NewContactSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres").max(20, "Nome deve ter no máximo 20 caracteres"),
  surname: z.string().min(3, "Sobrenome deve ter pelo menos 3 caracteres").max(30, "Sobrenome deve ter no máximo 30 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(11, "Telefone deve ter pelo menos 11 caracteres").max(11, "Telefone deve ter no máximo 11 caracteres"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(500, "Mensagem deve ter no máximo 500 caracteres").optional(),
});

export type NewContactType = z.infer<typeof NewContactSchema>;  