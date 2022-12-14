"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkelaCard = void 0;
const react_1 = __importDefault(require("react"));
const Skela_1 = require("./Skela");
/**List is configurable with the ReactSkela (use ReactSkela propeties in to ReactSkelaTable) */
const SkelaCard = (_a) => {
    var { squareWidth = "250px", squareHeight = "250px", title = true, titleWidth = "50%", titleHeight = "16px", subTitle = true, subTitleWidth = "100%", subTitleHeight = "16px", cardClassName = "", cradCount = 1, cardGap = "10px", cardStyle = {} } = _a, rest = __rest(_a, ["squareWidth", "squareHeight", "title", "titleWidth", "titleHeight", "subTitle", "subTitleWidth", "subTitleHeight", "cardClassName", "cradCount", "cardGap", "cardStyle"]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'card-container' }, Array(cradCount).fill(null).map((item, cIndex) => {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { key: cIndex, className: 'react-skela-card', style: Object.assign({ padding: cardGap }, cardStyle) },
                    react_1.default.createElement("div", { className: 'card' },
                        react_1.default.createElement(Skela_1.Skela, Object.assign({ type: 'square', width: squareWidth, height: squareHeight }, rest))),
                    react_1.default.createElement("div", { className: 'title' }, title && react_1.default.createElement(Skela_1.Skela, Object.assign({ width: titleWidth, height: titleHeight }, rest))),
                    react_1.default.createElement("div", { className: 'sub-title' }, subTitle && react_1.default.createElement(Skela_1.Skela, Object.assign({ width: subTitleWidth, height: subTitleHeight }, rest))))));
        }))));
};
exports.SkelaCard = SkelaCard;
//# sourceMappingURL=SkelaCard.js.map