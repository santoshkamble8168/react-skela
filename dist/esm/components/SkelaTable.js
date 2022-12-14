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
/**ReactSkelaTable is configurable with the ReactSkela (use ReactSkela propeties in to ReactSkelaTable) */
export const SkelaTable = (_a) => {
    var { cols = 0, rows = 10, tableWidth = "100%", rowGap = "10px" } = _a, rest = __rest(_a, ["cols", "rows", "tableWidth", "rowGap"]);
    return (React.createElement("div", { className: 'react-skela-table', style: { width: tableWidth } }, Array(rows).fill(null).map((row, rIndex) => {
        return (React.createElement("div", { className: '__row', key: rIndex }, cols ?
            Array(cols).fill(null).map((clo, cIndex) => {
                return (React.createElement("div", { className: '__col', style: { padding: rowGap }, key: cIndex },
                    React.createElement(Skela, Object.assign({ height: '20px' }, rest))));
            }) :
            (React.createElement("div", { className: '__col', style: { paddingBottom: rowGap } },
                React.createElement(Skela, Object.assign({ height: '20px' }, rest)),
                " "))));
    })));
};
//# sourceMappingURL=SkelaTable.js.map