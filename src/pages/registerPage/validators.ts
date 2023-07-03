import { z } from "zod";

export const registerSchema = z
    .object({
        email: z.string().email("Deve ser um e-mail válido"),
        name: z.string().nonempty("Nome obrigatório"),
        cpf: z.string().nonempty("Cpf obrigatório"),
        // .min(8, "Minimo 8 numeros")
        // .max(8, "Maximo 8 numeros"),
        cellphone: z.string().nonempty("Telefone obrigatório"),
        birth_date: z.string().nonempty("Aniversário obrigatório"),
        description: z.string(),
        cep: z.string().nonempty("CEP obrigatório"),
        state: z.string().nonempty("Estado obrigatório"),
        city: z.string().nonempty("Cidade obrigatória"),
        street: z.string().nonempty("Rua obrigatória"),
        streetNumber: z.string().nonempty("Numero obrigatório"),
        complement: z.string(),
        //isSeller: z.string(),
        password: z.string().nonempty("Senha é obrigatória"),
        confirmPassword: z.string().nonempty("Senha é obrigatória"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Senhas não correspondem",
        path: ["confirmPassword"],
    });

export type iRegisterData = z.infer<typeof registerSchema>;

export const updateProfileSchema = z
    .object({
        email: z.string().email("Deve ser um e-mail válido"),
        name: z.string(),
        cpf: z.string(),
        cellphone: z.string(),
        birth_date: z.string(),
        description: z.string(),
    })
    .partial();

export const updateAddressSchema = z
    .object({
        cep: z.string(),
        city: z.string(),
        complement: z.string(),
        number: z.string(),
        street: z.string(),
        uf: z.string(),
    })
    .partial();

export type iUpdateProfile = z.infer<typeof updateProfileSchema>;
export type iUpdateAddress = z.infer<typeof updateAddressSchema>;
