# Aplicación de Gestión de Empleados

## Descripción

Esta es una aplicación web para la gestión de empleados, desarrollada con **React** en el frontend y **.NET** en el backend. La aplicación permite listar, agregar, editar y eliminar empleados, además de contar con autenticación basada en **JWT** y un sidebar para la navegación.

---

## Tecnologías Utilizadas

### Frontend:

- React
- React Router
- Bootstrap
- Font Awesome

### Backend:

- .NET (ASP.NET Core)
- JWT para autenticación

---

## Instalación y Configuración

### 1. Clonar el repositorio

```bash
    git clone https://github.com/Simoncarlosv/Simon-Vega
    cd repositorio
```

### 3. Configurar el Frontend (React)

1. Navega al directorio del frontend:
   ```bash
   cd frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el frontend:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en el link mostrado en la consola.

---

## Uso de la Aplicación

### 1. Registro e Inicio de Sesión

- Ingresa credenciales válidas (username: admin / password: admin).
- Al iniciar sesión, el usuario recibe un token JWT que se almacena en el localStorage.

### 2. Gestión de Empleados

- **Listar Empleados**: La página principal que se mostrará será la del listado de empleados (`/employees`).
- **Agregar Empleado**: Se puede agregar un nuevo empleado desde el formulario en `/employees/add` al cual podremos llegar a través del botón bajo el listado de empleados como también desde el menú lateral.
- **Editar Empleado**: Se puede editar un empleado desde `/employees/edit/:id` al apretar el botón editar dependiendo de cual empleado queramos modificar.
- **Eliminar Empleado**: Se puede eliminar un empleado desde la lista por medio del botón que cada empleado en el campo de la tabla llamado acciones.

---

## Pruebas

### 1. Backend

- Para probar el backend, puedes usar Postman, Thunder Client, o cURL.
- Algunos endpoints clave:
  - `POST /api/auth/login`: Iniciar sesión.
  - `GET /api/employees`: Obtener lista de empleados.
  - `POST /api/employees`: Agregar un empleado.
  - `PUT /api/employees/{id}`: Editar un empleado.
  - `DELETE /api/employees/{id}`: Eliminar un empleado.

### 2. Frontend

- Ejecutas el comando "npm run dev" y te diriges a la dirección que ahí te aparecerá.
- Prueba la navegación y funcionalidad de la aplicación.

---

## Diseño y Decisiones

La aplicación web la hice con un diseño sobrio, enfocándome principalmente en el propósito de uso, además de el tipo de personas que podrían llegar a utilizarla. Cuenta con un sistema de navegación a partir de un menú lateral donde nos muestra las opciones de Inicio e iniciar sesión en un comienzo, un contenedor al su lado derecho donde se mostrará la información correspondiente a la cual se quiera navega, y un footer simple debajo del todo.

Usé una paleta de colores minimalista para los fondos, para hacer resaltar más la información, tanto del menú como del contenedor principal.

Al ingresar (login) con el usuario ya registrado en la base de datos (username: admin / password: admin), podremos ver que la barra lateral cambia su contenido por medio de un estado creado para el usuario al inciar sesión, y así podremos ver otras opciones en el menú que solo podrán visualizarse al obtener un token (el cual se almacena en el localStorage para poder manejar la navegación e interactuar de manera adecuada con la API). A partir de aquí ya podremos visualizar desde el comienzo el "listado de empleados" donde al mismo tiempo se podrá ejecutar acciones directas como la de "Editar" o "Eliminar" un empleado registrado, además debajo de la tabla con el listado, dispondremos de un botón con color azul para "Agregar nuevo Empleado", el cual llevará a un formulario que se debe rellenar con los datos solicitados (Nombre, Departamento y Correo Electrónico), y al ingresar uno nuevo, nos llevará directamente a verlo al listado. Todo este tipo de navegación es centrado en la persona que quiere ver los cambios en el momento en que los ejecuta, es decir, al editar un empleado, haremos los cambios por medio del formulario que se mostrará, y al guardarlos, nos mostrará que los cambios ya fueron registrado y están modificados en el listado, al mismo tiempo que cuando uno quiera agregar un nuevo empleado o eliminarlo, esto se verá reflejado al instante en el listado de empleados.

En el contenedor principal, se dispondrá la información dentro de una caja con un borde que resalte la información y con un fondo que aumente el contraste con la imagen utilizada de fondo, con el fin de no generar un problema de visualización de los elementos.

---

## Autor

**Simón Vega** - [GitHub](https://github.com/Simoncarlosv)

