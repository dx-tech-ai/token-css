/**
 * Type definitions for Token CSS Runtime
 */

export type Scope = 'L' | 'S' | 'T' | 'X' | 'M' | 'A';

export interface TokenCSSConfig {
    /** Custom colors mapping */
    colors?: Record<string, string>;
    /** Base spacing unit in rem (e.g. 0.25 for 4px base) */
    spacingUnit?: number;
    /** Custom media query breakpoints */
    breakpoints?: Record<string, string>;
}

declare global {
    interface Window {
        /** Optional configuration for Token CSS */
        TokenCSSConfig?: TokenCSSConfig;
    }
}

/**
 * The main Token CSS runtime function (internal use in runtime.js)
 */
export function applyTokenCSS(): void;

/**
 * Utility to process tokens programmatically (optional export if needed)
 */
export function processTokens(scope: Scope, tokens: string): string;

/**
 * Utility to parse a class string into CSS (optional export if needed)
 */
export function parse(str: string, currentSelector: string): string;
