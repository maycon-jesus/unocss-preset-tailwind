"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.presetTailwind = void 0;
const theme_1 = require("./rules/layout/theme");
const presetTailwind = (options) => {
    return {
        name: '@maycon-jesus/unocss-preset',
        theme: {
            breakpoints: options.breakpoints,
            themes: options.themes
        },
        rules: [
            ...theme_1.themeRules
        ]
    };
};
exports.presetTailwind = presetTailwind;
