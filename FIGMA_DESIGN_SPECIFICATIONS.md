# European-Style AI Media Studio - Figma Design Specifications

## Project Overview
This document provides comprehensive Figma design specifications for building a European-style AI Media Studio with modern luxury aesthetics, advanced interactions, and high-end user experience. The design prioritizes Quiet Luxury, Glassmorphism, and Kinetic Typography.

---

## 1. Modern European Homepage & Header

### 1.1 Transparent Glassy Header
**Component Name:** `Header/Navigation`

#### Desktop Specifications:
- **Height:** 80px
- **Position:** Sticky (fixed at top)
- **Default State:**
  - Background: 100% transparent
  - Border: None
  - Backdrop-filter: None
  
- **Scrolled State:**
  - Background: `rgba(255, 255, 255, 0.05)`
  - Backdrop-filter: `blur(30px)`
  - Border-bottom: `1px solid rgba(255, 255, 255, 0.15)`
  - Box-shadow: `0 4px 30px rgba(0, 0, 0, 0.1)`
  
#### Figma Setup:
1. Create a frame: `1440 x 80px`
2. Add auto-layout with 24px horizontal padding
3. Create two variants: "Default" and "Scrolled"
4. Layer structure:
   ```
   Header Frame
   ├── Background Blur (Effect: Background Blur 30px)
   ├── Border Line (1px stroke, white 15%)
   └── Content Container
       ├── Logo (40px height)
       ├── Navigation Links (Auto-layout, 48px gap)
       └── CTA Button
   ```

#### Navigation Links:
- **Font:** Inter or SF Pro Display
- **Size:** 16px
- **Weight:** 500 (Medium)
- **Color:** #F2F2F2 (Cloud Dancer)
- **Letter-spacing:** -0.02em

**Hover State - Magnetic Effect:**
1. Create interaction:
   - Trigger: Mouse Enter
   - Action: Move element (offset: 2px towards cursor)
   - Easing: Spring (0.3s)
   
2. Expanding Underline:
   - Create a 2px line below text
   - Default width: 0%
   - Hover width: 100%
   - Transition: Ease-out 0.4s
   - Color: #A78BFA (Digital Lavender)

---

### 1.2 3D Hero Experience
**Component Name:** `Hero/FullScreen`

#### Specifications:
- **Height:** 100vh (full viewport)
- **Video Background:**
  - Resolution: Minimum 1920x1080
  - Format: MP4 (H.264)
  - Placement: Cover (aspect ratio maintained)
  - Autoplay: Yes
  - Loop: Yes
  - Muted: Yes

#### 3D-Depth Scroll Effect Structure:
**Layer Hierarchy (from front to back):**
1. **Model Layer (Fixed Position)**
   - Z-index: 100
   - Position: Center
   - Scroll behavior: Fixed (parallax rate: 0)
   
2. **Kinetic Typography Layer**
   - Z-index: 50
   - Position: Behind model
   - Scroll behavior: Moves at 1.5x scroll speed
   
3. **Background Video Layer**
   - Z-index: 1
   - Scroll behavior: Moves at 0.5x scroll speed

#### Kinetic Typography Specs:
- **Font:** Playfair Display or Cormorant Garamond
- **Size:** 240px (Desktop), 120px (Tablet), 80px (Mobile)
- **Weight:** 300 (Light)
- **Color:** rgba(255, 255, 255, 0.08)
- **Text:** "STUDIO"
- **Animation:** Scroll-responsive (speed changes based on scroll velocity)

**Figma Setup:**
1. Create frame: `1440 x 1080px`
2. Layer structure:
   ```
   Hero Section
   ├── Video Placeholder (Rectangle with image fill)
   ├── Typography Layer (240px text)
   │   └── Variants: [Position 1, Position 2, Position 3] for scroll states
   └── Model Image (Fixed, PNG with transparency)
   ```

---

## 2. Sophisticated Login & Sign-Up

### 2.1 Glass-Card Layout
**Component Name:** `Auth/LoginCard`

#### Card Specifications:
- **Width:** 480px (Desktop), 90% (Mobile)
- **Height:** Auto (min 600px)
- **Padding:** 48px
- **Border-radius:** 24px

**Glassmorphism Effect:**
- Background: `rgba(255, 255, 255, 0.1)`
- Backdrop-filter: `blur(40px) saturate(180%)`
- Border: `1px solid rgba(255, 255, 255, 0.2)`
- Box-shadow: `0 8px 32px rgba(0, 0, 0, 0.12)`

**Background Gradient (Mermaidcore):**
- Create a gradient behind the card:
  - Color 1: #7FDBDA (Iridescent Aqua) at 0%
  - Color 2: #B08BFA (Pearlescent Purple) at 50%
  - Color 3: #89CFF0 (Baby Blue) at 100%
  - Type: Radial gradient
  - Blur: 120px gaussian blur

