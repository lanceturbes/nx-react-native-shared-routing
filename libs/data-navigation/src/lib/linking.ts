import { LinkingOptions } from "@react-navigation/native"

import ParamList from "./dashboard-tab-param-list"
import Screen from "./screens"

export const linking: LinkingOptions<ParamList> = {
    prefixes: [],
    config: {
        screens: {
            HOME: "",
            USER_STACK: {
                screens: {
                    USER_LIST: "users",
                    VIEW_USER: "users/:username"
                }
            }
        },
        initialRouteName: Screen.HOME
    }
}

export default linking
