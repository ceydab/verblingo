import { test, expect } from '@playwright/test';

test.describe('Game UI Flow', () => {

  test.beforeEach(async ({ page }) => {
    // Go to your local development URL before each test
    await page.goto('http://localhost:3000');
  });

  test('should load the board with shuffled cards when a game button is clicked', async ({ page }) => {
    // 1. Target the button with class 'games' inside #gameoptions
    const gameButton = page.locator('#gameoptions .games').first();
    await expect(gameButton).toBeVisible();

    // 2. Click the game button (e.g., game1)
    await gameButton.click();

    // 3. Verify the menu section hides
    const menuSection = page.locator('#whatGames');
    await expect(menuSection).toBeHidden();

    // 4. Verify that buttons inside the board now contain text/cards from the API
    const firstGameBoardButton = page.locator('[id$="board"] button').first();
    await expect(firstGameBoardButton).toBeVisible();

    // Assert that the button text isn't empty (meaning data successfully bound to innerHTML)
    const buttonText = await firstGameBoardButton.innerText();
    expect(buttonText.length).toBeGreaterThan(0);
  });

  test('should navigate back to main menu when back button is clicked', async ({ page }) => {
    // Open a game
    await page.locator('#gameoptions .games').first().click();

    // Click the back button
    await page.locator('#backtogames').click();

    // Verify main menu is visible again
    await expect(page.locator('#whatGames')).toBeVisible();
  });
});