import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("https://yay.space/login");
  await page
    .locator('[placeholder="メールアドレス"]')
    .fill("ne1oooop@gmail.com");
  await page.locator('[placeholder="パスワード"]').fill("hoge");
  await page.click("button.Button--icon-login");
  await page.locator("div.PostBox__body").click;
  await page.locator('[contenteditable="true"]').fill("hoge");
  await page.click('"サークル"');
  await page.locator('[placeholder="サークル名"]').fill("エンジニア");
  await page.locator('button:has-text("検索")').click();
  //await page.locator('[placeholder="サークル名"]').fill("エンジニア");
  //const groupList = await page.$$("div.GroupList__item");
  const title = page.locator(".navbar__inner .navbar__title");
  await expect(title).toHaveText("Playwright");
});
