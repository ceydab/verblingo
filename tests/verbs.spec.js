/*Test the quiz functionality*/
import { test, expect } from '@playwright/test';

// TODO: confirm the actual page path if it isn't quiz.html
test.describe('Verb Quiz UI Flow', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/de.html');
  });

  test('should load a question with three options when start is clicked', async ({ page }) => {
    const startButton = page.locator('#start');
    await expect(startButton).toBeVisible();

    await startButton.click();

    // Question + definition should be populated from the fetched db
    const question = page.locator('#question');
    await expect(question).toBeVisible();
    const questionText = await question.innerText();
    expect(questionText.length).toBeGreaterThan(0);

    const definition = page.locator('#definition');
    await expect(definition).not.toBeEmpty();

    // Three options should each contain a candidate conjugation
    const options = page.locator('#options > *');
    await expect(options).toHaveCount(3);
    for (const option of await options.all()) {
      const text = await option.innerText();
      expect(text.length).toBeGreaterThan(0);
    }

    // "next" should be hidden until an answer is given
    await expect(page.locator('#next')).toBeHidden();
  });

  test('should reveal feedback and show next button on correct answer, and allow advancing', async ({ page }) => {
    await page.locator('#start').click();

    const options = page.locator('#options > *');
    await expect(options).toHaveCount(3);

    // Try each option until one is graded correct (color turns green) —
    // avoids hardcoding which index is correct since it's randomized.
    let answeredCorrectly = false;
    for (const option of await options.all()) {
      await option.click();
      const bg = await option.evaluate((el) => getComputedStyle(el).backgroundColor);
      if (bg === 'rgb(112, 224, 0)') { // #70e000
        answeredCorrectly = true;
        break;
      }
      // Wrong answer: styles reset, question stays open — try the next option
    }

    expect(answeredCorrectly).toBe(true);
    await expect(page.locator('#next')).toBeVisible();

    // Advancing should load a new question
    const firstQuestionText = await page.locator('#question').innerText();
    await page.locator('#next').click();
    await expect(page.locator('#next')).toBeHidden();

    const options2 = page.locator('#options > *');
    await expect(options2).toHaveCount(3);
    for (const option of await options2.all()) {
      const text = await option.innerText();
      expect(text.length).toBeGreaterThan(0);
    }
  });
});