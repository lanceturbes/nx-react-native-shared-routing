import { render } from "@testing-library/react-native"
import React from "react"

import AppRoot from "./app-root"

describe("AppRoot", () => {
    it("should render successfully", () => {
        const { container } = render(<AppRoot />)
        expect(container).toBeTruthy()
    })
})
