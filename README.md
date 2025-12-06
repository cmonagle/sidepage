# Sidepage

A simple Firefox extension to display a configurable home page in the sidebar.

## Disclaimer

This extension was created with the assistance of generative AI. Use at your own risk. No guarantees or warranties are provided.

## Installing

Use `npm install`, then `npm run build` to create the extension package.

## Installing manually

Go to `about:debugging` in Firefox, click **This Firefox**, then **Load Temporary Add-on**.
Select the `addon.xpi` file or the built `.zip` file from `web-ext-artifacts/`.

## Using

1. Click the toolbar button to open/toggle the sidebar
2. Go to the extension's settings (about:addons → Sidepage → Options) to configure your home page URL
3. The sidebar will display your configured home page

## Credits

Based on Mozilla's [Side View](https://github.com/mozilla/side-view/) extension, simplified to focus on displaying a single configurable page.
