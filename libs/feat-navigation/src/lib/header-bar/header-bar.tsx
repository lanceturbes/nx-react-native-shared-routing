import { Link } from "@react-navigation/native"
import { Text, useSx, View } from "dripsy"
import React from "react"

export function HeaderBar() {
    return (
        <View
            sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                bg: "$neutral900",
                px: "$6",
                py: "$3"
            }}
        >
            <Text
                sx={{
                    color: "$neutral50",
                    fontWeight: "bold",
                    fontSize: "$lg"
                }}
            >
                GitHub User Browser
            </Text>

            <View
                sx={{ flexDirection: "row", gap: "$2", alignItems: "center" }}
            >
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/users">Users</StyledLink>
            </View>
        </View>
    )
}

function StyledLink({ to, children }: { to: string; children: string }) {
    const sx = useSx()

    return (
        <Link to={to} style={sx({ color: "$neutral50" })}>
            {children}
        </Link>
    )
}

export default HeaderBar
