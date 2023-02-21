import type {Rule} from "@unocss/core"
import { UnoCssTheme } from "../../types/types"

export const themeRules: Rule<UnoCssTheme>[] = [
    [/^theme-(.+)$/, ([_,theme], config)=> {
        const configTheme = config.theme.themes[theme]
        let variablesObj: {
            [variableName: string]: string
        } = {}

        Object.entries(configTheme).forEach(entry => {
            variablesObj[`--theme-${entry[0]}`]=entry[1]
        })

        return variablesObj
    }]
]