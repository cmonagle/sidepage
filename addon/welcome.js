const DEFAULT_HOME_URL = "https://example.com";

async function loadSettings() {
  try {
    const result = await browser.storage.local.get("homeUrl");
    const homeUrl = result.homeUrl || DEFAULT_HOME_URL;
    document.getElementById("homeUrl").value = homeUrl;
  } catch (error) {
    console.error("Error loading settings:", error);
  }
}

async function saveSettings(e) {
  e.preventDefault();

  try {
    const homeUrl = document.getElementById("homeUrl").value;
    console.log("Saving URL:", homeUrl);

    await browser.storage.local.set({ homeUrl });
    console.log("URL saved successfully");

    const status = document.getElementById("status");
    status.textContent = "Settings saved! Redirecting...";
    status.className = "status success";

    setTimeout(() => {
      console.log("Redirecting to:", homeUrl);
      window.location.href = homeUrl;
    }, 1000);
  } catch (error) {
    console.error("Error saving settings:", error);
    const status = document.getElementById("status");
    status.textContent = "Error: " + error.message;
    status.className = "status";
    status.style.display = "block";
    status.style.backgroundColor = "#f8d7da";
    status.style.color = "#721c24";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome page loaded");
  loadSettings();
  document.getElementById("settings-form").addEventListener("submit", saveSettings);
});
