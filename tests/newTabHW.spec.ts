import {expect, test as it} from '@playwright/test';

import {NewTabHW} from '../page_object/NewTabHW';

it.describe('DEMOQA', () => {
    it('New Tab', async ({page}) => {
        const newTabHW = new NewTabHW(page)
        await newTabHW.navigate();

        const newPage = await newTabHW.newTabTest();
        const textContent: string | null = await newPage.locator('h1').textContent();
        expect(textContent).toBe('This is a sample page')
    })

    it('New Window', async ({page}) => {
        const newTabHW = new NewTabHW(page)
        await newTabHW.navigate();

        const newPage = await newTabHW.newWindowTest();
        const textContent: string | null = await newPage.locator('h1').textContent();
        expect(textContent).toBe('This is a sample page')
    })

    it('New Window Message', async ({page}) => {
        const newTabHW = new NewTabHW(page)
        await newTabHW.navigate();


        const newPage = await newTabHW.newWindowMessageTest();
        const textContent: string | null = await newPage.locator('body').textContent();
        expect(textContent).toContain('Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.')
    })
})