import { expect, Locator, Page } from "@playwright/test";

export class HiddenLayersPage {

    readonly page: Page;
    readonly greenButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.greenButton = page.locator("#greenButton")
    }

    async assertTitle() {
        expect(await this.page.title()).toBe("Hidden Layers")
    }

    async clickGreenButton() {
        await this.greenButton.click()
    }
}