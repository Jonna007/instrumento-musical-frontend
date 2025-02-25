import { View, Text, ImageBackground } from "react-native"
import { INSTRUMENT_TYPES, type InstrumentType } from "../types/instrument"
import { layout } from "../styles/layout"
import { typography } from "../styles/typography"

interface TypeHeaderProps {
  type: InstrumentType
}

export default function TypeHeader({ type }: TypeHeaderProps) {
  const typeInfo = INSTRUMENT_TYPES[type]

  return (
    <ImageBackground source={typeInfo.image} style={layout.typeHeader} resizeMode="cover">
      <View style={layout.typeHeaderOverlay}>
        <Text style={typography.typeHeaderTitle}>{typeInfo.name}</Text>
      </View>
    </ImageBackground>
  )
}

