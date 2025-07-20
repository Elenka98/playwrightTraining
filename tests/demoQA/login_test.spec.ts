import {test as it, expect} from '@playwright/test';

it.describe('Login Test', () => {
    /*it.beforeEach(async ({page}) => {
        await page.goto('https://demoqa.com/books')
    })

    it('Verify auth log button', async ({page, browserName}) => {
        const logOutBtn = page.locator('#submit')
        await expect(logOutBtn).toHaveText('Log out')

        await page.screenshot({path: `screenshots/${browserName}-profile.png`})
    })*/
    it.beforeEach(async ({page}) => {
        await page.goto('https://coding.pasv.us/course')
    })

    it('Verify auth log button', async ({page, browserName}) => {
        const header = page.locator('h1')
        await page.click('button.close');
        await expect(page.getByRole('heading', { name: 'Курсы программирования и тестирования' })).toBeVisible();

        await page.screenshot({path: `screenshots/${browserName}-profile.png`})
    })
})