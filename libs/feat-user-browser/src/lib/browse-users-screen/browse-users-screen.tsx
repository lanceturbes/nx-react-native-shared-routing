import { useQuery } from "@tanstack/react-query"
import { Text, View } from "dripsy"
import { ScrollView } from "react-native"

import { fetchUsers } from "@./data-users-api"

import UserListEntry from "../user-list-entry/user-list-entry"

export function BrowseUsersScreen() {
    const { data, isLoading, isError } = useQuery(queryOpts)

    if (isError) return <Text>An error has occurred.</Text>

    if (isLoading) return <Text>Loading...</Text>

    if (!data || data.length === 0) return <Text>No users available.</Text>

    return (
        <ScrollView
            contentContainerStyle={{
                marginVertical: 16,
                maxWidth: 720,
                marginHorizontal: "auto"
            }}
        >
            <View
                sx={{
                    alignItems: "center",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "$4",
                    columnGap: "$6",
                    justifyContent: "center"
                }}
            >
                {data.map(user => (
                    <UserListEntry key={user.id} user={user} />
                ))}
            </View>
        </ScrollView>
    )
}

const queryOpts = {
    queryKey: ["users"],
    queryFn: fetchUsers
} as const
