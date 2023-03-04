import { Variant } from "@unocss/core";
import { activeVariant, disabledVariant, evenVariant, firstVariant, focusVariant, hoverVariant, invalidVariant, lastVariant, oddVariant, requiredVariant } from "./pseudoClass";
import type { PluginVariant, PresetConfig } from "../types/types";
import { screensOnlyVariant, screensVariant } from "./breakpoints";

export default function makeVariants(): Variant<PresetConfig>{
    return (matcher,c)=>{
        const config:Required<PluginVariant> = {
            mediaQuery: [],
            selector: [],
            pseudoClass: [],
            pseudoElement: []
        }

        const resolvePluginVariantReturn = (r: PluginVariant) => {
            if(r?.mediaQuery) config.mediaQuery.push(...r.mediaQuery)
            if(r?.selector) config.selector.push(...r.selector)
            if(r?.pseudoClass) config.pseudoClass.push(...r.pseudoClass)
            if(r?.pseudoElement) config.pseudoElement.push(...r.pseudoElement)
        }

        // Screens
        resolvePluginVariantReturn(screensVariant(matcher, c.theme))
        resolvePluginVariantReturn(screensOnlyVariant(matcher, c.theme))

        resolvePluginVariantReturn(hoverVariant(matcher))
        resolvePluginVariantReturn(focusVariant(matcher))
        resolvePluginVariantReturn(activeVariant(matcher))
        resolvePluginVariantReturn(firstVariant(matcher))
        resolvePluginVariantReturn(lastVariant(matcher))
        resolvePluginVariantReturn(oddVariant(matcher))
        resolvePluginVariantReturn(evenVariant(matcher))
        resolvePluginVariantReturn(disabledVariant(matcher))
        resolvePluginVariantReturn(invalidVariant(matcher))
        resolvePluginVariantReturn(requiredVariant(matcher))

        return {
            matcher: matcher.split(':').pop() as any,
            selector(s){
                s=s+=config.pseudoClass.map(str => ':'+str).join('')
                s=s+=config.pseudoElement.map(str => '::'+str).join('')

                if(config.selector.length>0){
                    return config.selector.map(selector => {
                        return selector.replace('%%SELECTOR%%', s)
                    }).join(',')
                }else{
                    return s
                }
            },
            parent: `@media ${config.mediaQuery.map(media => `(${media})`).join('or')}`
        }
    }
}