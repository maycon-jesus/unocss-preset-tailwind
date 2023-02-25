import type { UserShortcuts } from "@unocss/core"
import { PresetConfig } from "../../types/types"

export function containerShortcut(theme:PresetConfig): UserShortcuts {
    return {
        'container': Object.keys(theme.screens).map(screen => {
            const width = theme.screens[screen]
            let widthCss = ''

            if (typeof width === 'number') {
                widthCss = width+'px'
            } else {
                if (width.min) {
                    widthCss = width.min+'px'
                } else {
                    widthCss = '100vw'
                }
            }

            return `${screen}-only:[max-width:${widthCss}]`
        })
    }
}