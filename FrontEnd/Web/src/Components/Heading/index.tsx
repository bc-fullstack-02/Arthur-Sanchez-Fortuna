import { Slot } from "@radix-ui/react-slot";
import {ReactNode} from 'react'

export interface HeadingProps {
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    asChild?: boolean;
    classNames?: string;
}

export function Heading() {
    return(
        <div>
            <h1 className="text-white">Heading</h1>
        </div>
    );
}
