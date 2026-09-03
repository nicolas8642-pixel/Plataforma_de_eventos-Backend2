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

## Base de datos

Este proyecto requiere una instancia de MongoDB corriendo. Para levantarla localmente:

\`\`\`bash
mongod --dbpath C:\data\db
\`\`\`

Asegurate de tener creada la carpeta de datos (`C:\data\db` o la que definas) y de que la URL en tu `.env` coincida con el puerto en el que corre MongoDB (por defecto, `27017`).

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


## Probar el registro de usuarios

Endpoint: `POST /api/sessions/register`

Campos esperados en el body (JSON):

| Campo        | Tipo   | Obligatorio |
|--------------|--------|-------------|
| `first_name` | string | Sí          |
| `last_name`  | string | Sí          |
| `email`      | string | Sí          |
| `password`   | string | Sí (mínimo 8 caracteres) |

Ejemplo de request:

\`\`\`json
{
  "first_name": "Ana",
  "last_name": "Perez",
  "email": "ana@mail.com",
  "password": "secreta123"
}
\`\`\`

Respuesta exitosa (`201`): devuelve el usuario creado, sin incluir la contraseña.

Posibles errores: `400` (campos faltantes o formato inválido) y `409` (email ya registrado).
