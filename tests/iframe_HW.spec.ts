import {test as it} from '@playwright/test';
import {Iframe} from "../page_object/Iframe";

it.describe('IFRAME', () => {
    it('Iframe test', async ({page}) => {
        const url = 'https://www.lambdatest.com/selenium-playground/nested-frames/'
        await page.goto(url);

        const iframe = new Iframe(page)
        await iframe.getLeftFrameText();
        await iframe.getMiddleFrameText();
        await iframe.getRightFrameText();
    })
})