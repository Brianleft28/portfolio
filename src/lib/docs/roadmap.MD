# Roadmap del Proyecto: Portfolio (Estado Actual)

**Objetivo General:** Transformar el portfolio estático en una aplicación *full-stack* con una arquitectura de microservicios dockerizados.

---

## Arquitectura y Estrategia

El proyecto sigue un patrón de **arquitectura de microservicios dockerizados**, donde cada componente es un servicio independiente y autocontenido.

-   **Frontend (Cliente):** Un servicio SvelteKit cuya única responsabilidad es la interfaz de usuario. Es un cliente que consume datos de las APIs de backend.
-   **Backend (API Gateway / Microservicio):** Un servicio NestJS que actúa como nuestro primer microservicio: el "Servicio de Proyectos". Se encarga de la lógica de negocio, la conexión a la base de datos y de exponer una API REST.
-   **Base de Datos:** Un servicio de base de datos MySQL.
-   **Orquestación:** Todos los servicios (`frontend`, `api`, `db`) son dockerizados y gestionados a través de un único archivo `docker-compose.yml` en la raíz del monorepo, permitiendo levantar todo el entorno con un solo comando.

**Prioridades de Desarrollo:**
La estrategia es construir y validar cada componente de forma secuencial.

1.  **Prioridad #1: Refactorizar el Frontend (Fase 1).**
    *   **Razón:** Realizar una limpieza técnica crucial antes de introducir nuevas complejidades.

2.  **Prioridad #2: Construir el Backend (Fase 2).**
    *   **Razón:** El frontend no puede funcionar sin una API. Este es el siguiente paso bloqueante.

3.  **Prioridad #3: Conectar el Frontend al Backend (Fase 3 y 4).**
    *   **Razón:** Integrar los servicios para que funcionen como una aplicación cohesiva.

4.  **Prioridad #4: Automatizar el Despliegue (Fase 5).**
    *   **Razón:** El CI/CD se configura al final, una vez que la arquitectura completa funciona localmente.

---

## Fase 0: Limpieza y Consistencia (Completada)

_Objetivo: Eliminar "ruido" y deudas técnicas antes de construir._

- [ X ] **Tarea 1: Actualizar `README.md` (GitHub)**
- [ X ] **Tarea 2: Corregir SEO en `src/routes/+layout.svelte`**

---

## Fase 1: Refactor del Frontend (Modularización de Contenido)

_Objetivo: Mover el contenido hardcodeado desde `file-system.ts` a archivos `.md` individuales para mejorar la mantenibilidad._

- [ ] **Tarea 1: Crear Estructura de Contenido**
  - Crea la carpeta `src/lib/content/`.
  - Dentro, replica la estructura de carpetas de tus proyectos (ej. `src/lib/content/proyectos/sistema-elecciones/`).
  - **Razón:** Centralizar todo el contenido Markdown en una única carpeta dedicada mejora la organización y separa los datos (contenido) de la lógica de la aplicación (componentes).

- [ ] **Tarea 2: Extraer Contenido a Archivos `.md`**
  - Mueve el contenido de cada `content: '...'` en `file-system.ts` a su propio archivo `.md` en la nueva estructura. (ej. `welcome.md`, `LEEME.md`, `arquitectura-backend.md`).
  - **Razón:** Editar Markdown dentro de strings de TypeScript es ineficiente. Mover el contenido a archivos `.md` permite usar el resaltado de sintaxis y las herramientas del editor, además de reducir drásticamente el tamaño de `file-system.ts`.

- [ ] **Tarea 3: Actualizar `file-system.ts`**
  - Modifica el tipo `FileNode` para que incluya un campo opcional `path: string`.
  - Reemplaza las propiedades `content` con la nueva propiedad `path` que apunte al archivo `.md` correspondiente (ej. `path: '/src/lib/content/welcome.md'`).
  - **Razón:** La estructura de datos ya no necesita contener el texto, sino una referencia (un `path`) a la ubicación del archivo `.md` correspondiente.

- [ ] **Tarea 4: Cargar Contenido Dinámicamente**
  - Modifica el componente `FileViewer.svelte`.
  - En lugar de recibir el contenido directamente, deberá recibir el `path`.
  - Usa una importación dinámica de Vite (`import.meta.glob`) para leer el contenido del archivo `.md` correspondiente al `path` y renderizarlo.
  - **Razón:** El componente debe adaptarse para cargar el contenido de forma asíncrona desde el sistema de archivos cuando el usuario selecciona un archivo, en lugar de recibirlo como una prop estática.

---

## Fase 2: El Backend (Servicio con NestJS y TypeORM)

_Objetivo: Crear un servicio NestJS dockerizado que se conecte a una base de datos MySQL usando TypeORM y exponga una API para los proyectos._

- [ ] **Tarea 1: Crear el Proyecto NestJS y Dockerizar**
- [ ] **Tarea 2: Configurar la Conexión y la Entidad**
- [ ] **Tarea 3: Implementar el Endpoint de API en NestJS**
- [ ] **Tarea 4: Probar el Endpoint**

---

## Fase 3: El Frontend (Conectar SvelteKit a NestJS)

_Objetivo: Reemplazar la estructura de datos estática (`file-system.ts`) con datos reales de la API de NestJS._

- [ ] **Tarea 1: Cargar Datos en la Página Principal**
- [ ] **Tarea 2: Renderizar el Explorador de Archivos Dinámicamente**

---

## Fase 4: El Contenido (Mostrar los Proyectos)

_Objetivo: Crear la página que muestra el contenido de cada `README.md`._

- [ X ] **Tarea 1: Instalar y Configurar Librerías de Markdown**
  - **Hecho:** Se instaló `marked` y `highlight.js`.
- [ ] **Tarea 2: Crear la Ruta Dinámica de Contenido**
  - Crea el archivo: `src/routes/proyectos/[slug]/+page.svelte`.

---

## Fase 5: Despliegue (Actualizar CI/CD)

_Objetivo: Poner tu nueva aplicación *full-stack* en producción._

- [ ] **Tarea 1: Configurar Secrets de GitHub**
- [ ] **Tarea 2: Actualizar `Dockerfile`**
- [ ] **Tarea 3: Actualizar `ci.yml`**