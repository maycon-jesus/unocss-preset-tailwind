import { PluginVariant } from "../types/types";

export function afterVariant(matcher:string): PluginVariant{
    if(!matcher.includes('after:')) return {}

    return {
        pseudoElement: ['after']
    }
}

export function beforeVariant(matcher:string): PluginVariant{
    if(!matcher.includes('before:')) return {}

    return {
        pseudoElement: ['before']
    }
}

export function placeholderVariant(matcher:string): PluginVariant{
    if(!matcher.includes('placeholder:')) return {}

    return {
        pseudoElement: ['placeholder']
    }
}

export function fileVariant(matcher:string): PluginVariant{
    if(!matcher.includes('file:')) return {}

    return {
        pseudoElement: ['file-selector-button']
    }
}

export function markerVariant(matcher:string): PluginVariant{
    if(!matcher.includes('marker:')) return {}

    return {
        pseudoElement: ['marker']
    }
}

export function firstLetterVariant(matcher:string): PluginVariant{
    if(!matcher.includes('first-letter:')) return {}

    return {
        pseudoElement: ['first-letter']
    }
}

export function firstLineVariant(matcher:string): PluginVariant{
    if(!matcher.includes('first-line:')) return {}

    return {
        pseudoElement: ['first-line']
    }
}

export function backdropVariant(matcher:string): PluginVariant{
    if(!matcher.includes('backdrop:')) return {}

    return {
        pseudoElement: ['backdrop']
    }
}

export function selectionVariant(matcher:string): PluginVariant{
    if(!matcher.includes('selection:')) return {}

    return {
        pseudoElement: ['selection']
    }
}