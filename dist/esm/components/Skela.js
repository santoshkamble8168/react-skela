import React from 'react';
import "./index.css";
/**ReactSkela is a skeleton library used to animated placeholder that simulates the layout of a website while data is being loaded.*/
export const Skela = ({ type = "line", width = "", height = "", borderRadius = "", color = "", animation = true, animationType = "wave", className = "", style = {} }) => {
    const classes = `skeleton ${type.toLocaleLowerCase()} ${className} ${animation ? animationType.toLocaleLowerCase() : ""}`;
    return (React.createElement("div", { className: 'skeleton-wrapper' },
        React.createElement("div", { className: classes, style: Object.assign({ width: width ? width : "", height: height ? height : "", borderRadius: borderRadius ? borderRadius : "", backgroundColor: color ? color : "#dddddd" }, style) })));
};
//# sourceMappingURL=Skela.js.map