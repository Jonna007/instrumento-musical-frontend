import { InstrumentosProvider } from "../context/InstrumentosContext"
import { Stack } from "expo-router"
import { typography } from "../styles/typography"
import { colors } from "../styles/colors"

export default function Layout() {
  return (
    <InstrumentosProvider>
      <Stack
        screenOptions={{
          headerTitleAlign: "center",
          headerTitleStyle: typography.screenTitle,
          headerStyle: { backgroundColor: colors.backgroundPrincipalTitle },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "INSTRUMENTOS MUSICALES",
          }}
        />
        <Stack.Screen
          name="instrumentos/[id]"
          options={{
            title: "Detalle del Instrumento",
          }}
        />
        <Stack.Screen
          name="instrumentos/nuevo"
          options={{
            title: "Nuevo Instrumento",
          }}
        />
      </Stack>
    </InstrumentosProvider>
  )
}

