import { PluginVariant } from "../types/types";
import { PresetConfig } from "../types/types";

export function makeAriaVariants(theme: PresetConfig): ((matcher: string)=>PluginVariant)[] {
    return Object.entries(theme.aria).map(([variantName,variantValue])=> {
        return (matcher: string) => {
            if(!matcher.includes(`aria-${variantName}:`))return {};
            return {
                selectorComplements: [
                    `[aria-${variantValue}]`
                ]
            }
        }
    })
}

export function makeDataVariants(theme: PresetConfig): ((matcher: string)=>PluginVariant)[] {
    return  [
        (matcher) => {
            const regex = /data-\[(.+)=(.+)\]:/
            if(!regex.test(matcher))return {};
            const match = regex.exec(matcher)

            return {
                selectorComplements: [
                    `[${match?.[1]}=${match?.[2]}]`
                ]
            }
        },
        ...Object.entries(theme.data).map(([variantName,variantValue])=> {
            return (matcher: string) => {
                if(!matcher.includes(`data-${variantName}:`))return {};
                return {
                    selectorComplements: [
                        `[data-${variantValue}]`
                    ]
                }
            }
        })
    ]
}

export function openVariant(matcher: string): PluginVariant {
    if(!matcher.includes('open:')) return {}
    return {
        selectorComplements: ['[open]']
    }
}