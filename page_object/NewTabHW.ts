import {Page} from "@playwright/test";

export class NewTabHW{
    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    public async navigate() {
        await this.page.goto('https://demoqa.com/browser-windows')
    }

    public async newTabTest() {
        await this.page.locator('#tabButton').click({force: true});

        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.page.locator('#tabButton').click({force: true})
        ])

        await newPage.waitForLoadState();
        return newPage;
    }

    public async newWindowTest() {
        await this.page.locator('#windowButton').click({force: true});

        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.page.locator('#windowButton').click({force: true})
        ])

        await newPage.waitForLoadState();
        return newPage;
    }

    public async newWindowMessageTest() {
        const pagesBefore = this.page.context().pages();

        await this.page.locator('#messageWindowButton').click({ force: true });

        // Wait for the new page to appear
        await this.page.waitForTimeout(1000);

        const pagesAfter = this.page.context().pages();
        const newPage = pagesAfter.find(p => !pagesBefore.includes(p));

        if (!newPage) {
            throw new Error('New window did not open.');
        }

        await newPage.waitForLoadState();
        return newPage;
    }
}