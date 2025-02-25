export type InstrumentType = "cuerda" | "viento" | "percusion" | "teclado"

export interface Instrument {
  id: number
  nombre: string
  tipo: InstrumentType
  precio: number
  descripcion: string
}

export const INSTRUMENT_TYPES: Record<InstrumentType, { name: string; image: any }> = {
  cuerda: {
    name: "Instrumentos de Cuerda",
    image: require("../assets/guitarra.png"),
  },
  viento: {
    name: "Instrumentos de Viento",
    image: require("../assets/trompeta.png"),
  },
  percusion: {
    name: "Instrumentos de Percusión",
    image: require("../assets/percusion.png"),
  },
  teclado: {
    name: "Instrumentos de Teclado",
    image: require("../assets/piano.png"),
  },
}

