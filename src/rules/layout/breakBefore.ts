import { Rule } from '@unocss/core';
import { PresetConfig } from '../../types/types';

export function makeBreakBeforeRules(config: PresetConfig): Rule[] {
    return [
        [
            'break-before-auto',
            {
                'break-before': 'auto',
            },
        ],
        [
            'break-before-avoid',
            {
                'break-before': 'avoid',
            },
        ],
        [
            'break-before-all',
            {
                'break-before': 'all',
            },
        ],
        [
            'break-before-avoid-page',
            {
                'break-before': 'avoid-page',
            },
        ],
        [
            'break-before-page',
            {
                'break-before': 'page',
            },
        ],
        [
            'break-before-left',
            {
                'break-before': 'left',
            },
        ],
        [
            'break-before-right',
            {
                'break-before': 'right',
            },
        ],
        [
            'break-before-column',
            {
                'break-before': 'column',
            },
        ],
    ];
}
