export interface BreakpointsConfig {
    xs: {
        max: number;
    };
    sm: {
        min: number;
        max: number;
    };
    md: {
        min: number;
        max: number;
    };
    lg: {
        min: number;
        max: number;
    };
    xl: {
        min: number;
    };
}
export interface ThemesConfig {
    [themeName: string]: {
        [variableName: string]: string;
    };
}
export interface UnoCssTheme {
    breakpoints: BreakpointsConfig;
    themes: ThemesConfig;
}
