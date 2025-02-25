import { StyleSheet } from "react-native"
import { colors } from "./colors"

export const layout = StyleSheet.create({
  // Estilos generales
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background2,
  },

  // Estilos inputs y formularios
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: colors.cardBackground,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: colors.cardBackground,
  },
  picker: {
    height: 50,
    fontSize: 14.5,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },

  // Estilos TypeHeader
  typeHeader: {
    height: 150,
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 8,
  },
  typeHeaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  // Estilos InstrumentoCard
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  // Estilos Button
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 4,
  },

  // Estilos para la vista principal
  section: {
    marginBottom: 24,
  },
  addButton: {
    marginTop: 16,
  },

  // Estilos para detalles del instrumento
  iconContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
})

