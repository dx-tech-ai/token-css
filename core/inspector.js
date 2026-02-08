/**
 * Token CSS Debugger Overlay
 * Hover over elements to see their Token CSS definitions.
 */
(function () {
    const style = document.createElement('style');
    style.innerHTML = `
        #tc-inspector {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #1e293b;
            color: #f8fafc;
            padding: 12px 16px;
            border-radius: 8px;
            font-family: monospace;
            font-size: 13px;
            z-index: 99999;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.5);
            border: 1px solid #334155;
            pointer-events: none;
            display: none;
            max-width: 300px;
        }
        .tc-highlight {
            outline: 2px solid #6366f1 !important;
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(style);

    const inspector = document.createElement('div');
    inspector.id = 'tc-inspector';
    document.body.appendChild(inspector);

    document.addEventListener('mouseover', (e) => {
        const el = e.target;
        if (el && el.className && typeof el.className === 'string') {
            const tokens = el.className.match(/([LSTXMA])\(.*?\)/g);
            if (tokens) {
                el.classList.add('tc-highlight');
                inspector.style.display = 'block';
                inspector.innerHTML = `
                    <div style="color: #6366f1; font-weight: bold; margin-bottom: 4px;">[Token CSS Inspector]</div>
                    <div style="color: #94a3b8;">Tag: &lt;${el.tagName.toLowerCase()}&gt;</div>
                    <div style="margin-top: 8px; word-break: break-all;">
                        ${tokens.map(t => `<div style="margin-bottom: 2px;">• ${t}</div>`).join('')}
                    </div>
                `;
            }
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target && e.target.classList) {
            e.target.classList.remove('tc-highlight');
            inspector.style.display = 'none';
        }
    });

    console.log('🚀 Token CSS Inspector Active');
})();
