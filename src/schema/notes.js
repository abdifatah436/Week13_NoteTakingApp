import { z } from "zod";

export const noteSchema = z.object({
  //TODO: create the title and content schema, 
  // Make sure the title is required and the content is required
  // Make sure the title is max 50 characters and the content is max 500 characters
  title: z
    .string()
    .min(1, "Title is required")
    .max(50, "Title must be at most 50 characters"),
  content: z
    .string()
    .min(1, "Content is required")
    .max(500, "Content must be at most 500 characters"),

  });