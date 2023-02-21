import type {Rule} from "@unocss/core"

export const themeRules: Rule<any>[] = [
    [/^theme-(.+)$/, ([_,theme], config)=> {
        const configTheme = config.theme.themes[theme]
        let variablesObj = {}

        Object.entries(configTheme).forEach(entry => {
            variablesObj[`--theme-${entry[0]}`]=entry[1]
        })

        return variablesObj
    }]
]