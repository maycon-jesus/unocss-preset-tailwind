import type { Preset } from "@unocss/core"
import { ArbitraryPropertiesRules } from "./rules/core/arbitraryValues"
import { themeRules } from "./rules/core/theme"
import { makeAspectRatioRules } from "./rules/layout/aspect-ratio"
import { makeColumnsRules } from "./rules/layout/columns"
import { containerShortcut } from "./rules/layout/container"
import { PresetPublicConfig } from "./types/types"
import { applyDefaults } from "./utils/applyDefaults"
import makeVariants from "./variants"

export const presetTailwind = (options: PresetPublicConfig): Preset<any> => {
    const theme = applyDefaults(options)

    return {
        name: '@maycon-jesus/unocss-preset',
        theme,
        rules: [
            // Core
            ...ArbitraryPropertiesRules,

            // Customization
            ...themeRules,

            // Layout
            ...makeAspectRatioRules(theme),
            ...makeColumnsRules(theme),
            ['bg-red', {
                'background-color': 'red'
            }],
            ['bg-blue', {
                'background-color': 'blue'
            }]
        ],
        variants: [
            makeVariants()
        ],
        shortcuts: {
            ...containerShortcut(theme)
        },
        layers: {
            'variant': 10
        }
    }
}