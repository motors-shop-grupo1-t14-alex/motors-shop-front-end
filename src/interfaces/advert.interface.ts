import { z } from "zod";
import { createAdvertSchema } from "../schemas/adverts.schema";

export type iAdverts = z.infer<typeof createAdvertSchema>

