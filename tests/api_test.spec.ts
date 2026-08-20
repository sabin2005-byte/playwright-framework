import {test, expect} from '@playwright/test';


test('API POST Test', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users', {
        data: {
            name: 'morpheus',
            job: 'leader'
        }
    })


    expect(response.status()).toBe(201);

})



test('API Test', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users?page=2')

    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('Michael');


})