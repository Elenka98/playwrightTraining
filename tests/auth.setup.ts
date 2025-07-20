import {test as setup, expect} from '@playwright/test';

const authFile: string = './.auth/user.json'

setup('authentication', async({page}) => {
    // Navigate to login page
    /*await page.goto('https://demoqa.com/login')
    await page.getByPlaceholder('UserName').fill('Beaver')
    await page.getByRole('textbox', {name: 'Password'}).fill('#Test1234')
    await page.locator('#login').click()

    //Verify that the user is logged in
    await page.waitForURL('https://demoqa.com/profile')
    await expect(page.locator('[id="userName-value"]')).toHaveText('Beaver')

    //Save all steps to storageState
    await page.context().storageState({path: authFile});*/

    // coding.us

    await page.goto('https://coding.pasv.us/user/login')
    await page.locator('#normal_login_email').fill('angry.beavers26@yahoo.com')
    await page.locator('#normal_login_password').fill('test123')
    await page.locator('[type="submit"]').click()

    await page.waitForURL('https://coding.pasv.us/profile/68424d7ec1c87ea704756bab')
    await page.click('button.close');
    await expect(page.getByRole('heading', { name: 'Test User' })).toBeVisible();
    await page.context().storageState({path: authFile})
    await page.pause()
})