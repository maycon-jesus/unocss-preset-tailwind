import type {Preset} from "@unocss/core"
import breakpoints from "./rules/layout/breakpoints"
import { themeRules } from "./rules/layout/theme"
import { BreakpointsConfig, ThemesConfig } from "./types/types"
import colors from "./utils/colors"

interface presetWindiCssOptions {
    themes?: ThemesConfig,
    breakpoints?: BreakpointsConfig
}

export const presetTailwind = (options:presetWindiCssOptions):Preset<any> => {
    if(!options.themes) options.themes = {}

    Object.keys(options.themes).forEach(themeName => {
        const nTheme = {}
        Object.assign(nTheme, colors, options.themes![themeName])
        options.themes![themeName]=nTheme
    })

    return {
        name: '@maycon-jesus/unocss-preset',
        theme: {
            breakpoints: options.breakpoints,
            themes: options.themes
        },
        rules: [
            ...themeRules
        ],
        variants: [
            ...breakpoints
        ]
    }
}