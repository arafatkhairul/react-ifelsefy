import React, { ReactNode } from "react";
export declare const Conditional: React.FC<{
    children: ReactNode;
}>;
export declare const If: React.FC<{
    condition: boolean;
    children: ReactNode;
}>;
export declare const ElseIf: React.FC<{
    condition: boolean;
    children: ReactNode;
}>;
export declare const Else: React.FC<{
    children: ReactNode;
}>;
