import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 1,
    testDir: "tests/e2e",
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 10000,
        ignoreHTTPSErrors: true,
        video: "off",
        screenshot: "only-on-failure"
    },
    reporter: [
        ['json', {
            outputFile: './playwright-report-e2e-json/test-results.json'
        }],
        ['html', {
            outputFolder: 'playwright-report-e2e',
            open: "never"
        }]
    ],
    projects: [{
        name: "Chromium",
        use: { browserName: "chromium" },
    },
    {
        name: "Firefox",
        use: { browserName: "firefox" },
    },
    {
        name: "Webkit",
        use: { browserName: "webkit" },
    },
    ]
}

export default config