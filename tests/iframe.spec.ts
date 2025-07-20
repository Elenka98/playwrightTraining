import {test as it, expect, FrameLocator} from '@playwright/test';

it.describe('IFRAME', () => {
    it('Iframe test', async ({page}) => {
        const url = 'https://www.lambdatest.com/selenium-playground/nested-frames/'
        await page.goto(url);

        const frameBtm: FrameLocator = page.frameLocator('[name="frame-bottom"]')

        const leftFrame: string | null = await frameBtm
            .frameLocator('[name="frame-left"]')
            .locator('body')
            .textContent().then(text => text?.trim() || null)

        const middleFrame: string | null = await frameBtm
            .frameLocator('[name="frame-middle"]')
            .locator('body')
            .textContent()

        const rightFrame: string | null = await frameBtm
            .frameLocator('[name="frame-right"]')
            .locator('body')
            .textContent()

        // Assert the text content of the frames
        expect(leftFrame).toBe('Left');
        expect(middleFrame).toContain('Middle');
        expect(rightFrame).toContain('Right');
    })
})