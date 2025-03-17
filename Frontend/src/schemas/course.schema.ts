import { z } from "zod";

export const courseSchema = z.object({
  name: z
    .string()
    .min(3, {message: "El nombre del curso debe tener al menos 3 caracteres"})
    .max(32, {message: "El nombre del curso debe tener como máximo 32 caracteres"}),
  description: z
    .string()
    .min(16, {message: "La descripción del curso debe tener al menos 16 caracteres"})
    .max(128, {message: "La descripción del curso debe tener como máximo 128 caracteres"}),
});
