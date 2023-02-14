import { expect, Locator, Page } from "@playwright/test";

export class ProgressBarPage {

    readonly page: Page;
    readonly startButton: Locator;
    readonly stopButton: Locator;
    readonly progressBar: Locator;
    readonly result: Locator;

    constructor(page: Page) {
        this.page = page;
        this.startButton = page.locator("#startButton")
        this.stopButton = page.locator("#stopButton")
        this.progressBar = page.locator("#progressBar")
        this.result = page.locator("#result")
    }

    async assertTitle() {
        expect(await this.page.title()).toBe("Progress Bar")
    }

    async startTheCounter() {
        await this.startButton.click()
    }

    async stopTheCounter() {
        await this.stopButton.click()
    }

    async waitForPercentageThenStop() {
        let percentage = 0

        while (percentage < 75)
            percentage = Number(await this.progressBar.getAttribute("aria-valuenow"))
        this.stopTheCounter()
    }

    async assertResultToContainZero() {
        await this.page.waitForTimeout(500)
        expect(await this.result.textContent()).toContain("Result: 0")
    }
}