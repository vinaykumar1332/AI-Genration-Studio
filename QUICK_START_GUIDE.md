# Quick Start Guide - Building the European AI Media Studio in Figma

## Getting Started

This guide will help you quickly set up and start building the AI Media Studio in Figma, following the European luxury design specifications.

---

## Step 1: File Setup (10 minutes)

### Create Your Figma File

1. **Create New File**
   - Name: "AI Media Studio - European Design"
   - Type: Design file (not FigJam)

2. **Set Up Pages**
   ```
   📄 00 - Cover & Overview
   📄 01 - Design System
      ├─ Colors
      ├─ Typography
      ├─ Effects
      └─ Icons
   📄 02 - Components
      ├─ Atoms (Buttons, Inputs)
      ├─ Molecules (Cards, Forms)
      └─ Organisms (Header, Panels)
   📄 03 - Desktop Screens
   📄 04 - Tablet Screens
   📄 05 - Mobile Screens
   📄 06 - Prototypes
   ```

3. **Import Fonts**
   - Install locally or use Google Fonts:
     - **Primary:** Inter (Weights: 400, 500, 600, 700, 900)
     - **Display:** Playfair Display (Weights: 300, 400, 500)

---

## Step 2: Design System Setup (30 minutes)

### A. Color Styles

Create these color styles in Figma:

#### Primary Colors
```
Style Name: Primary/Cloud-Dancer
HEX: #F2F2F2
Description: Main background, primary text on dark
```

```
Style Name: Primary/Deep-Black
HEX: #0A0A0A
Description: Footer, premium sections, text on light
```

#### Accent Colors
```
Style Name: Accent/Digital-Lavender
HEX: #A78BFA
Description: Interactive elements, focus states
```

```
Style Name: Accent/Mocha-Mousse
HEX: #A47864
Description: Secondary text, labels, warm accents
```

```
Style Name: Accent/Electric-Cobalt
HEX: #2D5BFF
Description: Primary buttons, key actions
```

```
Style Name: Accent/Neon-Cyan
HEX: #00F5FF
Description: Progress indicators, success states
```

```
Style Name: Accent/Rich-Gold
HEX: #D4AF37
Description: Pro badges, premium features
```

#### Semantic Colors
```
Style Name: Semantic/Error
HEX: #FF6B6B
```

```
Style Name: Semantic/Success
HEX: #4CAF50
```

```
Style Name: Semantic/Warning
HEX: #FFB74D
```

**Quick Tip:** Select a rectangle → Fill → Create style → Name it → Add description

---

### B. Typography Styles

Create these text styles:

#### Display Styles
```
Display/XL/Desktop
Font: Playfair Display
Size: 240px
Weight: Light (300)
Line height: 240px (100%)
Letter spacing: -4%
```

```
Display/L/Desktop
Font: Playfair Display
Size: 96px
Weight: Regular (400)
Line height: 106px (110%)
Letter spacing: -3%
```

#### Heading Styles
```
Heading/H1
Font: Inter
Size: 48px
Weight: Bold (700)
Line height: 58px (120%)
Letter spacing: -2%
```

```
Heading/H2
Font: Inter
Size: 36px
Weight: Semi-bold (600)
Line height: 47px (130%)
Letter spacing: -1%
```

```
Heading/H3
Font: Inter
Size: 28px
Weight: Semi-bold (600)
Line height: 39px (140%)
Letter spacing: -1%
```

#### Body Styles
```
Body/Large
Font: Inter
Size: 18px
Weight: Regular (400)
Line height: 29px (160%)
Letter spacing: 0%
```

```
Body/Medium
Font: Inter
Size: 16px
Weight: Regular (400)
Line height: 24px (150%)
Letter spacing: 0%
```

```
Body/Small
Font: Inter
Size: 14px
Weight: Regular (400)
Line height: 21px (150%)
Letter spacing: 0%
```

#### Button Styles
```
Button/Large
Font: Inter
Size: 18px
Weight: Semi-bold (600)
Line height: 18px (100%)
Letter spacing: 0%
```

```
Button/Medium
Font: Inter
Size: 16px
Weight: Semi-bold (600)
Line height: 16px (100%)
Letter spacing: 0%
```

---