#### Figma Setup:
1. Create background frame with gradient
2. Add `Effects > Background Blur > 120px`
3. Create card frame `480 x 600px`
4. Apply glassmorphism effects:
   ```
   Card Frame
   ├── Fill: Linear gradient (white to transparent)
   ├── Stroke: 1px, white 20%
   ├── Effects:
   │   ├── Background Blur: 40px
   │   └── Drop Shadow: 0 8px 32px rgba(0,0,0,0.12)
   └── Corner Radius: 24px
   ```

---

### 2.2 Form Elements

#### Input Fields:
- **Height:** 56px
- **Width:** 100%
- **Border-radius:** 12px
- **Background:** rgba(255, 255, 255, 0.05)
- **Border:** 1px solid rgba(255, 255, 255, 0.15)

**States:**
1. **Default:**
   - Border: rgba(255, 255, 255, 0.15)
   
2. **Focus:**
   - Border: 2px solid #A78BFA (Digital Lavender)
   - Box-shadow: `0 0 0 4px rgba(167, 139, 250, 0.15)`
   
3. **Error:**
   - Border: 2px solid #FF6B6B
   - Box-shadow: `0 0 0 4px rgba(255, 107, 107, 0.15)`

**Label:**
- Font: Inter
- Size: 14px
- Weight: 500
- Color: #A47864 (Mocha Mousse)
- Margin-bottom: 8px

---

### 2.3 Login Button - Liquid-Fill Animation
**Component Name:** `Button/Primary/Login`

#### Default State:
- **Width:** 100%
- **Height:** 56px
- **Background:** Transparent
- **Border:** 2px solid #2D5BFF (Electric Cobalt)
- **Border-radius:** 12px
- **Text Color:** #2D5BFF

#### Clicked State (Liquid-Fill):
**Animation Sequence (create 5 variants):**
1. **Frame 0 (0ms):** Empty border
2. **Frame 1 (100ms):** Fill starts from bottom (25% height)
3. **Frame 2 (200ms):** Fill reaches 50% height
4. **Frame 3 (300ms):** Fill reaches 75% height
5. **Frame 4 (400ms):** Fully filled with #2D5BFF
6. **Text color:** Transitions to white

**Figma Setup:**
1. Create button variants for each frame
2. Inner fill shape:
   - Start: Height 0px, anchored to bottom
   - End: Height 56px
   - Use Blob/Organic shape for liquid effect
3. Connect variants with Smart Animate
4. Duration: 400ms
5. Easing: Ease-in-out

---

### 2.4 SSO Integration Buttons
**Component Name:** `Button/SSO`

#### Specifications:
- **Width:** 100% (or 48% for side-by-side)
- **Height:** 56px
- **Background:** rgba(255, 255, 255, 0.05)
- **Border:** 1px solid rgba(255, 255, 255, 0.15)
- **Border-radius:** 12px
- **Icon Size:** 24px
- **Gap:** 12px (between icon and text)

**Thermal Glow Effect (Hover):**
- Background: rgba(255, 255, 255, 0.1)
- Box-shadow: 
  - Inner: `inset 0 0 20px rgba(167, 139, 250, 0.3)`
  - Outer: `0 0 30px rgba(167, 139, 250, 0.5)`
- Transition: 0.3s ease-out

**Figma Setup:**
1. Create two variants: Default and Hover
2. Add glow effect:
   - Layer 1: Inner shadow (inset glow)
   - Layer 2: Drop shadow (outer glow)
3. Animate between variants with Smart Animate

---

## 3. The Studio Module: Selection & Generation

### 3.1 Gender/Origin Dropdown - Hidden Menu
**Component Name:** `Dropdown/MegaMenu`

#### Closed State:
- **Width:** 320px
- **Height:** 56px
- **Background:** rgba(255, 255, 255, 0.05)
- **Border:** 1px solid rgba(255, 255, 255, 0.15)
- **Border-radius:** 12px

#### Expanded State:
- **Width:** 640px (mega-menu style)
- **Height:** Auto (max 480px)
- **Background:** Glassmorphism effect
- **Backdrop-filter:** blur(40px)
- **Border-radius:** 16px
- **Padding:** 24px
- **Box-shadow:** `0 20px 60px rgba(0, 0, 0, 0.3)`

#### Menu Structure:
```
Mega Menu
├── Header Section
│   ├── Title: "Select Gender & Origin"
│   └── Close Button (×)
├── Grid Layout (2 columns)
│   ├── Column 1: Gender Options
│   │   ├── Male (Available)
│   │   ├── Female (Available)
│   │   └── Non-binary (Unavailable - greyed)
│   └── Column 2: Origin Options
│       ├── European (Available)
│       ├── Asian (Available)
│       ├── African (Unavailable - greyed)
│       └── Latin American (Available)
└── Apply Button
```

