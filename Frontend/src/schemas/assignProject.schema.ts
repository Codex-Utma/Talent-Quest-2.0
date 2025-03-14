import { z } from "zod";

export const assignProjectSchema = z.object({
    projectId: z
        .string()
        .nonempty({message: "El proyecto es requerido"}),
    userId: z
        .string()
        .nonempty({message: "El usuario es requerido"}),
});
