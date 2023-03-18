import { Rule } from '@unocss/core';
import { PresetConfig } from '../../types/types';

export function makeBreakInsideRules(config: PresetConfig): Rule[] {
    return [
        [
            'break-inside-auto',
            {
                'break-inside': 'auto',
            },
        ],
        [
            'break-inside-avoid',
            {
                'break-inside': 'avoid',
            },
        ],
        [
            'break-inside-avoid-page',
            {
                'break-inside': 'avoid-page',
            },
        ],
        [
            'break-inside-avoid-column',
            {
                'break-inside': 'avoid-column',
            },
        ],
    ];
}
