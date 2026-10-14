import { chromium } from 'playwright';
import { projects } from '../src/data/projects.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const project of projects) {
    if (!project.siteUrl) continue;

    console.log(`Generating screenshots for: ${project.slug}`);
    
    // Ensure directory exists
    const dir = path.join(__dirname, '../public/projects', project.slug);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Go to the site
    await page.goto(project.siteUrl, { waitUntil: 'networkidle' });
    await page.waitForTimeout(15000); // Esperar 15s para asegurar carga completa
    
    // Take desktop screenshot
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.screenshot({ path: path.join(dir, 'desktop.png') });

    // Take mobile screenshot
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: path.join(dir, 'mobile.png') });

    console.log(`Screenshots saved for ${project.slug}`);
  }

  await browser.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
