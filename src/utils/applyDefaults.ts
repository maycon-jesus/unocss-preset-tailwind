import { PresetPublicConfig, PresetConfig } from "../types/types";
import defaultConfig from "./defaultConfig";

export function applyDefaults(obj: PresetPublicConfig): Required<PresetConfig> {
    const nObject: Partial<PresetConfig> = {}

    // ===/ CUSTOMIZATIONS /===

    // Screens
    nObject.screens = obj.screens || {
        ...defaultConfig.screens,
        ...obj.extend?.screens
    }

    // Screens
    nObject.spacing = obj.spacing || {
        ...defaultConfig.spacing,
        ...obj.extend?.spacing
    }

    // Themes
    nObject.themes = obj.themes || {
        ...defaultConfig.themes,
        ...obj.extend?.themes
    }

    // ===/ LAYOUT /===

    // Aspect ratio
    nObject.aspectRatio = obj.aspectRatio || {
        ...defaultConfig.aspectRatio,
        ...obj.extend?.aspectRatio
    }

    // Columns
    nObject.columns = obj.columns || {
        ...defaultConfig.columns,
        ...obj.extend?.columns
    }

    // ===/ VARIANT ARIA /===
    nObject.aria = obj.aria || {
        ...defaultConfig.aria,
        ...obj.extend?.aria
    }

    // ===/ VARIANT DATA /===
    nObject.data = obj.data || {
        ...defaultConfig.data,
        ...obj.extend?.data
    }

    return nObject as Required<PresetConfig>
}