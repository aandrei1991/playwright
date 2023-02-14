import { expect, Locator, Page } from "@playwright/test";

export class UITestingPlaygroundHomePage {

    readonly page: Page;
    readonly image: Locator;
    readonly homePageUrl = "http://www.uitestingplayground.com";

    button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.image = page.locator(".img-fluid")
    }

    async goto() {
        await this.page.goto(this.homePageUrl);
    }

    async navigateTo(subPageName: string) {
        if (await this.image.isVisible()) {
            this.button = this.page.locator("a", { hasText: subPageName });
            await this.button.click()
        }
        else {
            await this.goto();
            this.button = this.page.locator("a", { hasText: subPageName });
            await this.button.click();
        }

    }

}