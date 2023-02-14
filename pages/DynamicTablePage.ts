import { expect, Locator, Page } from "@playwright/test";

export class DynamicTablePage {

    readonly page: Page;
    readonly button: Locator;
    readonly columnHeaders: Locator;
    readonly cells: Locator;
    readonly warningRow: Locator;


    constructor(page: Page) {
        this.page = page;
        this.button = page.locator("#hidingButton")
        this.columnHeaders = page.getByRole("columnheader")
        this.cells = page.getByRole("cell")
        this.warningRow = page.locator(".bg-warning")
    }

    async assertTitle() {
        expect(await this.page.title()).toBe("Dynamic Table")
    }

    async calculateAndAssertValues() {
        const headerRowTexts = await this.columnHeaders.allInnerTexts()
        const indexCPU = headerRowTexts.indexOf("CPU")
        console.log("Index CPU: " + indexCPU)

        const rowTexts = await this.cells.allInnerTexts()
        const indexChrome = rowTexts.indexOf("Chrome")
        console.log("Index Chrome: " + indexChrome)

        const valueCPU = rowTexts.at(indexChrome + indexCPU)
        console.log("Value CPU: " + valueCPU)

        await expect(this.warningRow).toHaveText("Chrome CPU: " + valueCPU)
    }
}