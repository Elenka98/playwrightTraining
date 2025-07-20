import {chromium, expect, test as it} from '@playwright/test';

it.beforeAll(() => {
    console.log('Before all tests');
})

it.describe.skip('FORM PAGE', () => {
    it.beforeEach(() => {
        console.log('Before each test');
    })

    it.afterEach(() => {
        console.log('After each test');
    })

    it.afterAll(() => {
        console.log('After all tests');
    })

    it('test1', () => {
        console.log('Test 1')
    })

    it('test2', () => {
        console.log('Test 2')
    })
})

it.describe('FORM PAGE TYPE', () => {
    it('Fill all fields', async ({page}) => {
        // const browser = await chromium.launch({headless: false})
        // const context = await browser.newContext()
        // const page = await context.newPage()

        await page.goto('https://www.lambdatest.com/selenium-playground/input-form-demo')
        await page.locator('[id="name"]').fill('John Doe')
        await page.locator('[class="w-full border border-gray-90 text-size-14 rounded mt-10 px-10 py-5"][type="email"]')
            .pressSequentially('test@user.com', {delay: 100})
        await page.locator('input[placeholder="Password"]').fill('test1234')
        await page.locator('[for="companyname"] ~ [placeholder="Company"]').fill('Bober Company')
        await page.locator('label:has-text("Website") ~ input#websitename').fill('https://www.bober.com')
        await page.selectOption('select[name="country"]', {label: 'United States'})
        await page.locator('label:has-text("City") ~ input#inputCity').fill('New York')
        await page.getByPlaceholder('Address 1').fill('Bober Address 1')
        await page.getByPlaceholder('Address 2').fill('Bober Address 156')
        await  page.getByRole('textbox', {name: "State"}).fill('Florida')
        await  page.getByRole('textbox', {name: "Zip Code"}).fill('12345')
        await  page.getByRole('button', {name: "Submit"}).click()
        await expect(page.locator('h2:has-text("Input form validations")')).toBeVisible()
    })
})