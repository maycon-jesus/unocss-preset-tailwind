// Screens
export type ScreensConfig = {
    [name: string]: {
        min: number,
        max?: number
    } | number
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

// Columns config
export type ColumnsRulesConfig = {
    [name: string]: string
}

// RuleConfigBase
export type RuleConfigBase = {
    [name: string]: string
}

export type PresetConfig = {
    themes: ThemesConfig,
    screens: ScreensConfig,
    spacing: SpacingConfig,
    columns: ColumnsRulesConfig,
    aspectRatio: RuleConfigBase,
    aria: RuleConfigBase,
    data: RuleConfigBase
}

export interface PresetPublicConfig extends PresetConfig{
    extend?: PresetConfig
}

// Variant
export type PluginVariant = {
    selector?: string[],
    selectorComplements?: string[],
    pseudoClass?: string[],
    pseudoElement?: string[],
    mediaQuery?: string[],
    sort?: number
}