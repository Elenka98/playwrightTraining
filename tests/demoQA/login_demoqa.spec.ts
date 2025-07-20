import {test as it, expect} from './login_demoqa'

it('Verify that user lands on profile after login', async ({loggedInPage}) => {
    await expect(loggedInPage).toHaveURL(/\/profile$/);
    await expect(loggedInPage.locator('[id="userName-value"]')).toHaveText('Beaver')
})