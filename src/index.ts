import type { Preset } from '@unocss/core';
import { ArbitraryPropertiesRules } from './rules/core/arbitraryValues';
import { themeRules } from './rules/core/theme';
import { makeAspectRatioRules } from './rules/layout/aspect-ratio';
import { makeBoxDecorationBreakRules } from './rules/layout/boxDecorationBreak';
import { makeBoxSizingRules } from './rules/layout/boxSizing';
import { makeBreakAfterRules } from './rules/layout/breakAfter';
import { makeBreakBeforeRules } from './rules/layout/breakBefore';
import { makeBreakInsideRules } from './rules/layout/breakInside';
import { makeColumnsRules } from './rules/layout/columns';
import { containerShortcut } from './rules/layout/container';
import { makeDisplayRules } from './rules/layout/display';
import { makeFloatRules } from './rules/layout/float';
import { PresetPublicConfig } from './types/types';
import { applyDefaults } from './utils/applyDefaults';
import makeVariants from './variants';

export const presetTailwind = (options: PresetPublicConfig): Preset<any> => {
    const theme = applyDefaults(options);

    return {
        name: '@maycon-jesus/unocss-preset',
        theme,
        rules: [
            // Core
            ...ArbitraryPropertiesRules,

            // Customization
            ...themeRules,

            // Layout
            ...makeAspectRatioRules(theme),
            ...makeColumnsRules(theme),
            ...makeBoxDecorationBreakRules(theme),
            ...makeBoxSizingRules(theme),
            ...makeBreakAfterRules(theme),
            ...makeBreakBeforeRules(theme),
            ...makeBreakInsideRules(theme),
            ...makeDisplayRules(theme),
            ...makeFloatRules(theme),
            [
                'bg-red',
                {
                    'background-color': 'red',
                },
            ],
            [
                'bg-blue',
                {
                    'background-color': 'blue',
                },
            ],
        ],
        variants: [makeVariants()],
        shortcuts: {
            ...containerShortcut(theme),
        },
        layers: {
            variant: 10,
        },
    };
};
