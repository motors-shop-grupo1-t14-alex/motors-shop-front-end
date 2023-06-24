import { z } from "zod";

export const registerSchema = z
    .object({
        email: z.string().email("Deve ser um e-mail válido"),
        name: z.string().nonempty("Nome obrigatório"),
        cpf: z.string().nonempty("Cpf obrigatório"),
        cellphone: z.string().nonempty("Telefone obrigatório"),
        birth_date: z.string().nonempty("Aniversário obrigatório"),
        description: z.string(),
        cep: z.string().nonempty("CEP obrigatório"),
        state: z.string().nonempty("Estado obrigatório"),
        city: z.string().nonempty("Cidade obrigatória"),
        street: z.string().nonempty("Rua obrigatória"),
        streetNumber: z.string().nonempty("Numero obrigatório"),
        complement: z.string(),
        accountType: z.string().nonempty("Tipo obrigatório"),
        password: z.string().nonempty("Senha é obrigatória"),
        confirmPassword: z.string().nonempty("Senha é obrigatória"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Senhas não correspondem",
        path: ["confirmPassword"],
    });

export type iRegisterData = z.infer<typeof registerSchema>;

export const registerUpdateSchema = z.object({
    email: z.string().email("Deve ser um e-mail válido"),
    name: z.string(),
    cpf: z.string(),
    cellphone: z.string(),
    birth_date: z.string(),
    description: z.string(),
}).partial()

export const registerUpdateAddressSchema = z.object({
    cep: z.string(),
    city: z.string(),
    complement: z.string(),
    number: z.string(),
    street: z.string(),
    uf: z.string(),
}).partial()

export type iRegisterUpdate = z.infer<typeof registerUpdateSchema>
export type iRegisterUpdateAddress = z.infer<typeof registerUpdateAddressSchema>