#### Unavailable State:
- **Opacity:** 0.4
- **Cursor:** not-allowed
- **Tooltip:**
  - Background: #1A1A1A
  - Text: "Not available for selected model"
  - Font-size: 12px
  - Padding: 8px 12px
  - Border-radius: 6px
  - Arrow: Yes

**Figma Setup:**
1. Create closed variant (56px height)
2. Create expanded variant (480px height)
3. Connect with Smart Animate
4. Duration: 0.4s
5. Easing: Spring animation
6. Add option components with states:
   - Available
   - Unavailable (with tooltip)
   - Selected

---

### 3.2 Avatar Selection
**Component Name:** `Avatar/Selector`

#### Thumbnail Specifications:
- **Size:** 120px diameter (circular)
- **Border:** 3px solid transparent
- **Image:** High-resolution avatar (minimum 240x240)
- **Gap:** 24px between avatars
- **Layout:** Auto-layout horizontal scroll

#### States:

**1. Default:**
- Scale: 1.0
- Border: 3px solid transparent
- Box-shadow: `0 4px 12px rgba(0, 0, 0, 0.15)`

**2. Hover (3D-Tilt Animation):**
- Scale: 1.15
- Transform: rotate3d(1, 1, 0, 5deg)
- Box-shadow: `0 12px 32px rgba(0, 0, 0, 0.25)`
- Transition: 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)
- Border: 3px solid rgba(167, 139, 250, 0.5)

**3. Selected (Locked):**
- Scale: 1.1
- Border: 3px solid #A78BFA (Digital Lavender)
- Box-shadow: 
  - `0 8px 24px rgba(167, 139, 250, 0.4)`
  - `0 0 0 6px rgba(167, 139, 250, 0.15)` (outer ring)
- Checkmark icon overlay (top-right)

**Figma Setup:**
1. Create avatar component with 3 variants
2. Add 3D effect using:
   - Layer style: Drop shadow at multiple angles
   - Blur: 12px for hover, 24px for selected
3. Checkmark icon:
   - Size: 32px
   - Background: #A78BFA
   - Icon color: White
   - Position: Top-right corner
   - Border: 2px solid white

---

### 3.3 Pose & Background Selector
**Component Name:** `Selector/HorizontalScroll`

#### Container Specifications:
- **Height:** 280px
- **Scroll:** Horizontal
- **Gap:** 16px
- **Padding:** 24px

#### Background Option Card:
- **Width:** 240px
- **Height:** 240px
- **Border-radius:** 16px
- **Image:** Preview thumbnail

#### Categories:
1. Indoor
2. Outdoor
3. Natural

#### Quickview Feature:
**Hover State:**
- Plays 2-second muted video clip
- Overlay gradient: rgba(0, 0, 0, 0.3)
- Play icon (fades out after 0.5s)
- Border: 2px solid #A78BFA
- Scale: 1.05

**Selected State:**
- Border: 3px solid #A78BFA
- Box-shadow: `0 8px 24px rgba(167, 139, 250, 0.4)`
- Checkmark (top-right corner)
- Label overlay (bottom): Category name

**Figma Setup:**
1. Create option card: `240 x 240px`
2. Variants:
   - Default
   - Hover (with video placeholder)
   - Selected
3. Add video placeholder:
   - Use GIF or image sequence (8 frames)
   - Simulate auto-play on hover
4. Layer structure:
   ```
   Background Card
   ├── Image/Video Layer
   ├── Hover Overlay (gradient)
   ├── Play Icon (centered, fades)
   ├── Checkmark (top-right, selected only)
   └── Label (bottom, selected only)
   ```

---

### 3.4 Generate Button
**Component Name:** `Button/Generate/Primary`

#### States:

**1. Disabled (Incomplete Selection):**
- **Opacity:** 0.4
- **Background:** #2D5BFF at 40% opacity
- **Border:** None
- **Cursor:** not-allowed
- **Width:** 100%
- **Height:** 64px
- **Border-radius:** 16px
- **Text:** "Complete selections to generate"
- **Font-size:** 18px
- **Font-weight:** 600

**2. Active (All Selections Complete):**
- **Opacity:** 1.0
- **Background:** #2D5BFF (Electric Cobalt)
- **Box-shadow:** `0 8px 24px rgba(45, 91, 255, 0.4)`

**3. Activated (Cloud Dancer Pulse):**
- **Animation:** Pulsing glow
- **Keyframes:**
  - 0%: Box-shadow: `0 0 20px rgba(242, 242, 242, 0.5)`
  - 50%: Box-shadow: `0 0 40px rgba(242, 242, 242, 0.8)`
  - 100%: Box-shadow: `0 0 20px rgba(242, 242, 242, 0.5)`
