"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.themeRules = void 0;
exports.themeRules = [
    [/^theme-(.+)$/, ([_, theme], config) => {
            const configTheme = config.theme.themes[theme];
            let variablesObj = {};
            Object.entries(configTheme).forEach(entry => {
                variablesObj[`--theme-${entry[0]}`] = entry[1];
            });
            return variablesObj;
        }]
];
