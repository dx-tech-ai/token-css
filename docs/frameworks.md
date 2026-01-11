# Framework Integration Guide

Token CSS can be easily integrated into modern web frameworks. Since it relies on the `class` attribute and a runtime parser (or build-time transform), the setup is minimal.

## 1. React / Next.js

### Basic Integration
In your `_app.js` or `layout.tsx`, import the runtime. Ensure it runs on the client side.

```tsx
// components/TokenCSSProvider.tsx
'use client';
import { useEffect } from 'react';

export default function TokenCSSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Import your runtime.js here or copy its logic
    import('../core/runtime.js'); 
  }, []);

  return <>{children}</>;
}
```

### Usage
```tsx
const Card = () => (
  <div className="L(p:6) S(bg:#fff rad:xl shd:1) T(c:#333)">
    <h1 className="T(sz:24 w:7b)">Hello from React</h1>
  </div>
);
```

## 2. Vue 3

### Integration
In `main.js`:

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import './core/runtime.js' // Ensure it runs after DOM load

createApp(App).mount('#app')
```

### Usage
```vue
<template>
  <button class="L(p:2/4) S(bg:#3b82f6 rad:md) T(c:#fff)">
    Vue Button
  </button>
</template>
```

## 3. Angular

### Integration
Add the runtime to your `angular.json` assets or scripts array:

```json
"scripts": [
  "src/assets/token-css/runtime.js"
]
```

## 4. Build-Time PostCSS Plugin (Future Concept)
For production, you might want to extract Token CSS into static CSS to avoid runtime overhead.
We are currently developing `postcss-token-css` which will:
1. Scan your files for `L()`, `S()`, `T()`, etc.
2. Static-compile them into a `.css` bundle.
3. Replace the scoped strings with hashed class names.

---

> **Note:** As an AI-Native framework, the runtime approach is preferred during development as it allows LLMs to "hallucinate" new styles and see them live without waiting for a re-build.
