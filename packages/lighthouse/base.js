module.exports = {
    "ci": {
        "collect": {
            "url": [
                "http://localhost:3001",
                "http://localhost:3001/data-table",
                "http://localhost:3001/form"
            ],
            "startServerCommand": "pnpm run dev",
            "startServerReadyPattern": "ready on",
            "numberOfRuns": 1,
            "settings": {
                "preset": "desktop"
            }
        },
        "assert": {
            "preset": "lighthouse:recommended"
        },
        "upload": {
            "target": "temporary-public-storage"
        }
    }
}