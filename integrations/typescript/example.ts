import { Scope } from '../../core/runtime';

/**
 * Example of a Type-Safe Component Wrapper for Token CSS
 */
interface TokenStyleProps {
    layout?: string;
    skin?: string;
    typography?: string;
    interaction?: string;
    animation?: string;
}

/**
 * Utility to generate Token CSS class names with type support
 */
export function tc(props: TokenStyleProps): string {
    const classes: string[] = [];

    if (props.layout) classes.push(`L(${props.layout})`);
    if (props.skin) classes.push(`S(${props.skin})`);
    if (props.typography) classes.push(`T(${props.typography})`);
    if (props.interaction) classes.push(`X(${props.interaction})`);
    if (props.animation) classes.push(`A(${props.animation})`);

    return classes.join(' ');
}

// Usage Example in a hypothetical React component:
/*
const Button = ({ children }: { children: React.ReactNode }) => (
  <button className={tc({
    layout: 'p:2/4',
    skin: 'bg:#3b82f6 rad:md',
    typography: 'c:#fff',
    interaction: 'hvr:S(bg:#2563eb)'
  })}>
    {children}
  </button>
);
*/
