import {expect, Locator, Page} from "@playwright/test";

export class Demoqa {
    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    get header(){
        return 'h1';
    }

    async verifyHeader(){
        const header: Locator = this.page.locator(this.header);
        await expect(header).toHaveText('Practice Form')
    }

    get dateId() {
        return '#dateOfBirthInput'
    }

    get months() {
        return '[class="react-datepicker__month-select"]'
    }

    get years() {
        return '[class="react-datepicker__year-select"]'
    }

    get days() {
        return '[class="react-datepicker__day react-datepicker__day--024"]'
    }

    // async  dateOfBirth(){
    //     await this.page.locator(this.dateId).click();
    //     const month = await this.page.locator(this.months).selectOption({label: 'April'});
    //     const year = await this.page.locator(this.years).selectOption({label: '1992'});
    //     const day = await this.page.locator(this.days).click()
    //     expect(await this.page.locator(this.dateId).inputValue()).toContain(`${day} ${month} ${year}`);
    // }

    async dateOfBirth(){
        const expectedDay = '24';
        const expectedMonth = 'Apr';
        const expectedYear = '1992';

        await this.page.locator(this.dateId).click();
        await this.page.locator(this.months).selectOption({ label: 'April' });
        await this.page.locator(this.years).selectOption({ label: expectedYear });
        await this.page.locator(this.days).click();

        const inputValue = await this.page.locator(this.dateId).inputValue();
        expect(inputValue).toContain(`${expectedDay} ${expectedMonth} ${expectedYear}`);
    }
}