import { test, expect } from '@playwright/test'

test("Simple basic test", async ({ page }) => {
    await page.goto("http://www.uitestingplayground.com")
    const pageTitle = await page.locator("h1")
    await expect(pageTitle).toContainText("UI Test Automation")
})

test("Click on Dynamic ID button", async ({ page }) => {
    await page.goto("http://www.uitestingplayground.com")
    await page.click("text=Dynamic ID")
    await page.click(".btn-primary")
})

test("Class attribute", async ({ page }) => {
    await page.goto("http://www.uitestingplayground.com")
    await page.click("text=Class attribute")
    await page.click(".btn-primary")
})

test("Hidden layers", async ({ page }) => {
    await page.goto("http://www.uitestingplayground.com")
    await page.click("text=Hidden layers")
    await page.click("#greenButton")
    await page.click("#blueButton")
})

test("Load delay", async ({ page }) => {
    await page.goto("http://www.uitestingplayground.com")
    await page.click("text=Load delay")
    const button = await page.locator(".btn-primary")
    await expect(button).toContainText("Button Appearing After Delay")
})

test("AJAX Data", async ({ page }) => {
    await page.goto("http://www.uitestingplayground.com")
    await page.click("text=AJAX Data")
    await page.click("#ajaxButton")
    const p = await page.locator("#content > p")
    await expect(p).toBeVisible({ timeout: 20000 })
    await expect(p).toContainText("Data loaded with AJAX get request.")
})

test("Client side delay", async ({ page }) => {
    await page.goto("http://www.uitestingplayground.com")
    await page.click("text=Client side delay")
    await page.click("#ajaxButton")
    const p = await page.locator("#content > p")
    await expect(p).toBeVisible({ timeout: 20000 })
    await expect(p).toContainText("Data calculated on the client side.")
})

test("Click", async ({ page }) => {
    await page.goto("http://www.uitestingplayground.com")
    await page.click("text=Click")
    const button = await page.locator("#badButton")
    await button.click()
    const buttonClass = await button.getAttribute("class")
    await expect(buttonClass).toContain("btn-success")
})

test("Text input", async ({ page }) => {
    const updateString = "Updated via automation"
    await page.goto("http://www.uitestingplayground.com")
    await page.click("text=Text input")
    await page.click("#newButtonName")
    await page.keyboard.type(updateString, { delay: 100 });
    await page.click("#updatingButton")
    await expect(page.locator("#updatingButton")).toHaveText(updateString)
})

test("Scrollbars", async ({ page }) => {
    await page.goto("http://www.uitestingplayground.com")
    await page.click("text=Scrollbars")
    await page.click("#hidingButton")
})

test("Dynamic table", async ({ page }) => {
    await page.goto("http://www.uitestingplayground.com")
    await page.click("text=Dynamic table")
    const headerRowTexts = await page.getByRole("columnheader").allInnerTexts()
    const indexCPU = await headerRowTexts.indexOf("CPU")
    console.log("Index CPU: " + indexCPU)
    const rowTexts = await page.getByRole("cell").allInnerTexts()
    const indexChrome = await rowTexts.indexOf("Chrome")
    console.log("Index Chrome: " + indexChrome)
    const valueCPU = await rowTexts.at(indexChrome + indexCPU)
    console.log("Value CPU: " + valueCPU)
    const warningRow = await page.locator(".bg-warning")
    await expect(warningRow).toHaveText("Chrome CPU: " + valueCPU)
})

test("Verify text", async ({ page }) => {
    await page.goto("http://www.uitestingplayground.com")
    await page.click("text=Verify text")
    const webElement = await page.locator("//span[normalize-space(.)='Welcome UserName!']")
    await expect(webElement).toHaveCount(1)
})

test("Progress Bar", async ({ page }) => {
    await page.goto("http://www.uitestingplayground.com")
    await page.click("text=Progress Bar")
    await page.click("#startButton")
    console.log(await page.locator("#progressBar").getAttribute("aria-valuenow"))
    await expect(page.locator("#progressBar")).toHaveAttribute('aria-valuenow', "75", { timeout: 30000 })
    await page.click("#stopButton")
    await expect(page.locator("#result")).toContainText("Result: 0")
})

test("Visibility", async ({ page }) => {
    await page.goto("http://www.uitestingplayground.com")
    await page.click("text=Visibility")

})