import { PluginVariant, PresetConfig } from '../types/types';

export function screensVariant(
    matcher: string,
    config: PresetConfig
): PluginVariant {
    const screensNames = Object.keys(config.screens);
    if (!screensNames.some((str) => matcher.startsWith(str + ':'))) return {};

    const name = matcher.split(':')[0];
    const screen = config.screens[name];
    const queries: string[] = [];

    if (typeof screen === 'number') {
        queries.push(`(min-width: ${screen}px)`);
    } else {
        queries.push(`(min-width: ${screen.min}px)`);
    }

    return {
        mediaQuery: queries,
        sort: screensNames.indexOf(name),
    };
}

export function screensOnlyVariant(
    matcher: string,
    config: PresetConfig
): PluginVariant {
    const screensNames = Object.keys(config.screens);
    if (!screensNames.some((str) => matcher.startsWith(str + '-only:')))
        return {};

    const name = matcher.split(':')[0].replace('-only', '');
    const screen = config.screens[name];
    const queries: string[] = [];

    const setMaxWidthOfNextScreen = () => {
        const nextScreenName = screensNames[screensNames.indexOf(name) + 1];
        if (nextScreenName) {
            const nextScreen = config.screens[nextScreenName];
            if (typeof nextScreen === 'number') {
                queries.push(`(max-width: ${nextScreen - 1}px)`);
            } else if (nextScreen.min) {
                queries.push(`(max-width: ${nextScreen.min - 1}px)`);
            }
        }
    };

    if (typeof screen === 'number') {
        queries.push(`(min-width: ${screen}px)`);
        setMaxWidthOfNextScreen();
    } else {
        queries.push(`(min-width: ${screen.min}px)`);

        if (screen.max) {
            queries.push(`(max-width: ${screen.max})px`);
        } else {
            setMaxWidthOfNextScreen();
        }
    }

    return {
        mediaQuery: queries,
        sort: screensNames.indexOf(name),
    };
}
