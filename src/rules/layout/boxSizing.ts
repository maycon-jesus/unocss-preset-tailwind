import { Rule } from '@unocss/core';
import { PresetConfig } from '../../types/types';

export function makeBoxSizingRules(config: PresetConfig): Rule[] {
    return [
        [
            'box-border',
            {
                'box-sizing': 'border-box',
            },
        ],
        [
            'box-content',
            {
                'box-sizing': 'content-box',
            },
        ],
    ];
}
