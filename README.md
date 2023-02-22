# WARNING!!!
## I'ts not ready. It is still under development.

# unocss-preset-tailwind
This is a [UnoCSS](https://github.com/unocss/unocss) preset based on [tailwindcss](https://tailwindcss.com) with multiple color themes.

## Progress status

### Configuration
| Feature | Status |
| --- | --- |
| Themes | 🚧 |
| Screens | 🚧 |
| Colors | ✅ |
| Spacing | ❌ |

### Layout (coming soon)
### Flexbox & Grid (coming soon)
### Spacing (coming soon)
### Sizing (coming soon)
### Typography (coming soon)
### Backgrounds (coming soon)
### Borders (coming soon)
### Effects (coming soon)
### Filters (coming soon)
### Tables (coming soon)
### Transitions & Animation (coming soon)
### Transforms (coming soon)
### Interactivity (coming soon)
### SVG (coming soon)
### Accessibility (coming soon)

---
## Features

- Multiple theme colors
- Infinite numbers for classes variations
  
  Example:
    ```
    .h-0 = height: 0px
    .h-4 = height: 1rem
    .h-4000 = height: 1000rem
    ```

---
## Installation

```
npm i unocss-preset-tailwind
```

```typescript
// vite.config.ts
import UnoCSS from '@unocss/vite'
import { presetTailwind } from "unocss-preset-tailwind"

export default {
  plugins: [
    UnoCSS({
      presets: [
        presetTailwind({
            // configure preset
        })
      ],
    }),
  ],
}
```