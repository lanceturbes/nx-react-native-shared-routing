import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { View } from "dripsy"
import React from "react"

import type { ParamList } from "@./data-navigation"
import { Button } from "@./ui-common"

export function HomeScreen({ navigation }: NativeStackScreenProps<ParamList>) {
    return (
        <View sx={{ alignItems: "center" }}>
            <Button
                colorScheme="secondary"
                onPress={() => console.log("Hello")}
            >
                Home Screen
            </Button>
        </View>
    )
}

export default HomeScreen
