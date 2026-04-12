import { z } from "zod";

export const SERVICOS_OPTIONS = [
  "Seguro de Vida",
  "Seguro Automóvel",
  "Seguro Residencial",
  "Seguro Empresarial",
  "Seguro Saúde",
  "Consórcio",
  "Previdência Privada",
  "Fiança Locatícia",
  "Outro",
] as const;

export const NewContactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  surname: z.string().min(1, "Sobrenome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().check(
    z.refine((val) => val.replace(/\D/g, "").length === 11, "Telefone inválido")
  ),
  servico: z.enum(SERVICOS_OPTIONS, { error: "Selecione um serviço" }),
  message: z.string().optional(),

  acceptedTerms: z
    .boolean()
    .refine(val => val === true, {
      message: "Você precisa aceitar os termos de uso",
    }),
});

export type NewContactType = z.infer<typeof NewContactSchema>;
