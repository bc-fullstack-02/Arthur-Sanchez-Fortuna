import { Slot } from "@radix-ui/react-slot"
import { clsx } from "clsx";
import {ReactNode} from 'react'

/*Minuto 1:13:50 Aula 4 */
export interface HeadingProps {
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}
/*Minuto 1:18:40 Aula 4 */
export function Heading({size="md", children, asChild, className }: HeadingProps) {
    const Comp = asChild ? Slot : "h2";

    return (
        <Comp >{children}</Comp>
    );
} 