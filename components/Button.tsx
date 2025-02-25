import { Pressable, Text } from "react-native"
import { colors } from "../styles/colors"
import { layout } from "../styles/layout"
import { typography } from "../styles/typography"

interface ButtonProps {
  title: string
  onPress?: () => void
  style?: any
  variant?: "primary" | "danger"
}

export default function Button({ title, onPress, style, variant = "primary" }: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        layout.button,
        { backgroundColor: variant === "danger" ? colors.danger : colors.primary },
        pressed && { opacity: 0.7 },
        style,
      ]}
      onPress={onPress}
    >
      <Text style={typography.buttonText}>{title}</Text>
    </Pressable>
  )
}

