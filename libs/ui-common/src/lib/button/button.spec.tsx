import { render } from "@testing-library/react-native"
import React from "react"

import Button from "./button"

describe("Button", () => {
    it("should render successfully", () => {
        const { container } = render(<Button />)
        expect(container).toBeTruthy()
    })
})
