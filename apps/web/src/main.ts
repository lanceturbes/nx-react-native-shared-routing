import { AppRegistry } from "react-native"

import { AppRoot } from "@./feat-app-root"

AppRegistry.registerComponent("Web", () => AppRoot)
AppRegistry.runApplication("Web", {
    rootTag: document.querySelector("#root")
})
