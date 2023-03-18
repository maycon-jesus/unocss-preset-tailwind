import { Rule } from '@unocss/core';
import { PresetConfig } from '../../types/types';

export function makeBreakAfterRules(config: PresetConfig): Rule[] {
    return [
        [
            'break-after-auto',
            {
                'break-after': 'auto',
            },
        ],
        [
            'break-after-avoid',
            {
                'break-after': 'avoid',
            },
        ],
        [
            'break-after-all',
            {
                'break-after': 'all',
            },
        ],
        [
            'break-after-avoid-page',
            {
                'break-after': 'avoid-page',
            },
        ],
        [
            'break-after-page',
            {
                'break-after': 'page',
            },
        ],
        [
            'break-after-left',
            {
                'break-after': 'left',
            },
        ],
        [
            'break-after-right',
            {
                'break-after': 'right',
            },
        ],
        [
            'break-after-column',
            {
                'break-after': 'column',
            },
        ],
    ];
}
