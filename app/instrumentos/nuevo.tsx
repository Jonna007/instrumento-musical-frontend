"use client"

import { useState } from "react"
import { View, TextInput } from "react-native"
import { useRouter } from "expo-router"
import Button from "../../components/Button"
import { type InstrumentType, INSTRUMENT_TYPES } from "../../types/instrument"
import { Picker } from "@react-native-picker/picker"
import { useInstrumentos } from "../../context/InstrumentosContext"
import { layout } from "../../styles/layout"
import { typography } from "../../styles/typography"

export default function NuevoInstrumento() {
  const router = useRouter()
  const { addInstrumento } = useInstrumentos()
  const [instrumento, setInstrumento] = useState({
    nombre: "",
    tipo: "cuerda" as InstrumentType,
    precio: "",
    descripcion: "",
  })

  const handleCreate = async () => {
    try {
      const instrumentoToCreate = {
        ...instrumento,
        precio: Number.parseFloat(instrumento.precio) || 0,
      }
      await addInstrumento(instrumentoToCreate)
      router.back()
    } catch (error) {
      console.error("Error al crear el instrumento:", error)
    }
  }

  return (
    <View style={layout.container}>
      <TextInput
        style={[layout.input, typography.input]}
        value={instrumento.nombre}
        onChangeText={(text) => setInstrumento({ ...instrumento, nombre: text })}
        placeholder="Nombre"
      />
      <View style={layout.pickerContainer}>
        <Picker
          selectedValue={instrumento.tipo}
          onValueChange={(itemValue) => setInstrumento({ ...instrumento, tipo: itemValue as InstrumentType })}
          style={layout.picker}
        >
          {Object.entries(INSTRUMENT_TYPES).map(([key, value]) => (
            <Picker.Item key={key} label={value.name} value={key} />
          ))}
        </Picker>
      </View>
      <TextInput
        style={[layout.input, typography.input]}
        value={instrumento.precio}
        onChangeText={(text) => {
          const numericValue = text.replace(/[^0-9.]/g, "")
          setInstrumento({ ...instrumento, precio: numericValue })
        }}
        placeholder="Precio"
        keyboardType="numeric"
      />
      <TextInput
        style={[layout.input, layout.textArea, typography.input]}
        value={instrumento.descripcion}
        onChangeText={(text) => setInstrumento({ ...instrumento, descripcion: text })}
        placeholder="Descripción"
        multiline
      />
      <Button title="Crear" onPress={handleCreate} />
    </View>
  )
}

