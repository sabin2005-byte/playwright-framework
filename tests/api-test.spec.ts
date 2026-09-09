import { test, expect } from '@playwright/test';

test('API: Get all items', async ({ request }) => {
    const response = await request.get('https://api.restful-api.dev/objects')
    expect(response.status()).toBe(200)
    const data = await response.text();
    expect(data).toContain('Apple iPhone')
    console.log(await response.json())
});

test('API: Get specific item', async ({ request }) => {
    const response = await request.get('https://api.restful-api.dev/objects/5')
    expect(response.status()).toBe(200)
    const data = await response.text();
    expect(data).toContain('Samsung Galaxy Z Fold2')
    console.log(await response.json())
});

test('API: Post new item', async ({ request }) => {
    const response = await request.post('https://api.restful-api.dev/objects', {
        data: {
            "name": "Lenovo Z580",
            "data": {
                "year": 2013,
                "price": 1249.99,
                "CPU model": "Intel Core i5",
                "Hard disk size": "700 GB"
            }
        }
    })
    expect(response.status()).toBe(200)
    const data = await response.text();
    expect(data).toContain('Lenovo Z580')
    console.log(await response.json())
})

test('API: Put updated item', async ({ request }) => {
    const response = await request.put('https://api.restful-api.dev/objects/ff808181a067127101a0840ab7e0505a', {
        data: {
            "name": "Lenovo Z580",
            "data": {
                "year": 2013,
                "price": 1349.99,
                "CPU model": "Intel Core i7",
                "Hard disk size": "700 GB"
            }
        }
    })
    expect(response.status()).toBe(200)
    const data = await response.text();
    expect(data).toContain('Intel Core i7')
    console.log(await response.json())
})

test('API: Delete specific item', async ({ request }) => {
    const response = await request.delete('https://api.restful-api.dev/objects/ff808181a067127101a0840ab7e0505a', {
    })
    expect(response.status()).toBe(200)
    const data = await response.text();
    expect(data).toContain('has been deleted')
    console.log(await response.json())
})

test('Get all products', async ({ request }) => {
    const response = await request.get('https://automationexercise.com/api/productsList')
    expect(response.status()).toBe(200);

});

// test('API POST Test', async ({ request }) => {

//     const response = await request.post('https://reqres.in/api/users', {
//         data: {
//             name: 'morpheus',
//             job: 'leader'
//         }
//     })


//     expect(response.status()).toBe(201);

// })

// test('API Test', async ({ request }) => {

//     const response = await request.get('https://reqres.in/api/users?page=2')

//     expect(response.status()).toBe(200);

//     const text = await response.text();
//     expect(text).toContain('Michael');

// })