import { useMemo } from "react"

import { getAccessibleTextColor } from "./get-accessible-text-color"

export function useContrastText(bgColorHex: string) {
    const color = useMemo(
        () => getAccessibleTextColor(bgColorHex),
        [bgColorHex]
    )
    const isDark = color === "#000000"
    return [color, isDark] as const
}

export default useContrastText
