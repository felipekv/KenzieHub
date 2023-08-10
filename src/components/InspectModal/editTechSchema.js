import { z } from "zod";

export const editTechSchema = z.object({
   status: z
      .string()
      .nonempty("O status é obrigatório!"),
});
