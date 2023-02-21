import type { Preset } from "@unocss/core";
import { BreakpointsConfig, ThemesConfig } from "./types/types";
interface presetWindiCssOptions {
    themes?: ThemesConfig;
    breakpoints?: BreakpointsConfig;
}
export declare const presetTailwind: (options: presetWindiCssOptions) => Preset<any>;
export {};
