import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 1,
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: "off",
        screenshot: "only-on-failure"
    },
    reporter: [
        ['json', { outputFile: 'test-results.json' }],
        ['html', { open: "never" }]
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