import { LinkingOptions } from "@react-navigation/native"

import ParamList from "./param-list"

export const linking: LinkingOptions<ParamList> = {
    prefixes: [],
    config: {
        screens: {
            HOME: "/"
        }
    }
}

export default linking
