import { z } from "zod"

export type User = z.infer<typeof usersSchema>

export const usersSchema = z.object({
    login: z.string(),
    id: z.number(),
    avatar_url: z.string(),
    url: z.string()
})

export const userListSchema = z.array(usersSchema)

export async function fetchUsers(): Promise<User[]> {
    const res = await fetch("https://api.github.com/users")
    const data = await res.json()
    return userListSchema.parse(data)
}

export const userDetailsSchema = z.object({
    login: z.string(),
    id: z.number(),
    avatar_url: z.string(),
    html_url: z.string(),
    name: z.string().nullable(),
    followers: z.number(),
    following: z.number()
})

export type UserDetails = z.infer<typeof userDetailsSchema>

export async function fetchUserDetails(username: string): Promise<UserDetails> {
    const res = await fetch(`https://api.github.com/users/${username}`)
    const data = await res.json()
    return userDetailsSchema.parse(data)
}
