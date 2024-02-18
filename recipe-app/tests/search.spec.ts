import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	// Clear all cookies and permissions before each test
	await page.goto('about:blank');
	await page.context().clearCookies();
	await page.context().clearPermissions();

	await page.goto('http://localhost:3000');
});

test.describe('Search Recipes Functionality', () => {
	test('search for a recipe', async ({ page }) => {
		// Click the input field and type "Mala"
		await page.waitForSelector('input[data-testid="search-input"]', {
			timeout: 15000, // wait for 15 seconds
		});
		await page.fill('input[data-testid="search-input"]', 'mala');

		// Click the search button
		await page.click('button[type="submit"]');

		// Wait 5 seconds
		await page.waitForTimeout(5000);

		// Expect the first recipe to be "Malawax | Somali Crepe"
		await page.waitForSelector('a[data-testid="recipe-link"]', {
			timeout: 15000, // wait for 15 seconds
		});
		const recipeLink = await page.$('a[data-testid="recipe-link"]');

		if (!recipeLink) {
			throw new Error('Recipe link not found');
		}

		const recipeTitle = await recipeLink.textContent();
		expect(recipeTitle).toContain('Malawax | Somali Crepe');
	});
});
