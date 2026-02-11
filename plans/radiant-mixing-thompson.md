# Background Gradient Plan

## Context
The page currently has a plain white background (`background-color: white`). The user wants a soft gradient to make it look more visually appealing. The existing color theme uses powder blue (`#B0E0E6`) as the primary accent color.

## Changes

### File: `style.css` (line 5-8)

Change the `body` style from:
```css
body {
  background-color: white;
  color: #333333;
}
```

To a soft gradient that flows from a very light blue-white at the top to a subtle lavender-white at the bottom, complementing the existing powder blue theme:

```css
body {
  background: linear-gradient(135deg, #f0f4ff 0%, #e8f4f8 40%, #f5eef8 100%);
  min-height: 100vh;
  color: #333333;
}
```

This creates a gentle diagonal gradient:
- `#f0f4ff` - very light blue (top-left)
- `#e8f4f8` - light cyan/powder blue tint (middle) - matches the #B0E0E6 theme
- `#f5eef8` - subtle lavender (bottom-right) - adds a touch of warmth

## Verification
- Open `index.html` in a browser and verify the gradient is visible and looks natural
- Check all three tabs to ensure content remains readable against the gradient
- Verify the floating banner still looks good on the new background
