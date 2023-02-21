import type {Preset} from "@unocss/core"
import { themeRules } from "./rules/layout/theme"
import { BreakpointsConfig, ThemesConfig } from "./types/types"

interface presetWindiCssOptions {
    themes?: ThemesConfig,
    breakpoints?: BreakpointsConfig
}

export const presetTailwind = (options:presetWindiCssOptions):Preset<any> => {
    return {
        name: '@maycon-jesus/unocss-preset',
        theme: {
            breakpoints: options.breakpoints,
            themes: options.themes
        },
        rules: [
            ...themeRules
        ]
    }
}