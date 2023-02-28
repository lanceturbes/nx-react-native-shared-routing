import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { useQuery } from "@tanstack/react-query"
import { Image, Text, View } from "dripsy"
import React from "react"

import { ParamList, Screen } from "@./data-navigation"
import { fetchUserDetails } from "@./data-users-api"

/* eslint-disable-next-line */
export interface ViewUserScreenProps {}

export function ViewUserScreen({
    route: {
        params: { username }
    }
}: BottomTabScreenProps<ParamList, Screen.VIEW_USER>) {
    const { data, isLoading, isError } = useQuery({
        queryFn: () => fetchUserDetails(username),
        queryKey: ["user"]
    })

    if (isError) return <Text>An error has occurred.</Text>

    if (isLoading) return <Text>An error has occurred.</Text>

    if (!data) return <Text>No user data available</Text>

    return (
        <View
            sx={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                gap: "$3"
            }}
        >
            <Image
                sx={{ height: 360, width: 360, borderRadius: 24 }}
                source={{ uri: data.avatar_url }}
            />
            <Text sx={{ fontSize: "$3xl", fontWeight: "bold" }}>
                {data.name}
            </Text>
            <Text sx={{ fontSize: "$md" }}>Username: {data.login}</Text>
        </View>
    )
}

export default ViewUserScreen
