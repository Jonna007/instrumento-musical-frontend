"use client"

import { View, ScrollView, Text } from "react-native"
import { useRouter } from "expo-router"
import InstrumentoCard from "../components/InstrumentoCard"
import TypeHeader from "../components/TypeHeader"
import Button from "../components/Button"
import { type InstrumentType, INSTRUMENT_TYPES } from "../types/instrument"
import { useInstrumentos } from "../context/InstrumentosContext"
import { layout } from "../styles/layout"
import { typography } from "../styles/typography"
import type { Instrument } from "../types/instrument"

export default function Home() {
  const router = useRouter()
  const { instrumentos } = useInstrumentos()

  const instrumentosByType = Object.keys(INSTRUMENT_TYPES).reduce(
    (acc, type) => {
      acc[type as InstrumentType] = instrumentos.filter((instrumento) => instrumento.tipo === type)
      return acc
    },
    {} as Record<InstrumentType, Instrument[]>,
  )

  return (
    <View style={layout.container}>
      <ScrollView>
        {(Object.keys(INSTRUMENT_TYPES) as InstrumentType[]).map((type) => (
          <View key={type} style={layout.section}>
            <TypeHeader type={type} />
            {instrumentosByType[type].length > 0 ? (
              instrumentosByType[type].map((instrumento) => (
                <InstrumentoCard key={instrumento.id} instrumento={instrumento} />
              ))
            ) : (
              <Text style={typography.body}>No hay instrumentos de este tipo</Text>
            )}
          </View>
        ))}
      </ScrollView>
      <Button title="Agregar Instrumento" onPress={() => router.push("/instrumentos/nuevo")} style={layout.addButton} />
    </View>
  )
}

