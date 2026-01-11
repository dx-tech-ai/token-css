# Migrating from Tailwind CSS to Token CSS

This guide outlines how to transition your project from Tailwind CSS to Token CSS, whether you are starting with a small prototype or managing a large-scale design system.

## Why Migrate?

1.  **Context Window Savings**: Reduce CSS class verbosity by 40-60%, allowing AI models to handle larger files without losing logic.
2.  **Semantic Scoping**: Group styles by intent (Layout, Skin, Type, etc.), making it easier for both humans and AI to read and maintain.
3.  **Strict Consistency**: Prevent "creative" hardcoding by AI (e.g., `bg-[#f3f4f6]`) by enforcing a token-only system.

---

## 1. Simple Projects (Incremental Adoption)

If you have a small project, you don't need to rewrite everything at once. Token CSS is designed to co-exist with Tailwind.

### Step 1: Install Token CSS
Add `token-css` to your project and import the runtime or use the plugin.

### Step 2: Start with New Components
Use Token CSS syntax for any new components while keeping old ones in Tailwind.
```html
<!-- Tailwind (Old) -->
<div class="flex flex-col items-center p-4 bg-gray-100 rounded-xl">...</div>

<!-- Token CSS (New) -->
<div class="L(f f-col ai-c p-4) S(bg-gray-100 r-xl)">...</div>
```

### Step 3: Global Token Alignment
Ensure your CSS variables match the Tailwind theme colors and spacing values in your `tokens.css` file.

---

## 2. Complex Projects (Systematic Migration)

For large codebases, a "Search & Replace" approach is insufficient. You need a structured migration.

### Step 1: Design Token Audit
Map your `tailwind.config.js` to Token CSS variables.
- **Tailwind**: `theme.colors.brand: "#3b82f6"`
- **Token CSS**: `--brand: #3b82f6;`

### Step 2: AI-Assisted Migration (The Secret Sauce)
Since Token CSS is AI-Native, the best way to migrate is to let the AI do it. Add the following instruction to your `.cursorrules` or system prompt:

> "When migrating Tailwind classes to Token CSS, group styles into:
> - `L()` for Layout (flex, grid, position, spacing)
> - `S()` for Skin (background, border, shadow)
> - `T()` for Typography (font, color, leading)
> - `X()` for Interactions (hover, focus)
> - `M()` for Responsive breakpoints"

### Step 3: Refactor by Scope
Don't refactor file by file; refactor by **scope**.
1.  **Layout First**: Convert all `p-*`, `m-*`, `flex`, `grid` classes to `L(...)`.
2.  **Visuals Next**: Convert `bg-*`, `text-*`, `border-*` to `S(...)` and `T(...)`.
3.  **Interactions Last**: Convert `hover:*`, `focus:*` to `X(...)`.

---

## 3. Comparison Cheat Sheet

| Category | Tailwind CSS | Token CSS |
| :--- | :--- | :--- |
| **Layout** | `flex items-center justify-between p-6 gap-4` | `L(f ai-c jc-sb p-6 g-4)` |
| **Skin** | `bg-white dark:bg-slate-900 border border-gray-200 rounded-2xl shadow-xl` | `S(bg-white d:bg-slate-900 b-1 bc-gray-200 r-2xl sh-xl)` |
| **Type** | `text-2xl font-bold tracking-tight text-gray-900` | `T(fs-2xl fw-b ls-t c-gray-900)` |
| **Interactions** | `hover:bg-blue-600 active:scale-95 transition-all` | `X(h:bg-blue-600 a:s-95 t-all)` |
| **Complex combo**| `fixed top-0 left-0 w-full h-16 bg-white/80 backdrop-blur-md z-50` | `L(fix t-0 l-0 w-full h-16 z-50) S(bg-white/80 blur-md)` |

---

## 4. Automation Tips

If you have hundreds of files, consider writing a small Regex script to capture common patterns:
- Find: `class="flex ([^"]+)"`
- Replace: `class="L(f $1)"`

However, we recommend **Human-in-the-loop AI migration** using Cursor's "Composer" mode for the highest accuracy.
