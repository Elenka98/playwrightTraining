import {HomePage} from "./HomePage";
import {expect, Locator} from "@playwright/test";
import _ from 'lodash';

export class DatePickerHW extends HomePage {
    constructor(page: any) {
        super(page);
    }

    get header() {
        return 'h1';
    }

    get toInput() {
        return '[id="to"]'
    }

    get monthOfTheYear() {
        return '[class="ui-datepicker-month"]';
    }

    get nextYear() {
        return '[title="Next"]';
    }

    get getDate() {
        return '[class="ui-state-default"]'
    }

    get dateFromComponent() {
        return '#ui-datepicker-div'
    }

    get dateOfTheYear(){
        return '[class="ui-datepicker-year"]';
    }

    async verifyHeader () {
        const header: Locator = this.page.locator(this.header);
        await expect(header).toContainText('Date Picker');
    }

    async navigateToDatePickerHW(): Promise<void> {
        await this.gotoWeb('/jquery-date-picker-demo')
    }

    randomYearNumber = _.random(1, 4);
    date = _.random(1, 30);

    async dateFromToday(){
        const obj = {
            Jan: "01",
            Feb: "02",
            Mar: "03",
            Apr: "04",
            May: "05",
            Jun: "06",
            Jul: "07",
            Aug: "08",
            Sep: "09",
            Oct: "10",
            Nov: "11",
            Dec: "12",
        };

        await this.page.locator(this.toInput).click();

        for (let i = 0; i < this.randomYearNumber; i++){
            await this.page.locator(this.nextYear).click();
        }

        let year = await this.page.locator(this.dateOfTheYear).textContent();

        let month = await this.page
            .locator(this.monthOfTheYear)
            .locator('[selected="selected"]')
            .textContent()

        console.log(year, 'year');
        console.log(month, 'month');
        console.log(this.date, 'date');

        await this.page.locator(this.dateFromComponent).getByRole('link', {name: this.date.toString(), exact: true}).click();
        const formattedMonth = obj[month as keyof typeof obj]
        const paddedDay = String(this.date).padStart(2, '0');
        expect(await this.page.locator(this.toInput).inputValue()).toBe(`${formattedMonth}/${paddedDay}/${year}`) // mm/dd/yyyy
    }
}