### C. Effect Styles

#### Glassmorphism Effects

**Glass/Light**
1. Select a rectangle → Effects → Add effect
2. Background Blur: 20px
3. Drop Shadow: X: 0, Y: 4, Blur: 16, Color: #000000 at 10%
4. Fill: White at 10%
5. Stroke: White at 20%, 1px
6. Save as Effect Style: "Glass/Light"

**Glass/Medium**
1. Background Blur: 40px
2. Drop Shadow: X: 0, Y: 8, Blur: 32, Color: #000000 at 12%
3. Fill: White at 10%
4. Stroke: White at 20%, 1px
5. Save as Effect Style: "Glass/Medium"

**Glass/Heavy**
1. Background Blur: 60px
2. Drop Shadow: X: 0, Y: 12, Blur: 48, Color: #000000 at 15%
3. Fill: White at 15%
4. Stroke: White at 25%, 1px
5. Save as Effect Style: "Glass/Heavy"

#### Shadow Effects

**Elevation/1 - Subtle**
- Drop Shadow: X: 0, Y: 2, Blur: 8, Color: #000000 at 8%

**Elevation/2 - Card**
- Drop Shadow: X: 0, Y: 4, Blur: 16, Color: #000000 at 12%

**Elevation/3 - Modal**
- Drop Shadow: X: 0, Y: 12, Blur: 32, Color: #000000 at 16%

**Elevation/4 - Popup**
- Drop Shadow: X: 0, Y: 20, Blur: 60, Color: #000000 at 24%

#### Glow Effects

**Glow/Lavender**
1. Drop Shadow: X: 0, Y: 0, Blur: 20, Color: #A78BFA at 40%
2. Save as Effect Style

**Glow/Cobalt**
1. Drop Shadow: X: 0, Y: 0, Blur: 30, Color: #2D5BFF at 50%
2. Save as Effect Style

**Glow/Neon**
1. Layer 1: Drop Shadow: X: 0, Y: 0, Blur: 10, Color: #00F5FF at 100%
2. Layer 2: Drop Shadow: X: 0, Y: 0, Blur: 20, Color: #00F5FF at 80%
3. Layer 3: Drop Shadow: X: 0, Y: 0, Blur: 30, Color: #00F5FF at 60%
4. Save as Effect Style

---

## Step 3: Build Core Components (60 minutes)

### Component 1: Primary Button

