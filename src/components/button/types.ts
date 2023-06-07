import React from "react";

export interface iButton {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick?: (e: any) => void;
    children: React.ReactElement | string;
    css: string;
    type: "submit" | "button";
}
