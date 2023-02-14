import { expect, Locator, Page } from "@playwright/test";

export class ClassAttributePage {

    readonly page: Page;
    readonly classAttributeButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.classAttributeButton = page.locator(".btn-primary")
    }

    async assertTitle() {
        expect(await this.page.title()).toBe("Class Attribute")
    }

    async clickPrimaryButton() {
        await this.classAttributeButton.click()
    }
}