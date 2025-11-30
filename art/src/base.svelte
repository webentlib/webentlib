<script module>
    import {meStore} from '/src/stores.js';

    export async function load({url, params, route, data, fetch, setHeaders, depends, parent, untrack}) {
        const response = await fetch(`/api/me/`);
        const me = await response.json();
        meStore.set(me);
    }
</script>

<script>
    import '/lex/lab/css/base.css';
    import '/lex/index.css';
    import '/lib/index.css';

    // ROUTER
    import {routeStore} from '/lex/';
    import {Layouts, Extras} from '/urls';

    let title = $derived($routeStore.title);
    let h1 = $derived($routeStore.h1);
    let layout = $derived($routeStore.layout);
    let wrapper = $derived($routeStore.wrapper);
    let name = $derived($routeStore.name);
    let extras = $derived($routeStore.extras);

    // CSRF

    import {csrf} from '/lex/';

    csrf();

    if (typeof window !== 'undefined') {
        fetch(`/api/csrf/`);
    }

    // CUSTOM

    import {Nprogress, GoTop} from '/lex/';
    import Header from '/src/header/Header.svelte';

    // DEFAULT

    let {children} = $props();
</script>

<svelte:head>
    <title>{title || 'Webentlib'}</title>
</svelte:head>

{#if !layout || layout === Layouts.DEFAULT}
    <Header/>
    <main data-name={name} class={`WRAPPER` + (wrapper ? ' _' + wrapper : '')}>
        {#if h1}
            <div class="HEADING">
                <h1 class="TITLE">{h1}</h1>
            </div>
        {/if}
        {@render children?.()}
    </main>
{:else if layout === Layouts.BLANK}
    <main data-name={name}>
        {@render children?.()}
    </main>
{/if}

<Nprogress/>

{#if extras?.length && extras.includes(Extras.GO_TOP)}
    <GoTop/>
{/if}
