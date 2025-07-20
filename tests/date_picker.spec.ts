import {test as it, expect} from '@playwright/test';
import {DatePicker} from "../page_object/DatePicker";
import {DatePickerHW} from "../page_object/DatePickerHW";

it.describe('Date Picker', () => {
    it('Navigate to Date Picker page - From', async ({page}) => {
        const datePicker = new DatePicker(page);
        await datePicker.navigateToDatePicker();
        await datePicker.verifyHeader();
        await datePicker.dateFromToday();
        console.log(page.url());
        await expect(page).toHaveURL(/.*jquery-date-picker-demo/);
    })

    it('Navigate to Date Picker page - To', async ({page}) => {
        const datePickerHW = new DatePickerHW(page);
        await datePickerHW.navigateToDatePickerHW();
        await datePickerHW.verifyHeader();
        await datePickerHW.dateFromToday();
        console.log(page.url());
        await expect(page).toHaveURL(/.*jquery-date-picker-demo/);
    })
})