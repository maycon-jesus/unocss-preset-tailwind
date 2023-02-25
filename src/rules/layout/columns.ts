import { Rule } from "@unocss/core";
import { PresetConfig } from "../../types/types";

export function makeColumnsRules(config: PresetConfig): Rule[] {
    return [
        ...Object.entries(config.columns).map<Rule>(([name, value]) => {
            return [
                `columns-${name}`,
                {
                    'columns': value
                }
            ]
        }),
        [/^columns-(\d+)$/, ([_, cols]) => {
            return {
                columns: `${cols}`
            }
        }],
        [/^columns-\[(.+):(.+)\]$/, ([_, name, value]) => {
            return {
                [name]: value
            }
        }],
    ]
}