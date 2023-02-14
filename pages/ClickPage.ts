import { expect, Locator, Page } from "@playwright/test";

export class ClickPage {

    readonly page: Page;
    readonly button: Locator;
    readonly divDataClient: Locator;

    constructor(page: Page) {
        this.page = page;
        this.button = page.locator("#badButton")
    }

    async assertTitle() {
        expect(await this.page.title()).toBe("Click")
    }

    async clickButton() {
        await this.button.click()
    }

    async assertButtonWasClicked() {
        const buttonClass = await this.button.getAttribute("class")
        await expect(buttonClass).toContain("btn-success")
    }
}