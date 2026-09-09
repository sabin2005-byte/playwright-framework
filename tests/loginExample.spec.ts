import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../test-data/loginData.json';


test('verify login page', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  // verify url and page title
  await expect(loginPage.page).toHaveURL('https://www.saucedemo.com/')
  await expect(loginPage.page).toHaveTitle('Swag Labs');
  // visual validation
  await expect(loginPage.page).toHaveScreenshot();

});


test('valid login', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.fillUsernamePW(loginData.validUser.username, loginData.validUser.password);
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');


  //added to POM
  // await page.goto('https://www.saucedemo.com/');
  // await page.locator('[data-test="username"]').click();
  // await page.locator('[data-test="username"]').fill('standard_user');
  // await page.locator('[data-test="password"]').click();
  // //await page.locator('[data-test="password"]').fill('secret_ssauce');
  // await page.locator('[data-test="login-button"]').click();
  // await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Password is required');

});

test('invalid login', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.fillUsernamePW(loginData.invalidUser.username, loginData.invalidUser.password);
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');

  // Added to POM
  // await page.goto('https://www.saucedemo.com/');
  // await page.locator('[data-test="username"]').click();
  // //headed mode to debug the test await page.pause();
  // await page.locator('[data-test="username"]').fill('standard_user');
  // await page.locator('[data-test="password"]').click();
  // await page.locator('[data-test="password"]').fill('secret_ssauce');
  // await page.locator('[data-test="login-button"]').click();


});

test('no password', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.fillUsernamePW(loginData.noPassword.username, loginData.noPassword.password);
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Password is required');
});

test('no username', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.fillUsernamePW(loginData.noUsername.username, loginData.noUsername.password);
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username is required');
});