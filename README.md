# Aplicación de Instrumentos Musicales

Esta aplicación permite gestionar un catálogo de instrumentos musicales. Está compuesta por un backend desarrollado en NestJS y un frontend en Expo/React Native.

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (normalmente viene con Node.js)
- Expo CLI (`npm install -g expo-cli`)
- Un cliente de base de datos PostgreSQL (por ejemplo, Neon)

## Configuración del Backend (NestJS)

1. Navega al directorio del backend:
   \`\`\`
   cd backend
   \`\`\`

2. Instala las dependencias:
   \`\`\`
   npm install
   \`\`\`

3. Configura las variables de entorno:
   - Crea un archivo \`.env\` en la raíz del directorio backend.
   - Añade la URL de conexión a tu base de datos PostgreSQL:
     \`\`\`
     DATABASE_URL="postgresql://usuario:contraseña@host:puerto/nombre_base_datos"
     \`\`\`

4. Ejecuta las migraciones de la base de datos:
   \`\`\`
   npx prisma migrate dev
   \`\`\`

5. Inicia el servidor de desarrollo:
   \`\`\`
   npm run start:dev
   \`\`\`

El backend estará disponible en \`http://localhost:3000\`.

## Configuración del Frontend (Expo/React Native)

1. Navega al directorio del frontend:
   \`\`\`
   cd frontend
   \`\`\`

2. Instala las dependencias:
   \`\`\`
   npm install
   \`\`\`

3. Configura la URL del backend:
   - Abre el archivo \`services/api.ts\`.
   - Asegúrate de que la URL base apunte a tu servidor backend:
     \`\`\`javascript
     const API_URL = "http://localhost:3000";
     \`\`\`

4. Inicia la aplicación:
   \`\`\`
   npx expo start
   \`\`\`

5. Usa la aplicación Expo Go en tu dispositivo móvil para escanear el código QR que aparece en la terminal, o presiona 'w' para abrir la versión web.

## Uso de la Aplicación

- La página principal muestra una lista de instrumentos musicales organizados por tipo.
- Puedes agregar nuevos instrumentos haciendo clic en el botón "Agregar Instrumento".
- Para ver los detalles de un instrumento o editarlo, haz clic en la tarjeta del instrumento.
- Para eliminar un instrumento, ve a la página de detalles y usa el botón "Eliminar".

## Documentación API

La documentación de la API está disponible a través de Swagger UI. Puedes acceder a ella navegando a \`http://localhost:3000/api\` cuando el servidor backend esté en ejecución.

