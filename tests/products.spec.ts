import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import productPage from "../pages/ProductsPage";

test ('Add Backpack to cart', async({page}) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new productPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.fillUsernamePW('standard_user', 'secret_sauce');
    await inventoryPage.addBackpackToCart();

    await expect(inventoryPage.removeBackpackFromCartButton()).toBeVisible();
    await expect(inventoryPage.cartItemCountDisplay()).toContainText("1");
})

test ('Remove Backpack from cart', async({page}) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new productPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.fillUsernamePW('standard_user', 'secret_sauce');
    await inventoryPage.addBackpackToCart();

    await expect(inventoryPage.removeBackpackFromCartButton()).toBeVisible();
    await expect(inventoryPage.cartItemCountDisplay()).toContainText("1");

    await inventoryPage.removeBackpackFromCart();
    await expect(inventoryPage.addBackpackToCartButton()).toBeVisible;
    await expect(inventoryPage.cartItemCountDisplay()).toContainText("");
})