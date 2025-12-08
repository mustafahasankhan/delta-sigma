# Color Customization Guide

## How to Change the Website Colors

The dominant colors of your website can be customized in `config.json` under the `theme` section.

### Current Configuration

```json
{
  "theme": {
    "colors": {
      "primary": "237, 100%, 66%",
      "secondary": "235, 39%, 20%",
      "accent": "236, 100%, 78%"
    }
  }
}
```

### Color Format (HSL)

Colors use HSL format: `"Hue, Saturation%, Lightness%"`

- **Hue**: 0-360 (color wheel position)
- **Saturation**: 0-100% (color intensity)
- **Lightness**: 0-100% (brightness)

### Color Roles

- **Primary**: Main brand color (buttons, highlights, gradients)
- **Secondary**: Supporting color (dark elements)
- **Accent**: Accent color (gradient highlights)

### Popular Color Examples

#### Blue Theme (Current Default)
```json
"primary": "237, 100%, 66%",
"secondary": "235, 39%, 20%",
"accent": "236, 100%, 78%"
```

#### Red/Pink Theme
```json
"primary": "350, 100%, 66%",
"secondary": "345, 39%, 20%",
"accent": "355, 100%, 78%"
```

#### Green Theme
```json
"primary": "142, 76%, 56%",
"secondary": "140, 39%, 20%",
"accent": "145, 80%, 70%"
```

#### Purple Theme
```json
"primary": "270, 100%, 66%",
"secondary": "268, 39%, 20%",
"accent": "275, 100%, 78%"
```

#### Orange Theme
```json
"primary": "30, 100%, 60%",
"secondary": "28, 50%, 25%",
"accent": "35, 100%, 70%"
```

### Quick Color Picker

Use this HSL color picker to find your colors:
https://hslpicker.com/

Or use this chart:
- Red: 0°
- Orange: 30°
- Yellow: 60°
- Green: 120°
- Cyan: 180°
- Blue: 240°
- Purple: 280°
- Pink: 330°

### How to Apply

1. Open `config.json`
2. Find the `"theme"` section at the top
3. Change the HSL values for primary, secondary, and accent
4. Save the file
5. Refresh your browser

The colors will update automatically throughout the entire website!

### Tips

- Keep saturation high (70-100%) for vibrant colors
- Primary should be your main brand color
- Secondary should be darker for contrast
- Accent should be a lighter/brighter variation
- All three colors should be in the same color family for harmony

