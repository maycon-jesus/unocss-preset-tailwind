import { Rule } from '@unocss/core';
import { PresetConfig } from '../../types/types';

export function makeBoxDecorationBreakRules(config: PresetConfig): Rule[] {
    return [
        [
            'box-decoration-clone',
            {
                'box-decoration-break': 'clone',
            },
        ],
        [
            'box-decoration-slice',
            {
                'box-decoration-break': 'slice',
            },
        ],
    ];
}
