import { SxProp, Text, useDripsyTheme, useSx } from "dripsy"
import { ComponentProps } from "react"
import {
    Pressable,
    PressableProps,
    PressableStateCallbackType
} from "react-native"

import { useContrastText } from "@./util-colors"

type DripsyTextProps = ComponentProps<typeof Text>
type ButtonVariant = "solid" | "outline" | "ghost"

export type IButtonProps = PressableProps & {
    children: string | number
    sxPressable?: (state: PressableStateCallbackType) => SxProp
    sxText?: (state: PressableStateCallbackType) => SxProp
    textProps?: DripsyTextProps
    colorScheme?: "primary" | "secondary" | "neutral"
    variant?: ButtonVariant
}

export const Button = ({
    children,
    sxPressable,
    sxText,
    textProps,
    variant = "solid",
    colorScheme = "primary",
    ...pressableProps
}: IButtonProps): JSX.Element => {
    const sxFn = useSx()
    const colorToken = `$${colorScheme}500`
    const solidBgColor = useDripsyTheme().theme.colors?.[colorToken] as string
    const [solidTextColor, isTextDark] = useContrastText(solidBgColor)
    const textColor = variant === "solid" ? solidTextColor : colorToken
    const contrastColor = isTextDark ? "white" : "black"

    return (
        <Pressable
            accessibilityRole="button"
            style={pressableState =>
                sxFn({
                    bg: getVariantStyleValue(variant, {
                        solid: getInteractiveColor(pressableState, {
                            default: colorToken,
                            hovered: `$${colorScheme}${
                                isTextDark ? "400" : "600"
                            }`,
                            pressed: `$${colorScheme}${
                                isTextDark ? "300" : "700"
                            }`
                        }),
                        outline: getInteractiveColor(pressableState, {
                            default: "transparent",
                            hovered: contrastColor,
                            pressed: `$${colorScheme}700`
                        })
                    }),
                    px: "$4",
                    py: "$2",
                    borderRadius: 4,
                    transform: pressableState.pressed
                        ? [{ translateY: 2 }]
                        : undefined,
                    ...(sxPressable ? sxPressable(pressableState) : {})
                })
            }
            {...pressableProps}
        >
            {pressableState => (
                <Text
                    selectable={false}
                    sx={{
                        color: textColor,
                        fontSize: "$xl",
                        ...(sxText ? sxText(pressableState) : {})
                    }}
                    {...textProps}
                >
                    {children}
                </Text>
            )}
        </Pressable>
    )
}

function getVariantStyleValue(
    variant: ButtonVariant,
    styleValues: {
        solid: string
        outline?: string
    }
): string {
    if (variant === "solid") {
        return styleValues.solid
    } else if (variant === "outline" && styleValues.outline) {
        return styleValues.outline
    } else {
        return styleValues.solid
    }
}

function getInteractiveColor(
    { pressed, focused, hovered }: PressableStateCallbackType,
    colors: {
        pressed?: string
        hovered?: string
        focused?: string
        default: string
    }
): string {
    if (pressed && colors.pressed) {
        return colors.pressed
    } else if (focused && colors.focused) {
        return colors.focused
    } else if (hovered && colors.hovered) {
        return colors.hovered
    } else {
        return colors.default
    }
}
