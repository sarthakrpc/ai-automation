# README

Automate your day to day tasks using AI today.

## How to run

1. Install GoLang version >= 1.80
2. Add installed GoLang bin to Environment variables in Windows
3. Install NodeJs version >= 20.16.0 (or latest LTS)
4. Install wails - https://wails.io/docs/gettingstarted/installation
5. Run `wails dev`, to run in development mode.
6. Build using `wails build`, executable can be found in `build/win/{appName}.exe`

## About

This is the official Wails Svelte-TS template.

## Live Development

To run in live development mode, run `wails dev` in the project directory. This will run a Vite development
server that will provide very fast hot reload of your frontend changes. If you want to develop in a browser
and have access to your Go methods, there is also a dev server that runs on http://localhost:34115. Connect
to this in your browser, and you can call your Go code from devtools.

## Building

To build a redistributable, production mode package, use `wails build`.
