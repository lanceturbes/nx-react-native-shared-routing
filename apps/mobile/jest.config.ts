module.exports = {
    displayName: "mobile",
    preset: "react-native",
    resolver: "@nrwl/jest/plugins/resolver",
    moduleFileExtensions: ["ts", "js", "html", "tsx", "jsx"],
    setupFilesAfterEnv: ["<rootDir>/test-setup.ts"],
    moduleNameMapper: {
        "\\.svg$": "@nrwl/react-native/plugins/jest/svg-mock"
    },
    transformIgnorePatterns: [
        "node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)"
    ]
}
