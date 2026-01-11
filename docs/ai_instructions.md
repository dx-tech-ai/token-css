# Token CSS: Instructions for AI Agents (LLMs)

To enable an AI Agent (Cursor, Claude, Anti-Gravity, etc.) to use Token CSS effectively, provide this document as part of your project's context or system prompt.

## 1. Core Paradigm
Token CSS uses **Functional Scopes** to group style logic. This increases semantic density and reduces token usage by over 30%.

### Standard Scopes:
- **L(...)** - **Layout**: `dir:col|row`, `x:cntr|f|e|b|a`, `y:cntr`, `p:{num}`, `m:{num}`, `g:{num}`, `w:{val}`, `h:{val}`.
- **S(...)** - **Skin**: `bg:{hex|rgba}`, `brdr:{w}/{style}/{color}`, `rad:{sm|md|xl|f}`, `glass`, `shd:{1-2}`.
- **T(...)** - **Typography**: `sz:{px}`, `w:{1-9}b`, `c:{hex|rgba}`, `a:cntr`.
- **X(...)** - **Interaction**: `hvr:`, `actv:`, `fcs:`. Maps to pseudo-classes.
- **M(...)** - **Media**: `sm:`, `md:`, `lg:`. Maps to breakpoints.
- **A(...)** - **Animation**: `dur:{ms}`, `trnsf:sc:{val}`.

## 2. Abbreviation Rules
- **Spacing**: Use `x/y` for multi-value padding/margin (e.g., `p:2/4` for `0.5rem 1rem`).
- **Values**: `1` always means `100%`, `v` means viewport units (`vh` or `vw`).
- **Nesting**: Scopes can be nested inside `X` and `M`.
- **Example**: `X(hvr:S(bg:#000))` (If hover, change background to black).

## 3. Best Practices for AI
1. **Scope Logic**: Never put layout tokens inside `T()`. Keep them separate to avoid logic interference.
2. **Conciseness**: Prefer `w:1` over `w:100%`.
3. **Motion**: Always pair a transform in `X(hvr:...)` with a duration in `A(dur:...)` for smooth transitions.

## 4. Mapping Reference
| Token | CSS Property | Notes |
| :--- | :--- | :--- |
| `x:cntr` | `justify-content: center` | x = x-axis |
| `y:cntr` | `align-items: center` | y = y-axis |
| `p:4` | `padding: 1rem` | 1 unit = 0.25rem |
| `w:80` | `width: 80px` | Raw num = px |
| `w:7b` | `font-weight: 700` | b = bold unit |
