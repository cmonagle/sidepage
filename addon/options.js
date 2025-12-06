// Default home URL
const DEFAULT_HOME_URL = "https://example.com";

// Load saved settings
async function loadSettings() {
  const result = await browser.storage.local.get("homeUrl");
  const homeUrl = result.homeUrl || DEFAULT_HOME_URL;
  document.getElementById("homeUrl").value = homeUrl;
}

// Save settings
async function saveSettings(e) {
  e.preventDefault();

  const homeUrl = document.getElementById("homeUrl").value;

  await browser.storage.local.set({ homeUrl });

  // Show success message
  const status = document.getElementById("status");
  status.textContent = "Settings saved!";
  status.className = "status success";

  setTimeout(() => {
    status.className = "status";
  }, 2000);
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  loadSettings();
  document.getElementById("settings-form").addEventListener("submit", saveSettings);
});
