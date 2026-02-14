# Detailed Module Guide for AI Media Studio Application Design

## Table of Contents
1. [Studio Module Deep Dive](#studio-module-deep-dive)
2. [User Flow & Experience](#user-flow--experience)
3. [Screen-by-Screen Breakdown](#screen-by-screen-breakdown)
4. [Component Interaction Details](#component-interaction-details)
5. [Animation & Transition Specifications](#animation--transition-specifications)
6. [Mobile-Specific Design Details](#mobile-specific-design-details)
7. [Advanced Features & Edge Cases](#advanced-features--edge-cases)

---

## Studio Module Deep Dive

### Overview
The Studio Module is the core feature where users create AI-generated fashion media. It consists of five interconnected sub-modules that guide users through a sophisticated selection and generation process.

---

## 1. Studio Module Architecture

### Module Structure
```
Studio Module (Main Container)
│
├── Selection Panel (Left Side - 40% width)
│   ├── Gender & Origin Selector
│   ├── Avatar Gallery
│   ├── Pose Selector
│   └── Background Selector
│
├── Preview Panel (Right Side - 60% width)
│   ├── Live Preview Area
│   ├── Settings Overlay
│   └── Generate Button
│
└── Control Bar (Bottom - Fixed)
    ├── Progress Indicator
    ├── Action Buttons
    └── Quick Settings
```

---

## 2. Detailed Screen-by-Screen Breakdown

### Screen 1: Studio Dashboard (Entry Point)

#### Layout Specifications:
**Desktop (1440px)**
```
┌─────────────────────────────────────────────────┐
│  Header (Transparent Glass)                      │
├─────────────────────┬───────────────────────────┤
│                     │                           │
│  Selection Panel    │    Preview Panel          │
│  (576px width)      │    (864px width)          │
│                     │                           │
│  ┌───────────────┐  │   ┌─────────────────┐     │
│  │ Gender/Origin │  │   │                 │     │
│  └───────────────┘  │   │   Live Preview  │     │
│                     │   │                 │     │
│  ┌───────────────┐  │   │   (Empty State) │     │
│  │ Avatar Grid   │  │   │                 │     │
│  └───────────────┘  │   └─────────────────┘     │
│                     │                           │
│  ┌───────────────┐  │   ┌─────────────────┐     │
│  │ Pose Selector │  │   │  Generate Btn   │     │
│  └───────────────┘  │   └─────────────────┘     │
│                     │                           │
│  ┌───────────────┐  │                           │
│  │ Background    │  │                           │
│  └───────────────┘  │                           │
│                     │                           │
└─────────────────────┴───────────────────────────┘
│  Control Bar (Fixed Bottom)                      │
└─────────────────────────────────────────────────┘
```

#### Component Details:

**Selection Panel Container:**
- Width: 576px (fixed)
- Height: calc(100vh - 80px - 60px)
- Background: rgba(10, 10, 10, 0.3) with backdrop-blur(20px)
- Border-right: 1px solid rgba(255, 255, 255, 0.1)
- Padding: 32px
- Overflow-y: Auto (custom scrollbar)

**Preview Panel Container:**
- Width: 864px (flexible)
- Height: Same as selection panel
- Background: Deep gradient
  - Top: rgba(10, 10, 10, 0.9)
  - Bottom: rgba(45, 91, 255, 0.05)
- Padding: 48px
- Display: Flex, centered content

---

### Screen 2: Gender & Origin Selection (Detailed)

#### Component: Mega Menu Dropdown

**Closed State Specifications:**

Frame: `320px x 56px`
```
┌──────────────────────────────────────┐
│  👤 Select Gender & Origin       ▼   │
└──────────────────────────────────────┘
```

**Interaction Flow:**
1. User hovers → Border glows (Digital Lavender)
2. User clicks → Menu expands with spring animation
3. Backdrop darkens (rgba(0,0,0,0.6))

**Expanded State Specifications:**

Frame: `640px x 480px` (Modal overlay)
```
┌────────────────────────────────────────────────────────┐
│  Select Gender & Origin                            ✕   │
├────────────────────────┬───────────────────────────────┤
│                        │                               │
│  GENDER                │  ORIGIN                       │
│                        │                               │
│  ┌──────────────────┐  │  ┌─────────────────────────┐  │
│  │  👨 Male         │  │  │  🌍 European            │  │
│  │  [Selected]      │  │  │  [Hover State]          │  │
│  └──────────────────┘  │  └─────────────────────────┘  │
│                        │                               │
│  ┌──────────────────┐  │  ┌─────────────────────────┐  │
│  │  👩 Female       │  │  │  🌏 Asian               │  │
│  │  [Default]       │  │  │  [Default]              │  │
│  └──────────────────┘  │  └─────────────────────────┘  │
│                        │                               │
│  ┌──────────────────┐  │  ┌─────────────────────────┐  │
│  │  ⚧ Non-binary   │  │  │  🌍 African             │  │
│  │  [Unavailable]   │  │  │  [Unavailable]          │  │
│  │  ℹ️ Tooltip       │  │  │  ℹ️ Tooltip              │  │
│  └──────────────────┘  │  └─────────────────────────┘  │
│                        │                               │
│  ┌──────────────────┐  │  ┌─────────────────────────┐  │
│  │  👤 Custom       │  │  │  🌎 Latin American      │  │
│  │  [Pro Feature]   │  │  │  [Default]              │  │
│  └──────────────────┘  │  └─────────────────────────┘  │
│                        │                               │
├────────────────────────┴───────────────────────────────┤
│                                                        │
│              [Apply Selection]                         │
│                                                        │
└────────────────────────────────────────────────────────┘
```

#### Option Card Specifications:

**Available Option:**
- Width: 280px
- Height: 80px
- Background: rgba(255, 255, 255, 0.05)
- Border: 1px solid rgba(255, 255, 255, 0.15)
- Border-radius: 12px
- Padding: 16px
- Display: Flex (icon + text)

**Layout:**
```
┌─────────────────────────────────────┐
│  [Icon]  Male                       │
│  32x32   Font: Inter 16px          │
│          Weight: 500                │
│          Color: #F2F2F2             │
└─────────────────────────────────────┘
```

**Hover State:**
- Background: rgba(167, 139, 250, 0.1)
- Border: 1px solid rgba(167, 139, 250, 0.5)
- Box-shadow: 0 0 20px rgba(167, 139, 250, 0.3)
- Scale: 1.02
- Transition: 0.3s ease-out

**Selected State:**
- Background: rgba(167, 139, 250, 0.15)
- Border: 2px solid #A78BFA
- Box-shadow: 0 0 30px rgba(167, 139, 250, 0.4)
- Checkmark (top-right): 
  - Size: 24px
  - Background: #A78BFA
  - Icon: White check

**Unavailable State:**
- Opacity: 0.4
- Cursor: not-allowed
- Tooltip on hover:
  ```
  ┌──────────────────────────────────────┐
  │ ℹ️ Not available for selected model  │
  │    Coming in next update             │
  └──────────────────────────────────────┘
  ```
  - Background: #1A1A1A
  - Text color: #F2F2F2
  - Font-size: 12px
  - Padding: 8px 12px
  - Border-radius: 6px
  - Arrow pointing to element

**Pro Feature State:**
- Background: Linear gradient (Gold shimmer)
  - From: rgba(212, 175, 55, 0.2)
  - To: rgba(212, 175, 55, 0.05)
- Border: 1px solid rgba(212, 175, 55, 0.5)
- Badge (top-right):
  - Text: "PRO"
  - Background: #D4AF37
  - Font-size: 10px
  - Padding: 4px 8px
  - Border-radius: 4px

---

### Screen 3: Avatar Gallery (Detailed)

#### Gallery Layout:

**Container Specifications:**
- Width: 100% (544px available)
- Height: 400px
- Layout: Grid
  - Columns: 4
  - Gap: 16px
  - Rows: 2 (initially)
- Scroll: Vertical (if more avatars)

**Visual Layout:**
```
┌──────────────────────────────────────────────┐
│  AVATAR SELECTION                            │
│  Choose your model                           │
├──────────────────────────────────────────────┤
│                                              │
│  ○────────○  ○────────○  ○────────○  ○────────○  │
│  │ Avatar │  │ Avatar │  │ Avatar │  │ Avatar │  │
│  │   1    │  │   2    │  │   3    │  │   4    │  │
│  │ [Sel]  │  │ [Def]  │  │ [Hov]  │  │ [Def]  │  │
│  ○────────○  ○────────○  ○────────○  ○────────○  │
│                                              │
│  ○────────○  ○────────○  ○────────○  ○────────○  │
│  │ Avatar │  │ Avatar │  │ Avatar │  │ Avatar │  │
│  │   5    │  │   6    │  │   7    │  │   8    │  │
│  │ [Def]  │  │ [Dis]  │  │ [Pro]  │  │ [Def]  │  │
│  ○────────○  ○────────○  ○────────○  ○────────○  │
│                                              │
│              [Load More Avatars]             │
│                                              │
└──────────────────────────────────────────────┘
```

#### Avatar Card Detailed Specs:

**Dimensions:**
- Size: 120px x 120px (circular)
- Image resolution: 240x240 minimum (retina)
- Aspect ratio: 1:1 (square, cropped to circle)

**Default State:**
```css
.avatar-card {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid transparent;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: hidden;
}
```

**Hover State (3D-Tilt Effect):**
```css
.avatar-card:hover {
  transform: scale(1.15) perspective(500px) rotateX(5deg) rotateY(-5deg);
  box-shadow: 
    0 12px 32px rgba(0, 0, 0, 0.25),
    0 0 0 3px rgba(167, 139, 250, 0.5);
  border: 3px solid rgba(167, 139, 250, 0.5);
  z-index: 10;
}
```

**Animation Details:**
- Duration: 300ms
- Easing: cubic-bezier(0.34, 1.56, 0.64, 1) (spring effect)
- Transform-origin: center center
- Will-change: transform

**Hover Overlay:**
- Background: Linear gradient (top to bottom)
  - From: transparent
  - To: rgba(0, 0, 0, 0.4)
- Content: Avatar name (bottom, centered)
  - Font: Inter 12px, Weight: 600
  - Color: #F2F2F2
  - Padding: 8px

**Selected State:**
```css
.avatar-card.selected {
  transform: scale(1.1);
  border: 3px solid #A78BFA;
  box-shadow: 
    0 8px 24px rgba(167, 139, 250, 0.4),
    0 0 0 6px rgba(167, 139, 250, 0.15);
  position: relative;
}
```

**Checkmark Indicator:**
- Position: Absolute top-right
- Size: 32px x 32px
- Background: #A78BFA
- Border: 2px solid #FFFFFF
- Border-radius: 50%
- Icon: White check (16px)
- Animation: Scale from 0 to 1 (200ms, ease-out)

**Disabled State:**
- Opacity: 0.3
- Grayscale filter: 100%
- Cursor: not-allowed
- Tooltip: "Not available for selected origin"

**Pro/Premium Avatar:**
- Shimmer animation on border
- Gold gradient overlay (subtle)
- "PRO" badge (top-left)

---

### Screen 4: Pose Selector (Detailed)

#### Layout Design:

**Container:**
- Width: 100%
- Height: 320px
- Layout: Horizontal scroll (carousel)
- Scrollbar: Hidden (custom arrows)

**Visual Structure:**
```
┌─────────────────────────────────────────────────────────┐
│  POSE SELECTION                                         │
│  Choose a pose for your model                           │
├─────────────────────────────────────────────────────────┤
│  ← ╔════════╗  ╔════════╗  ╔════════╗  ╔════════╗  →  │
│    ║        ║  ║        ║  ║        ║  ║        ║     │
│    ║ Pose 1 ║  ║ Pose 2 ║  ║ Pose 3 ║  ║ Pose 4 ║     │
│    ║Standing║  ║Walking ║  ║Sitting ║  ║Dynamic ║     │
│    ║        ║  ║        ║  ║        ║  ║        ║     │
│    ║[Select]║  ║[Hover] ║  ║[Def]   ║  ║[Pro]   ║     │
│    ╚════════╝  ╚════════╝  ╚════════╝  ╚════════╝     │
│                                                         │
│    ╔════════╗  ╔════════╗  ╔════════╗  ╔════════╗     │
│    ║ Pose 5 ║  ║ Pose 6 ║  ║ Pose 7 ║  ║ Pose 8 ║     │
│    ╚════════╝  ╚════════╝  ╚════════╝  ╚════════╝     │
└─────────────────────────────────────────────────────────┘
```

#### Pose Card Specifications:

**Dimensions:**
- Width: 160px
- Height: 240px
- Border-radius: 12px
- Gap between cards: 16px

**Card Structure:**
```
┌─────────────────────┐
│  ┌───────────────┐  │  ← Preview Image Area
│  │               │  │     (160px x 180px)
│  │   Pose Image  │  │
│  │               │  │
│  └───────────────┘  │
│                     │
│  Pose Name          │  ← Label Area
│  Standing           │     (160px x 60px)
│  ✓ Selected         │     Optional indicator
│                     │
└─────────────────────┘
```

**Preview Image:**
- Resolution: 320x360 (2x for retina)
- Format: WebP with PNG fallback
- Loading: Lazy load (intersection observer)
- Placeholder: Low-quality blur (LQIP)

**Default State:**
- Border: 1px solid rgba(255, 255, 255, 0.15)
- Box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15)
- Image opacity: 0.9

**Hover State:**
- Scale: 1.05
- Border: 2px solid #A78BFA
- Box-shadow: 0 8px 20px rgba(167, 139, 250, 0.3)
- Image opacity: 1.0
- Overlay: None (clear view)
- Animation: Preview plays (if video)

**Selected State:**
- Scale: 1.03 (persistent)
- Border: 3px solid #A78BFA
- Box-shadow: 
  - Inner: inset 0 0 20px rgba(167, 139, 250, 0.2)
  - Outer: 0 12px 32px rgba(167, 139, 250, 0.4)
- Background overlay (bottom): 
  - Linear gradient (#A78BFA to transparent)
  - Height: 60px
- Checkmark (bottom-right): 24px, white on lavender

**Label Area:**
- Background: rgba(10, 10, 10, 0.8)
- Padding: 12px
- Text:
  - Pose name: Inter 14px, Weight 600
  - Description: Inter 11px, Weight 400, Opacity 0.7
  - Color: #F2F2F2

**Navigation Arrows:**
- Position: Absolute (left/right edges)
- Size: 48px x 48px
- Background: rgba(255, 255, 255, 0.1)
- Backdrop-filter: blur(10px)
- Border: 1px solid rgba(255, 255, 255, 0.2)
- Border-radius: 50%
- Icon: 24px arrow
- Hover: Background changes to rgba(167, 139, 250, 0.2)

---

### Screen 5: Background Selector with Quickview (Detailed)

#### Enhanced Layout:

**Container:**
- Width: 100%
- Height: 360px
- Layout: Horizontal scroll (3.5 items visible)
- Categories: Tabbed interface above

**Category Tabs:**
```
┌─────────────────────────────────────────────────────────┐
│  BACKGROUND SELECTION                                   │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐      │
│  │ Indoor  │ │ Outdoor │ │ Natural │ │ Abstract│      │
│  │ [Active]│ │         │ │         │ │  [Pro]  │      │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘      │
└─────────────────────────────────────────────────────────┘
```

**Tab Specifications:**
- Width: Auto (padding: 24px horizontal)
- Height: 48px
- Active: Border-bottom 3px solid #A78BFA
- Inactive: Border-bottom 1px solid rgba(255, 255, 255, 0.1)
- Hover: Border-bottom 2px solid rgba(167, 139, 250, 0.5)

#### Background Card with Quickview:

**Dimensions:**
- Width: 280px
- Height: 280px
- Border-radius: 16px
- Aspect ratio: 1:1

**Default State:**
```
┌───────────────────────────────┐
│                               │
│                               │
│      Background Image         │
│      (Static Preview)         │
│                               │
│                               │
│   ┌───────────────────────┐   │
│   │ Studio Background     │   │
│   │ Indoor • Professional │   │
│   └───────────────────────┘   │
└───────────────────────────────┘
```

**Hover State (Quickview Activated):**
```
┌───────────────────────────────┐
│ ▶  Quickview Playing          │  ← Indicator
│                               │
│   [2-second video clip]       │
│   Muted, auto-play            │
│   Loop: No (plays once)       │
│                               │
│   ┌─────────────────────┐     │
│   │ Studio Background   │     │
│   │ [View Details] →    │     │  ← CTA appears
│   └─────────────────────┘     │
└───────────────────────────────┘
```

**Quickview Technical Specs:**
- Video format: MP4 (H.264)
- Resolution: 560x560 (2x card size)
- Duration: Exactly 2 seconds
- File size: < 500KB (optimized)
- Bitrate: 1000 kbps
- Audio: Muted (no audio track)
- Preload: metadata
- Loop: No (single playthrough)
- Controls: Hidden

**Interaction Flow:**
1. User hovers over card
2. After 200ms delay → Video begins
3. Play icon fades out (500ms)
4. Video plays for 2s
5. User moves away → Video resets to first frame

**Selected State:**
- Border: 4px solid #A78BFA
- Box-shadow: 0 16px 40px rgba(167, 139, 250, 0.5)
- Overlay: Semi-transparent lavender tint
- Checkmark: 40px (top-right corner)
- Label: Highlighted with lavender background

**Pro Background Indicator:**
- Gold shimmer border animation
- "PRO" badge (top-left)
- Lock icon overlay (center, 48px)
- Blur filter on image (8px)
- Click → Opens upgrade modal

---

### Screen 6: Live Preview Panel (Detailed)

#### Preview Area Specifications:

**Container:**
- Width: 100% of right panel (864px)
- Height: calc(100vh - 80px - 60px - 120px)
- Background: Deep black gradient
- Border-radius: 24px
- Border: 1px solid rgba(255, 255, 255, 0.1)

**Empty State (No Selections):**
```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│              ┌─────────────┐                │
│              │             │                │
│              │   🎨 Icon   │                │
│              │             │                │
│              └─────────────┘                │
│                                             │
│         Start Creating Your                 │
│         AI Fashion Media                    │
│                                             │
│    Select options from the left panel       │
│    to see a live preview here               │
│                                             │
│                                             │
└─────────────────────────────────────────────┘
```

**With Selections (Live Preview):**
```
┌─────────────────────────────────────────────┐
│  [Settings Gear Icon]              [ℹ️ Info]│
│                                             │
│                                             │
│           ┌─────────────────┐               │
│           │                 │               │
│           │  Composite      │               │
│           │  Preview        │               │
│           │                 │               │
│           │  Avatar + Pose  │               │
│           │  + Background   │               │
│           │                 │               │
│           │  Real-time      │               │
│           │  Composition    │               │
│           │                 │               │
│           └─────────────────┘               │
│                                             │
│   Selection Summary:                        │
│   ✓ Male • European                         │
│   ✓ Avatar: Model #3                        │
│   ✓ Pose: Standing                          │
│   ✓ Background: Studio Indoor               │
│                                             │
└─────────────────────────────────────────────┘
```

**Preview Composition:**
- Layer 1 (Bottom): Background image
- Layer 2 (Middle): Avatar in selected pose (with alpha channel)
- Layer 3 (Top): Optional overlays/effects
- Rendering: Real-time canvas compositing

**Settings Overlay:**
- Position: Top-right corner
- Size: 40px x 40px
- Icon: Gear/Settings
- Hover: Expands to show quick settings
  - Quality: Low/Medium/High
  - Style: Realistic/Artistic
  - Lighting: Auto/Custom

---

### Screen 7: Generate Button (Detailed States)

#### Generate Button: Complete Specifications

**Dimensions:**
- Width: 100% (of preview panel - 864px)
- Height: 80px
- Border-radius: 20px
- Position: Bottom of preview panel
- Margin-top: 24px

**State 1: Disabled (Incomplete Selections)**
```
┌──────────────────────────────────────────────┐
│                                              │
│      Complete all selections to generate     │
│                                              │
│      Missing: [Avatar] [Background]          │
│                                              │
└──────────────────────────────────────────────┘
```

Specifications:
- Background: rgba(45, 91, 255, 0.4)
- Opacity: 0.4
- Border: 1px dashed rgba(255, 255, 255, 0.2)
- Text color: rgba(242, 242, 242, 0.6)
- Cursor: not-allowed
- Animation: None

**State 2: Ready (All Selections Complete)**
```
┌──────────────────────────────────────────────┐
│                                              │
│         🎨 Generate Your Creation            │
│                                              │
│              [Hover for preview]             │
│                                              │
└──────────────────────────────────────────────┘
```

Specifications:
- Background: #2D5BFF (solid)
- Opacity: 1.0
- Border: None
- Text color: #FFFFFF
- Font-size: 20px
- Font-weight: 700
- Box-shadow: 0 8px 24px rgba(45, 91, 255, 0.4)
- Cursor: pointer

**Hover State:**
- Scale: 1.02
- Box-shadow: 0 12px 32px rgba(45, 91, 255, 0.6)
- Background: Linear gradient
  - From: #2D5BFF
  - To: #4D7BFF
- Animation: Subtle glow pulse

**State 3: Clicked (Liquid-Fill Animation)**

**Frame-by-frame Animation (5 frames, 100ms each):**

Frame 0 (0ms):
```
┌──────────────────────────────────────────────┐
│                                              │
│         🎨 Generate Your Creation            │
│                                              │
└──────────────────────────────────────────────┘
```

Frame 1 (100ms):
```
┌──────────────────────────────────────────────┐
│                                              │
│         🎨 Generate Your Creation            │
│                                              │
└────██████████████████████████────────────────┘
   ↑ Fill starts from bottom (20% height)
```

Frame 2 (200ms):
```
┌──────────────────────────────────────────────┐
│                                              │
│         🎨 Generate Your Creation            │
│███████████████████████████████████████       │
└──────────────────────────────────────────────┘
   ↑ Fill reaches 50% height
```

Frame 3 (300ms):
```
┌──────────────────────────────────────────────┐
│         🎨 Generate Your Creation            │
│██████████████████████████████████████████████│
│██████████████████████████████████████████████│
└──────────────────────────────────────────────┘
   ↑ Fill reaches 80% height
```

Frame 4 (400ms):
```
┌──────────────────────────────────────────────┐
│██████████████████████████████████████████████│
│           ✨ Generating...                   │
│██████████████████████████████████████████████│
└──────────────────────────────────────────────┘
   ↑ Fully filled, text changes
```

**Liquid Effect Details:**
- Shape: Organic blob with wave top
- Color: Brighter #4D7BFF (lighter than button)
- SVG path: Animated bezier curves
- Easing: ease-in-out
- Total duration: 400ms

**State 4: Generating (Loading State)**
```
┌──────────────────────────────────────────────┐
│                                              │
│     ⚡ Generating Your Masterpiece... 47%    │
│                                              │
│     [████████████░░░░░░░░]                   │
│                                              │
└──────────────────────────────────────────────┘
```

Specifications:
- Background: Animated gradient (moving)
- Progress bar: Embedded, neon cyan
- Text: Dynamic percentage
- Animation: Infinite shimmer
- Cursor: wait

**State 5: Complete (Success)**
```
┌──────────────────────────────────────────────┐
│                                              │
│     ✅ Generation Complete! View Results →   │
│                                              │
└──────────────────────────────────────────────┘
```

Specifications:
- Background: Success green gradient
- Duration: 2s (auto-transitions)
- Animation: Scale pulse + checkmark pop
- Auto-scroll to results

---

## 3. Progress Visualization (Detailed)

### Neon-Shock Progress Line

**Full Specifications:**

**Container:**
- Position: Fixed to bottom of header
- Width: 100vw
- Height: 3px
- Z-index: 999
- Background: transparent

**Progress Line:**
- Width: Dynamic (0% to 100%)
- Height: 3px
- Background: Linear gradient
  - From: #00F5FF (Neon Cyan)
  - To: #00D4E5
- Animation: Smooth width transition (100ms ease-out)

**Glow Effects (3 layers):**

Layer 1 (Inner Glow):
- Box-shadow: 0 0 10px #00F5FF
- Blur: 10px
- Opacity: 1.0

Layer 2 (Medium Glow):
- Box-shadow: 0 0 20px #00F5FF
- Blur: 20px
- Opacity: 0.8

Layer 3 (Outer Glow):
- Box-shadow: 0 0 30px #00F5FF
- Blur: 30px
- Opacity: 0.6

**Percentage Badge:**
```
┌──────────┐
│   72%    │
└──────────┘
```

Specifications:
- Position: Absolute right (follows line end)
- Size: Auto x 28px
- Padding: 4px 16px
- Background: #00F5FF (solid)
- Color: #000000 (dark text on bright)
- Font: Inter 14px, Weight 900
- Border-radius: 14px
- Box-shadow: 0 4px 12px rgba(0, 245, 255, 0.5)
- Animation: Float (subtle bounce)

**Animation Keyframes:**
```css
@keyframes floatBadge {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-4px);
  }
}
```

**Progress States:**

Idle (0%):
- Width: 0%
- Opacity: 0
- Badge: Hidden

Initializing (1-10%):
- Width: 10%
- Opacity: Fade in (0 to 1, 500ms)
- Badge: Appears with pop animation
- Text: "Initializing..."

Processing (11-90%):
- Width: Dynamic
- Opacity: 1.0
- Badge: Shows percentage
- Update interval: Every 1% change
- Smooth interpolation

Finalizing (91-99%):
- Width: 99%
- Opacity: 1.0
- Badge: "Finalizing..."
- Pulse animation: Faster

Complete (100%):
- Width: 100%
- Opacity: Fade out (1 to 0, 1000ms)
- Badge: "Complete!" → Fades away
- Confetti effect (optional celebration)

---

## 4. Results Gallery (Masonry Grid Detailed)

### Grid System Specifications:

**Desktop Layout (1440px):**
```
┌────────────────────────────────────────────────────────────┐
│  YOUR GENERATED CREATIONS                                  │
├────────────┬────────────┬────────────┬────────────────────┤
│            │            │            │                    │
│   Image 1  │   Image 2  │   Image 3  │    Filters Panel   │
│   (tall)   │  (medium)  │  (short)   │                    │
│            │            │            │  • Sort by:        │
│            │            ├────────────┤    - Newest        │
│            │            │            │    - Popular       │
│            ├────────────┤   Image 4  │    - Favorites     │
│            │            │  (medium)  │                    │
│            │   Image 5  │            │  • Style:          │
│            │  (short)   │            │    - All           │
├────────────┤            ├────────────┤    - Realistic     │
│            │            │            │    - Artistic      │
│   Image 6  ├────────────┤   Image 7  │                    │
│  (medium)  │            │   (tall)   │  • Quality:        │
│            │   Image 8  │            │    - 4K            │
│            │  (short)   │            │    - HD            │
│            │            │            │                    │
└────────────┴────────────┴────────────┴────────────────────┘
```

**Column Configuration:**
- Desktop (1440px+): 4 columns
- Laptop (1024px-1439px): 3 columns
- Tablet (768px-1023px): 2 columns
- Mobile (< 768px): 1 column

**Masonry Settings:**
- Column width: Flexible (calc based on container)
- Gap: 24px (horizontal and vertical)
- Item min-height: 300px
- Item max-height: 600px
- Aspect ratios: 3:4, 1:1, 4:5, 9:16 (varied)

### Image Card Complete Specifications:

**Default State:**
```
┌─────────────────────┐
│                     │
│   [Generated Image] │
│    4K Resolution    │
│    3000x4000px      │
│                     │
│                     │
│   Metadata hidden   │
│                     │
└─────────────────────┘
```

Specifications:
- Border-radius: 16px
- Border: None
- Box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15)
- Overflow: hidden
- Image fit: Cover
- Loading: Progressive (blur-up)

**Hover State:**
```
┌─────────────────────┐
│  ⬇️              ✨  │ ← Icons appear
│                     │
│   [Image dimmed]    │
│   Overlay 30%       │
│                     │
│      👁️ View        │ ← CTA appears
│                     │
│  ❤️  23  💬  5      │ ← Stats appear
└─────────────────────┘
```

Specifications:
- Scale: 1.02
- Box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25)
- Overlay: rgba(0, 0, 0, 0.4)
- Backdrop-filter: blur(2px)
- Icons: Fade in (300ms)
- Cursor: pointer

**Overlay Icons:**

Download (Top-right):
- Size: 40px x 40px
- Background: rgba(255, 255, 255, 0.9)
- Icon: Download arrow (20px)
- Border-radius: 50%
- Hover: Scale 1.1

Share (Top-left):
- Size: 40px x 40px
- Background: rgba(255, 255, 255, 0.9)
- Icon: Share (20px)
- Border-radius: 50%

View (Center):
- Size: 64px x 64px
- Background: rgba(167, 139, 250, 0.95)
- Icon: Eye (28px)
- Border-radius: 50%
- Hover: Scale 1.1, glow effect

Stats Bar (Bottom):
- Background: rgba(10, 10, 10, 0.9)
- Padding: 12px
- Display: Flex, space-between
- Items:
  - ❤️ Likes: 23
  - 💬 Comments: 5
  - 👁️ Views: 142

---

## 5. Full-Screen Modal (Image Preview)

### Modal Structure:

**Overlay:**
- Size: 100vw x 100vh
- Background: rgba(0, 0, 0, 0.95)
- Backdrop-filter: blur(10px)
- Z-index: 2000
- Animation: Fade in (300ms)

**Content Layout:**
```
┌────────────────────────────────────────────────────┐
│  [✕ Close]                            [ℹ️ Info]    │
│                                                    │
│                                                    │
│              ┌──────────────────┐                  │
│              │                  │                  │
│              │                  │                  │
│              │   Main Image     │                  │
│              │   High-res       │                  │
│              │   4K Display     │                  │
│              │                  │                  │
│              │                  │                  │
│              └──────────────────┘                  │
│                                                    │
│  [←]                                          [→]  │
│                                                    │
│  ⊖  [====Zoom Slider====]  ⊕  ⟲  💾  🔗          │
│                                                    │
└────────────────────────────────────────────────────┘
```

### Magnifier Tool Detailed Specs:

**Activation:**
- Trigger: Click and hold on image
- Alternative: Click magnifier icon in toolbar

**Magnifier Circle:**
```
┌───────────────────────────────┐
│                               │
│        ┌────────────┐          │
│        │  Magnifier │          │
│        │  Zoomed    │          │
│        │  Content   │          │
│        │  4x Zoom   │          │
│        └────────────┘          │
│                               │
└───────────────────────────────┘
```

Specifications:
- Diameter: 250px
- Border: 6px solid #FFFFFF
- Box-shadow: 
  - Inner: inset 0 0 10px rgba(0,0,0,0.3)
  - Outer: 0 8px 32px rgba(0,0,0,0.6)
- Position: Follows cursor (with offset)
- Offset: +30px X, +30px Y (below cursor)

**Zoom Levels:**
- 2x: Overview zoom (see details)
- 4x: Standard zoom (fabric texture)
- 8x: Extreme zoom (thread detail)
- Switch: Click inside magnifier

**Performance Optimization:**
- Canvas rendering (not HTML)
- Hardware acceleration: GPU
- Frame rate: 60fps
- Image: Pre-loaded at full resolution
- Tile system: Load visible area only

**Visual Indicator:**
```
┌─────────────┐
│   4x ZOOM   │ ← Indicator badge
└─────────────┘
```
- Position: Inside magnifier (top)
- Background: rgba(0, 0, 0, 0.8)
- Text: White, 12px, bold

### Navigation Controls:

**Arrow Buttons:**
- Position: Left/right edges (vertical center)
- Size: 60px x 60px
- Background: rgba(255, 255, 255, 0.1)
- Backdrop-filter: blur(10px)
- Icon: 32px arrow
- Hover: Background to rgba(255, 255, 255, 0.2)
- Keyboard: Left/Right arrow keys

**Zoom Controls (Bottom Bar):**
```
┌──────────────────────────────────────┐
│  ⊖  [========●========]  ⊕  ⟲  💾  🔗 │
└──────────────────────────────────────┘
```

Zoom Out (⊖):
- Size: 40px x 40px
- Action: Decrease zoom by 10%

Slider:
- Width: 200px
- Range: 100% to 800%
- Handle: 20px circle
- Track: 4px line

Zoom In (⊕):
- Size: 40px x 40px
- Action: Increase zoom by 10%

Reset (⟲):
- Size: 40px x 40px
- Action: Return to 100% zoom, center

Download (💾):
- Size: 40px x 40px
- Action: Download full 4K image

Share (🔗):
- Size: 40px x 40px
- Action: Copy link / Open share menu

---

## 6. Mobile Experience (375px - 767px)

### Mobile Navigation Structure:

**Full-Screen Sections:**
```
┌──────────────┐  ← Section 1: Hero
│              │
│  Hero Image  │
│  + CTA       │
│              │
└──────────────┘
        ↓ Swipe Up
┌──────────────┐  ← Section 2: Features
│              │
│  Feature 1   │
│              │
└──────────────┘
        ↓ Swipe Up
┌──────────────┐  ← Section 3: Studio
│              │
│  Studio Intro│
│              │
└──────────────┘
        ↓ Tap to enter
┌──────────────┐  ← Section 4: Create
│              │
│  Creation UI │
│  (Bottom Sheet)
│              │
└──────────────┘
```

### Parallax Scroll Animation:

**Layer Movement (per 100px scroll):**
- Foreground (Text): Moves 150px (1.5x)
- Midground (Model): Moves 100px (1.0x)
- Background (Scene): Moves 50px (0.5x)

**Staggered Reveal:**

Scroll Position 0 (Section 1 Active):
```
┌───────────────┐
│   Section 1   │ ← Fully visible, scale 1.0
│   (Active)    │
└───────────────┘
                   Section 2 (Below, hidden)
```

Scroll Position 50% (Transition):
```
                   Section 1 (Shrinking, fading)
┌───────────────┐
│   Section 2   │ ← Scaling up from 0.9 to 1.0
│ (Transitioning)│    Fading in from 0 to 1
└───────────────┘
```

Scroll Position 100% (Section 2 Active):
```
                   Section 1 (Hidden above)
┌───────────────┐
│   Section 2   │ ← Fully visible, scale 1.0
│   (Active)    │
└───────────────┘
```

**Animation Specifications:**
- Duration: 800ms
- Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)
- Scale range: 0.9 to 1.0
- Opacity range: 0 to 1
- Transform-origin: center
- Snap points: Every 100vh

### Bottom Sheet Detailed Design:

**Collapsed State (80px):**
```
┌────────────────────────────────────┐
│           ▬                        │ ← Pull handle
│  Create Your Design    [•••]       │
└────────────────────────────────────┘
```

Specifications:
- Height: 80px
- Background: rgba(255, 255, 255, 0.1)
- Backdrop-filter: blur(40px) saturate(180%)
- Border-radius: 24px 24px 0 0
- Border-top: 1px solid rgba(255, 255, 255, 0.2)
- Box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.2)

Pull Handle:
- Width: 48px
- Height: 4px
- Background: rgba(255, 255, 255, 0.4)
- Border-radius: 2px
- Position: Center-top, 12px margin
- Interactive: Draggable

**Expanded State (70vh - 570px):**
```
┌────────────────────────────────────┐
│           ▬                        │
│  Your Studio                   [✕] │
│                                    │
│  ┌──────────────────────────────┐  │
│  │ Gender & Origin Selector     │  │
│  └──────────────────────────────┘  │
│                                    │
│  ┌──────────────────────────────┐  │
│  │ Avatar Gallery (Horizontal)  │  │
│  │ [Swipe to see more]          │  │
│  └──────────────────────────────┘  │
│                                    │
│  ┌──────────────────────────────┐  │
│  │ Pose Selector (Horizontal)   │  │
│  └──────────────────────────────┘  │
│                                    │
│  ┌──────────────────────────────┐  │
│  │ Background (Horizontal)      │  │
│  └──────────────────────────────┘  │
│                                    │
│  [Generate Button - Full Width]   │
│                                    │
└────────────────────────────────────┘
```

**Interaction States:**

Dragging:
- Touch: Pull up/down on handle or sheet
- Resistance: Rubber-band effect at limits
- Velocity: Swipe velocity affects final position
- Snap points: Collapsed (80px), Half (40vh), Expanded (70vh)

Half-Expanded (40vh):
- Shows: Quick selectors only
- Hides: Detailed options
- Use case: Quick edits

**Animations:**
- Open: Slide up (400ms, spring easing)
- Close: Slide down (400ms, spring easing)
- Backdrop: Fade in/out (300ms)
- Content: Stagger fade-in (50ms delay per element)

### Mobile-Specific Components:

**Mobile Avatar Selector:**
- Layout: Horizontal scroll
- Item size: 100px (smaller than desktop)
- Gap: 12px
- Visible items: 3.5 (partial view of 4th)
- Scroll: Smooth, with momentum

**Mobile Dropdown (Full-Screen):**
- Opens as full-screen overlay
- Animation: Slide up from bottom
- Close: Swipe down or tap backdrop
- Header: Title + close button
- Content: Full-height scrollable list

**Mobile Generate Button:**
- Height: 64px (larger touch target)
- Fixed: Bottom of bottom sheet
- Safe area: Respects iOS notch
- Vibration: Haptic feedback on tap

---

## 7. Edge Cases & Error States

### Error Handling:

**API Failure:**
```
┌────────────────────────────────────┐
│   ⚠️ Oops! Something went wrong    │
│                                    │
│   We couldn't generate your image  │
│   Please try again in a moment     │
│                                    │
│   [Retry]        [Go Back]         │
│                                    │
│   Error Code: GEN_001              │
└────────────────────────────────────┘
```

**Network Timeout:**
- Show loading state for max 60s
- After timeout: Show error message
- Offer: Retry or Cancel
- Save: User selections for retry

**Quota Exceeded:**
```
┌────────────────────────────────────┐
│   💎 You've Used Your Daily Quota  │
│                                    │
│   Free: 5/5 generations used       │
│   Resets in: 18h 23m               │
│                                    │
│   [Upgrade to Pro] → Unlimited     │
│   [View Results]                   │
│                                    │
└────────────────────────────────────┘
```

**Invalid Selection Combination:**
```
┌────────────────────────────────────┐
│   ℹ️ This combination isn't        │
│      available                     │
│                                    │
│   The selected pose doesn't work   │
│   with this background type        │
│                                    │
│   Suggested alternatives:          │
│   • Change pose to "Standing"      │
│   • Or select "Indoor" background  │
│                                    │
│   [Change Pose] [Change Background]│
└────────────────────────────────────┘
```

### Loading States:

**Image Loading (Lazy Load):**
- Placeholder: Low-quality blur (LQIP)
- Progressive: Load in stages (10%, 50%, 100%)
- Skeleton: Animated gradient placeholder

**Content Loading:**
- Shimmer effect on cards
- Fade-in when loaded
- Error image if failed

---

## 8. Accessibility Features

### Keyboard Navigation:

**Tab Order:**
1. Header navigation
2. Selection panel (top to bottom)
   - Gender/Origin dropdown
   - Avatar gallery (left to right)
   - Pose selector (left to right)
   - Background selector (left to right)
3. Preview panel
4. Generate button
5. Footer

**Keyboard Shortcuts:**
- `Tab`: Next element
- `Shift + Tab`: Previous element
- `Enter/Space`: Activate button/select
- `Arrow Keys`: Navigate within galleries
- `Esc`: Close modals/dropdowns
- `/`: Focus search (if available)

### Screen Reader Support:

**ARIA Labels:**
```html
<div role="region" aria-label="Studio selection panel">
  <div role="button" 
       aria-expanded="false" 
       aria-haspopup="true"
       aria-label="Select gender and origin">
    Gender & Origin Selector
  </div>
  
  <div role="radiogroup" aria-label="Avatar selection">
    <div role="radio" 
         aria-checked="false"
         aria-label="Female model, European, Avatar 1">
      [Avatar 1]
    </div>
  </div>
</div>
```

**Live Regions:**
```html
<div aria-live="polite" aria-atomic="true">
  Selection updated: Male, Asian model selected
</div>

<div aria-live="assertive" aria-atomic="true">
  Generation failed. Please try again.
</div>
```

### Visual Accessibility:

**Focus Indicators:**
- Border: 3px solid #A78BFA
- Offset: 2px
- Border-radius: Matches element
- Visible on all interactive elements

**Color Contrast:**
- Text on light: #0A0A0A (15.8:1 ratio) ✓
- Text on dark: #F2F2F2 (15.8:1 ratio) ✓
- Interactive elements: Minimum 3:1 ✓
- Error text: #FF6B6B on white (5.2:1) ✓

**Motion Preferences:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Conclusion

This detailed module guide provides comprehensive specifications for creating every aspect of the AI Media Studio in Figma. Each component, interaction, and state is documented with precise measurements, colors, and behaviors.

**Key Takeaways:**
1. **Glassmorphism** is the primary visual language
2. **3D effects** and **parallax** create depth
3. **Animations** are smooth and purposeful (300-400ms)
4. **Mobile experience** uses bottom sheets and full-screen sections
5. **Accessibility** is built-in from the start
6. **Loading states** and **error handling** are comprehensive

**Next Steps:**
1. Set up Figma file with design system
2. Create component library
3. Build each screen following specifications
4. Create interactive prototype
5. Test with users
6. Iterate based on feedback

This design achieves the high-end European standard required for a 4-month prototype launch, with careful attention to every detail and interaction.
