import { Rule } from '@unocss/core';
import { PresetConfig } from '../../types/types';

export function makeFloatRules(config: PresetConfig): Rule[] {
    return [
        [
            'float-right',
            {
                float: 'right',
            },
        ],
        [
            'float-left',
            {
                float: 'left',
            },
        ],
        [
            'float-none',
            {
                float: 'none',
            },
        ],
    ];
}
