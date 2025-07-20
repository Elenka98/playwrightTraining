import {test as base, chromium, Page} from "@playwright/test";

type Fixtures = {
    loggedInPage: Page
}

export const test = base.extend<Fixtures>({
    loggedInPage: async ({}, use) => {
        const browser = await chromium.launch()
        const context = await browser.newContext()
        const page = await context.newPage()

        await page.goto('https://demoqa.com/login')
        await page.getByPlaceholder('UserName').fill('Beaver')
        await page.getByRole('textbox', {name: 'Password'}).fill('#Test1234')
        await page.locator('#login').click()

        await page.waitForURL('**/profile');
        await page.pause()
        await use(page)

        await browser.close()
    }
})

export {expect} from '@playwright/test'