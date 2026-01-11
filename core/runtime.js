/**
 * Token CSS Runtime v1.0
 * AI-Native Styling Engine
 */

(function () {
  function applyTokenCSS() {
    const elements = document.querySelectorAll('[class*="("]');
    const styleTag = document.createElement('style');
    let cssRules = '';

    const mapL = { 'dir:col': 'flex-direction:column', 'dir:row': 'flex-direction:row', 'x:cntr': 'justify-content:center', 'x:f': 'justify-content:flex-start', 'x:e': 'justify-content:flex-end', 'x:b': 'justify-content:space-between', 'y:cntr': 'align-items:center', 'w:1': 'width:100%', 'h:v': 'height:100vh', 'h:1': 'height:100%' };
    const mapS = { 'glass': 'backdrop-filter:blur(10px);background:rgba(255,255,255,0.05);', 'shd:1': 'box-shadow:0 4px 6px -1px rgba(0,0,0,0.1)', 'shd:2': 'box-shadow:0 10px 15px -3px rgba(0,0,0,0.1)' };

    const processTokens = (scope, tokens) => {
      let res = '';
      if (scope === 'L') {
        res += 'display:flex;';
        tokens.split(' ').forEach(t => {
          if (mapL[t]) res += mapL[t] + ';';
          else if (t.startsWith('p:')) {
            const v = t.split(':')[1];
            res += `padding:${v.includes('/') ? v.split('/').map(x => x * 0.25 + 'rem').join(' ') : v * 0.25 + 'rem'};`;
          }
          else if (t.startsWith('m:')) {
            const v = t.split(':')[1];
            res += `margin:${v.includes('/') ? v.split('/').map(x => x * 0.25 + 'rem').join(' ') : v * 0.25 + 'rem'};`;
          }
          else if (t.startsWith('g:')) res += `gap:${t.split(':')[1] * 0.25}rem;`;
          else if (t.startsWith('w:')) res += `width:${t.split(':')[1] === '1' ? '100%' : t.split(':')[1].replace('v', 'vw').endsWith('%') ? t.split(':')[1] : isNaN(t.split(':')[1]) ? t.split(':')[1] : t.split(':')[1] + 'px'};`;
          else if (t.startsWith('h:')) res += `height:${t.split(':')[1] === '1' ? '100%' : t.split(':')[1].replace('v', 'vh').endsWith('%') ? t.split(':')[1] : isNaN(t.split(':')[1]) ? t.split(':')[1] : t.split(':')[1] + 'px'};`;
          else if (t.startsWith('pos:')) res += `position:${t.split(':')[1] === 'rel' ? 'relative' : t.split(':')[1] === 'abs' ? 'absolute' : 'fixed'};`;
          else if (t === 'r:0') res += 'right:0;';
          else if (t === 'b:0') res += 'bottom:0;';
        });
      } else if (scope === 'S') {
        tokens.split(' ').forEach(t => {
          if (mapS[t]) res += mapS[t] + ';';
          else if (t.startsWith('bg:')) res += `background:${t.split(':')[1]};`;
          else if (t.startsWith('rad:')) res += `border-radius:${t === 'rad:f' ? '9999px' : t.split(':')[1] === 'xl' ? '12px' : t.split(':')[1] === 'md' ? '8px' : '4px'};`;
          else if (t.startsWith('brdr:')) {
            const parts = t.split(':')[1].split('/');
            res += `border:${parts[0]}px ${parts[1]} ${parts[2]};`;
          }
        });
      } else if (scope === 'T') {
        tokens.split(' ').forEach(t => {
          if (t.startsWith('sz:')) res += `font-size:${t.split(':')[1]}px;`;
          else if (t.startsWith('c:')) res += `color:${t.split(':')[1]};`;
          else if (t.startsWith('w:')) res += `font-weight:${t.split(':')[1].replace('b', '00')};`;
        });
      } else if (scope === 'A') {
        tokens.split(' ').forEach(t => {
          if (t.startsWith('dur:')) res += `transition-duration:${t.split(':')[1]}ms;`;
          if (t.startsWith('trnsf:sc:')) res += `transform:scale(${t.split(':')[1]});`;
        });
      }
      return res;
    };

    const parse = (str, currentSelector) => {
      const regex = /([LSTXMA])\((.*?)\)/g;
      let match;
      let baseCSS = '';
      while ((match = regex.exec(str)) !== null) {
        const [full, scope, content] = match;
        if (['L', 'S', 'T', 'A'].includes(scope)) {
          baseCSS += processTokens(scope, content);
        } else if (scope === 'X') {
          const idx = content.indexOf(':');
          const state = content.substring(0, idx);
          const inner = content.substring(idx + 1);
          const stateMap = { hvr: ':hover', actv: ':active', fcs: ':focus' };
          cssRules += `${currentSelector}${stateMap[state]} { ${parse(inner, currentSelector)} }\n`;
        } else if (scope === 'M') {
          const idx = content.indexOf(':');
          const bp = content.substring(0, idx);
          const inner = content.substring(idx + 1);
          const bpMap = { sm: '640px', md: '768px', lg: '1024px' };
          cssRules += `@media (min-width: ${bpMap[bp]}) { ${currentSelector} { ${parse(inner, currentSelector)} } }\n`;
        }
      }
      return baseCSS;
    };

    elements.forEach((el, i) => {
      const className = `t-${i}`;
      const css = parse(el.className, `.${className}`);
      if (css) cssRules += `.${className} { ${css} }\n`;
      el.classList.add(className);
    });
    styleTag.innerHTML = cssRules;
    document.head.appendChild(styleTag);
  }
  window.addEventListener('DOMContentLoaded', applyTokenCSS);
})();
