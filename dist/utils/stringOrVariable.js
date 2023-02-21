"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringOrVariable = void 0;
function stringOrVariable(val) {
    if (val.startsWith('$')) {
        return `var(--theme-${val.slice(1)})`;
    }
    return val;
}
exports.stringOrVariable = stringOrVariable;
