import { render } from "@testing-library/react-native"
import React from "react"

import TabBar from "./tab-bar"

describe("TabBar", () => {
    it("should render successfully", () => {
        const { container } = render(<TabBar />)
        expect(container).toBeTruthy()
    })
})
