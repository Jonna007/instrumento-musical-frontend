import { StyleSheet } from "react-native"
import { colors } from "./colors"

export const typography = StyleSheet.create({
  // Estilos generales
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.text,
  },
  body: {
    fontSize: 16,
    color: colors.text,
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
  },

  // Estilos inputs
  input: {
    fontSize: 16,
    color: colors.text,
  },

  // Estilos TypeHeader
  typeHeaderTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

  // Estilos InstrumentoCard
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginLeft: 8,
  },
  cardSubtitle: {
    fontSize: 14,
    color: colors.secondaryText,
    marginBottom: 4,
    textTransform: "capitalize",
    marginInlineStart: 33,
  },
  cardPrice: {
    fontSize: 16,
    color: colors.text,
    fontWeight: "bold",
    textAlign: "right",
  },

  // Estilos Button
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
})

