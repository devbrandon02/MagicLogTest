# Prueba Técnica MagicLog

## Descripción  
Esta prueba técnica consistió en construir un marketplace básico para MagicLog con funcionalidades tanto en backend como en frontend, siguiendo historias de usuario definidas.  
La aplicación permite crear cuentas de vendedores, registrar productos con sus atributos, visualizar productos según el rol (vendedor, comprador o administrador) y buscar productos filtrando por criterios específicos.

## Historias de usuario cubiertas

- Crear cuenta de vendedor:  
  Se implementó un modal para registrar usuario con validación de correo, contraseña y confirmación. Se muestran errores cuando las contraseñas no coinciden o el usuario ya existe.  
- Registrar productos:  
  Vendedores autenticados pueden crear productos con nombre, SKU, cantidad y precio. Se validan todos los campos, devolviendo errores si falta alguno.  
- Visualizar productos propios:  
  Cada vendedor puede ver solo sus productos al autenticarse.  
- Buscar productos (comprador):  
  Se implementa búsqueda con filtros por nombre, SKU y rango de precio.  
- Visualizar productos para administrador:  
  El administrador puede listar todos los productos y filtrarlos por vendedor. Esta sección está protegida y requiere autenticación.

## Tecnologías utilizadas  

Backend:  
- NestJS con TypeScript  
- Prisma ORM con PostgreSQL  
- JWT y Passport para autenticación  

Frontend:  
- ReactJS con TypeScript  
- Redux para gestión de estado  

## Razón de las elecciones técnicas  
- NestJS era un requisito, y aproveché su estructura modular para separar la lógica de autenticación, productos y vendedores.  
- Prisma permite consultas tipadas y migraciones sencillas.  
- JWT con Passport brinda un método seguro y estándar para autenticación sin estado en backend.  
- React y Redux facilitan una UI responsiva y manejo eficiente de estado según rol de usuario.

## Estructura del proyecto  

Backend:  
- src/modules/auth/: Registro, login y estrategia JWT  
- src/modules/products/: Gestión de productos (creación y consulta)  
- src/modules/user/: Registro de vendedores  
- src/prisma/: Cliente Prisma y migraciones  
- src/main.ts: Punto de entrada principal  

Frontend:  
- src/components/: Componentes UI (modales, listas, formularios)  
- src/pages/: Vistas según rutas (login, dashboard, productos)  
- src/store/: Estado global y slices para usuarios y productos  
- src/services/: Comunicación con la API backend  
- src/App.tsx: Componente raíz  

## Instalación y ejecución  

Backend:  
1. Instalar dependencias:  
   npm install  
2. Configurar archivo `.env` con variables de conexión a PostgreSQL y JWT_SECRET.  
3. Ejecutar migraciones de Prisma:  
   npx prisma migrate dev  
4. Levantar el servidor:  
   npm run start:dev  

Frontend:  
1. Instalar dependencias:  
   npm install  
2. Ejecutar la aplicación:  
   npm start  

## Funcionalidades  

- Registro y autenticación de vendedores con validación.  
- Creación de productos con todos los campos obligatorios.  
- Visualización de productos según rol (vendedor, comprador, administrador).  
- Búsqueda y filtrado de productos.  
- UI responsiva y fácil de usar, con manejo claro de errores y mensajes.  

## Consideraciones y mejoras futuras   
- Mejorar control avanzado de roles y permisos.

## Despliegue  
La aplicación está desplegada en un servidor público https://magiclogfrontend.netlify.app/ para pruebas.
