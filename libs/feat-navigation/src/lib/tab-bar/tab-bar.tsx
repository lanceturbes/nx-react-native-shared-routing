import { Link } from "@react-navigation/native"
import { View } from "dripsy"
import React from "react"

export function TabBar() {
    return (
        <View
            sx={{
                justifyContent: "space-evenly",
                flexDirection: "row",
                width: "100%",
                py: "$3"
            }}
        >
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
        </View>
    )
}

export default TabBar
