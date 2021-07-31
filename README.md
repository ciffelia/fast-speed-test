# fast-speed-test

[![CI Status](https://github.com/ciffelia/fast-speed-test/workflows/CI/badge.svg?branch=master)](https://github.com/ciffelia/fast-speed-test/actions?query=workflow%3ACI+branch%3Amaster)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

Unofficial CLI client for [Fast.com](https://fast.com/) Internet Speed Test

https://user-images.githubusercontent.com/15273128/127733953-79ef615c-984f-4e92-ab49-2626688cf9b7.mp4

## Usage

This app runs speed test on headless Firefox by default. You can switch to Chromium or WebKit.

### Yarn

Note: npm is not supported.

```bash
# Install dependencies
yarn
# Run speed test
yarn start
```

### Docker

```bash
docker run -it --rm ghcr.io/ciffelia/fast-speed-test
```

Note: You need extra options to run Chromium on Docker. More info [here](https://playwright.dev/docs/docker#crawling-and-scraping).

```bash
curl -LO https://github.com/microsoft/playwright/raw/master/utils/docker/seccomp_profile.json
docker run -it --rm --ipc=host --security-opt=seccomp=seccomp_profile.json ghcr.io/ciffelia/fast-speed-test --browser chromium
```

## Options

```bash
-b, --browser  [choices: "chromium", "firefox", "webkit"] [default: "firefox"]
-s, --skipAdvanced  Skip advanced metrics           [boolean] [default: false]
-o, --output        Output format
                       [choices: "static", "realtime"] [default: "realtime"]
-h, --help          Show help                                        [boolean]
```

## Examples

### Yarn

```bash
yarn start
yarn start --help
yarn start --browser chromium
```

### Docker

```bash
docker run -it --rm ghcr.io/ciffelia/fast-speed-test
docker run -it --rm ghcr.io/ciffelia/fast-speed-test --browser webkit
docker run -it --rm ghcr.io/ciffelia/fast-speed-test --skipAdvanced
```
