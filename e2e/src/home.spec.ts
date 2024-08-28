import { test, expect } from '@playwright/test';

test('Home', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.locator('source[src="/assets/Los-Angeles-Noir.mp4"]')
  ).toBeHidden();
  await expect(
    page.locator('source[src="/assets/Jazz-Noir.mp4"]')
  ).toBeHidden();
  await expect(
    page.locator('source[src="/assets/CoSprings-Noir.mp4"]')
  ).toBeHidden();
  await expect(
    page.locator('source[src="/assets/Desert-Noir.mp4"]')
  ).toBeHidden();
  await expect(
    page.locator('source[src="/assets/Savannah-Noir.mp4"]')
  ).toBeHidden();
  await expect(
    page.getByRole('heading', { name: 'Finding the right Balance' })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Proposing Innovative Solutions' })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Executing on Deliverables' })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Finding the right technology' })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Critical Thinking' })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Having Fun along the way' })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Communicating Results' })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Developing the next move' })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'A desire to learn' })
  ).toBeVisible();
  await expect(page.getByRole('img', { name: '2020s' })).toBeVisible();
  await expect(page.getByRole('img', { name: '201s' })).toBeVisible();
  await expect(page.getByRole('img', { name: '200s' })).toBeVisible();
  await expect(page.getByRole('img', { name: '1990s' })).toBeVisible();
  await expect(page.getByRole('img', { name: '1980s' })).toBeVisible();
  await expect(page.getByRole('img', { name: '1970s' })).toBeVisible();
  await expect(page.getByRole('img', { name: '1960s' })).toBeVisible();
  await expect(page.getByRole('img', { name: '1950s' })).toBeVisible();
  await expect(page.getByRole('img', { name: '1940s' })).toBeVisible();
});
