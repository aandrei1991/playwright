import { test, expect } from '@playwright/test'
import { Category } from '../../entities/Category'
import { Order } from '../../entities/Order'
import { OrderStatus } from '../../entities/OrderStatus'
import { Pet } from '../../entities/Pet'
import { PetStatus } from '../../entities/PetStatus'
import { Tag } from '../../entities/Tag'
import { User } from '../../entities/User'
import { baseUrl } from './utils'

test.describe.parallel("API Testing", () => {
    test("POST Request - Create new user", async ({ request }) => {
        const user = new User(
            10010001110,
            "alex.andrei",
            "Alex",
            "Andrei",
            "alex.andrei@spritecloud.com",
            "12345",
            "+40726111111",
            1
        )

        const userString = JSON.stringify(user)

        const response = await request.post(`${baseUrl}/user`, {
            headers: {
                "Content-Type": "application/json"
            },
            data: userString
        })

        const responseBody = JSON.parse(await response.text())

        expect.soft(response.status(), "For POST creation of entities, the best practice is to have '201 - Created' as a response status!").toBe(200)
        expect.soft(responseBody.message).toBe(user._id.toString())

        const responseDelete = await request.delete(`${baseUrl}/user/${user._username}`)
        expect.soft(responseDelete.status()).toBe(200)
    })

    test("GET Request - Login with existing user and password combination", async ({ request }) => {
        const user = new User(
            10010001150,
            "testuser6473",
            "Alex",
            "Andrei",
            "testuser6473@petstore.com",
            "12345",
            "+40726111115",
            1
        )

        const userString = JSON.stringify(user)

        const response = await request.post(`${baseUrl}/user`, {
            headers: {
                "Content-Type": "application/json"
            },
            data: userString
        })
        const responseCreate = await response.json()

        expect.soft(response.status(), "For POST creation of entities, the best practice is to have '201 - Created' as a response status!").toBe(200)
        expect.soft(responseCreate.message).toBe(user._id.toString())

        const responseLogin = await request.get(`${baseUrl}/user/login?username=${user._username}&password=${user._password}`)
        const responseLoginBody = await responseLogin.json()
        expect.soft(responseLogin.status(), "Login was not successful!").toBe(200)
        expect.soft(responseLoginBody.message, "Login was not successful!").toMatch(/logged in user session:([0-9]+)/)

        const responseDelete = await request.delete(`${baseUrl}/user/${user._username}`)
        expect.soft(responseDelete.status()).toBe(200)
        const responseDeleteJson = await responseDelete.json()
        expect(responseDeleteJson.message).toBe(user._username.toString())

    })

    test("POST Request - Add a new pet to the store inventory", async ({ request }) => {
        const spot = new Pet(
            706572727566,
            new Category(0, "dog"),
            "Spot",
            ["https://www.seekpng.com/png/full/76-761325_spot-the-dog-by-estelle-chan-d6fw64h-spot.png"],
            [new Tag(0, "friendly")],
            PetStatus.available
        )
        const spotString = JSON.stringify(spot)

        const response = await request.post(`${baseUrl}/pet`, {
            headers: {
                "Content-Type": "application/json"
            },
            data: spotString
        })
        expect.soft(response.status()).toBe(200)
        const responseBody = await response.json()

        const responseDelete = await request.delete(`${baseUrl}/pet/${responseBody.id}`)
        const responseDeleteBody = await responseDelete.json()
        expect(responseDelete.status()).toBe(200)
        expect(responseDeleteBody.message).toBe(responseBody.id.toString())
    })

    test("POST Request - Place a new order", async ({ request }) => {
        const order = new Order(
            236,
            706572727566,
            1,
            "2023-03-12T21:34:56.502+0000",
            OrderStatus.placed,
            false
        )
        const orderString = JSON.stringify(order)
        const orderJson = JSON.parse(orderString)

        const response = await request.post(`${baseUrl}/store/order`, {
            headers: {
                "Content-Type": "application/json"
            },
            data: orderString
        })

        const responseCreateOrder = await response.json()
        expect(responseCreateOrder).toEqual(orderJson)
    })
})