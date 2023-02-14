import { expect, Locator, Page } from "@playwright/test";

export class DynamicIDPage {

    readonly page: Page;
    readonly dynamicIDButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dynamicIDButton = page.locator("button", { hasText: "Button with Dynamic ID" })
    }

    async assertTitle() {
        expect(await this.page.title()).toBe("Dynamic ID")
    }

    async clickDynamicIDButton() {
        await this.dynamicIDButton.click()
    }
}