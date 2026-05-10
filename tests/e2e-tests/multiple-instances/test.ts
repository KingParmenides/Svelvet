import { expect, test } from '@playwright/test';

test('edges render inside their own Svelvet instance', async ({ page }) => {
	await page.goto('/multiple-instances');

	await page.locator('[id="A-2/N-one-source"]').dragTo(page.locator('[id="A-1/N-one-target"]'));
	await page.locator('[id="A-2/N-two-source"]').dragTo(page.locator('[id="A-1/N-two-target"]'));

	const graphOne = page.getByTestId('graph-one').locator('.svelvet-graph-wrapper');
	const graphTwo = page.getByTestId('graph-two').locator('.svelvet-graph-wrapper');

	await expect(graphOne.locator('.edges-wrapper')).toHaveCount(1);
	await expect(graphTwo.locator('.edges-wrapper')).toHaveCount(1);
});
