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
import React from 'react';
import { Skela } from './Skela';
/**List is configurable with the ReactSkela (use ReactSkela propeties in to ReactSkelaTable) */
export const SkelaCard = (_a) => {
    var { squareWidth = "250px", squareHeight = "250px", title = true, titleWidth = "50%", titleHeight = "16px", subTitle = true, subTitleWidth = "100%", subTitleHeight = "16px", cardClassName = "", cradCount = 1, cardGap = "10px", cardStyle = {} } = _a, rest = __rest(_a, ["squareWidth", "squareHeight", "title", "titleWidth", "titleHeight", "subTitle", "subTitleWidth", "subTitleHeight", "cardClassName", "cradCount", "cardGap", "cardStyle"]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'card-container' }, Array(cradCount).fill(null).map((item, cIndex) => {
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { key: cIndex, className: 'react-skela-card', style: Object.assign({ padding: cardGap }, cardStyle) },
                    React.createElement("div", { className: 'card' },
                        React.createElement(Skela, Object.assign({ type: 'square', width: squareWidth, height: squareHeight }, rest))),
                    React.createElement("div", { className: 'title' }, title && React.createElement(Skela, Object.assign({ width: titleWidth, height: titleHeight }, rest))),
                    React.createElement("div", { className: 'sub-title' }, subTitle && React.createElement(Skela, Object.assign({ width: subTitleWidth, height: subTitleHeight }, rest))))));
        }))));
};
//# sourceMappingURL=SkelaCard.js.map