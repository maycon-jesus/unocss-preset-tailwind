import type { Variant } from "@unocss/core"
import { BreakpointsNames, UnoCssTheme } from "../../types/types"

function createBreakpoint(name: BreakpointsNames): Variant<UnoCssTheme> {
    return (matcher, c) => {
        if (!matcher.startsWith(`${name}:`) && !matcher.startsWith(`${name}-`)) return matcher

        const hasBreakpointVariation = matcher.startsWith(`${name}-`)

        const breakpoint = c.theme.breakpoints[name]
        const queries: string[] = []

        if (hasBreakpointVariation) {
            const breakpointVariation = matcher.replace(`${name}-`, '').slice(0, 2) as BreakpointsNames | 'up' | 'dw'
            if (breakpointVariation == 'up') {
                queries.push(`(min-width: ${breakpoint.min || 0}px)`)
            } else if (breakpointVariation == 'dw') {
                queries.push(`(max-width: ${breakpoint.max || 0}px)`)
            } else {
                const breakpointEnd = c.theme.breakpoints[breakpointVariation]
                queries.push(`(min-width: ${breakpoint.min || 0}px)`)
                if (breakpointEnd.max) {
                    queries.push(`(max-width: ${breakpointEnd.max}px)`)
                }
            }
        } else {
            queries.push(`(min-width: ${breakpoint.min || 0}px)`)

            if (breakpoint.max) {
                queries.push(`(max-width: ${breakpoint.max}px)`)
            }
        }

        return {
            matcher: matcher.split(':').slice(1).join(':'),
            parent: `@media ${queries.join(' and ')}`
        }
    }
}

export default [
    createBreakpoint('xs'),
    createBreakpoint('sm'),
    createBreakpoint('md'),
    createBreakpoint('lg'),
    createBreakpoint('xl'),
] as Variant<UnoCssTheme>[]