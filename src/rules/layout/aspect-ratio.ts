import { Rule } from "@unocss/core";
import { PresetConfig } from "../../types/types";

export function makeAspectRatioRules(config: PresetConfig): Rule[] {
    return [
        ...Object.entries(config.aspectRatio).map<Rule>(([name,value]) => {
            return [
                name,
                {
                    'aspect-ratio': value
                }
            ]
        }),
        [/^aspect-\[(.+)\]$/, ([_, value]) => {
            return {
                'aspect-ratio': value
            }
        }]
    ]
}