// Default home URL - show welcome page if not configured
const DEFAULT_HOME_URL = browser.runtime.getURL("welcome.html");

async function loadSidebar() {
  const result = await browser.storage.local.get("homeUrl");
  const homeUrl = result.homeUrl || DEFAULT_HOME_URL;

  // Navigate directly to the URL
  window.location.href = homeUrl;
}

// Load the configured URL immediately
loadSidebar();

// Listen for storage changes and reload when home URL changes
browser.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes.homeUrl) {
    window.location.href = changes.homeUrl.newValue;
  }
});
