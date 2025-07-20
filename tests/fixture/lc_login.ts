import {test as base, chromium, Page} from "@playwright/test";

type Fixtures = {
    loggedInPage: Page
}
export const test = base.extend<Fixtures>({
    loggedInPage: async({}, use) => {
        const browser = await chromium.launch()
        const context = await browser.newContext()
        const page = await context.newPage()

        await page.goto('https://demoqa.com/login', { waitUntil: 'domcontentloaded' });

        await page.pause()

        if (await page.locator('#loading-label').isVisible()) {
            // The "Log out" button is on the same page
            await page.getByRole('button', { name: 'Log out' }).click();
            await page.waitForURL('**/login');
        }


        await page.getByPlaceholder('Email').fill('angry.beavers26@yahoo.com')
        await page.getByRole('textbox', {name: 'Пароль'}).fill('test123')
        await page.getByRole('button', {name: 'Войти', exact: true}).click()

        await page.waitForURL('**/profile/**')
        await page.pause()
        await use(page)

        await browser.close()
    }
})

export {expect} from '@playwright/test'