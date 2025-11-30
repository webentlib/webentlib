import type {Pattern, Layout} from '/lex';

export enum Layouts {
    DEFAULT = 'DEFAULT',
    BLANK = 'BLANK',
}

export enum Wrappers {
    DEFAULT = 'DEFAULT',
    WIDE = 'WIDE',
    NARROW = 'NARROW',
}

export enum Extras {
    GO_TOP = 'GO_TOP',
}

const layout: Layout = {page: () => import('/src/base.svelte')};
const layouts: Layout[] = [layout]

export const patterns: Pattern[] = [
    {re: '', page: () => import('/src/home.svelte'), layouts, wrapper: Wrappers.DEFAULT},
]
