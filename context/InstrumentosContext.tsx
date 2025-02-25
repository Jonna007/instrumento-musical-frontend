"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect, useCallback } from "react"
import { getInstrumentos, createInstrumento, updateInstrumento, deleteInstrumento } from "../services/api"
import type { Instrument } from "../types/instrument"
import { Alert, Platform } from "react-native"

interface InstrumentosContextType {
  instrumentos: Instrument[]
  loadInstrumentos: () => Promise<void>
  addInstrumento: (instrumento: Omit<Instrument, "id">) => Promise<void>
  updateInstrumento: (id: number, instrumento: Partial<Instrument>) => Promise<void>
  removeInstrumento: (id: number) => Promise<void>
}

const InstrumentosContext = createContext<InstrumentosContextType | undefined>(undefined)

export const useInstrumentos = () => {
  const context = useContext(InstrumentosContext)
  if (!context) {
    throw new Error("useInstrumentos must be used within an InstrumentosProvider")
  }
  return context
}

export const InstrumentosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [instrumentos, setInstrumentos] = useState<Instrument[]>([])

  const showAlert = useCallback((title: string, message: string) => {
    if (Platform.OS === "web") {
      window.alert(`${title}: ${message}`)
    } else {
      Alert.alert(title, message)
    }
  }, [])

  const loadInstrumentos = useCallback(async () => {
    try {
      const data = await getInstrumentos()
      setInstrumentos(data)
    } catch (error) {
      console.error("Error al cargar instrumentos:", error)
      showAlert("Error", "No se pudieron cargar los instrumentos")
    }
  }, [showAlert])

  const addInstrumento = async (instrumento: Omit<Instrument, "id">) => {
    try {
      const newInstrumento = await createInstrumento(instrumento)
      setInstrumentos((prev) => [...prev, newInstrumento])
      showAlert("Éxito", "Instrumento creado correctamente")
    } catch (error) {
      console.error("Error al crear el instrumento:", error)
      showAlert("Error", "No se pudo crear el instrumento")
    }
  }

  const updateInstrumentoContext = async (id: number, instrumento: Partial<Instrument>) => {
    try {
      const updatedInstrumento = await updateInstrumento(id, instrumento)
      setInstrumentos((prev) => prev.map((item) => (item.id === id ? updatedInstrumento : item)))
      showAlert("Éxito", "Instrumento actualizado correctamente")
    } catch (error) {
      console.error("Error al actualizar el instrumento:", error)
      showAlert("Error", "No se pudo actualizar el instrumento")
    }
  }

  const removeInstrumento = async (id: number) => {
    try {
      await deleteInstrumento(id)
      setInstrumentos((prev) => prev.filter((item) => item.id !== id))
      showAlert("Éxito", "Instrumento eliminado correctamente")
    } catch (error) {
      console.error("Error al eliminar el instrumento:", error)
      showAlert("Error", "No se pudo eliminar el instrumento")
      throw error 
    }
  }

  useEffect(() => {
    loadInstrumentos()
  }, [loadInstrumentos])

  return (
    <InstrumentosContext.Provider
      value={{
        instrumentos,
        loadInstrumentos,
        addInstrumento,
        updateInstrumento: updateInstrumentoContext,
        removeInstrumento,
      }}
    >
      {children}
    </InstrumentosContext.Provider>
  )
}

