import { DripsyProvider } from "dripsy"
import React from "react"

import { RootNavigator } from "@./feat-navigation"
import { theme } from "@./feat-theme"

export function AppRoot() {
    return (
        <DripsyProvider theme={theme}>
            <RootNavigator />
        </DripsyProvider>
    )
}

export default AppRoot
