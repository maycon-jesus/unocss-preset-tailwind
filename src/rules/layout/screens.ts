import type { Variant } from "@unocss/core"
import { UnoCssTheme } from "../../types/types"

export function screensVariants(): Variant<UnoCssTheme> {
    return (matcher, c) => {
        const screensNames = Object.keys(c.theme.screens)
        if (!screensNames.some(str => matcher.startsWith(str + ':'))) return matcher;

        const name = matcher.split(':')[0]
        const screen = c.theme.screens[name]

        const queries: string[] = []

        if (typeof screen === 'string') {
            queries.push(`(min-width: ${screen})`)
        } else {
            if (screen.min) {
                queries.push(`(min-width: ${screen.min})`)
            }
            if (screen.max) {
                queries.push(`(max-width: ${screen.max})`)
            }
        }

        return {
            matcher: matcher.split(':').slice(1).join(':'),
            parent: `@media ${queries.join(' and ')}`,
            order: screensNames.indexOf(name)
        }
    }
}