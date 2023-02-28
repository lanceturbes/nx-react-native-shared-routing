import { dataUsersApi } from "./data-users-api"

describe("dataUsersApi", () => {
    it("should work", () => {
        expect(dataUsersApi()).toEqual("data-users-api")
    })
})
