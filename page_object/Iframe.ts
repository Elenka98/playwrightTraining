import {expect, FrameLocator, Page} from "@playwright/test";

export class Iframe{
    page: Page;
    frameBtm: FrameLocator;

    constructor(page: Page){
        this.page = page;
        this.frameBtm = page.frameLocator('[name="frame-bottom"]')
    }

    async getLeftFrameText() {
        const leftFrame: string | null = await this.frameBtm
            .frameLocator('[name="frame-left"]')
            .locator('body')
            .textContent().then(text => text?.trim() || null)
        expect(leftFrame).toBe('Left');
    }

    async getMiddleFrameText() {
        const middleFrame: string | null = await this.frameBtm
            .frameLocator('[name="frame-middle"]')
            .locator('body')
            .textContent()

        expect(middleFrame).toContain('Middle');
    }

    async getRightFrameText() {
        const rightFrame: string | null = await this.frameBtm
            .frameLocator('[name="frame-right"]')
            .locator('body')
            .textContent()

        expect(rightFrame).toContain('Right');
    }
}