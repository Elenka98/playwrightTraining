import {test as it, expect} from '../page_object/base_page_HW'

it.describe('Date Picker', () => {
    it('Navigate to Date Picker page - To', async ({datePickerHW, page}) => {
        await datePickerHW.navigateToDatePickerHW();
        await datePickerHW.verifyHeader();
        await datePickerHW.dateFromToday();
        console.log(page.url());
        await expect(page).toHaveURL(/.*jquery-date-picker-demo/);
    })
})