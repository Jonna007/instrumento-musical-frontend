"use client"

import { View, Text, Pressable } from "react-native"
import { useRouter } from "expo-router"
import { formatPrice } from "../utils/formatPrice"
import type { Instrument } from "../types/instrument"
import InstrumentTypeIcon from "./InstrumentTypeIcon"
import { layout } from "../styles/layout"
import { typography } from "../styles/typography"

interface InstrumentoCardProps {
  instrumento: Instrument
}

export default function InstrumentoCard({ instrumento }: InstrumentoCardProps) {
  const router = useRouter()

  return (
    <Pressable
      style={({ pressed }) => [layout.card, pressed && { opacity: 0.7 }]}
      onPress={() => router.push(`/instrumentos/${instrumento.id}`)}
    >
      <View style={layout.cardHeader}>
        <InstrumentTypeIcon type={instrumento.tipo} />
        <Text style={typography.cardTitle}>{instrumento.nombre}</Text>
      </View>
      <Text style={typography.cardSubtitle}>{instrumento.tipo}</Text>
      <Text style={typography.cardPrice}>{formatPrice(instrumento.precio)}</Text>
    </Pressable>
  )
}

