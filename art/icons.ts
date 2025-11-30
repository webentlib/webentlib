/*
https://tabler.io/icons
https://heroicons.com/
https://feathericons.com/
*/

import { svg } from '/lex/'

export const Icons = {
    custom: {},
    tabler: {},
    hero: {},
    feather: {},
}

Icons.custom = {
    // Created from tie from https://tabler.io/icons
    tie: ({size, width, height, stroke, style, cls, title, attrs}: any ={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 22l4 -4l-2.5 -11l.993 -2.649a1 1 0 0 0 -.936 -1.351h-3.114a1 1 0 0 0 -.936 1.351l.993 2.649l-2.5 11l4 4z" /><!--path d="M10.5 7h3l5" /--><!--path d="M10.5 7h3l5" /-->
    `),
}

Icons.tabler = {
    'brand-redhat': ({size, width, height, stroke, style, cls, title, attrs}: any = {}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 10.5l1.436 -4c.318 -.876 .728 -1.302 1.359 -1.302c.219 0 1.054 .365 1.88 .583c.825 .219 .733 -.329 .908 -.487c.176 -.158 .355 -.294 .61 -.294c.242 0 .553 .048 1.692 .448c.759 .267 1.493 .574 2.204 .922c1.175 .582 1.426 .913 1.595 1.507l.816 4.623c2.086 .898 3.5 2.357 3.5 3.682c0 1.685 -1.2 3.818 -5.957 3.818c-6.206 0 -14.043 -4.042 -14.043 -7.32c0 -1.044 1.333 -1.77 4 -2.18z" /><path d="M6 10.5c0 .969 4.39 3.5 9.5 3.5c1.314 0 3 .063 3 -1.5" />
    `),
    'timezone': ({size, width, height, stroke, style, cls, title, attrs}: any = {}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20.884 10.554a9 9 0 1 0 -10.337 10.328" /><path d="M3.6 9h16.8" /><path d="M3.6 15h6.9" /><path d="M11.5 3a17 17 0 0 0 -1.502 14.954" /><path d="M12.5 3a17 17 0 0 1 2.52 7.603" /><path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M18 16.5v1.5l.5 .5" />
    `),
    'logout-2': ({size, width, height, stroke, style, cls, title, attrs}: any = {}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" /><path d="M15 12h-12l3 -3" /><path d="M6 15l-3 -3" />
    `),
    'menu-2': ({size, width, height, stroke, style, cls, title, attrs}: any = {}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" />
    `),
    'menu': ({size, width, height, stroke, style, cls, title, attrs}: any = {}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8l16 0" /><path d="M4 16l16 0" />
    `),
    'x': ({size, width, height, stroke, style, cls, title, attrs}: any = {}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" />
    `),
}

Icons.hero = {
    'user-circle': ({size, width, height, stroke, style, cls, title, attrs}: any = {}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    `),
    'chevron-down': ({size, width, height, stroke, style, cls, title, attrs}: any = {}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    `),
    'chevron-up': ({size, width, height, stroke, style, cls, title, attrs}: any = {}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    `),
    'chevron-left': ({size, width, height, stroke, style, cls, title, attrs}: any = {}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    `),
    'chevron-right': ({size, width, height, stroke, style, cls, title, attrs}: any = {}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    `),
}

Icons.feather = {

}