**Create Component:**
1. Rectangle: 200px x 56px, corner radius 12px
2. Fill: Electric Cobalt (#2D5BFF)
3. Add text: "Button Text", Button/Medium style, white
4. Auto-layout: Padding 24px horizontal, 16px vertical
5. Create component (Cmd/Ctrl + Alt + K)

**Add Variants:**
1. Default
   - Background: #2D5BFF
   - Text: White
   
2. Hover
   - Background: Linear gradient (#2D5BFF to #4D7BFF)
   - Drop Shadow: Elevation/2
   - Scale: 102%
   
3. Pressed
   - Background: #1D4BEF (darker)
   - Drop Shadow: Elevation/1
   - Scale: 98%
   
4. Disabled
   - Background: #2D5BFF at 40%
   - Text: White at 60%
   - Cursor: not-allowed

**Component Properties:**
- Size: Small (48px), Medium (56px), Large (64px)
- Width: Fixed, Full-width
- Icon: None, Left, Right

---

### Component 2: Glass Card

**Create Component:**
1. Rectangle: 400px x 300px, corner radius 24px
2. Apply Effect Style: Glass/Medium
3. Fill: White at 10%
4. Stroke: White at 20%, 1px, inside
5. Add content (placeholder text/image)
6. Create component

**Variants:**
1. Default
2. Hover (Scale: 102%, Elevation/2)
3. Selected (Border: 3px #A78BFA, Glow/Lavender)

---

### Component 3: Input Field

**Create Component:**
1. Rectangle: 320px x 56px, corner radius 12px
2. Fill: White at 5%
3. Stroke: White at 15%, 1px
4. Add text field (placeholder)
5. Add label above (Body/Small, Mocha Mousse)
6. Auto-layout

**Variants:**
1. Default
2. Focus (Border: 2px #A78BFA, Glow/Lavender)
3. Filled (with text)
4. Error (Border: 2px #FF6B6B, red glow)
5. Disabled (Opacity: 40%)

**Properties:**
- Type: Text, Email, Password
- Size: Small, Medium, Large
- State: Default, Focus, Error, Disabled

---

### Component 4: Avatar Card

**Create Component:**
1. Circle: 120px diameter
2. Fill: Image (placeholder)
3. Stroke: 3px transparent
4. Drop shadow: Elevation/1
5. Create component

**Variants:**
1. Default
   - Border: Transparent
   - Scale: 1.0
   
2. Hover
   - Border: #A78BFA at 50%
   - Scale: 1.15
   - Drop Shadow: Elevation/2
   - Add 3D rotation (simulate with shadow)
   
3. Selected
   - Border: #A78BFA solid
   - Scale: 1.1
   - Glow/Lavender
   - Checkmark overlay (top-right)

**Checkmark:**
- Size: 32px circle
- Background: #A78BFA
- Icon: White check
- Border: 2px white
- Position: Absolute top-right

---

### Component 5: Dropdown Menu

**Create Component:**
1. Container: 320px x 56px (closed)
2. Glass/Light effect
3. Text: "Select option" + dropdown icon
4. Auto-layout

**Expanded Variant:**
1. Container: 320px x auto (max 400px)
2. Glass/Medium effect
3. Options list:
   - Each option: 320px x 48px
   - Hover: Background #A78BFA at 10%
   - Selected: Background #A78BFA at 15%
4. Scrollable if > 8 items

**Mega Menu Variant:**
1. Width: 640px
2. Height: 480px
3. 2-column grid layout
4. Glass/Heavy effect
5. Close button (top-right)

---

## Step 4: Build Main Screens (90 minutes)

### Screen 1: Homepage / Hero

**Frame Setup:**
1. Create frame: Desktop (1440 x 1024)
2. Name: "01_Homepage_Desktop"

**Build Structure:**
```
Frame: Homepage
├── Background Video (placeholder)
├── Kinetic Typography ("STUDIO")
│   └── Position: Center, large Playfair
├── Model Image (foreground)
│   └── Position: Center, fixed layer
└── Header (Component)
    ├── Logo
    ├── Navigation Links
    └── CTA Button
```

**Header:**
1. Auto-layout horizontal, 1440px x 80px
2. Apply Glass/Light effect (for scrolled state)
3. Padding: 24px horizontal
4. Items: Logo, Nav Links (48px gap), CTA Button
5. Create variants: Transparent, Scrolled

**Hero Content:**
1. Typography: "STUDIO" - Display/XL, Cloud Dancer at 8%
2. Position: Behind model, center
3. Model: PNG with transparency, positioned center
4. Add scroll indicator (bottom): "Scroll to explore ↓"

---

### Screen 2: Login / Sign-Up

**Frame Setup:**
1. Create frame: Desktop (1440 x 900)
2. Name: "02_Auth_Desktop"

**Background:**
1. Full-screen rectangle
2. Gradient fill (Mermaidcore):
   - Stop 1: #7FDBDA (0%)
   - Stop 2: #B08BFA (50%)
   - Stop 3: #89CFF0 (100%)
   - Type: Radial, center
3. Background Blur: 120px

**Login Card:**
1. Glass Card component: 480px x 600px
2. Position: Center screen
3. Content:
   - Logo (48px)
   - Title: "Welcome Back" (Heading/H2)
   - Subtitle: "Log in to continue" (Body/Medium)
   - Email input field
   - Password input field
   - Login button (Primary, Large)
   - Divider: "or continue with"
   - SSO buttons (Google, Microsoft)
   - Footer link: "Don't have an account? Sign up"

**Layer Structure:**
```
Frame: Auth
├── Background Gradient
├── Glass Card (Login)
│   ├── Logo
│   ├── Title
│   ├── Form
│   │   ├── Email Input
│   │   ├── Password Input
│   │   └── Remember Me Checkbox
│   ├── Login Button
│   ├── Divider
│   ├── SSO Buttons
│   └── Sign-up Link
└── Background Decoration (optional)
```

---

### Screen 3: Studio Selection Panel

**Frame Setup:**
1. Create frame: Desktop (1440 x 900)
2. Name: "03_Studio_Desktop"

**Layout (2-column):**
```
┌─────────────────────────────────────┐
│  Header                             │
├────────────┬────────────────────────┤
│            │                        │
│ Selection  │  Preview Panel         │
│ Panel      │                        │
│ (576px)    │  (864px)               │
│            │                        │
└────────────┴────────────────────────┘
```

**Selection Panel (Left):**
1. Container: 576px x full height
2. Background: rgba(10, 10, 10, 0.3), blur(20px)
3. Border-right: 1px rgba(255, 255, 255, 0.1)
4. Padding: 32px
5. Content:
   ```
   Selection Panel
   ├── Gender/Origin Dropdown
   ├── Avatar Gallery (Grid 4 columns)
   ├── Pose Selector (Horizontal scroll)
   └── Background Selector (Horizontal scroll)
   ```

**Preview Panel (Right):**
1. Container: 864px x full height
2. Background: Deep gradient
3. Padding: 48px
4. Content:
   ```
   Preview Panel
   ├── Live Preview Area
   │   └── Composite image (centered)
   ├── Selection Summary
   │   └── List of current selections
   └── Generate Button (bottom)
       └── Primary button, full-width
   ```

**Components to Include:**
- Gender/Origin: Use Dropdown/MegaMenu component
- Avatars: Use Avatar Card components (4x2 grid)
- Poses: Use Pose Card components (horizontal auto-layout)
- Backgrounds: Use Background Card components
- Generate Button: Use Primary Button (Large, Full-width)

---

### Screen 4: Results Gallery

**Frame Setup:**
1. Create frame: Desktop (1440 x 2400) - Scrollable
2. Name: "04_Gallery_Desktop"

**Structure:**
```
Frame: Gallery
├── Header
├── Page Title
│   ├── "Your Generated Creations" (Heading/H1)
│   └── Filter/Sort controls
├── Masonry Grid
│   ├── Column 1 (Images varied heights)
│   ├── Column 2 (Images varied heights)
│   ├── Column 3 (Images varied heights)
│   └── Column 4 (Images varied heights)
└── Footer
```

**Masonry Grid Setup:**
1. Create 4 columns (auto-layout vertical)
2. Each column: 330px width, auto height
3. Gap: 24px
4. Distribute images with varying heights:
   - Tall: 440px
   - Medium: 330px
   - Short: 220px

**Image Cards:**
1. Use placeholder images (Unsplash plugin)
2. Apply Image Card component
3. Corner radius: 16px
4. Add hover states (overlay + icons)

---

### Screen 5: Mobile Version

**Frame Setup:**
1. Create frame: iPhone 14 Pro (393 x 852)
2. Name: "05_Mobile_Home"

**Full-Screen Sections:**
```
Section 1: Hero (852px height)
├── Full-screen image
├── Large headline
└── CTA button

Section 2: Features (852px height)
├── Feature illustration
├── Feature title
└── Feature description

Section 3: Studio CTA (852px height)
├── Studio preview
├── Call to action
└── Bottom Sheet (collapsed)
```

**Bottom Sheet:**
1. Position: Fixed bottom
2. Height: 80px (collapsed), 70vh (expanded)
3. Glass/Heavy effect
4. Pull handle (top center)
5. Content (expanded):
   - Navigation tabs
   - Selection options (horizontal scroll)
   - Generate button

**Layer Structure:**
```
Frame: Mobile
├── Section 1 (Full screen)
├── Section 2 (Full screen)
├── Section 3 (Full screen)
└── Bottom Sheet (Fixed)
    ├── Pull Handle
    ├── Navigation
    └── Content (conditional)
```

---

## Step 5: Create Prototype (45 minutes)

### Set Up Interactions

#### Desktop Flow:

**Homepage to Auth:**
1. Select CTA button on Homepage
2. Prototype tab → Interaction: On Click
3. Action: Navigate to → Auth screen
4. Animation: Smart Animate
5. Duration: 400ms
6. Easing: Ease out

**Auth to Studio:**
1. Select Login button
2. Interaction: On Click
3. Action: Navigate to → Studio screen
4. Animation: Smart Animate
5. Duration: 400ms

**Studio Selections:**
1. Select Dropdown (closed)
2. Interaction: On Click
3. Action: Change to → Dropdown (expanded)
4. Animation: Smart Animate
5. Duration: 300ms
6. Easing: Spring

7. Select Avatar (default)
8. Interaction: On Click
9. Action: Change to → Avatar (selected)
10. Animation: Instant

**Generate Flow:**
1. Select Generate Button
2. Interaction: On Click
3. Action: Navigate to → Gallery screen
4. Animation: Dissolve
5. Duration: 600ms

**Gallery Modal:**
1. Select Image Card
2. Interaction: On Click
3. Overlay: Open → Full-Screen Modal
4. Position: Center
5. Background: Dark overlay
6. Close interaction: Press Escape or click X

#### Mobile Flow:

**Scroll Animation:**
1. Select Section 1
2. Interaction: While Scrolling
3. Action: Scroll with
4. Connect to Section 2
5. Animation: Smart Animate

**Bottom Sheet:**
1. Select Bottom Sheet (collapsed)
2. Interaction: On Drag
3. Action: Change to → Bottom Sheet (expanded)
4. Animation: Smart Animate
5. Duration: 400ms
6. Easing: Spring

---

## Step 6: Add Micro-Interactions (30 minutes)

### Button Hover States:

1. Select button component
2. Add variant: Hover
3. Changes:
   - Scale: 102%
   - Shadow: Larger
   - Background: Gradient
4. Prototype:
   - Trigger: While Hovering
   - Action: Change to Hover variant
   - Animation: Instant or 200ms ease

### Input Focus States:

1. Select input component
2. Add variant: Focus
3. Changes:
   - Border: 2px #A78BFA
   - Glow effect
4. Prototype:
   - Trigger: On Click
   - Action: Change to Focus variant
   - Animation: 200ms ease-out

### Avatar Hover (3D Tilt):

1. Select avatar component
2. Add variant: Hover
3. Changes:
   - Scale: 115%
   - Shadow: Elevation/2
   - Border: Lavender
4. Simulate 3D by adding multiple shadows:
   - Shadow 1: X: -4, Y: -4
   - Shadow 2: X: 4, Y: 4
5. Prototype:
   - Trigger: While Hovering
   - Action: Change to Hover
   - Animation: 300ms spring

---

## Step 7: Responsive Design (30 minutes)

### Create Tablet Version:

1. Duplicate Desktop screens
2. Resize frame: 1024 x 768
3. Adjustments:
   - Selection Panel: 40% width (410px)
   - Preview Panel: 60% width (614px)
   - Font sizes: 90% of desktop
   - Padding: 24px (reduced from 32px)
   - Avatar grid: 3 columns (from 4)

### Create Mobile Version:

1. Create new frames: 393 x 852
2. Convert 2-column to single-column
3. Stack sections vertically
4. Full-width components
5. Larger touch targets (min 44px)
6. Bottom Sheet navigation
7. Horizontal scrolling galleries

**Key Adjustments:**
- Typography: Use Mobile variants (smaller)
- Spacing: Reduced padding (16px)
- Components: Full-width layouts
- Navigation: Bottom Sheet instead of sidebar
- Interactions: Swipe gestures instead of hover

---

## Step 8: Testing & Refinement (30 minutes)

### Test Prototype:

1. **Desktop Mode:**
   - Click Play button (top-right)
   - Test all navigation flows
   - Check hover states
   - Verify modal interactions

2. **Mobile Mode:**
   - Switch to Mobile frame
   - Test swipe gestures
   - Check Bottom Sheet drag
   - Verify touch targets (min 44px)

3. **Share for Feedback:**
   - Create share link (Public or Private)
   - Add comments/notes
   - Share with team

### Accessibility Check:

1. **Plugin: Stark**
   - Install Stark plugin
   - Run contrast checker
   - Verify WCAG AA compliance

2. **Focus Indicators:**
   - Add 3px lavender border to all interactive elements
   - Test with Tab navigation

3. **Alt Text:**
   - Add descriptions to all images
   - Use Figma's accessibility panel

---

## Quick Reference: Common Tasks

### Add Glassmorphism to Any Element:
1. Select element
2. Fill: White at 10%
3. Effects → Background Blur: 40px
4. Stroke: White at 20%, 1px
5. Drop Shadow: Elevation/2

### Create Hover Animation:
1. Create component variants: Default, Hover
2. Modify Hover state (scale, shadow, etc.)
3. Prototype: While Hovering → Change to Hover
4. Duration: 200-300ms
5. Easing: Ease out or Spring

### Make Responsive:
1. Select frame
2. Constraints: Set to Scale
3. Or use Auto Layout for dynamic sizing
4. Create breakpoint variants

### Export Assets:
1. Select element → Export
2. Format: PNG (2x, 3x) or SVG
3. Or use Dev Mode for CSS code

---

## Resources & Plugins

### Recommended Plugins:

1. **Unsplash** - High-quality images
2. **Iconify** - Icon library
3. **Stark** - Accessibility checker
4. **Content Reel** - Generate realistic content
5. **Autoflow** - Create user flows
6. **LottieFiles** - Animation export
7. **Anima** - Export to code

### Design Inspiration:

- **Awwwards.com** - Award-winning websites
- **Dribbble.com** - UI design inspiration
- **Behance.net** - Complete projects
- **Mobbin.com** - Mobile app patterns

### Learning Resources:

- **Figma Official Tutorials** - figma.com/resources/learn-design
- **YouTube: Figma Channel** - Official tutorials
- **Figma Community** - Templates and resources
- **Config 2024** - Annual design conference

---

## Troubleshooting

### Common Issues:

**Blur not working:**
- Make sure element has fill
- Check layer opacity
- Enable "Effects" visibility

**Auto Layout breaking:**
- Check constraints
- Verify padding values
- Reset Auto Layout and reapply

**Prototype not working:**
- Check connection arrows
- Verify interaction settings
- Test in Presentation mode

**Performance issues:**
- Reduce blur intensity
- Optimize images (smaller file size)
- Limit effects on complex components
- Use components instead of groups

---

## Checklist: Before Handoff

- [ ] All screens designed (Desktop, Tablet, Mobile)
- [ ] Design system complete (Colors, Typography, Effects)
- [ ] Components built and documented
- [ ] Prototype fully interactive
- [ ] Accessibility checked (Contrast, Focus, Labels)
- [ ] Responsive breakpoints tested
- [ ] Animations smooth (300-400ms)
- [ ] Assets exported (Icons, Images)
- [ ] Documentation added (Comments, Descriptions)
- [ ] Dev Mode enabled
- [ ] Share link created
- [ ] Feedback collected

---

## Next Steps: Development Handoff

### For Developers:

1. **Enable Dev Mode**
   - Switch to Dev Mode (top-right)
   - Developers can inspect styles
   - Export CSS, iOS, Android code

2. **Create Spec Document**
   - List all components
   - Document interactions
   - Specify animations (duration, easing)
   - Note technical requirements

3. **Asset Export**
   - Export all icons as SVG
   - Export images at 2x/3x resolutions
   - Optimize file sizes

4. **Animation Guidelines**
   - Document timing (300ms, 400ms, etc.)
   - Specify easing functions
   - Note spring animations
   - Provide Lottie files if needed

5. **API Integration Points**
   - Avatar selection → API call
   - Generation trigger → POST request
   - Results display → GET response
   - Error states → Handle failures

---

## Maintenance & Updates

### Updating Design System:

1. **Modify Styles:**
   - Edit color → All instances update
   - Edit text style → All instances update
   - Edit component → All instances update

2. **Version Control:**
   - Save versions regularly
   - Name versions clearly
   - Document changes

3. **Component Library:**
   - Publish library for team
   - Update regularly
   - Notify team of changes

---

## Conclusion

You now have a complete guide to building the European-style AI Media Studio in Figma. Follow these steps systematically, and you'll create a high-end, professional design ready for development.

**Time Estimate:**
- Setup: 40 minutes
- Components: 60 minutes
- Screens: 90 minutes
- Prototype: 45 minutes
- Refinement: 30 minutes
- **Total: ~4-5 hours**

Good luck with your design! 🎨✨

---

**Document Version:** 1.0  
**Last Updated:** February 2026  
**Created by:** AI Design Specialist  
**For:** AI Generation Studio Project
