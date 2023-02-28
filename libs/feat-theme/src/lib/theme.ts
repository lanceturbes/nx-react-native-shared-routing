import { makeTheme } from "dripsy"

export const theme = makeTheme({
    colors: {
        // Primary
        $primary50: "#dff8ff",
        $primary100: "#b9e5f6",
        $primary200: "#92d2ed",
        $primary300: "#69c1e4",
        $primary400: "#43afdc",
        $primary500: "#2d95c3",
        $primary600: "#207498",
        $primary700: "#12536d",
        $primary800: "#033244",
        $primary900: "#00121b",

        // Secondary
        $secondary50: "#fff2da",
        $secondary100: "#ffdcae",
        $secondary200: "#ffc67d",
        $secondary300: "#ffaf4b",
        $secondary400: "#ff981a",
        $secondary500: "#e67e00",
        $secondary600: "#b36200",
        $secondary700: "#814600",
        $secondary800: "#4f2900",
        $secondary900: "#1f0c00",

        // Neutral
        $neutral50: "#ecf2ff",
        $neutral100: "#d0dae3",
        $neutral200: "#b5bfca",
        $neutral300: "#9aa6b2",
        $neutral400: "#7e8c9b",
        $neutral500: "#647381",
        $neutral600: "#4d5965",
        $neutral700: "#36404a",
        $neutral800: "#1d262f",
        $neutral900: "#000f16"
    },

    space: {
        $0: 0,
        $1: 4,
        $2: 8,
        $3: 12,
        $4: 16,
        $5: 20,
        $6: 24,
        $7: 28,
        $8: 32,
        $9: 36,
        $10: 40,
        $12: 48,
        $16: 64,
        $20: 80,
        $24: 96,
        $32: 128,
        $40: 160,
        $48: 192,
        $56: 224,
        $64: 256,
        $72: 288,
        $80: 320,
        $96: 384
    },

    fontSizes: {
        $2xs: 10,
        $xs: 12,
        $sm: 14,
        $md: 16,
        $lg: 18,
        $xl: 20,
        $2xl: 24,
        $3xl: 30,
        $4xl: 36,
        $5xl: 48,
        $6xl: 60,
        $7xl: 72,
        $8xl: 96,
        $9xl: 128
    },

    types: {
        reactNativeTypesOnly: true
    }
})

export type MyTheme = typeof theme

export default theme
