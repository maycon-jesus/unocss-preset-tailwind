import { PluginVariant } from "../types/types";

export function hoverVariant(matcher: string):PluginVariant{
    if(!matcher.includes('hover:'))return {};

    return {
        pseudoClass: ['hover']
    }
}

export function focusVariant(matcher: string):PluginVariant{
    if(!matcher.includes('focus:'))return {};

    return {
        pseudoClass: ['focus']
    }
}

export function activeVariant(matcher: string):PluginVariant{
    if(!matcher.includes('active:'))return {};

    return {
        pseudoClass: ['active']
    }
}

export function firstVariant(matcher: string):PluginVariant{
    if(!matcher.includes('first:'))return {};

    return {
        pseudoClass: ['first-child']
    }
}

export function lastVariant(matcher: string):PluginVariant{
    if(!matcher.includes('last:'))return {};

    return {
        pseudoClass: ['last-child']
    }
}

export function oddVariant(matcher: string):PluginVariant{
    if(!matcher.includes('odd:'))return {};

    return {
        pseudoClass: ['nth-child(2n+1)']
    }
}

export function evenVariant(matcher: string):PluginVariant{
    if(!matcher.includes('even:'))return {};

    return {
        pseudoClass: ['nth-child(2n)']
    }
}

// FORM
export function disabledVariant(matcher: string):PluginVariant{
    if(!matcher.includes('disabled:'))return {};

    return {
        pseudoClass: ['disabled']
    }
}

export function invalidVariant(matcher: string):PluginVariant{
    if(!matcher.includes('invalid:'))return {};

    return {
        pseudoClass: ['invalid']
    }
}

export function requiredVariant(matcher: string):PluginVariant{
    if(!matcher.includes('required:'))return {};

    return {
        pseudoClass: ['required']
    }
}