import type { Preset } from "@unocss/core"
import { ArbitraryPropertiesRules } from "./rules/core/arbitraryValues"
import { screensVariants } from "./rules/customization/screens"
import { themeRules } from "./rules/customization/theme"
import { makeAspectRatioRules } from "./rules/layout/aspect-ratio"
import { makeColumnsRules } from "./rules/layout/columns"
import { containerShortcut } from "./rules/layout/container"
import { PresetPublicConfig } from "./types/types"
import { applyDefaults } from "./utils/applyDefaults"

export const presetTailwind = (options: Partial<PresetPublicConfig>): Preset<any> => {
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
            ...makeColumnsRules(theme)
        ],
        variants: [
            ...screensVariants()
        ],
        shortcuts: {
            ...containerShortcut(theme)
        },

    }
}