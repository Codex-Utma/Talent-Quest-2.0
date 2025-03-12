import { z } from "zod";

export const moduleSchema = z.object({
  name: z
    .string()
    .min(3, {message: "El nombre del módulo debe tener al menos 4 caracteres"})
    .max(32, {message: "El nombre del módulo debe tener como máximo 32 caracteres"}),
  description: z
    .string()
    .min(16, {message: "La descripción del módulo debe tener al menos 16 caracteres"})
    .max(128, {message: "La descripción del módulo debe tener como máximo 128 caracteres"}),
});
