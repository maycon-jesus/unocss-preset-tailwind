import { Variant } from "@unocss/core";
import { activeVariant, disabledVariant, evenVariant, firstVariant, focusVariant, hoverVariant, invalidVariant, lastVariant, oddVariant, requiredVariant } from "./pseudoClass";
import type { PluginVariant, PresetConfig } from "../types/types";
import { screensOnlyVariant, screensVariant } from "./breakpoints";
import { afterVariant, backdropVariant, beforeVariant, fileVariant, firstLetterVariant, firstLineVariant, markerVariant, placeholderVariant, selectionVariant } from "./pseudoElements";
import { contrastMoreVariant, darkVariant, lightVariant, motionReduceVariant, motionSafeVariant, orientationLandscapeVariant, orientationPortraitVariant, printVariant } from "./media";
import { makeAriaVariants, makeDataVariants, openVariant } from "./attributeSelectors";

export default function makeVariants(): Variant<PresetConfig> {
    return (matcher, c) => {
        const config: Required<PluginVariant> = {
            mediaQuery: [],
            selector: [],
            selectorComplements: [],
            pseudoClass: [],
            pseudoElement: [],
            sort: 0
        }

        const resolvePluginVariantReturn = (r: PluginVariant) => {
            if (r?.mediaQuery) config.mediaQuery.push(...r.mediaQuery)
            if (r?.selector) config.selector.push(...r.selector)
            if (r?.selectorComplements) config.selectorComplements.push(...r.selectorComplements)
            if (r?.pseudoClass) config.pseudoClass.push(...r.pseudoClass)
            if (r?.pseudoElement) config.pseudoElement.push(...r.pseudoElement)
            if (r?.sort) config.sort = r.sort
        }

        // Screens
        resolvePluginVariantReturn(screensVariant(matcher, c.theme))
        resolvePluginVariantReturn(screensOnlyVariant(matcher, c.theme))

        // Pseudo class
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

        // Pseudo elements
        resolvePluginVariantReturn(afterVariant(matcher))
        resolvePluginVariantReturn(beforeVariant(matcher))
        resolvePluginVariantReturn(placeholderVariant(matcher))
        resolvePluginVariantReturn(fileVariant(matcher))
        resolvePluginVariantReturn(markerVariant(matcher))
        resolvePluginVariantReturn(firstLetterVariant(matcher))
        resolvePluginVariantReturn(firstLineVariant(matcher))
        resolvePluginVariantReturn(backdropVariant(matcher))
        resolvePluginVariantReturn(selectionVariant(matcher))

        // Media
        resolvePluginVariantReturn(motionReduceVariant(matcher))
        resolvePluginVariantReturn(motionSafeVariant(matcher))
        resolvePluginVariantReturn(contrastMoreVariant(matcher))
        resolvePluginVariantReturn(orientationLandscapeVariant(matcher))
        resolvePluginVariantReturn(orientationPortraitVariant(matcher))
        resolvePluginVariantReturn(printVariant(matcher))
        resolvePluginVariantReturn(darkVariant(matcher))
        resolvePluginVariantReturn(lightVariant(matcher))

        // Aria variants
        const ariaVariants = makeAriaVariants(c.theme)
        for (let i = 0; i < ariaVariants.length; i++) {
            resolvePluginVariantReturn(ariaVariants[i](matcher))
        }
        const dataVariants = makeDataVariants(c.theme)
        for (let i = 0; i < dataVariants.length; i++) {
            resolvePluginVariantReturn(dataVariants[i](matcher))
        }
        resolvePluginVariantReturn(openVariant(matcher))

        return {
            matcher: matcher.split(':').pop() as any,
            selector(s) {
                s = s += config.selectorComplements.join('') // Adiciona seletores complementares
                s = s += config.pseudoClass.map(str => ':' + str).join('') // Adiciona pseudo classes
                s = s += config.pseudoElement.map(str => '::' + str).join('') // Adiciona pseudo elementos

                if (config.selector.length > 0) {
                    return config.selector.map(selector => {
                        return selector.replace('%%SELECTOR%%', s)
                    }).join(',')
                } else {
                    return s
                }
            },
            parent: `@media ${config.mediaQuery.map(media => `(${media})`).join(' and ')}`
        }
    }
}