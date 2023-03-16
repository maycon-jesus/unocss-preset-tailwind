import { PluginVariant } from "../types/types";

export function motionReduceVariant(matcher:string): PluginVariant{
    if(!matcher.includes('motion-reduce:')) return {}

    return {
        mediaQuery: ['prefers-reduced-motion']
    }
}

export function motionSafeVariant(matcher:string): PluginVariant{
    if(!matcher.includes('motion-safe:')) return {}

    return {
        mediaQuery: ['prefers-reduced-motion: no-preference']
    }
}

export function contrastMoreVariant(matcher:string): PluginVariant{
    if(!matcher.includes('contrast-more:')) return {}

    return {
        mediaQuery: ['prefers-contrast: more']
    }
}

export function orientationLandscapeVariant(matcher:string): PluginVariant{
    if(!matcher.includes('landscape:')) return {}

    return {
        mediaQuery: ['orientation: landscape']
    }
}

export function orientationPortraitVariant(matcher:string): PluginVariant{
    if(!matcher.includes('portrait:')) return {}

    return {
        mediaQuery: ['orientation: portrait']
    }
}

export function printVariant(matcher:string): PluginVariant{
    if(!matcher.includes('print:')) return {}

    return {
        mediaQuery: ['print']
    }
}

export function lightVariant(matcher:string): PluginVariant{
    if(!matcher.includes('light:')) return {}

    return {
        mediaQuery: ['prefers-color-scheme: light']
    }
}

export function darkVariant(matcher:string): PluginVariant{
    if(!matcher.includes('dark:')) return {}

    return {
        mediaQuery: ['prefers-color-scheme: dark']
    }
}