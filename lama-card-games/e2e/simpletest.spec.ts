import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/LaMa Card Games/);
});

test('should calculate correct value', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByLabel('first').fill('2');
  await page.getByLabel('second').fill('10');
  await expect(page.locator('span')).toContainText('12');
});
