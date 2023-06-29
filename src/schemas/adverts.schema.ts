import { z } from "zod"

const createAdvertSchema = z.object({
    mileage: z.string().max(50),
    color: z.string().max(20),
    price: z.string(),
    description: z.string(),
    cover_image: z.string().url().max(255),
    gallery_images1: z.string().url().max(255),
    gallery_images2: z.string().url().max(255).optional(),
    gallery_images3: z.string().url().max(255).optional(),
    gallery_images4: z.string().url().max(255).optional(),
    gallery_images5: z.string().url().max(255).optional(),
    gallery_images6: z.string().url().max(255).optional()

})

const updateAdvertSchema = createAdvertSchema.extend({
    gallery_images1: z.string().url().max(255).optional(),
})

export {
    createAdvertSchema,
    updateAdvertSchema,
}