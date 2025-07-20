import {expect, test as it} from '@playwright/test';

it.describe('HTML PAGE', () => {
    it('Html Form Test', async ({page}) => {
        await page.goto('https://testpages.eviltester.com/styled/basic-html-form-test.html')
        await page.locator('[name="username"]').fill('Test User')
        await page.locator('[name="password"]').fill('test1234')
        await page.locator('[name="comments"]').clear();
        await page.locator('[name="comments"]').fill('This is a test comment');
        await page.locator('[name="filename"]').setInputFiles("C:\\Users\\harma\\OneDrive\\Pictures\\Screenshots\\Screenshot 2025-04-23 084244.png")
        await page.locator('[value="cb3"]').uncheck()
        await page.locator('[value="cb1"]').check()
        await page.locator('[value="rd1"]').click()
        await page.selectOption('[name="dropdown"]', {label: 'Drop Down Item 2'})
        await page.locator('[type="submit"]').click()
        await expect(page.locator('h1')).toHaveText('Processed Form Details')
    })
})