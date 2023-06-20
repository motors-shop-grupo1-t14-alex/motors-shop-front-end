import { z } from "zod";

export const recoveryPasswordSchema = z
    .object({
        password: z.string().nonempty("Senha é obrigatória"),
        confirmPassword: z.string().nonempty("Senha é obrigatória"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Senhas não correspondem",
        path: ["confirmPassword"],
    });

export type RecoveryPasswordData = z.infer<typeof recoveryPasswordSchema>;
