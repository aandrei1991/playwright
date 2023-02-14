import { expect, Locator, Page } from "@playwright/test";

export class ScrollbarsPage {

    readonly page: Page;
    readonly button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.button = page.locator("#hidingButton")
    }

    async assertTitle() {
        expect(await this.page.title()).toBe("Scrollbars")
    }

    async clickTheHidingButton() {
        await this.button.click()
    }
}