- **Duration:** 1.5s
- **Iteration:** Infinite
- **Background:** Radial gradient
  - Center: #FFFFFF
  - Edge: #2D5BFF

**Figma Setup:**
1. Create 3 variants: Disabled, Active, Activated
2. For pulse animation:
   - Create 5 frame variants (pulse cycle)
   - Add glow layers with varying opacity
   - Connect with Smart Animate
3. Layer structure:
   ```
   Generate Button
   ├── Background (solid)
   ├── Glow Layer 1 (large radius, low opacity)
   ├── Glow Layer 2 (medium radius, medium opacity)
   ├── Glow Layer 3 (small radius, high opacity)
   └── Text Label
   ```

---

## 4. Progress & Result Visualization

### 4.1 Real-Time Progress - Neon-Shock Line
**Component Name:** `Progress/NeonLine`

#### Specifications:
- **Position:** Bottom of header (sticky)
- **Height:** 3px
- **Width:** Percentage-based (0% to 100%)
- **Color:** #00F5FF (Neon Cyan)
- **Glow:** 
  - Box-shadow: `0 0 10px #00F5FF, 0 0 20px #00F5FF, 0 0 30px #00F5FF`

#### Percentage Display:
- **Position:** Right end of line
- **Background:** #00F5FF
- **Padding:** 4px 12px
- **Border-radius:** 12px
- **Font-size:** 12px
- **Font-weight:** 700
- **Color:** #000000
- **Text:** "72%" (dynamic)

**Figma Setup:**
1. Create frame: Full width x 3px
2. Add neon glow:
   - Layer 1: Inner glow (blur: 10px)
   - Layer 2: Medium glow (blur: 20px)
   - Layer 3: Outer glow (blur: 30px)
3. Create percentage badge component
4. Connect badge to line end
5. Create variants for different percentages: 0%, 25%, 50%, 75%, 100%

---

### 4.2 Masonry Result Grid
**Component Name:** `Gallery/Masonry`

#### Grid Specifications:
- **Columns:** 3 (Desktop), 2 (Tablet), 1 (Mobile)
- **Gap:** 24px
- **Layout:** Auto-masonry (varying heights)
- **Image Ratio:** Varies (maintain original aspect ratio)

#### Image Card:
- **Border-radius:** 12px
- **Overflow:** Hidden
- **Box-shadow:** `0 4px 16px rgba(0, 0, 0, 0.1)`

**Hover State:**
- Scale: 1.02
- Box-shadow: `0 12px 32px rgba(0, 0, 0, 0.2)`
- Overlay: rgba(0, 0, 0, 0.3)
- Icons appear:
  - Download (top-right)
  - View (center)
  - Share (top-left)
- Transition: 0.3s ease-out

**Figma Setup:**
1. Create container frame
2. Use Auto Layout plugin or manual positioning
3. Image card component:
   - 2 variants: Default, Hover
   - Include overlay layer
   - Add icon components (initially hidden)
4. Example layout:
   ```
   Masonry Grid (Auto Layout)
   ├── Column 1
   │   ├── Image 1 (tall)
   │   ├── Image 2 (medium)
   │   └── Image 3 (short)
   ├── Column 2
   │   ├── Image 4 (medium)
   │   ├── Image 5 (tall)
   │   └── Image 6 (short)
   └── Column 3
       ├── Image 7 (short)
       ├── Image 8 (tall)
       └── Image 9 (medium)
   ```

---

### 4.3 Image Preview Modal
**Component Name:** `Modal/FullscreenPreview`

#### Modal Specifications:
- **Size:** 100vw x 100vh (full screen)
- **Background:** rgba(0, 0, 0, 0.95)
- **Backdrop-filter:** blur(10px)
- **Z-index:** 1000

#### Image Container:
- **Max-width:** 90vw
- **Max-height:** 90vh
- **Position:** Center
- **Border-radius:** 0 (full screen mode)

#### Magnifier Tool:
**Specifications:**
- **Trigger:** Click or hold on image
- **Zoom Level:** 2x, 4x, 8x (switchable)
- **Magnifier Circle:** 200px diameter
- **Border:** 4px solid white
- **Box-shadow:** `0 8px 32px rgba(0, 0, 0, 0.5)`

**Performance:**
- Use high-resolution texture (4K minimum)
- Canvas-based rendering for zero lag
- Hardware acceleration enabled

#### Controls:
- **Close Button (X):** Top-right, 48px x 48px
- **Zoom Controls:** Bottom-center
  - Zoom In (+)
  - Zoom Out (-)
  - Reset (⟲)
  - Download (⬇)
- **Navigation:** Left/Right arrows for gallery

