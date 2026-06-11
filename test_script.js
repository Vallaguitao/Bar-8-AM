// Test script.js in a simulated browser environment
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><title>Test</title></head>
<body data-page="home">
  <div class="feature-grid" data-recommendations></div>
  <button data-language-toggle>Toggle</button>
</body>
</html>`;

const dom = new JSDOM(html, { 
  runScripts: "dangerously", 
  resources: "usable",
  url: "http://localhost/"
});

const window = dom.window;
const document = window.document;

// Mock localStorage properly
const localStorage = {
  store: {},
  getItem: function(key) { return this.store[key] || null; },
  setItem: function(key, value) { this.store[key] = value.toString(); }
};
Object.defineProperty(window, 'localStorage', { value: localStorage });
window.navigator = { language: "ja" };

// Load the script
const fs = require('fs');
const scriptContent = fs.readFileSync('/workspace/script.js', 'utf8');

try {
  window.eval(scriptContent);
  console.log("✓ Script loaded successfully!");
  
  // Check if drinks array is populated
  if (typeof drinks !== 'undefined' && drinks.length > 0) {
    console.log(`✓ Drinks array has ${drinks.length} items`);
  } else {
    console.log("✗ Drinks array is empty or undefined");
  }
  
  // Check if renderRecommendations works
  if (typeof renderRecommendations === 'function') {
    renderRecommendations();
    const recContainer = document.querySelector('[data-recommendations]');
    if (recContainer && recContainer.innerHTML.length > 0) {
      console.log("✓ Recommendations rendered successfully");
      console.log(`  Rendered ${recContainer.querySelectorAll('.feature-card').length} recommendation cards`);
    } else {
      console.log("✗ Recommendations not rendered");
    }
  }
  
  // Check if language toggle binding exists
  const toggleButton = document.querySelector('[data-language-toggle]');
  if (toggleButton) {
    console.log("✓ Language toggle button found");
  }
  
} catch (e) {
  console.error("✗ Script error:", e.message);
  console.error(e.stack);
}
