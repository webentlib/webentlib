<script>
    import {goto} from '/svelte';
    import {Toaster, Icons, Select, DatetimeHelper, TimezonesLocale, dropdownsStore, routeStore} from '/lex/';
    import {meStore, timezoneStore} from '/src/stores.js';
    import Bars from '/src/header/Bars.svelte';

    async function logout(e) {
        const response = await fetch('/api/logout/', {method: 'POST'});
        if (response.ok) {
            goto('/login');
        } else {
            Toaster.bake('Что-то пошло не так');
        }
    }
</script>
<div class="HEADER">
    <Bars/>

    {#each ['/'] as url}
    <a href={url} data-sveltekit-reload={$routeStore.url.pathname === url} class="HEADER_LINK LOGO">
        <!--{@html Icons.tabler['brand-redhat']({size: 36, stroke: 2, style:'margin-right:10px'})}-->
        Webentlib
    </a>
    {/each}
    <div class="HEADER_MENU NOSCROLLBAR">
        {#each ['/'] as url}<a href={url} data-sveltekit-reload={$routeStore.url.pathname === url} class:_CURRENT={$routeStore.url.pathname === url} class="HEADER_LINK">Задачи</a>{/each}
    </div>
    <div class="HEADER_USER_MENU">
        <div style="margin-top:12px;margin-right:12px">
            <div class="SELECT_WITH_ICON _ICON_INSIDE">
                <span class="SELECT_ICON">
                    {@html Icons.tabler['timezone']({size: 24})}
                </span>
                <select class="SELECT _ROUNDED" use:Select title="Часовой пояс" bind:value={$timezoneStore}>
                    {#if !$timezoneStore}
                        <option value="">...</option>
                    {/if}
                    {#each DatetimeHelper.timezones as value}
                        <option value={value}>
                            {TimezonesLocale[value] || (value.includes('/') ? value.split('/')[1] : value)}
                        </option>
                    {/each}
                </select>
            </div>
        </div>
        {#each ['/profile'] as url}
            <a href={url} class="HEADER_LINK _SQUARE" class:_CURRENT={$routeStore.url.pathname === url} data-sveltekit-reload={$routeStore.url.pathname === url}>
                {@html Icons.hero['user-circle']({size:48,style:'background:#fff;border-radius:100%;'})}
            </a>
        {/each}
        {#each ['user_menu'] as dropdown}
            <div use:dropdownsStore.add={dropdown} class="DROPDOWN" style="display:flex;align-items:stretch;">
                <a href="javascript:;"
                   class="HEADER_LINK _SQUARE"
                   class:_OPENED={$dropdownsStore?.[dropdown]?.opened}
                   onclick={() => $dropdownsStore[dropdown].opened = !$dropdownsStore[dropdown].opened}
                >
                    {#if !$dropdownsStore?.[dropdown]?.opened}
                        {@html Icons.hero['chevron-down']({size:24})}
                    {:else}
                        {@html Icons.hero['chevron-up']({size:24})}
                    {/if}
                </a>
                {#if $dropdownsStore?.[dropdown]?.opened}
                    <div class="DROPDOWN_WINDOW _RIGHT" style="min-width:240px;">
                        {#if $meStore?.is_superuser}
                            <a class="DROPDOWN_ITEM" href="/tie/" data-sveltekit-reload>
                                <span class="DROPDOWN_ICON">
                                    {@html Icons.custom['tie']({size:24})}
                                </span>
                                Панель администратора
                            </a>
                        {/if}
                        <a class="DROPDOWN_ITEM" href="javascript:;" onclick={logout}>
                            <span class="DROPDOWN_ICON">
                                {@html Icons.tabler['logout-2']({size:24})}
                            </span>
                            Выйти
                        </a>
                    </div>
                {/if}
            </div>
        {/each}
    </div>
</div>
