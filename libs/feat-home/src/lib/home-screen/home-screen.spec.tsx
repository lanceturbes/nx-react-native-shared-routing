import { render } from "@testing-library/react-native"
import React from "react"

import HomeScreen from "./home-screen"

describe("HomeScreen", () => {
    it("should render successfully", () => {
        const { container } = render(<HomeScreen />)
        expect(container).toBeTruthy()
    })
})
