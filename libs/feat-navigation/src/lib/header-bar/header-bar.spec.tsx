import React from "react"
import { render } from "@testing-library/react-native"

import HeaderBar from "./header-bar"

describe("HeaderBar", () => {
    it("should render successfully", () => {
        const { container } = render(<HeaderBar />)
        expect(container).toBeTruthy()
    })
})
