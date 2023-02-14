import { expect, Locator, Page } from "@playwright/test";

export class ClientSideDelayPage {

    readonly page: Page;
    readonly buttonClient: Locator;
    readonly divDataClient: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonClient = page.locator("#ajaxButton")
        this.divDataClient = page.locator("#content > p")
    }

    async assertTitle() {
        expect(await this.page.title()).toBe("Client Side Delay")
    }

    async clickAJAXButton() {
        await this.buttonClient.click()
    }

    async waitAndAssertClientData() {
        await expect(this.divDataClient).toBeVisible({ timeout: 20000 })
        await expect(this.divDataClient).toContainText("Data calculated on the client side.")
    }
}