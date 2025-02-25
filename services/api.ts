import { Platform } from "react-native"

// Función para obtener la URL base correcta
const getBaseUrl = () => {
  if (Platform.OS === "web") {
    return "http://localhost:3000"
  } else {
    // Para dispositivos móviles usando el túnel
    return "https://b7e6-191-100-97-148.ngrok-free.app"
  }
}

const API_URL = getBaseUrl()

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.message || "Ocurrió un error en la solicitud")
  }
  return response.json()
}

export async function getInstrumentos() {
  try {
    console.log("Intentando obtener instrumentos desde:", API_URL) // Para debugging
    const response = await fetch(`${API_URL}/instrumentos`)
    return handleResponse(response)
  } catch (error) {
    console.error("Error detallado en getInstrumentos:", error)
    throw error
  }
}

export async function getInstrumento(id: number) {
  const response = await fetch(`${API_URL}/instrumentos/${id}`)
  return handleResponse(response)
}

export async function createInstrumento(data: any) {
  const response = await fetch(`${API_URL}/instrumentos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  return handleResponse(response)
}

export async function updateInstrumento(id: number, data: any) {
  const response = await fetch(`${API_URL}/instrumentos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  return handleResponse(response)
}

export async function deleteInstrumento(id: number) {
  const response = await fetch(`${API_URL}/instrumentos/${id}`, {
    method: "DELETE",
  })
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.message || "Error al eliminar el instrumento")
  }
  return true
}

