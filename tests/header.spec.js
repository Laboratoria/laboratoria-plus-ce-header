// @ts-check
import { test, expect } from '@playwright/test';

test('initial view', async ({ page }, workerInfo) => {
  await page.goto('http://localhost:5173/');
  // create a locator
  const laboratoriaHeader = page.locator('laboratoria-header');

  await expect(laboratoriaHeader).toHaveAttribute('buttonname', 'Postula');
  await expect(laboratoriaHeader).toHaveAttribute('link', '#something');

  const header = laboratoriaHeader.locator('header')

  expect(header).toBeVisible()

  if (workerInfo.project.name.includes('Mobile')) {
  
    const burger = await header.locator('#burger');
    expect(burger).toBeVisible();
    
    const allLinks = await header.locator('a');
    await expect(await allLinks.count()).toBe(3);
    await expect(allLinks.nth(0)).not.toBeVisible();
    await expect(allLinks.nth(1)).not.toBeVisible();

    await burger.click();

    await expect(allLinks.nth(0)).toBeVisible();
    await expect(allLinks.nth(1)).toBeVisible();
    
  } else {

    const allLinks = await header.locator('a');
    await expect(await allLinks.count()).toBe(3);
    await expect(allLinks.nth(0)).toBeVisible();
    await expect(allLinks.nth(1)).toBeVisible();
    expect(await allLinks.nth(2)).not.toBeVisible();
  
  }



});
