import { render } from "@testing-library/react-native"
import React from "react"

import ViewUserScreen from "./view-user-screen"

describe("ViewUserScreen", () => {
    it("should render successfully", () => {
        const { container } = render(<ViewUserScreen />)
        expect(container).toBeTruthy()
    })
})
