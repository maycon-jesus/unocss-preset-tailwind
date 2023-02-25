import type { Rule } from "@unocss/core"
import { PresetConfig } from "../../types/types"

export const themeRules: Rule<PresetConfig>[] = [
    [/^theme-(.+)$/, ([_, theme], config) => {
        const configTheme = config.theme.themes[theme]
        let variablesObj: {
            [variableName: string]: string
        } = {}

        Object.entries(configTheme).forEach(entry => {
            if (entry[1] instanceof Object && typeof entry[1] !== 'string') {
                Object.entries(entry[1]).forEach(([gradient, value]) => {
                    variablesObj[`--theme-${entry[0]}-${gradient}`] = value
                })
            } else {
                variablesObj[`--theme-${entry[0]}`] = entry[1]
            }
        })

        return variablesObj
    }]
]