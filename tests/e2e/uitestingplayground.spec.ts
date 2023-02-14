import { test, expect } from '@playwright/test'
import { AJAXDataPage } from '../../pages/AJAXDataPage';
import { ClassAttributePage } from '../../pages/ClassAttributePage';
import { ClickPage } from '../../pages/ClickPage';
import { ClientSideDelayPage } from '../../pages/ClientSideDelayPage';
import { DynamicIDPage } from '../../pages/DynamicIDPage';
import { HiddenLayersPage } from '../../pages/HiddenLayersPage';
import { LoadDelayPage } from '../../pages/LoadDelayPage';
import { TextInputPage } from '../../pages/TextInputPage';
import { ScrollbarsPage } from '../../pages/ScrollbarsPage'
import { UITestingPlaygroundHomePage } from '../../pages/UITestingPlaygroundHomePage'
import { DynamicTablePage } from '../../pages/DynamicTablePage';
import { ProgressBarPage } from '../../pages/ProgressBarPage';

test.describe.parallel("UI Testing Playground website scenarios", () => {

    let homePage: UITestingPlaygroundHomePage
    let dynamicIDPage: DynamicIDPage
    let classAttributePage: ClassAttributePage
    let hiddenLayersPage: HiddenLayersPage
    let loadDelayPage: LoadDelayPage
    let ajaxDataPage: AJAXDataPage
    let clientSideDelayPage: ClientSideDelayPage
    let clickPage: ClickPage
    let textInputPage: TextInputPage
    let scrollbarsPage: ScrollbarsPage
    let dynamicTablePage: DynamicTablePage
    let progressBarPage: ProgressBarPage

    test("Dynamic ID", async ({ page }) => {
        homePage = new UITestingPlaygroundHomePage(page)
        await homePage.navigateTo("Dynamic ID")
        dynamicIDPage = new DynamicIDPage(page)
        dynamicIDPage.assertTitle()
        dynamicIDPage.clickDynamicIDButton()
    })

    test("Class attribute", async ({ page }) => {
        homePage = new UITestingPlaygroundHomePage(page)
        await homePage.navigateTo("Class Attribute")
        classAttributePage = new ClassAttributePage(page)
        classAttributePage.assertTitle()
        classAttributePage.clickPrimaryButton()
    })

    test.only("Hidden layers", async ({ page }) => {
        homePage = new UITestingPlaygroundHomePage(page)
        await homePage.navigateTo("Hidden Layers")
        hiddenLayersPage = new HiddenLayersPage(page)
        await hiddenLayersPage.assertTitle()
        await hiddenLayersPage.clickGreenButton()
        await expect(hiddenLayersPage.clickGreenButton()).rejects.toThrow()
    })

    test("Load delay", async ({ page }) => {
        homePage = new UITestingPlaygroundHomePage(page)
        await homePage.navigateTo("Load Delay")
        loadDelayPage = new LoadDelayPage(page)
        await loadDelayPage.assertDelayedButtonToContainText()
    })

    test("AJAX Data", async ({ page }) => {
        homePage = new UITestingPlaygroundHomePage(page)
        await homePage.navigateTo("AJAX Data")
        ajaxDataPage = new AJAXDataPage(page)
        await ajaxDataPage.clickAJAXButton()
        await ajaxDataPage.waitAndAssertAJAXData()
    })

    test("Client side delay", async ({ page }) => {
        homePage = new UITestingPlaygroundHomePage(page)
        await homePage.navigateTo("Client Side Delay")
        clientSideDelayPage = new ClientSideDelayPage(page)
        await clientSideDelayPage.clickAJAXButton()
        await clientSideDelayPage.waitAndAssertClientData()
    })

    test("Click", async ({ page }) => {
        homePage = new UITestingPlaygroundHomePage(page)
        await homePage.navigateTo("Click")
        clickPage = new ClickPage(page)
        await clickPage.assertTitle()
        await clickPage.clickButton()
        await clickPage.assertButtonWasClicked()
    })

    test("Text input", async ({ page }) => {
        const updatedString = "Updated via automation"
        homePage = new UITestingPlaygroundHomePage(page)
        await homePage.navigateTo("Text Input")
        textInputPage = new TextInputPage(page)
        await textInputPage.assertTitle()
        await textInputPage.typeNewNameIntoInput(updatedString)
        await textInputPage.assertButtonNameWasChanged(updatedString)
    })

    test("Scrollbars", async ({ page }) => {
        homePage = new UITestingPlaygroundHomePage(page)
        await homePage.navigateTo("Scrollbars")
        scrollbarsPage = new ScrollbarsPage(page)
        await scrollbarsPage.assertTitle()
        await scrollbarsPage.clickTheHidingButton()
    })

    test.only("Dynamic table", async ({ page }) => {
        homePage = new UITestingPlaygroundHomePage(page)
        await homePage.navigateTo("Dynamic Table")
        dynamicTablePage = new DynamicTablePage(page)
        await dynamicTablePage.assertTitle()
        await dynamicTablePage.calculateAndAssertValues()
    })

    test.only("Progress Bar", async ({ page }) => {
        homePage = new UITestingPlaygroundHomePage(page)
        await homePage.navigateTo("Progress Bar")
        progressBarPage = new ProgressBarPage(page)
        await progressBarPage.assertTitle()
        await progressBarPage.startTheCounter()
        await progressBarPage.waitForPercentageThenStop()
        await progressBarPage.assertResultToContainZero()
    })
})