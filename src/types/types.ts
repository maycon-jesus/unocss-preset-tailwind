// Breakpoints
export type BreakpointsNames = 'xs'|'sm'|'md'|'lg'|'xl'

export type BreakpointsConfig = {
    [name in BreakpointsNames]: {
        min?: number,
        max?: number
    }
}

// Theme
export interface ThemesConfig {
    [themeName: string]: {
        [variableName: string]: string
    }
}

export interface UnoCssTheme {
    breakpoints: BreakpointsConfig,
    themes: ThemesConfig
}