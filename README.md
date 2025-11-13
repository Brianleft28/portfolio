# Portfolio v2 - Brian Benegas

Un portfolio interactivo con temática de explorador de archivos, diseñado para demostrar habilidades full-stack. El frontend está construido con **SvelteKit** y el backend (en desarrollo) utilizará **Nest.js** para servir el contenido desde una base de datos autogestionada.

### Stack Tecnológico

![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

---

## 🎯 Arquitectura del Sistema (Full-Stack)

Este proyecto está diseñado como una aplicación desacoplada:

1.  **Frontend (Este Repositorio):**
    * Una aplicación **SvelteKit** que se ejecuta en el lado del cliente.
    * Es responsable de la interfaz de usuario (la temática de explorador de archivos).
    * Se conecta a un *endpoint* de API para obtener la lista de proyectos y el contenido.
    * Usa **Bootstrap (Bootswatch)** para los estilos.

2.  **Backend (API Separada - *Planeado*):**
    * Una API RESTful construida con **Nest.js**.
    * Esta API gestionará la lógica de negocio y se conectará a la base de datos.
    * Servirá los datos de los proyectos (nombres, slugs, contenido de markdown, etc.) al frontend de SvelteKit.

3.  **Infraestructura (VPS Autogestionado):**
    * Tanto la API de Nest.js como la base de datos **MySQL** residen en un VPS privado.
    * El frontend de SvelteKit (este proyecto) se despliega usando **Docker** y se sirve a través de un *reverse proxy*.
    * El pipeline de CI/CD en `.github/workflows/ci.yml` automatiza el despliegue en este VPS.



---

## 🗺️ Roadmap del Proyecto

Para ver un desglose detallado de las tareas, objetivos y el estado actual del desarrollo, consulta el roadmap oficial del proyecto.

**[Ver el Roadmap del Proyecto](./src/lib/docs/roadmap.MD)**

---

## 🚀 Características

-   **Soporte Multilingüe**: Disponible en español (predeterminado) e inglés. El idioma se guarda en las cookies.
-   **Diseño Responsivo**: Optimizado para todos los tamaños de dispositivos.
-   **Optimizado para SEO**: Meta etiquetas, `sitemap.xml` y `robots.txt` para mejor visibilidad.
-   **Containerizado**: Configuración Docker para despliegues consistentes.
-   **Pipeline CI/CD**: Construcción y despliegue automatizado con GitHub Actions.

## 🛠️ Tecnologías Utilizadas

-   **Framework Frontend**: [SvelteKit](https://kit.svelte.dev/) / [Svelte 5](https://svelte.dev/)
-   **API Backend (Planeado)**: [Nest.js](https://nestjs.com/)
-   **Base de Datos (Planeado)**: [MySQL](https://www.mysql.com/)
-   **Estilos**: [Bootstrap (Bootswatch)](https://bootswatch.com/)
-   **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
-   **Containerización**: [Docker](https://www.docker.com/)
-   **CI/CD**: [GitHub Actions](https://github.com/features/actions)
-   **Despliegue**: Servidor Node.js usando `@sveltejs/adapter-node`

## 📁 Estructura del Proyecto

.
├── .github/
│   └── workflows/
│       └── ci.yml
├── .svelte-kit/
│   └── (Archivos generados por SvelteKit)
├── src/
│   ├── lib/
│   │   ├── docs/
│   │   └── img/
│   ├── routes/
│   │   ├── +layout.svelte
│   │   └── +page.svelte
│   ├── app.css
│   ├── app.d.ts
│   ├── app.html
│   └── hooks.server.ts
├── static/
│   ├── css/
│   │   └── bootstrap.min.css
│   ├── js/
│   ├── robots.txt
│   └── sitemap.xml
├── .gitignore
├── .npmrc
├── .prettierignore
├── .prettierrc
├── Dockerfile
├── package.json
├── README.md
├── svelte.config.js
├── tsconfig.json
└── vite.config.ts

## 🏃‍♂️ Primeros Pasos

### Requisitos Previos

-   Node.js (versión LTS)
-   npm o pnpm
-   (Opcional) Docker

### Instalación

1.  Clonar el repositorio:
    ```bash
    git clone [https://github.com/Brianleft28/portfolio_sveltekit.git](https://github.com/Brianleft28/portfolio_sveltekit.git)
    cd portfolio_sveltekit
    ```

2.  Instalar dependencias:
    ```bash
    npm install
    ```

3.  Iniciar el servidor de desarrollo:
    ```bash
    npm run dev
    ```

4.  Abrir el navegador y navegar a `http://localhost:5173`

## 🔧 Scripts

-   `npm run dev` - Iniciar servidor de desarrollo
-   `npm run build` - Construir para producción
-   `npm run preview` - Vista previa de la build de producción localmente
-   `npm run check` - Verificar tipos en el proyecto
-   `npm run format` - Formatear código con Prettier
-   `npm run lint` - Verificar formato del código

## 🐳 Docker

El proyecto incluye un Dockerfile multi-etapa para builds de producción optimizadas:

1.  Construir la imagen Docker:
    ```bash
    docker build -t portfolio-sveltekit .
    ```

2.  Ejecutar el contenedor:
    ```bash
    docker run -p 3000:3000 portfolio-sveltekit
    ```

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT.

## 👤 Autor

**Brian Benegas**

-   Sitio web: [brianleft.com](https://portfolio.brianleft.com)
-   GitHub: [Brianleft28](https://github.com/Brianleft28)
-   LinkedIn: [Brian Benegas](https://www.linkedin.com/in/brian-benegas-44770729b/)