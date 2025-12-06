<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/styles/default.min.css">
    <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/highlight.min.js"></script>
</svelte:head>
<script>
    import {onMount} from '/svelte';

    onMount(() => {
        hljs.highlightAll();
    })

    const items = [
        {id: 1, name: 'Пылесос', price: 5000},
        {id: 2, name: 'Холодильник', price: 15000},
        {id: 3, name: 'Стиральная машина', price: 25000},
        {id: 4, name: 'Утюг', price: 750},
        {id: 5, name: 'Тостер', price: 1420},
    ]
</script>

<h1 class="TITLE">Tables</h1>

<h2>Basic table</h2>
<pre class="snippet"><code>{`<table class="TABLE">...</table>`}</code></pre>
<div style="display:flex;align-items:flex-start;">

<table class="TABLE">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        {#each items as item}
            <tr>
                <th>{item.id}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
            </tr>
        {/each}
    </tbody>
</table>

<pre class="code" style="margin:0 0 0 24px !important;flex:1;"><code>{
`<script>
    const items = [
        {id: 1, name: 'Пылесос', price: 5000},
        {id: 2, name: 'Холодильник', price: 15000},
        {id: 3, name: 'Стиральная машина', price: 25000},
        {id: 4, name: 'Утюг', price: 750},
        {id: 5, name: 'Тостер', price: 1420},
    ]
</script>

<table class="TABLE">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        {#each items as item}
            <tr>
                <th>{item.id}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
            </tr>
        {/each}
    </tbody>
</table>`
}</code></pre>

</div>

<h2>Stretch</h2>
<pre class="snippet"><code>{`<table class="TABLE _STRETCH">...</table>`}</code></pre>
<table class="TABLE _STRETCH"><thead><tr><th>ID</th><th>Name</th><th>Price</th></tr></thead><tbody>{#each items as item}<tr><th>{item.id}</th><td>{item.name}</td><td>{item.price}</td></tr>{/each}</tbody></table>

<h2>Sticky header</h2>
<pre class="snippet"><code>{`<table class="TABLE _STRETCH _STICKY">...</table>`}</code></pre>
<table class="TABLE _STRETCH _STICKY"><thead><tr><th>ID</th><th>Name</th><th>Price</th></tr></thead><tbody>{#each items as item}<tr><th>{item.id}</th><td>{item.name}</td><td>{item.price}</td></tr>{/each}</tbody></table>

<h2>No vertical separators</h2>
<div>Since it can be different for <pre class="inline"><code>thead</code></pre>/<pre class="inline"><code>tbody</code></pre>/<pre class="inline"><code>tfoot</code></pre> — </div>
<div>Place <pre class="inline"><code>--table-border-width-x: 0px</code></pre> anywhere it needs to (it mast be <pre class="inline"><code>px</code></pre>, even it's <pre class="inline"><code>0</code></pre>) — </div>
<div>On entire <pre class="inline"><code>{`<table>`}</code></pre> or <pre class="inline"><code>{`<thead>, <tbody>, <tfoot>, <tr>`}</code></pre>, or even <pre class="inline"><code>{`<th>, <td>`}</code></pre>.</div>
<div style="margin-top:12px">Better redefine it globally somewhere in your <pre class="inline"><code>lib.css</code></pre> like:</div>
<pre class="code"><code>{
`.TABLE {
    --table-border-width-x: 0px;
}`
}</code></pre>
<div>or</div>
<pre class="snippet"><code>{`<table class="TABLE _STRETCH _STICKY" style="--table-border-width-x: 0px;">...</table>`}</code></pre>
<table class="TABLE _STRETCH _STICKY" style="--table-border-width-x: 0px;"><thead><tr><th>ID</th><th>Name</th><th>Price</th></tr></thead><tbody>{#each items as item}<tr><th>{item.id}</th><td>{item.name}</td><td>{item.price}</td></tr>{/each}</tbody></table>

<h2>Zebra</h2>
<pre class="snippet"><code>{`<table class="TABLE _STRETCH _STICKY _ZEBRA" style="--table-border-width-x: 0px;">...</table>`}</code></pre>
<table class="TABLE _STRETCH _STICKY _ZEBRA" style="--table-border-width-x: 0px;"><thead><tr><th>ID</th><th>Name</th><th>Price</th></tr></thead><tbody>{#each items as item}<tr><th>{item.id}</th><td>{item.name}</td><td>{item.price}</td></tr>{/each}</tbody></table>

<h2>Borderless Zebra</h2>
<pre class="code"><code>{
`.TABLE {
    --table-border-width-x: 0px;
}
.TABLE > tbody {
    --table-border-width-y: 0px;
}`
}</code></pre>
<div>or</div>
<pre class="snippet"><code>{`<table class="TABLE _STRETCH _STICKY _ZEBRA" style="--table-border-width-x: 0px;">
    ...
    <tbody style="--table-border-width-y: 0px;">
        ...
    </tbody>
</table>`}</code></pre>
<table class="TABLE _STRETCH _STICKY _ZEBRA" style="--table-border-width-x: 0px;"><thead><tr><th>ID</th><th>Name</th><th>Price</th></tr></thead><tbody style="--table-border-width-y: 0px;">{#each items as item}<tr><th>{item.id}</th><td>{item.name}</td><td>{item.price}</td></tr>{/each}</tbody></table>

<h2>Colored table section ant Tiger</h2>
<div>Tiger is just a reversed Zebra.</div>
<pre class="code"><code>{
`.TABLE {
    --table-border-width-x: 0px;
}
.TABLE thead {
    --table-bg: var(--table-thead-bg);
}
.TABLE > tbody {
    --table-border-width-y: 0px;
}`
}</code></pre>
<div>or</div>
<pre class="snippet"><code>{`<table class="TABLE _STRETCH _STICKY _TIGER" style="--table-border-width-x: 0px;">
    ...
    <thead style="--table-bg: var(--table-thead-bg);">
        ...
    </thead>
    <tbody style="--table-border-width-y: 0px;">
        ...
    </tbody>
</table>`}</code></pre>
<table class="TABLE _STRETCH _STICKY _TIGER" style="--table-border-width-x: 0px;"><thead style="--table-bg: var(--table-thead-bg);"><tr><th>ID</th><th>Name</th><th>Price</th></tr></thead><tbody style="--table-border-width-y: 0px;">{#each items as item}<tr><th>{item.id}</th><td>{item.name}</td><td>{item.price}</td></tr>{/each}</tbody></table>

<h2>Borderless Tiger with colored filter</h2>
<pre class="code"><code>{
`.TABLE {
    --table-border-width-x: 0px;
}
.TABLE > tbody {
    --table-border-width-y: 0px;
}
.TableFilter {
    --table-bg: var(--table-thead-bg);
}
.TableFilter > :is(th, td):not(:last-child) {
    padding-right:0;
}`
}</code></pre>
<div>Put `.TableFilter` on `tr` since filter can be part of main `thead` to be sticky also:</div>
<pre class="code"><code>{
`<thead>
    <tr class="TableFilter">
        <td><input type="text" class="INPUT"></td>
        <td><input type="text" class="INPUT"></td>
        <td><input type="text" class="INPUT"></td>
    </tr>
</thead>`
}</code></pre>
<div>or</div>
<pre class="snippet"><code>{`<table class="TABLE _STRETCH _STICKY _TIGER" style="--table-border-width-x: 0px;">
    ...
    <thead>
        <tr style="--table-bg: var(--table-thead-bg);">
            <td><input type="text" class="INPUT" style="padding-right:0;"></td>
            <td><input type="text" class="INPUT" style="padding-right:0;"></td>
            <td><input type="text" class="INPUT"></td>
        </tr>
    </thead>
    <tbody style="--table-border-width-y: 0px;">
        ...
    </tbody>
</table>`}</code></pre>
<table class="TABLE _STRETCH _STICKY _TIGER" style="--table-border-width-x: 0px;"><thead><tr><th>ID</th><th>Name</th><th>Price</th></tr></thead>    <thead>
        <tr class="TableFilter">
            <td><input type="text" class="INPUT"></td>
            <td><input type="text" class="INPUT"></td>
            <td><input type="text" class="INPUT"></td>
        </tr>
</thead><tbody style="--table-border-width-y: 0px;">{#each items as item}<tr><th>{item.id}</th><td>{item.name}</td><td>{item.price}</td></tr>{/each}</tbody></table>

<h2>Align numeric fields to right and make columns with small data narrow</h2>
<div>Just put class `RIGHT` (from `/lab/misc.css`) on `th` and `td` (or just `text-align:right` or `tailwind.css`) to move something right.</div>
<div>And put class `FIT` (also from `/lab/misc.css`) on `th` and `td` to make column fit.</div>
<pre class="snippet"><code>{
`<table class="TABLE _STRETCH _STICKY _TIGER">
    <thead>
        <tr>
            <th class="FIT">ID</th>
            <th>Name</th>
            <th class="FIT RIGHT">Price</th>
        </tr>
    </thead>
    ...
    <tbody>
        {#each items as item}
            <tr>
                <th class="FIT">{item.id}</th>
                <td>{item.name}</td>
                <td class="FIT RIGHT">{item.price}</td>
            </tr>
        {/each}
    </tbody>
</table>`}</code></pre>
<table class="TABLE _STRETCH _STICKY _TIGER" style="--table-border-width-x: 0px;">
    <thead><tr><th class="FIT">ID</th><th>Name</th><th class="FIT RIGHT">Price</th></tr></thead>
    <thead>
        <tr class="TableFilter">
            <td><input type="text" class="INPUT"></td>
            <td><input type="text" class="INPUT"></td>
            <td><input type="text" class="INPUT"></td>
        </tr>
</thead><tbody style="--table-border-width-y: 0px;">{#each items as item}<tr><th class="FIT">{item.id}</th><td>{item.name}</td><td class="FIT RIGHT">{item.price}</td></tr>{/each}</tbody></table>
<div style="margin-top:24px;">To make columns even more narrow, add `size=1` to inputs and adjust their `width` manually.</div>
<pre class="snippet"><code>{
`<table>
   ...
    <thead>
        <tr class="TableFilter">
            <td><input type="text" class="INPUT" size="1" style="min-width:100px;"></td>
            <td><input type="text" class="INPUT" size="1"></td>
            <td><input type="text" class="INPUT" size="1" style="min-width:100px;"></td>
        </tr>
    </thead>
    ...
</table>`}</code></pre>
<table class="TABLE _STRETCH _STICKY _TIGER" style="--table-border-width-x: 0px;">
    <thead><tr><th class="FIT">ID</th><th>Name</th><th class="FIT RIGHT">Price</th></tr></thead>
    <thead>
        <tr class="TableFilter">
            <td><input type="text" class="INPUT" size="1" style="min-width:100px;"></td>
            <td><input type="text" class="INPUT" size="1"></td>
            <td><input type="text" class="INPUT" size="1" style="min-width:100px;"></td>
        </tr>
</thead><tbody style="--table-border-width-y: 0px;">{#each items as item}<tr><th class="FIT">{item.id}</th><td>{item.name}</td><td class="FIT RIGHT">{item.price}</td></tr>{/each}</tbody></table>


<h1>Entire list of css-variables to override in your `lib.css`:</h1>

<pre class="snippet"><code>{
`root: {

    ...

    /* TABLE */

    /* paddings */
    --table-padding-x:12px;
    --table-padding-y:var(--table-padding-x);

    /* borders */
    --table-border-width:1px;
    --table-border-width-x:var(--table-border-width);
    --table-border-width-y:var(--table-border-width);

    /* design */
    --table-border-radius:var(--border-radius);
    --table-text-align:left;
    --table-vertical-align:middle;
    --table-thead-th-font-weight:var(--bold);
    --table-th-font-weight:var(--semibold);
    --table-font-size:15px;
    --table-line-height:24px;
    --table-sticky-header-z-index:2;
    --table-outline-width:1px;

    /* colors */
    --table-bg:           #fff;
    --table-thead-bg:     hsl(0, 0%, 94%);
    --table-stripe-bg:    hsl(0, 0%, 94%);
    --table-border-color: hsl(0, 0%, 88%);

    /* /TABLE */
}`}</code></pre>

<style>
    h1 {font-size:48px;margin-top:36px;}
    h2 {font-size:35px;margin-top:36px;margin-bottom:12px;}

    div, pre, code {line-height:24px;}

    .inline {display:inline;}
    .inline code {padding:0 !important;background:none !important;display:inline;}
    .snippet code {padding:0 !important;margin:12px 0;background:none !important;}
    .code {margin:12px 0;}

    /* DOMAIN */

    .TABLE {
        --table-border-width-x: 1px;
    }

    .TableFilter {
        --table-bg: var(--table-thead-bg);
    }
    .TableFilter > :is(th, td):not(:last-child) {
        padding-right:0;
    }
</style>


























<!--
<table class="TABLE _STRETCH _STICKY _TIGER" style="margin-top:24px;--table-border-width-x:0px;">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
        </tr>
    </thead>
    <thead style="--table-bg:var(--table-thead-bg);">
        <tr>
            <th style="--table-padding-right:0;"><input type="text" class="INPUT"></th>
            <th style="--table-padding-right:0;"><input type="text" class="INPUT"></th>
            <th><input type="text" class="INPUT"></th>
        </tr>
    </thead>
    <tbody>
        {#each 'qwertyuiopasdfghjklzxcvbnm' as letter, index}
            <tr>
                <td>{index + 1}</td>
                <td>{letter.toUpperCase() + letter.repeat(10)}</td>
                <td>{(index + 1) * 20}</td>
            </tr>
        {/each}
    </tbody>
</table>
-->