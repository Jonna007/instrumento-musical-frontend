import { View } from "react-native"
import { Guitar, Wind, Drum, Piano } from "lucide-react-native"
import type { InstrumentType } from "../types/instrument"
import { colors } from "../styles/colors"

interface InstrumentTypeIconProps {
  type: InstrumentType
  size?: number
  color?: string
}

export default function InstrumentTypeIcon({ type, size = 24, color = colors.text }: InstrumentTypeIconProps) {
  const iconProps = { size, color }

  switch (type) {
    case "cuerda":
      return <Guitar {...iconProps} />
    case "viento":
      return <Wind {...iconProps} />
    case "percusion":
      return <Drum {...iconProps} />
    case "teclado":
      return <Piano {...iconProps} />
    default:
      return <View />
  }
}

