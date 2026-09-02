# Plataforma de Eventos e Inscripciones — Inscripciones a Torneos

API REST para la gestión de eventos e inscripciones, con temática orientada a la inscripción de participantes en torneos. Este repositorio corresponde a la Pre-entrega 1 de Backend II, cuyo objetivo es establecer la base arquitectónica del proyecto: un servidor Express organizado por capas, listo para escalar en las próximas entregas (autenticación, roles, gestión completa de eventos y control de cupos).

## Tecnologías

- Node.js
- Express.js
- Mongoose (ODM para MongoDB)
- dotenv

## Instalación

Clonar el repositorio e instalar las dependencias:

\`\`\`bash
git clone https://github.com/<nicolas8642-pixel>/plataforma-eventos-backend2.git
cd plataforma-eventos-backend2
npm install
\`\`\`

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto a partir de `.env.example`:

\`\`\`bash
cp .env.example .env
\`\`\`

Variables disponibles:

| Variable      | Descripción                                  |
|---------------|-----------------------------------------------|
| `PORT`        | Puerto en el que corre el servidor            |
| `NODE_ENV`    | Entorno de ejecución (development/production) |
| `MONGO_URL`   | Cadena de conexión a MongoDB (aún sin uso)    |
| `JWT_SECRET`  | Clave para firmar tokens JWT (aún sin uso)    |

## Cómo ejecutar

\`\`\`bash
npm start
\`\`\`

El servidor va a levantar en `http://localhost:3000` (o el puerto definido en `.env`).

## Estructura de carpetas

\`\`\`
src/
├── app.js              # Configura Express (no levanta el servidor)
├── server.js            # Levanta el servidor
├── config/               # Configuración del proyecto
├── routes/               # Definición de rutas
├── controllers/          # Manejo de request/response
├── services/             # Lógica de negocio
├── repositories/         # Acceso a datos (capa intermedia)
├── dao/                  # Acceso directo a la base de datos
├── models/                # Esquemas de Mongoose (User, Event)
├── middlewares/           # Funciones intermedias (auth, validaciones, etc.)
└── utils/                 # Funciones de utilidad
\`\`\`

## Rutas disponibles

| Método | Ruta            | Descripción                                  |
|--------|-----------------|-----------------------------------------------|
| GET    | `/api/health`   | Verifica que el servidor esté activo          |
| GET    | `/api/events`   | Lista de eventos (vacía por ahora)            |
| GET    | `/api/sessions` | Estructura inicial de sesiones (sin lógica de auth aún) |

## Estado del proyecto

