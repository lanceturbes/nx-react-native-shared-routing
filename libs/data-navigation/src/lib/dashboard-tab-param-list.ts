import { NavigatorScreenParams } from "@react-navigation/native"

import UserStackParamList from "./user-stack-param-list"

export type DashboardTabParamList = {
    HOME: undefined
    USER_STACK: NavigatorScreenParams<UserStackParamList>
}

export default DashboardTabParamList
