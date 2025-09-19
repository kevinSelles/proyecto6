# Proyecto6. API REST Figuras y Tiendas

Este proyecto es un backend con JavaScript, usando librerías como Express, Mongoose, Dotenv y Nodemon, además de una base de datos con MongoDB Atlas. Permite manejar figuras de Dragon Ball y tiendas donde se venden.

## Endpoints de Figuras

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET    | /api/figuras | Trae todas las figuras |
| GET    | /api/figuras/:id | Trae figura por ID |
| GET    | /api/figuras/precio/:maxPrecio | Trae figuras por precio máximo |
| POST   | /api/figuras | Crea nueva figura |
| PUT    | /api/figuras/:id | Actualiza figura por ID |
| DELETE | /api/figuras/:id | Borra figura por ID |

## Endpoints de Tiendas

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET    | /api/tiendas | Trae todas las tiendas |
| GET    | /api/tiendas/:id | Trae tienda por ID |
| POST   | /api/tiendas | Crea nueva tienda |
| PUT    | /api/tiendas/:id | Actualiza tienda (nombre, dirección, abierta, figuras) |
| DELETE | /api/tiendas/:id | Borra tienda |
| PUT    | /api/tiendas/:id/figuras | Agrega o elimina figuras de la tienda, evitando duplicados |
