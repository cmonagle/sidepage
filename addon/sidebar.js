// Default home URL
const DEFAULT_HOME_URL = "https://example.com";

async function loadSidebar() {
  const result = await browser.storage.local.get("homeUrl");
  const homeUrl = result.homeUrl || DEFAULT_HOME_URL;

  // Navigate directly to the URL
  window.location.href = homeUrl;
}

// Load the configured URL immediately
loadSidebar();