**Figma Setup:**
1. Create modal overlay: Full screen
2. Image container: centered
3. Magnifier component:
   - Circle mask: 200px
   - Inner content: Scaled image portion
   - Create zoomed variants (2x, 4x, 8x)
4. Controls:
   - Create button component library
   - Position as overlay elements
5. Layer structure:
   ```
   Modal Container
   ├── Background Overlay (95% black)
   ├── Image Container
   │   └── High-res Image
   ├── Magnifier Tool (component)
   ├── Close Button (top-right)
   ├── Zoom Controls (bottom-center)
   └── Navigation Arrows (left/right)
   ```

---

## 5. Mobile Experience & 3D Scroll

### 5.1 Full-Height Imagery
**Component Name:** `Mobile/FullScreen`

#### Specifications:
- **Height:** 100vh per section
- **Width:** 100vw
- **Scroll:** Vertical snap
- **Snap-type:** Mandatory

#### Section Structure:
Each section contains:
- Full-screen image (portrait orientation)
- Minimal overlay text
- Swipe indicator (bottom)

---

### 5.2 3D-Parallax Staggered Reveal
**Animation Specifications:**

**Transition Between Sections:**
- **Effect:** Staggered reveal with 3D parallax
- **Duration:** 0.8s
- **Easing:** cubic-bezier(0.25, 0.46, 0.45, 0.94)

**Animation Sequence:**
1. **Layer 1 (Foreground):** Moves at 1.5x scroll speed
2. **Layer 2 (Mid-ground):** Moves at 1.0x scroll speed
3. **Layer 3 (Background):** Moves at 0.5x scroll speed

**Reveal Pattern:**
- Previous section: Scale down + fade out
- Current section: Scale up from 0.9 + fade in
- Next section: Positioned below, ready to reveal

**Figma Setup:**
1. Create section frame: 375 x 812px (iPhone)
2. Layer structure:
   ```
   Mobile Section
   ├── Background Layer (parallax: 0.5x)
   ├── Mid-ground Layer (parallax: 1.0x)
   ├── Foreground Layer (parallax: 1.5x)
   └── Overlay Text
   ```
3. Create scroll transition variants:
   - Section 1 (Active)
   - Section 1 to 2 (Transition)
   - Section 2 (Active)
4. Connect with Smart Animate
5. Simulate parallax with different movement speeds

---

### 5.3 Glassy Bottom Sheet
**Component Name:** `Mobile/BottomSheet`

#### Collapsed State:
- **Height:** 80px
- **Position:** Bottom of screen (fixed)
- **Background:** Glassmorphism
  - rgba(255, 255, 255, 0.1)
  - Backdrop-blur: 40px
- **Border-radius:** 24px 24px 0 0
- **Content:** Tab indicator + pull handle

#### Expanded State:
- **Height:** 70vh (variable)
- **Animation:** Slide up
- **Duration:** 0.4s
- **Easing:** Spring (0.8, 0.7)
- **Background:** Same glassmorphism
- **Content:** 
  - Navigation menu
  - Selectors (Gender, Avatar, Pose)
  - Generate button

#### Pull Handle:
- **Width:** 40px
- **Height:** 4px
- **Border-radius:** 2px
- **Color:** rgba(255, 255, 255, 0.3)
- **Position:** Center-top, 12px margin

**Figma Setup:**
1. Create frame: 375px width
2. Two variants: Collapsed (80px), Expanded (570px)
3. Apply glassmorphism:
   ```
   Bottom Sheet
   ├── Background (glass effect)
   ├── Pull Handle
   └── Content Container (auto-layout)
       ├── Navigation (collapsed view)
       └── Full Content (expanded view)
   ```
4. Connect variants with Smart Animate
5. Duration: 400ms
6. Add drag interaction (prototype)

---

## 6. Color Palette & Typography

### 6.1 Color System

#### Primary Colors:
```
Cloud Dancer (Primary Base)
├── HEX: #F2F2F2
├── RGB: 242, 242, 242
├── Usage: Main background, primary text on dark
└── Variants:
    ├── Lighter: #FAFAFA
    └── Darker: #E5E5E5
```

#### Accent Colors:
```
Digital Lavender (Hover/Focus States)
├── HEX: #A78BFA
├── RGB: 167, 139, 250
├── Usage: Interactive elements, focus states, highlights
└── Variants:
    ├── Light: #C4B5FD
    ├── Default: #A78BFA
    └── Dark: #8B5CF6

Mocha Mousse (Text Labels)
├── HEX: #A47864
├── RGB: 164, 120, 100
├── Usage: Secondary text, labels, warm accents
└── Variants:
    ├── Light: #C4A08F
    ├── Default: #A47864
    └── Dark: #8B6654
```

