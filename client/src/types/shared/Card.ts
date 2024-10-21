
import { z } from "zod";

const CardPropsSchema = z.object({
    marginb: z.string().optional(),
    padding: z.string().optional(),

});


export type CardProps = z.infer<typeof CardPropsSchema>;
