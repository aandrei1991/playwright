import { expect, Locator, Page } from "@playwright/test";

export class LoadDelayPage {

    readonly page: Page;
    readonly delayedButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.delayedButton = page.locator(".btn-primary")
    }

    async assertTitle() {
        expect(await this.page.title()).toBe("Load Delay")
    }

    async assertDelayedButtonToContainText() {
        expect(this.delayedButton).toContainText("Button Appearing After Delay")
    }
}