#### Contrast Colors (Clubroom Contrast):
```
Deep Black
├── HEX: #0A0A0A
├── RGB: 10, 10, 10
├── Usage: Footer, premium sections, text on light

Rich Gold
├── HEX: #D4AF37
├── RGB: 212, 175, 55
├── Usage: Pro badges, premium features, CTAs
```

#### Semantic Colors:
```
Electric Cobalt (Primary Action)
├── HEX: #2D5BFF
├── RGB: 45, 91, 255
├── Usage: Primary buttons, key actions

Neon Cyan (Progress/Success)
├── HEX: #00F5FF
├── RGB: 0, 245, 255
├── Usage: Progress indicators, success states

Error Red
├── HEX: #FF6B6B
├── RGB: 255, 107, 107
├── Usage: Error states, warnings
```

**Figma Color Styles Setup:**
1. Go to Design System panel
2. Create color styles for each:
   - Name: `Primary/Cloud-Dancer`
   - Name: `Accent/Digital-Lavender`
   - Name: `Accent/Mocha-Mousse`
   - etc.
3. Add descriptions and usage notes
4. Group by category (Primary, Accent, Contrast, Semantic)

---

### 6.2 Typography System

#### Font Families:
1. **Primary:** Inter or SF Pro Display
   - Usage: UI elements, body text, navigation
   
2. **Display:** Playfair Display or Cormorant Garamond
   - Usage: Headlines, hero text, kinetic typography

#### Type Scale:

**Display Styles:**
```
Display XL
├── Font: Playfair Display
├── Size: 240px (Desktop) / 120px (Tablet) / 80px (Mobile)
├── Weight: 300 (Light)
├── Line-height: 1.0
├── Letter-spacing: -0.04em
└── Usage: Hero kinetic typography

Display L
├── Font: Playfair Display
├── Size: 96px / 72px / 48px
├── Weight: 400 (Regular)
├── Line-height: 1.1
├── Letter-spacing: -0.03em
└── Usage: Section headers

Display M
├── Font: Playfair Display
├── Size: 64px / 48px / 36px
├── Weight: 500 (Medium)
├── Line-height: 1.2
├── Letter-spacing: -0.02em
└── Usage: Page titles
```

**Body Styles:**
```
Heading 1
├── Font: Inter
├── Size: 48px / 36px / 28px
├── Weight: 700 (Bold)
├── Line-height: 1.2
├── Letter-spacing: -0.02em

Heading 2
├── Font: Inter
├── Size: 36px / 28px / 24px
├── Weight: 600 (Semi-bold)
├── Line-height: 1.3
├── Letter-spacing: -0.01em

Heading 3
├── Font: Inter
├── Size: 28px / 24px / 20px
├── Weight: 600 (Semi-bold)
├── Line-height: 1.4
├── Letter-spacing: -0.01em

Body Large
├── Font: Inter
├── Size: 18px
├── Weight: 400 (Regular)
├── Line-height: 1.6
├── Letter-spacing: 0

Body Medium
├── Font: Inter
├── Size: 16px
├── Weight: 400 (Regular)
├── Line-height: 1.5
├── Letter-spacing: 0

Body Small
├── Font: Inter
├── Size: 14px
├── Weight: 400 (Regular)
├── Line-height: 1.5
├── Letter-spacing: 0

Caption
├── Font: Inter
├── Size: 12px
├── Weight: 500 (Medium)
├── Line-height: 1.4
├── Letter-spacing: 0.01em
```

**Button Text:**
```
Button Large
├── Font: Inter
├── Size: 18px
├── Weight: 600 (Semi-bold)
├── Letter-spacing: 0
├── Text-transform: None

Button Medium
├── Font: Inter
├── Size: 16px
├── Weight: 600 (Semi-bold)
├── Letter-spacing: 0
├── Text-transform: None

Button Small
├── Font: Inter
├── Size: 14px
├── Weight: 600 (Semi-bold)
├── Letter-spacing: 0
├── Text-transform: None
```

**Figma Text Styles Setup:**
1. Create text styles for each type
2. Naming convention: `Category/Name/Size`
   - Example: `Display/XL/Desktop`
   - Example: `Body/Medium/Default`
3. Add descriptions
4. Set responsive variants (Desktop/Tablet/Mobile)

---

## 7. Effects & Motion Library

### 7.1 Glassmorphism Presets

**Light Glass:**
- Background: rgba(255, 255, 255, 0.1)
- Backdrop-blur: 20px
- Border: 1px solid rgba(255, 255, 255, 0.2)
- Box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1)

**Medium Glass:**
- Background: rgba(255, 255, 255, 0.1)
- Backdrop-blur: 40px
- Border: 1px solid rgba(255, 255, 255, 0.2)
- Box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12)

**Heavy Glass:**
- Background: rgba(255, 255, 255, 0.15)
- Backdrop-blur: 60px
- Border: 1px solid rgba(255, 255, 255, 0.25)
- Box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15)

