import {Page} from "@playwright/test";

export class HomePage {
    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async gotoWeb(path: string){
        await this.page.goto("/selenium-playground" + path);
        console.log(`Navigated to: ${this.page.url()}`);
    }
}