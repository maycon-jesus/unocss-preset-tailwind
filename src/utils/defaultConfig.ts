import { PresetConfig } from "../types/types";
import colors from "./colors";

export default {
    // Customization
    screens:{
        'sm': 640,
        'md': 768,
        'lg': 1024,
        'xl': 1280,
        '2xl': 1536,
    },
    spacing: {
        '0': '0px',
        'px': '1px'
    },
    themes: {
        light: {
            ...colors
        }
    },

    // layout
    aspectRatio: {
        'auto': 'auto',
        'square': '1/1',
        'video': '16/9',
    },

    columns: {
        'auto': 'auto',
        '3xs': '16rem',
        '2xs': '18rem',
        'xs': '20rem',
        'sm': '24rem',
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
    },
} as PresetConfig