**Create as Figma Effect Styles:**
1. Select a frame
2. Apply effects (blur + shadows)
3. Save as style: `Glass/Light`, `Glass/Medium`, `Glass/Heavy`

---

### 7.2 Shadow System

**Elevation 1 (Subtle):**
- Box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08)

**Elevation 2 (Card):**
- Box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12)

**Elevation 3 (Modal):**
- Box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16)

**Elevation 4 (Popup):**
- Box-shadow: 0 20px 60px rgba(0, 0, 0, 0.24)

**Glow Effects:**

**Lavender Glow:**
- Box-shadow: 0 0 20px rgba(167, 139, 250, 0.4)

**Cobalt Glow:**
- Box-shadow: 0 0 30px rgba(45, 91, 255, 0.5)

**Neon Glow:**
- Box-shadow: 
  - 0 0 10px #00F5FF
  - 0 0 20px #00F5FF
  - 0 0 30px #00F5FF

---

### 7.3 Animation Presets

**Ease-in-out Standard:**
- Duration: 0.3s
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

**Spring Animation:**
- Duration: 0.4s
- Easing: cubic-bezier(0.34, 1.56, 0.64, 1)

**Smooth Slide:**
- Duration: 0.4s
- Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)

**Quick Fade:**
- Duration: 0.2s
- Easing: ease-out

**Slow Fade:**
- Duration: 0.6s
- Easing: ease-in-out

---

## 8. Component Library Structure

### Recommended Figma File Organization:

```
📁 AI Media Studio - Design System
├── 📄 Cover & Overview
├── 📄 Color Palette
├── 📄 Typography
├── 📄 Effects & Shadows
├── 📄 Icons Library
├── 📄 Components
│   ├── Buttons
│   │   ├── Primary
│   │   ├── Secondary
│   │   ├── SSO
│   │   └── Generate
│   ├── Forms
│   │   ├── Input
│   │   ├── Dropdown
│   │   ├── Checkbox
│   │   └── Radio
│   ├── Cards
│   │   ├── Glass Card
│   │   ├── Avatar Card
│   │   └── Background Selector
│   ├── Navigation
│   │   ├── Header
│   │   ├── Bottom Sheet
│   │   └── Mega Menu
│   └── Modals
│       ├── Image Preview
│       └── Confirmation
├── 📄 Layouts
│   ├── Desktop
│   ├── Tablet
│   └── Mobile
└── 📄 Prototypes
    ├── Desktop Flow
    └── Mobile Flow
```

---

## 9. Responsive Breakpoints

### Desktop (1440px+)
- Container max-width: 1440px
- Padding: 48px
- Grid: 12 columns
- Gap: 24px

### Laptop (1024px - 1439px)
- Container max-width: 1024px
- Padding: 32px
- Grid: 12 columns
- Gap: 20px

### Tablet (768px - 1023px)
- Container max-width: 768px
- Padding: 24px
- Grid: 8 columns
- Gap: 16px

### Mobile (375px - 767px)
- Container max-width: 100%
- Padding: 16px
- Grid: 4 columns
- Gap: 12px

### Mobile Small (< 375px)
- Container max-width: 100%
- Padding: 16px
- Grid: 4 columns (collapse)
- Gap: 8px

---

## 10. Interaction States Matrix

### Button States:
| State | Background | Border | Shadow | Cursor |
|-------|-----------|--------|--------|--------|
| Default | Transparent / Solid | 2px solid | Elevation 1 | pointer |
| Hover | Opacity +10% | Same | Elevation 2 | pointer |
| Active/Pressed | Opacity -10% | Same | Elevation 0 | pointer |
| Focus | Same | 2px solid accent | Glow | pointer |
| Disabled | Opacity 40% | 1px solid | None | not-allowed |
| Loading | Animated gradient | Same | Elevation 1 | wait |

### Input States:
| State | Background | Border | Shadow | Label |
|-------|-----------|--------|--------|-------|
| Default | Glass light | 1px rgba white 15% | None | Mocha Mousse |
| Focus | Glass light | 2px Digital Lavender | Lavender Glow | Digital Lavender |
| Filled | Glass light | 1px rgba white 15% | None | Mocha Mousse |
| Error | Glass light | 2px Error Red | Red Glow | Error Red |
| Disabled | Opacity 40% | 1px rgba white 10% | None | Opacity 40% |

### Card States:
| State | Scale | Shadow | Border | Overlay |
|-------|-------|--------|--------|---------|
| Default | 1.0 | Elevation 1 | 1px white 20% | None |
| Hover | 1.02 | Elevation 2 | 1px Lavender | rgba(0,0,0,0.3) |
| Selected | 1.0 | Elevation 3 | 3px Lavender | None |
| Disabled | 1.0 | None | 1px white 10% | rgba(0,0,0,0.5) |

