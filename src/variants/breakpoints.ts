import { PluginVariant, PresetConfig } from '../types/types';

export function screensVariant(
    matcher: string,
    theme: PresetConfig
): PluginVariant {
    return Object.keys(theme.screens).reduce<PluginVariant>(
        (p, screenName) => {
            if (!matcher.includes(`${screenName}:`)) return p;

            const screen = theme.screens[screenName];
            const queries: string[] = [];

            if (typeof screen === 'number') {
                queries.push(`(min-width: ${screen}px)`);
            } else {
                queries.push(`(min-width: ${screen.min}px)`);
            }

            p?.mediaQuery?.push(queries.join('and'))

            return p;
        },
        {
            mediaQuery: [],
        }
    );
}

export function screensOnlyVariant(
    matcher: string,
    theme: PresetConfig
): PluginVariant {
    return Object.keys(theme.screens).reduce<PluginVariant>(
        (p, screenName, index, screenNames) => {
            if (!matcher.includes(`${screenName}-only:`)) return p;

            const screen = theme.screens[screenName];
            const queries: string[] = [];

            if (typeof screen === 'number') {
                queries.push(`min-width: ${screen}px`);
            } else {
                queries.push(`min-width: ${screen.min}px`);
            }

            const nextScreen = theme.screens[screenNames[index + 1]]
            if (nextScreen) {
                if (typeof nextScreen === 'number') {
                    queries.push(`max-width: ${nextScreen - 1}px`);
                } else {
                    queries.push(`max-width: ${nextScreen.min - 1}px`);
                }
            }

            p?.mediaQuery?.push(...queries)

            return p;
        },
        {
            mediaQuery: [],
        }
    );
}
