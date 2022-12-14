"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skela = void 0;
const react_1 = __importDefault(require("react"));
require("./index.css");
/**ReactSkela is a skeleton library used to animated placeholder that simulates the layout of a website while data is being loaded.*/
const Skela = ({ type = "line", width = "", height = "", borderRadius = "", color = "", animation = true, animationType = "wave", className = "", style = {} }) => {
    const classes = `skeleton ${type.toLocaleLowerCase()} ${className} ${animation ? animationType.toLocaleLowerCase() : ""}`;
    return (react_1.default.createElement("div", { className: 'skeleton-wrapper' },
        react_1.default.createElement("div", { className: classes, style: Object.assign({ width: width ? width : "", height: height ? height : "", borderRadius: borderRadius ? borderRadius : "", backgroundColor: color ? color : "#dddddd" }, style) })));
};
exports.Skela = Skela;
//# sourceMappingURL=Skela.js.map