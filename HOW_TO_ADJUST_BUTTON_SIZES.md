# How to Adjust Button Sizes Manually

## Location in CSS File
All button styles are in `styles.css` starting around **line 165**.

## Main Button Styles (Desktop)

### Find this section in `styles.css`:
```css
.btn {
  display: inline-block;
  padding: 14px 24px;        /* ← Controls button size */
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 15px;            /* ← Controls text size */
  border: 1px solid transparent;
  transition: transform 0.1s ease, box-shadow 0.2s ease, background 0.2s ease;
  margin-right: 10px;
  min-width: 120px;           /* ← Minimum button width */
  text-align: center;
}
```

## How to Adjust Button Size

### 1. **Padding** (Main Size Control)
Controls the internal spacing of the button:
```css
padding: 14px 24px;
```
- **First number (14px)**: Top and bottom padding (vertical size)
- **Second number (24px)**: Left and right padding (horizontal size)

**Examples:**
- **Smaller buttons**: `padding: 10px 16px;`
- **Larger buttons**: `padding: 18px 32px;`
- **Tall buttons**: `padding: 20px 24px;`
- **Wide buttons**: `padding: 14px 40px;`

### 2. **Font Size** (Text Size)
Controls how big the text inside buttons is:
```css
font-size: 15px;
```

**Examples:**
- **Smaller text**: `font-size: 13px;`
- **Larger text**: `font-size: 18px;`

### 3. **Min-Width** (Minimum Button Width)
Ensures buttons don't get too narrow:
```css
min-width: 120px;
```

**Examples:**
- **Narrow buttons**: `min-width: 80px;`
- **Wide buttons**: `min-width: 150px;`
- **Remove minimum**: `min-width: auto;`

## Mobile Button Sizes

### For Tablets (around line 858):
```css
@media (max-width: 768px) {
  .btn {
    padding: 12px 20px;      /* ← Adjust for tablets */
    font-size: 14px;
    min-width: 100px;
    width: 100%;             /* Full width on mobile */
    margin-right: 0;
    margin-bottom: 8px;
  }
}
```

### For Small Phones (around line 887):
```css
@media (max-width: 480px) {
  .btn {
    padding: 10px 16px;      /* ← Adjust for small phones */
    font-size: 13px;
  }
}
```

## Quick Size Presets

### Extra Small Buttons:
```css
.btn {
  padding: 8px 14px;
  font-size: 13px;
  min-width: 80px;
}
```

### Small Buttons:
```css
.btn {
  padding: 10px 18px;
  font-size: 14px;
  min-width: 100px;
}
```

### Medium Buttons (Current):
```css
.btn {
  padding: 14px 24px;
  font-size: 15px;
  min-width: 120px;
}
```

### Large Buttons:
```css
.btn {
  padding: 18px 32px;
  font-size: 17px;
  min-width: 150px;
}
```

### Extra Large Buttons:
```css
.btn {
  padding: 22px 40px;
  font-size: 18px;
  min-width: 180px;
}
```

## Step-by-Step Instructions

1. **Open** `styles.css` file
2. **Find** the `.btn` section (around line 165)
3. **Change** the `padding` values to adjust size
4. **Change** `font-size` to adjust text size
5. **Change** `min-width` to adjust minimum width
6. **Save** the file
7. **Refresh** your browser to see changes

## Tips

- **Padding formula**: More padding = bigger button
- **Keep proportions**: If you increase padding, consider increasing font-size too
- **Test on mobile**: Check how buttons look on smaller screens
- **Consistency**: Use the same sizes throughout your site

## Where Buttons Are Used

Buttons appear in:
- Hero section (Home page)
- Product modal popups
- Contact form
- Compare feature
- Navigation (if you add buttons there)

All buttons use the same `.btn` class, so changing it affects all buttons!
