import { expect, Locator, Page } from "@playwright/test";

export class AJAXDataPage {

    readonly page: Page;
    readonly buttonAJAXRequest: Locator;
    readonly divAJAXData: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonAJAXRequest = page.locator("#ajaxButton")
        this.divAJAXData = page.locator("#content > p")
    }

    async assertTitle() {
        expect(await this.page.title()).toBe("AJAX Data")
    }

    async clickAJAXButton() {
        await this.buttonAJAXRequest.click()
    }

    async waitAndAssertAJAXData() {
        await expect(this.divAJAXData).toBeVisible({ timeout: 20000 })
        await expect(this.divAJAXData).toContainText("Data loaded with AJAX get request.")
    }
}