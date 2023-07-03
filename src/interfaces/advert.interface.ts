import { z } from "zod";
import { createAdvertSchema, createCommentSchema, updateAdvertSchema } from "../schemas/adverts.schema";

export type iAdverts = z.infer<typeof createAdvertSchema>
export type iUpdateAdvert = z.infer<typeof updateAdvertSchema>

export interface iComment {
    id: number
    comment: string
    created_at: string
    updated_at: string
    user: {
        name: string
    }
}

export interface iCommentProps {
    commentInfos: iComment
}

export type iAdvertComment = z.infer<typeof createCommentSchema>