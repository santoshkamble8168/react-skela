import React from 'react';
import "./index.css";
export interface PropsType {
    /** 'Line' is the default skeleton type */
    type?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
    color?: string;
    /** animation default is true*/
    animation?: boolean;
    animationType?: "wave" | "pulse";
    className?: string;
    style?: React.CSSProperties;
}
/**ReactSkela is a skeleton library used to animated placeholder that simulates the layout of a website while data is being loaded.*/
export declare const Skela: ({ type, width, height, borderRadius, color, animation, animationType, className, style }: PropsType) => JSX.Element;
