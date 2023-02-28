import { useLinkTo } from "@react-navigation/native"
import { H1, View } from "dripsy"
import React from "react"

import { Button } from "@./ui-common"

export function HomeScreen() {
    const navigate = useLinkTo()

    const handleGetStartedPress = () => navigate("/users")

    return (
        <View sx={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
            <H1
                sx={{
                    textAlign: "center",
                    maxWidth: [280, 480],
                    fontSize: ["$3xl", "$5xl"]
                }}
            >
                Welcome to GitHub User Browser!
            </H1>

            <Button colorScheme="primary" onPress={handleGetStartedPress}>
                Get Started
            </Button>
        </View>
    )
}

export default HomeScreen
