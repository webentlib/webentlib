<script>
    import {Icons, dropdownsStore} from '/lex/';
    import {ENVIRONMENT} from '/conf/config.local.js';
</script>

{#each ['bars'] as dropdown}
    <div use:dropdownsStore.add={dropdown} class="BARS">
        <a href="javascript:;"
           class="HEADER_LINK _SQUARE"
           class:_OPENED={$dropdownsStore?.[dropdown]?.opened}
           onclick={() => $dropdownsStore[dropdown].opened = !$dropdownsStore[dropdown].opened}
        >
            {#if !$dropdownsStore?.[dropdown]?.opened}
                {@html Icons.tabler['menu-2']({size:28})}
            {:else}
                {@html Icons.tabler['x']({size:28})}
            {/if}
        </a>
        {#if $dropdownsStore?.[dropdown]?.opened}
            <div class="BARS_WINDOW">
                <div class="BARS_MENU">
                    <a class="BARS_ITEM _CURRENT" href={ENVIRONMENT === 'TEST' ? 'http://10.170.69.111/' : 'https://vm.ttk.ru'} target="_blank" data-sveltekit-reload>
                        <span class="BARS_ICON">
                            <!--{@html Icons.load_balancer({size:36})}-->
                        </span>
                        <div class="BARS_TEXT">
                            <div class="BARS_NAME">TTK.VM</div>
                            <div class="BARS_INFO">Управление уязвимостями</div>
                        </div>
                    </a>
                    <a class="BARS_ITEM" href={ENVIRONMENT === 'TEST' ? 'https://10.170.16.162/' : 'https://10.170.16.163'} target="_blank" data-sveltekit-reload>
                        <span class="BARS_ICON">
                            <!--{@html Icons.checklist({size:36})}-->
                        </span>
                        <div class="BARS_TEXT">
                            <div class="BARS_NAME">TTK.SC</div>
                            <div class="BARS_INFO">Оценка качества IT-решений</div>
                        </div>
                    </a>
                </div>
                <div class="BARS_DOCS">
                    <a href="/policy" class="BARS_LINK" onclick={() => $dropdownsStore[dropdown].opened = false}>Политика конфиденциальности</a>
                </div>
            </div>
        {/if}
    </div>
{/each}