---

## 11. Accessibility Guidelines

### Color Contrast:
- Text on Cloud Dancer: Use Deep Black (#0A0A0A) - Ratio 15.8:1 ✓
- Text on Dark BG: Use Cloud Dancer (#F2F2F2) - Ratio 15.8:1 ✓
- Interactive elements: Minimum 3:1 contrast ratio
- Focus states: Visible 2px outline

### Focus Management:
- Tab order: Logical flow (top to bottom, left to right)
- Focus indicator: 2px solid Digital Lavender
- Skip links: Provide for main content
- Keyboard navigation: All interactive elements accessible

### Screen Reader Support:
- Alt text: All images and icons
- ARIA labels: Custom components
- ARIA live regions: Dynamic content updates
- Semantic HTML: Use proper heading hierarchy

### Touch Targets (Mobile):
- Minimum size: 44x44px
- Spacing: 8px minimum between targets
- Gestures: Provide alternatives to complex gestures

---

## 12. Export Settings

### Images:
- **Format:** PNG (with transparency) or WebP
- **Resolution:** @1x, @2x, @3x for responsive
- **Compression:** Lossy compression for web

### Icons:
- **Format:** SVG (scalable)
- **Viewbox:** Consistent (24x24 or 32x32)
- **Stroke:** Outlined paths
- **Export:** Individual files

### Animations:
- **Format:** Lottie JSON or GIF
- **Frame rate:** 60fps for smooth motion
- **Duration:** Optimized (< 1s for micro-interactions)

### Developer Handoff:
- Use Figma Dev Mode
- Add code comments to components
- Specify animation timings and easings
- Document custom interactions

---

## 13. Implementation Notes for Developers

### CSS Considerations:

**Glassmorphism:**
```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(40px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}
```

**3D Transforms:**
```css
.avatar-hover {
  transform: scale(1.15) rotate3d(1, 1, 0, 5deg);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

**Scroll Effects:**
```javascript
// Parallax scroll
element.style.transform = `translateY(${scrollY * 0.5}px)`;

// Kinetic typography
element.style.transform = `translateY(${scrollY * 1.5}px)`;
```

### Performance:
- Use `will-change` for animated elements
- Lazy load images below fold
- Debounce scroll events
- Use CSS animations over JS when possible
- Optimize video files (H.264, < 5MB)

---

## 14. Prototype Flow

### User Journey Map:

**1. Landing → Authentication**
- Hero section (3D scroll)
- Click "Get Started"
- Navigate to Login/Signup
- Complete authentication
- Redirect to Studio

**2. Studio → Generation**
- View dashboard
- Select Gender/Origin (Mega menu)
- Choose Avatar (3D selection)
- Select Pose
- Choose Background (Quickview)
- Click Generate (Liquid-fill)
- Watch Progress (Neon line)

**3. Results → Preview**
- View Masonry grid
- Click image
- Open Modal
- Use Magnifier tool
- Download or Share
- Return to Studio

**Figma Prototype Setup:**
1. Create frames for each step
2. Add hotspots for interactions
3. Set transitions:
   - Smart Animate for morphing
   - Slide for navigation
   - Dissolve for overlays
4. Add animations:
   - Button states
   - Form interactions
   - Modal opens/closes
5. Test flow (Presentation mode)

---

## Conclusion

This comprehensive design specification provides all the details needed to create a high-end, European-style AI Media Studio in Figma. Each component is designed with:

- **Precision:** Exact measurements, colors, and effects
- **Luxury:** Quiet luxury aesthetic with premium materials
- **Interaction:** Advanced animations and micro-interactions
- **Responsiveness:** Desktop, tablet, and mobile considerations
- **Accessibility:** WCAG 2.1 AA compliance
- **Developer-friendly:** Clear specifications for implementation

By following these specifications, you will create a cinematic, exploratory experience that meets high-end European design standards for your 4-month prototype launch.

---

## Additional Resources

### Figma Plugins Recommended:
1. **Iconify** - Extensive icon library
2. **Unsplash** - High-quality images
3. **Autoflow** - User flow diagrams
4. **Stark** - Accessibility checker
5. **Content Reel** - Generate realistic content
6. **LottieFiles** - Animation export
7. **Anima** - Export to code

### Design References:
- Awwwards.com (Premium websites)
- Behance (Design inspiration)
- Dribbble (UI components)
- SiteInspire (Web design gallery)

### Testing Tools:
- Figma Mirror (Mobile preview)
- Figma Prototype (Interactive testing)
- UserTesting.com (User feedback)

---

**Document Version:** 1.0  
**Last Updated:** February 2026  
**Created for:** AI Generation Studio - European Luxury Edition
