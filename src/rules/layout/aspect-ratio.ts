import { Rule } from "@unocss/core";
import { PresetConfig } from "../../types/types";

export function makeAspectRatioRules(config: PresetConfig): Rule[] {
    return [
        ['aspect-auto', {
            'aspect-ratio': 'auto'
        }],
        ['aspect-square', {
            'aspect-ratio': '1 / 1'
        }],
        ['aspect-video', {
            'aspect-ratio': '16 / 9'
        }],
        [/^aspect-(\d+)-(\d+)$/, ([_, aspect1, aspect2]) => {
            return {
                'aspect-ratio': `${aspect1} / ${aspect2}`
            }
        }]
    ]
}