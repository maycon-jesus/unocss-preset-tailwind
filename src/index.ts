import type {Preset} from "@unocss/core"
import { screensVariants } from "./rules/layout/screens"
import { themeRules } from "./rules/layout/theme"
import { ScreensConfig, SpacingConfig, ThemesConfig, UnoCssTheme } from "./types/types"
import colors from "./utils/colors"

interface presetWindiCssOptions {
    themes?: ThemesConfig,
    screens?: ScreensConfig,
    spacing?: SpacingConfig
}

export const presetTailwind = (options:presetWindiCssOptions):Preset<UnoCssTheme> => {
    if(!options.themes) options.themes = {}
    if(!options.spacing) options.spacing = {}
    if(!options.screens) options.screens = {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
    }

    Object.keys(options.themes).forEach(themeName => {
        const nTheme = {}
        Object.assign(nTheme, colors, options.themes![themeName])
        options.themes![themeName]=nTheme
    })

    return {
        name: '@maycon-jesus/unocss-preset',
        theme: {
            screens: options.screens,
            themes: options.themes,
            spacing: options.spacing
        },
        rules: [
            ...themeRules
        ],
        variants: [
            screensVariants()
        ]
    }
}