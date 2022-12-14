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
exports.SkelaTable = void 0;
const react_1 = __importDefault(require("react"));
const Skela_1 = require("./Skela");
/**ReactSkelaTable is configurable with the ReactSkela (use ReactSkela propeties in to ReactSkelaTable) */
const SkelaTable = (_a) => {
    var { cols = 0, rows = 10, tableWidth = "100%", rowGap = "10px" } = _a, rest = __rest(_a, ["cols", "rows", "tableWidth", "rowGap"]);
    return (react_1.default.createElement("div", { className: 'react-skela-table', style: { width: tableWidth } }, Array(rows).fill(null).map((row, rIndex) => {
        return (react_1.default.createElement("div", { className: '__row', key: rIndex }, cols ?
            Array(cols).fill(null).map((clo, cIndex) => {
                return (react_1.default.createElement("div", { className: '__col', style: { padding: rowGap }, key: cIndex },
                    react_1.default.createElement(Skela_1.Skela, Object.assign({ height: '20px' }, rest))));
            }) :
            (react_1.default.createElement("div", { className: '__col', style: { paddingBottom: rowGap } },
                react_1.default.createElement(Skela_1.Skela, Object.assign({ height: '20px' }, rest)),
                " "))));
    })));
};
exports.SkelaTable = SkelaTable;
//# sourceMappingURL=SkelaTable.js.map