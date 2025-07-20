import {test as it, expect} from '../page_object/base_page'

it.describe('Date Picker', () => {
    it('Navigate to Date Picker page - From', async ({datePicker, page}) => {
        await datePicker.navigateToDatePicker();
        await datePicker.verifyHeader();
        await datePicker.dateFromToday();
        console.log(page.url());
        await expect(page).toHaveURL(/.*jquery-date-picker-demo/);
    })
})