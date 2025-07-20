import {expect, test as it} from '@playwright/test';
import {Demoqa} from "../page_object/Demoqa";

it.describe('DEMOQA FORM', () => {
    it('Should fill the form', async ({page}) => {
        const demoqa = new Demoqa(page);
        await page.goto('https://demoqa.com/automation-practice-form#google_vignette')
        await page.locator('#firstName').fill('Test')
        await page.locator('#lastName').fill('User')
        await page.locator('#userEmail').fill('test@user.com')
        await page.locator('[for="gender-radio-1"]').click()
        await page.getByPlaceholder('Mobile Number').fill('0123456789')
        //date of birth
        await demoqa.verifyHeader()
        await demoqa.dateOfBirth()

        await page.locator('#subjectsInput').click();
        await page.locator('#subjectsInput').fill('Maths');
        await page.keyboard.press('Enter'); // to select the suggestion
        await page.locator('[for="hobbies-checkbox-3"]').click()
        await page.locator('[for="uploadPicture"]').setInputFiles('C:\\Users\\harma\\OneDrive\\Pictures\\Screenshots\\Screenshot 2025-04-23 084244.png')
        await page.getByPlaceholder('Current Address').fill('Test Address 537')
        await page.locator('#state').click()
        await page.locator('#react-select-3-option-3').click()
        await page.locator('#city').click()
        await page.locator('#react-select-4-option-0').click()
        await page.locator('#submit').click()
        await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText('Thanks for submitting the form')
        await page.locator('#closeLargeModal').click({ force: true });
    })
})