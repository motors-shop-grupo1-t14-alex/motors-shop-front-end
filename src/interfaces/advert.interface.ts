import { z } from "zod";
import { createAdvertSchema, updateAdvertSchema } from "../schemas/adverts.schema";

export type iAdverts = z.infer<typeof createAdvertSchema>
export type iUpdateAdvert = z.infer<typeof updateAdvertSchema>

