import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

    // Perform login
    /*await page.goto('https://demoqa.com/login', { waitUntil: 'domcontentloaded' });
    await page.getByPlaceholder('UserName').fill('Beaver');
    await page.getByPlaceholder('Password').fill('#Test1234');
    await page.getByRole('button', { name: 'Login' }).click();

    // Wait until fully logged in
    await page.waitForURL('https://demoqa.com/profile', { waitUntil: 'domcontentloaded' });*/


    //coding.us
    await page.goto('https://coding.pasv.us/user/login', { waitUntil: 'domcontentloaded' });
    await page.locator('#normal_login_email').fill('angry.beavers26@yahoo.com')
    await page.locator('#normal_login_password').fill('test123')
    await page.locator('[type="submit"]').click()

    // Wait until fully logged in
    await page.waitForURL('https://coding.pasv.us/profile/68424d7ec1c87ea704756bab', { waitUntil: 'domcontentloaded' })

    const userName = await page.getByRole('heading', { name: 'Test User' }).textContent();

    /*// Optional: validate login was successful
    const user = await page.locator('#userName-value').textContent();
    console.log('✅ Logged in as:', user);*/

    // Save storage state to use in all tests
    await context.storageState({ path: './.auth/user.json' });

    await browser.close();
}

export default globalSetup;