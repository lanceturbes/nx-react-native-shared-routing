import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { DripsyProvider } from "dripsy"
import React from "react"

import { RootNavigator } from "@./feat-navigation"
import { theme } from "@./feat-theme"

const queryClient = new QueryClient()

export function AppRoot() {
    return (
        <QueryClientProvider client={queryClient}>
            <DripsyProvider theme={theme}>
                <RootNavigator />
            </DripsyProvider>
        </QueryClientProvider>
    )
}

export default AppRoot
