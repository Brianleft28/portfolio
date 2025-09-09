# Portfolio - Brian Benegas

Un sitio web de portfolio moderno y responsivo construido con SvelteKit, que muestra proyectos y habilidades de desarrollo de software. El sitio cuenta con soporte para múltiples idiomas, personalización de temas y un diseño limpio y accesible.

## 🚀 Características

- **Soporte Multilingüe**: Disponible en español, inglés, francés, alemán y japonés
- **Personalización de Temas**: Múltiples temas claros y oscuros usando DaisyUI
- **Diseño Responsivo**: Optimizado para todos los tamaños de dispositivos con diseños dedicados para móvil y escritorio
- **Optimizado para SEO**: Meta etiquetas, sitemap y robots.txt para mejor visibilidad en motores de búsqueda
- **Containerizado**: Configuración Docker para despliegues consistentes
- **Pipeline CI/CD**: Construcción y despliegue automatizado con GitHub Actions

## 🛠️ Tecnologías Utilizadas

- **Framework Frontend**: [SvelteKit](https://kit.svelte.dev/) / [Svelte 5](https://svelte.dev/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) con componentes de [DaisyUI](https://daisyui.com/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Containerización**: [Docker](https://www.docker.com/)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions)
- **Despliegue**: Servidor Node.js usando `@sveltejs/adapter-node`

## 📁 Estructura del Proyecto

```
portfolio/
├── .github/workflows/     # Configuración de CI/CD para GitHub Actions
├── src/                   # Código fuente
│   ├── app.css            # CSS global
│   ├── app.html           # Plantilla HTML
│   ├── hooks.server.ts    # Hooks del lado del servidor
│   ├── lib/               # Código de biblioteca
│   │   ├── components/    # Componentes UI
│   │   │   └── navbar/    # Componentes de navegación
│   │   ├── stores/        # Stores de Svelte
│   │   ├── types/         # Definiciones de tipos TypeScript
│   │   └── utils/         # Funciones y componentes utilitarios
│   └── routes/            # Páginas y layouts de SvelteKit
├── static/                # Activos estáticos
│   ├── favicon.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── social-preview.png
├── Dockerfile             # Configuración de Docker
├── package.json           # Dependencias y scripts
├── svelte.config.js       # Configuración de SvelteKit
├── tailwind.config.js     # Configuración de Tailwind CSS
└── vite.config.ts         # Configuración de Vite
```

## 🏃‍♂️ Primeros Pasos

### Requisitos Previos

- Node.js (versión LTS)
- npm o pnpm

### Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/tuusuario/portfolio.git
cd portfolio
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

4. Abrir el navegador y navegar a `http://localhost:5173`

## 🔧 Scripts

- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de la build de producción localmente
- `npm run check` - Verificar tipos en el proyecto
- `npm run format` - Formatear código con Prettier
- `npm run lint` - Verificar formato del código

## 🐳 Docker

El proyecto incluye un Dockerfile multi-etapa para builds de producción optimizadas:

1. Construir la imagen Docker:

```bash
docker build -t portfolio-sveltekit .
```

2. Ejecutar el contenedor:

```bash
docker run -p 3000:3000 portfolio-sveltekit
```

## 🚢 Despliegue

El proyecto utiliza GitHub Actions para CI/CD:

1. Cuando se envía código a la rama `main`, el flujo de trabajo:

    - Construye la imagen Docker
    - La sube a Docker Hub
    - Despliega en un VPS via SSH

2. Secretos requeridos para GitHub Actions:
    - `DOCKERHUB_USERNAME`
    - `DOCKERHUB_TOKEN`
    - `VPS_HOST`
    - `VPS_USER`
    - `VPS_SSH_PRIVATE_KEY`

## 🌐 Internacionalización

El sitio soporta múltiples idiomas con un selector de idioma fácil de usar:

- Español (ES) - Predeterminado
- Inglés (EN)
- Francés (FR)
- Alemán (DE)
- Japonés (JP)

La configuración del idioma se almacena en una cookie y se aplica en todo el sitio.

## 🎨 Personalización de Temas

Múltiples temas están disponibles a través de DaisyUI:

- **Temas claros**: light, cupcake, bumblebee, emerald, corporate, garden, lofi, lemonade, valentine, winter, retro, cyberpunk
- **Temas oscuros**: dark, synthwave, halloween, forest, black, luxury, dracula, night, coffee, abyss, dim, aqua

Las preferencias de tema se guardan en localStorage.

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.

## 👤 Autor

**Brian Benegas**

- Sitio web: [brianleft.com](https://brianleft.com)
- GitHub: [Brianleft28](https://github.com/Brianleft28)
- LinkedIn: [Brian Benegas](https://www.linkedin.com/in/brian-benegas-44770729b/)
