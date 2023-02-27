import { render } from "@testing-library/react-native"
import React from "react"

import RootNavigator from "./root-navigator"

describe("RootNavigator", () => {
    it("should render successfully", () => {
        const { container } = render(<RootNavigator />)
        expect(container).toBeTruthy()
    })
})
