import { test as base, expect as baseExpect} from '@playwright/test';
import {DatePickerHW} from "./DatePickerHW";

export const test = base.extend<{
    datePickerHW: DatePickerHW;
}>({
    datePickerHW: async ({page}, use) => {
        await use(new DatePickerHW(page));
    }
})

export const expect = baseExpect;