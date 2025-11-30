import { writable, get, browser } from '/svelte';
import { storable, DatetimeHelper } from '/lex/';

export const meStore = writable();

export const timezoneStore = storable();

if (browser && !get(timezoneStore)) {
    timezoneStore.set(DatetimeHelper.client_timezone);
}
