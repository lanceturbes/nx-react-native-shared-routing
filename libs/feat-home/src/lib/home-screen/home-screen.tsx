import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React from "react"
import { Text, View } from "react-native"

import type { ParamList } from "@./data-navigation"
import { Button } from "@./ui-common"

export function HomeScreen({ navigation }: NativeStackScreenProps<ParamList>) {
    return (
        <View>
            <Button>
                <Text>Testing</Text>
            </Button>
        </View>
    )
}

export default HomeScreen
