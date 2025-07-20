import {expect, Page} from "@playwright/test";

export class DemoqaDragAndDrop {
    page: Page
    constructor(page: Page){
        this.page = page;
    }

    public async dragAndDropEl(text: string){
        const dragEl = this.page.locator('#draggable');
        const dropZone = this.page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable');
        await dragEl.dragTo(dropZone);
        const dropListText = await dropZone.textContent()
        expect(dropListText).toContain(text)
    }

    public async acceptTest(text: string) {
        await this.page.locator('#droppableExample-tab-accept').click()
        const acceptEl = this.page.locator('#acceptable');
        const dropEl = this.page.getByLabel('Accept').locator('#droppable')
        await acceptEl.dragTo(dropEl);
        const dropListText = await dropEl.textContent();
        expect(dropListText).toContain(text);
    }

    public async notAcceptTest(text: string) {
        await this.page.locator('#droppableExample-tab-accept').click()
        const notAcceptEl = this.page.locator('#notAcceptable');
        const dropEl = this.page.getByLabel('Accept').locator('#droppable')
        await notAcceptEl.dragTo(dropEl);
        const dropListText = await dropEl.textContent();
        expect(dropListText).toContain(text);
    }

    public async preventPropagationTest(text: string) {
        await this.page.locator('#droppableExample-tab-preventPropogation').click()
        const dragEl = this.page.locator('#dragBox');
        const dropEl = this.page.locator('#notGreedyInnerDropBox')
        await dragEl.dragTo(dropEl);
        const dropListText = await dropEl.textContent();
        expect(dropListText).toContain(text);
    }

    public async reventDraggableTest(text: string) {
        await this.page.locator('#droppableExample-tab-revertable').click()
        const reventEl = this.page.locator('#revertable')
        const dropEl = this.page.getByLabel('Revert Draggable').locator('#droppable')
        await reventEl.dragTo(dropEl);
        const dropListText = await dropEl.textContent();
        expect(dropListText).toContain(text);
    }
}