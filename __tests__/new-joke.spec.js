import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/jokes');
  await page.getByRole('link', { name: 'New Joke' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('A bartender walked into a bar. He worked a full shift.');
  await page.getByRole('button', { name: 'Create Joke' }).click();
  await expect(page.getByRole('cell', { name: 'A bartender walked into a bar. He worked a full shift.' })).toBeVisible();
});
