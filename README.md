# Proyecto6. API REST Figuras y Tiendas

Este proyecto es un backend con JavaScript, usando librerias como 
Express, Mongoose, Dotenv y Nodemon, además de una base de datos con MongoDB Atlas. 
Permite manejar figuras de Dragon Ball y tiendas donde se venden.

el fichero .env no ha sido incluido en el gitIgnore para permitir la corrección por parte
de los profesores.

## Endpoints de Figuras

- GET /api/figuras → Trae todas las figuras
- GET /api/figuras/:id → Trae figura por ID
- GET /api/figuras/precio/:maxPrecio → Trae figuras por precio máximo
- POST /api/figuras → Crea nueva figura
- PUT /api/figuras/:id → Actualiza figura por ID
- DELETE /api/figuras/:id → Borra figura por ID

## Endpoints de Tiendas

- GET /api/tiendas → Trae todas las tiendas
- GET /api/tiendas/:id → Trae tienda por ID
- POST /api/tiendas → Crea nueva tienda
- PUT /api/tiendas/:id → Actualiza tienda
- DELETE /api/tiendas/:id → Borra tienda
- PUT /api/tiendas/:id/agregar-figuras → Agrega figuras a la tienda sin borrar las que ya tiene y evitando duplicados
