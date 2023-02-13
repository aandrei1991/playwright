import { test, expect } from '@playwright/test'
import { Category } from '../../entities/Category'
import { Pet } from '../../entities/Pet'
import { PetStatus } from '../../entities/PetStatus'
import { Tag } from '../../entities/Tag'
import { User } from '../../entities/User'
import { baseUrl } from './utils'

test.describe("API Testing", () => {
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

        const response = await request.post(`${baseUrl}/user`, {
            data: {
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                phone: user.phone,
                userStatus: user.userStatus
            }
        })

        const responseBody = JSON.parse(await response.text())

        expect.soft(response.status(), "For POST creation of entities, the best practice is to have '201 - Created' as a response status!").toBe(200)
        expect.soft(responseBody.message).toBe(user.id.toString())

        const responseDelete = await request.delete(`${baseUrl}/user/${user.username}`)
        expect.soft(responseDelete.status()).toBe(200)
    })

    test("GET Request - Login with existing user and password combination", async ({ request }) => {
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

        const response = await request.post(`${baseUrl}/user`, {
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                phone: user.phone,
                userStatus: user.userStatus
            }
        })
        const responseBody = await response.json()

        expect.soft(response.status(), "For POST creation of entities, the best practice is to have '201 - Created' as a response status!").toBe(200)
        expect.soft(responseBody.message).toBe(user.id.toString())

        const responseLogin = await request.get(`${baseUrl}/user/login?username=${user.username}&password=${user.password}`)
        const responseLoginBody = await responseLogin.json()
        expect.soft(responseLogin.status(), "Login was not successful!").toBe(200)
        expect.soft(responseLoginBody.message, "Login was not successful!").toMatch(/logged in user session:([0-9]+)/)

        const responseDelete = await request.delete(`${baseUrl}/user/${user.username}`)
        expect.soft(responseDelete.status()).toBe(200)

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
})