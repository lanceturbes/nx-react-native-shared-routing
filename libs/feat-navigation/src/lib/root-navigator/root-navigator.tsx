import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Text } from "dripsy"
import React from "react"
import { Platform } from "react-native"

import {
    DashboardTabParamList,
    linking,
    Screen,
    UserStackParamList
} from "@./data-navigation"
import { HomeScreen } from "@./feat-home"
import { BrowseUsersScreen, ViewUserScreen } from "@./feat-user-browser"

import HeaderBar from "../header-bar/header-bar"
import TabBar from "../tab-bar/tab-bar"

const Tab = createBottomTabNavigator<DashboardTabParamList>()
const Stack = createNativeStackNavigator<UserStackParamList>()

export function UserStackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={Screen.USER_LIST}
            screenOptions={{
                headerShown: Platform.select({
                    native: true,
                    web: false
                })
            }}
        >
            <Stack.Screen
                name={Screen.USER_LIST}
                component={BrowseUsersScreen}
                options={{ title: "User List" }}
            />
            <Stack.Screen
                name={Screen.VIEW_USER}
                component={ViewUserScreen}
                options={{ title: "Profile" }}
            />
        </Stack.Navigator>
    )
}

export function RootNavigator() {
    return (
        <NavigationContainer
            linking={linking}
            fallback={<Text>Loading...</Text>}
        >
            <Tab.Navigator
                tabBar={TabBar}
                screenOptions={{
                    header: HeaderBar,
                    headerShown: Platform.select({
                        native: false,
                        web: true
                    })
                }}
            >
                <Tab.Screen
                    name={Screen.HOME}
                    component={HomeScreen}
                    options={{ title: "Home" }}
                />
                <Tab.Screen
                    name={Screen.USER_STACK}
                    component={UserStackNavigator}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator
