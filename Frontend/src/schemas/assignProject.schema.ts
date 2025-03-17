import { z } from "zod";

export const assignProjectSchema = z.object({
    projectId: z
        .number()
        .int()
        .positive({message: "El proyecto es requerido"}),
    userId: z
        .string()
        .nonempty({message: "El usuario es requerido"}),
});
