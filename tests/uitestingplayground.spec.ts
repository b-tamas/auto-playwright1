import { expect, test } from "@playwright/test";
import { auto } from "../src/auto";

const options = {
  model: process.env.OPENROUTER_MODEL ?? "openai/gpt-4o",
  openaiApiKey:
    process.env.OPENROUTER_API_KEY ?? process.env.OPENAI_API_KEY,
  openaiBaseUrl:
    process.env.OPENROUTER_BASE_URL ?? "https://openrouter.ai/api/v1",
};

test("updates the button text from the Text Input page", async ({ page }) => {
  await page.goto("http://uitestingplayground.com");

  await auto('Navigate to "Text Input".', { page, test }, options);
  await auto(
    'Enter "lorem ipsum" into the text input.',
    { page, test },
    options,
  );
  await auto(
    "Click the button to apply the entered text.",
    { page, test },
    options,
  );

  await expect(page.locator("#updatingButton")).toHaveText("lorem ipsum");
});
