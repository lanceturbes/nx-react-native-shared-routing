/**
 * Calculates an accessible text color based on background color.
 *
 * @returns black or white hex code
 * @see https://www.w3.org/TR/WCAG20/#relativeluminancedef
 * @see https://codepen.io/davidhalford/pen/AbKBNr
 */
export function getAccessibleTextColor(
    bgColorHex: string
): "#000000" | "#ffffff" {
    const threshold = 130 /* about half of 256. Lower threshold equals more dark text on dark background  */

    const hRed = hexToR(bgColorHex)
    const hGreen = hexToG(bgColorHex)
    const hBlue = hexToB(bgColorHex)

    const cBrightness = calculateColorBrightness(hRed, hGreen, hBlue)
    if (cBrightness > threshold) {
        return "#000000"
    } else {
        return "#ffffff"
    }
}

export function calculateColorBrightness(
    red: number,
    green: number,
    blue: number
): number {
    return (red * 299 + green * 587 + blue * 114) / 1000
}

export function hexToR(h: string): number {
    return parseInt(cutHex(h).substring(0, 2), 16)
}

export function hexToG(h: string): number {
    return parseInt(cutHex(h).substring(2, 4), 16)
}

export function hexToB(h: string): number {
    return parseInt(cutHex(h).substring(4, 6), 16)
}

export function cutHex(h: string): string {
    return h.charAt(0) === "#" ? h.substring(1, 7) : h
}
