// Screens
export type ScreensConfig = {
    [name: string]: {
        min?: string,
        max?: string
    } | string
}

// Theme
export interface ThemesConfig {
    [themeName: string]: {
        [variableName: string]: string | {
            [colorGradient: string]: string
        }
    }
}

// Spacing config
export interface SpacingConfig {
    [spacingName: string]: string
}

export interface UnoCssTheme {
    themes: ThemesConfig,
    screens: ScreensConfig,
    spacing: SpacingConfig
}