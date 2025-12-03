# Roadmap del Proyecto: Portfolio (Estado Actual)

**Objetivo General:** Transformar el portfolio estático en una aplicación SvelteKit *full-stack* dinámica que cargue proyectos desde una base de datos MySQL.

---

## Fase 0: Limpieza y Consistencia (Tareas Inmediatas)

_Objetivo: Eliminar "ruido" y deudas técnicas antes de construir._

- [ X ] **Tarea 1: Actualizar `README.md` (GitHub)**
  - Reemplazar las menciones a "Tailwind CSS" y "DaisyUI".
  - Mencionar **Bootstrap (Bootswatch "Darkly" theme)** como el framework de UI actual.
- [ ] **Tarea 2: Corregir SEO en `src/routes/+layout.svelte`**
  - Eliminar la meta etiqueta `<meta name="keywords" ... />` completa. Es obsoleta y la etiqueta `description` ya es muy buena.

---

## Fase 1: El Backend (La Fuente de Datos)

_Objetivo: Crear la base de datos y el *endpoint* de API que alimentará tu portfolio._

- [ ] **Tarea 1: Diseñar la Tabla MySQL**
  - Conéctate a tu VPS y define la tabla `projects`.
  - **SQL Sugerido:**
    ```sql
    CREATE TABLE projects (
      id INT AUTO_INCREMENT PRIMARY KEY,
      slug VARCHAR(100) NOT NULL UNIQUE,
      name VARCHAR(100) NOT NULL,
      type ENUM('file', 'folder') NOT NULL,
      summary TEXT,
      markdown_path VARCHAR(255) NOT NULL,
      stack_tags VARCHAR(255) 
    );
    ```

- [ ] **Tarea 2: Crear el Endpoint de API**
  - Crea el archivo: `src/routes/api/projects/+server.ts`.
  - Escribe la lógica para conectar a tu MySQL (usando una librería como `mysql2`) y exponer los proyectos.
  - Implementa la función `GET` que haga un `SELECT * FROM projects` y devuelva los resultados como JSON.

- [ ] **Tarea 3: Probar el Endpoint**
  - Ejecuta la app localmente, accede a `http://localhost:5173/api/projects` y confirma que ves el JSON de tu base de datos.

---

## Fase 2: El Frontend (Dinamizar el Explorador)

_Objetivo: Reemplazar el explorador de archivos estático con datos reales de tu API._

- [ ] **Tarea 1: Cargar Datos en la Página**
  - Modifica el `<script>` de `src/routes/+page.svelte`.
  - Usa la función `load` de SvelteKit para hacer `fetch('/api/projects')` y pasar los proyectos como `data` a la página.

- [ ] **Tarea 2: Renderizar el Explorador**
  - En el `<div>` con clase `.file-explorer-nav`, elimina el contenido estático.
  - Usa un bloque `{#each data.projects as project}` para iterar sobre los proyectos.
  - Renderiza un enlace para cada uno: `<a href="/proyectos/{project.slug}">{project.name}</a>`.

---

## Fase 3: El Contenido (Mostrar los Proyectos)

_Objetivo: Crear la página que muestra el contenido de cada `README.md`._

- [ ] **Tarea 1: Instalar la Librería de Markdown**
  - `mdsvex` es el estándar en SvelteKit.
  - **Acción:** Ejecuta `npm install mdsvex`.
  - **Acción:** Configura `mdsvex` en tu archivo `svelte.config.js`.

- [ ] **Tarea 2: Crear la Ruta Dinámica de Contenido**
  - Crea el archivo: `src/routes/proyectos/[slug]/+page.svelte`.
  - Esta página recibirá el `slug` de la URL.

- [ ] **Tarea 3: Cargar y Renderizar el Markdown**
  - En el `<script>` de `[slug]/+page.svelte`, usa la lógica de SvelteKit para importar dinámicamente el archivo `.md` (que guardaste en `src/lib/docs/`) que corresponde al `slug`.
  - Renderiza el componente Markdown en la página.

- [ ] **Tarea 4: Estilizar el Contenido**
  - Añade estilos globales para `<h1>`, `<h2>`, `<code>`, `<pre>` para que el Markdown renderizado se vea bien. La clase `.file-content-area` ya tiene una buena base.

---

## Fase 4: Despliegue (Actualizar CI/CD)

_Objetivo: Poner tu nueva aplicación *full-stack* en producción._

- [ ] **Tarea 1: Configurar Secrets de GitHub**
  - Añade los *secrets* para la base de datos: `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`.

- [ ] **Tarea 2: Actualizar `Dockerfile`**
  - Asegúrate de que el `Dockerfile` expone las variables de entorno (ENV) que tu app necesita para conectarse a la BD.

- [ ] **Tarea 3: Actualizar `ci.yml`**
  - Modifica el *job* `deploy` para que pase las nuevas variables de entorno de la BD al comando `docker compose up` o al `docker run`.

---