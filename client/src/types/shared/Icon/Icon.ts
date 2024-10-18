import { ElementType } from "react";
import { z } from "zod";

const IconComponentPropsSchema = z.object({
    fill: z.string().optional(),
    width: z.string().optional(),
    height:  z.string().optional(),
    stroke:  z.string().optional(),
});


export type IconComponentProps = z.infer<typeof IconComponentPropsSchema>;
