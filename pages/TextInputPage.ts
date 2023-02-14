import { expect, Locator, Page } from "@playwright/test";

export class TextInputPage {

    readonly page: Page;
    readonly input: Locator;
    readonly button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.input = page.locator("#newButtonName")
        this.button = page.locator("#updatingButton")
    }

    async assertTitle() {
        expect(await this.page.title()).toBe("Text Input")
    }

    async typeNewNameIntoInput(newName: string) {
        await this.input.click()
        await this.page.keyboard.type(newName, { delay: 100 })    
    }

    async assertButtonNameWasChanged(newButtonName: string) {
        await this.button.click()
        expect(await this.button.textContent()).toBe(newButtonName)
    }
}