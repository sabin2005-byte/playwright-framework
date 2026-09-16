import { test, Page } from '@playwright/test';

export default class ProductPage {

    page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    // Locators
    addBackpackToCartButton = () => this.page.locator("#add-to-cart-sauce-labs-backpack");
    addBikeLightToCartButton = () => this.page.locator("#add-to-cart-sauce-labs-bike-light");
    addTshirtToCartButton = () => this.page.locator("#add-to-cart-sauce-labs-bolt-t-shirt");
    addFleeceJacketToCartButton = () => this.page.locator("#add-to-cart-sauce-labs-fleece-jacket");
    addOnsieToCartButton = () => this.page.locator("#add-to-cart-sauce-labs-onesie");
    addRedTshirtToCartButton = () => this.page.locator("#add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)");

    cartItemCountDisplay = () => this.page.locator('[data-test="shopping-cart-link"]');

    removeBackpackFromCartButton = () => this.page.locator("#remove-sauce-labs-backpack");

    // Actions
    
    public async addBackpackToCart() {
        await this.addBackpackToCartButton().click();
    }

    public async removeBackpackFromCart() {
        await this.removeBackpackFromCartButton().click();
    }
}