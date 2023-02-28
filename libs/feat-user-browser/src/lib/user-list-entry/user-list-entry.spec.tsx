import { render } from "@testing-library/react-native"
import React from "react"

import UserListEntry from "./user-list-entry"

describe("UserListEntry", () => {
    it("should render successfully", () => {
        const { container } = render(<UserListEntry />)
        expect(container).toBeTruthy()
    })
})
