import { useLinkTo } from "@react-navigation/native"
import { Image, Pressable, Text } from "dripsy"
import React from "react"

import { User } from "@./data-users-api"

export interface UserListEntryProps {
    user: User
}

export function UserListEntry({ user }: UserListEntryProps) {
    const navigate = useLinkTo()

    const handlePress = () => navigate(`/users/${user.login}`)

    return (
        <Pressable
            onPress={handlePress}
            sx={{
                width: 96,
                p: "$3",
                bg: "$surface",
                alignItems: "center",
                borderRadius: 16,
                boxShadow: "md"
            }}
        >
            <Image
                sx={{ height: 64, width: 64 }}
                source={{ uri: user.avatar_url }}
            />
            <Text>{user.login}</Text>
        </Pressable>
    )
}

export default UserListEntry
