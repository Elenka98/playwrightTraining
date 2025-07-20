import {test as it} from '@playwright/test';
import {DemoqaDragAndDrop} from '../page_object/DemoqaDragAndDrop';

it.describe('DROPPABLE', () => {
    it.beforeEach(async ({page}) => {
        const url = 'https://demoqa.com/droppable';
        await page.goto(url);
    })
    it('Simple test', async ({page}) => {
        const dragAndDrop = new DemoqaDragAndDrop(page)
        await dragAndDrop.dragAndDropEl('Dropped!');
    })

    it('Accept test', async ({page}) => {
        const dragAndDrop = new DemoqaDragAndDrop(page)
        await dragAndDrop.acceptTest('Dropped!');

        await page.reload()
        await dragAndDrop.notAcceptTest('Drop here');
    })

    it('Prevent Propagation', async ({page}) => {
        const dragAndDrop = new DemoqaDragAndDrop(page)
        await dragAndDrop.preventPropagationTest('Dropped!');
    })

    it('Revent Draggable', async ({page}) => {
        const dragAndDrop = new DemoqaDragAndDrop(page)
        await dragAndDrop.reventDraggableTest('Dropped!');
    })
})