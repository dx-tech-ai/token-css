# Token CSS: The Syntax Bible (Phase 1)
**Vision:** High Semantic Density (HSD) for AI-Native Styling.

## 1. Functional Scopes
Logic is grouped into 4 primary blocks to prevent "Context Pollution".

- **L(...)** - Layout: Mathematical/Coordinated positioning.
- **S(...)** - Skin: Physical surface properties.
- **T(...)** - Typography: Content presentation.
- **X(...)** - Interaction: State mutations.

---

## 2. Token Abbreviations (Layout - L)
| Feature | Token CSS | Tailwind Equivalent | CSS |
| :--- | :--- | :--- | :--- |
| Direction | `dir:col\|row` | `flex-col\|row` | `flex-direction` |
| Alignment | `x:cntr\|f\|e` | `justify-center\|start\|end` | `justify-content` |
| Items | `y:cntr\|f\|e` | `items-center\|start\|end` | `align-items` |
| Gap | `g:4` | `gap-4` | `gap: 1.0rem` |
| Padding | `p:2` | `p-2` | `padding: 0.5rem` |
| Margin | `m:2` | `m-2` | `margin: 0.5rem` |
| Width | `w:1` | `w-full` | `width: 100%` |
| Height | `h:v` | `h-screen` | `height: 100vh` |
| Grid | `grd:12` | `grid-cols-12` | `grid-template-columns` |

## 3. Token Abbreviations (Skin - S)
| Feature | Token CSS | Tailwind Equivalent | CSS |
| :--- | :--- | :--- | :--- |
| Background | `bg:#000` | `bg-black` | `background: #000` |
| Border | `brdr:1/sol/#fff` | `border border-white` | `border: 1px solid #fff` |
| Radius | `rad:xl` | `rounded-xl` | `border-radius: 12px` |
| Glass | `glass:20` | `bg-white/20 backdrop-blur-md` | `backdrop-filter: blur(...)` |

## 4. Token Abbreviations (Typography - T)
| Feature | Token CSS | Tailwind Equivalent | CSS |
| :--- | :--- | :--- | :--- |
| Size | `sz:14` | `text-sm` | `font-size: 14px` |
| Weight | `w:7b` | `font-bold` | `font-weight: 700` |
| Color | `c:#fff` | `text-white` | `color: #fff` |
| Align | `a:cntr` | `text-center` | `text-align: center` |

---

## 6. Interaction & States - X(...)
**Philosophy:** Scoped mutation. Instead of prefixes, we wrap the property-to-be-changed inside a state.

- `X(hvr:S(bg:#000))` -> Hover: Change background to black.
- `X(fcs:brdr:2/sol/#primary)` -> Focus: Change border.
- `X(actv:shd:none)` -> Active: Remove shadow.

## 7. Responsive Matrix - M(...)
**Philosophy:** Mobile-first break-points.

- `M(md:L(p:8))` -> Medium screen: Change padding to 2rem.
- `M(lg:L(dir:row))` -> Large screen: Change flex direction.

## 8. Motion & Animation - A(...)
- `A(dur:300 ease:in)` -> Transition duration/easing.
- `A(anim:pulse)` -> Keyframe animation call.
- `A(trnsf:sc:1.1)` -> Transform: scale(1.1).

---

## 9. Token Comparison (Advanced)
**Tailwind:** `hover:scale-105 transition-all duration-300 md:flex-row sm:p-4` (68 tokens)
**Token CSS:** `X(hvr:A(trnsf:sc:1.05)) A(dur:300) M(md:L(dir:row) sm:L(p:4))` (58 tokens - Higher Logic grouping)
