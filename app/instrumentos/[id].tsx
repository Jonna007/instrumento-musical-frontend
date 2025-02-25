"use client"

import { useState, useEffect } from "react"
import { View, TextInput, Alert, Platform } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import { getInstrumento } from "../../services/api"
import Button from "../../components/Button"
import InstrumentTypeIcon from "../../components/InstrumentTypeIcon"
import type { Instrument, InstrumentType } from "../../types/instrument"
import { useInstrumentos } from "../../context/InstrumentosContext"
import { Picker } from "@react-native-picker/picker"
import { INSTRUMENT_TYPES } from "../../types/instrument"
import { layout } from "../../styles/layout"
import { typography } from "../../styles/typography"
import { colors } from "../../styles/colors"

export default function InstrumentoDetalle() {
  const { id } = useLocalSearchParams()
  const router = useRouter()
  const { updateInstrumento, removeInstrumento } = useInstrumentos()
  const [instrumento, setInstrumento] = useState<Instrument>({
    id: 0,
    nombre: "",
    tipo: "cuerda",
    precio: 0,
    descripcion: "",
  })
  const [precioInput, setPrecioInput] = useState("")

  useEffect(() => {
    loadInstrumento()
  }, [])

  const loadInstrumento = async () => {
    try {
      const data = await getInstrumento(Number(id))
      setInstrumento(data)
      setPrecioInput(data.precio.toString())
    } catch (error) {
      console.error("Error al cargar el instrumento:", error)
      showAlert("Error", "No se pudo cargar el instrumento")
      router.back()
    }
  }

  const handleUpdate = async () => {
    try {
      const updatedInstrumento = {
        ...instrumento,
        precio: Number.parseFloat(precioInput) || 0,
      }
      await updateInstrumento(Number(id), updatedInstrumento)
      router.back()
    } catch (error) {
      console.error("Error al actualizar el instrumento:", error)
      showAlert("Error", "No se pudo actualizar el instrumento")
    }
  }

  const handleDelete = async () => {
    if (Platform.OS === "web") {
      if (window.confirm("¿Estás seguro de que quieres eliminar este instrumento?")) {
        try {
          await removeInstrumento(Number(id))
          router.back()
        } catch (error) {
          console.error("Error al eliminar el instrumento:", error)
          showAlert("Error", "No se pudo eliminar el instrumento")
        }
      }
    } else {
      Alert.alert("Confirmar eliminación", "¿Estás seguro de que quieres eliminar este instrumento?", [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: async () => {
            try {
              await removeInstrumento(Number(id))
              router.back()
            } catch (error) {
              console.error("Error al eliminar el instrumento:", error)
              showAlert("Error", "No se pudo eliminar el instrumento")
            }
          },
        },
      ])
    }
  }

  const showAlert = (title: string, message: string) => {
    if (Platform.OS === "web") {
      window.alert(`${title}: ${message}`)
    } else {
      Alert.alert(title, message)
    }
  }

  return (
    <View style={layout.container}>
      <View style={layout.iconContainer}>
        <InstrumentTypeIcon type={instrumento.tipo} size={48} />
      </View>
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
        value={precioInput}
        onChangeText={(text) => {
          const numericValue = text.replace(/[^0-9.]/g, "")
          setPrecioInput(numericValue)
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
      <Button title="Actualizar" onPress={handleUpdate} />
      <Button title="Eliminar" onPress={handleDelete} style={{ backgroundColor: colors.danger, marginTop: 16 }} />
    </View>
  )
}

