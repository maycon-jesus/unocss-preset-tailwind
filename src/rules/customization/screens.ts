import type { Variant } from "@unocss/core"
import { PresetConfig } from "../../types/types"

export function screensVariants(): Variant<PresetConfig>[] {
    return [
        // Screen o high
        (matcher, c) => {
            const screensNames = Object.keys(c.theme.screens)
            if (!screensNames.some(str => matcher.startsWith(str + ':'))) return matcher;

            const name = matcher.split(':')[0]
            const screen = c.theme.screens[name]
            const queries: string[] = []

            if (typeof screen === 'number') {
                queries.push(`(min-width: ${screen}px)`)
            } else {
                queries.push(`(min-width: ${screen.min}px)`)
            }

            return {
                matcher: matcher.split(':').slice(1).join(':'),
                parent: `@media ${queries.join(' and ')}`,
                order: screensNames.indexOf(name)
            }
        },

        // Screen only
        (matcher, c) => {
            const screensNames = Object.keys(c.theme.screens)
            if (!screensNames.some(str => matcher.startsWith(str + '-only' + ':'))) return matcher;

            const name = matcher.split(':')[0].replace('-only', '')
            const screen = c.theme.screens[name]
            const queries: string[] = []

            const setMaxWidthOfNextScreen = () => {
                const nextScreenName = screensNames[screensNames.indexOf(name) + 1]
                if (nextScreenName) {
                    const nextScreen = c.theme.screens[nextScreenName]
                    if (typeof nextScreen === 'number') {
                        queries.push(`(max-width: ${nextScreen - 1}px)`)
                    } else if (nextScreen.min) {
                        queries.push(`(max-width: ${nextScreen.min - 1}px)`)
                    }
                }
            }

            if (typeof screen === 'number') {
                queries.push(`(min-width: ${screen}px)`)
                setMaxWidthOfNextScreen()
            } else {
                queries.push(`(min-width: ${screen.min}px)`)

                if (screen.max) {
                    queries.push(`(max-width: ${screen.max})px`)
                } else {
                    setMaxWidthOfNextScreen()
                }
            }

            return {
                matcher: matcher.split(':').slice(1).join(':'),
                parent: `@media ${queries.join(' and ')}`,
                order: screensNames.indexOf(name)
            }
        }
    ]
}