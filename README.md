# Memorias de un Backend

> By [Alejandro Urrestarazu](https://www.linkedin.com/in/urrestarazualejandro/) &middot; [Demo](https://memobackend.com.ar/)

## Descripción

**Memorias de un Backend** es un blog técnico y biblioteca de conocimientos sobre desarrollo de software backend en español. El objetivo es proporcionar contenido actualizado y de calidad sobre principios de diseño, patrones de arquitectura y buenas prácticas en el desarrollo backend.

Dado que hay escasez de contenido actualizado en español sobre estos temas, este sitio busca ser un punto de referencia para desarrolladores de habla hispana.

### Temas Principales

- **Principios SOLID**: Los 5 principios fundamentales del diseño orientado a objetos
- **Patrones de Diseño**: Gang of Four y combinaciones de patrones
- **Arquitectura de Software**: Estilos arquitectónicos, casos de uso
- **Clean Code**: Objetos inmutables, modelos anémicos vs enriquecidos
- **Buenas Prácticas**: TDD, BDD, pre/post condiciones

La organización del contenido utiliza etiquetas (tags) para relacionar publicaciones sobre temas similares, facilitando la navegación y exploración de conceptos relacionados.

## Tecnologías

- **[Jekyll](https://jekyllrb.com/)** - Generador de sitios estáticos basado en Ruby
- **Markdown** - Formato de contenido para posts y páginas
- **[Beautiful Jekyll](https://github.com/daattali/beautiful-jekyll)** - Template base por Dean Attali
- **Kramdown** - Motor de procesamiento Markdown
- **Rouge** - Syntax highlighter para código
- **Disqus** - Sistema de comentarios
- **Google Analytics** - Analíticas web

## Requisitos Previos

Para ejecutar este proyecto localmente necesitas:

- **Ruby** (versión 2.7 o superior)
- **Bundler** (gestor de gemas de Ruby)
- **Jekyll** (se instala vía Bundler)

### Instalación de Ruby

**macOS:**
```bash
# Usando Homebrew
brew install ruby
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get install ruby-full
```

**Windows:**
Descarga e instala desde [RubyInstaller](https://rubyinstaller.org/)

### Instalación de Bundler

```bash
gem install bundler
```

## Ejecución Local

### 1. Clonar el repositorio

```bash
git clone https://github.com/urrestarazu-alejandro/memo-backend.git
cd memo-backend
```

### 2. Instalar dependencias

```bash
bundle install
```

### 3. Ejecutar el servidor de desarrollo

```bash
bundle exec jekyll serve
```

El sitio estará disponible en `http://localhost:4000`

### Comandos adicionales

```bash
# Servir con drafts visibles
bundle exec jekyll serve --drafts

# Servir con auto-reload (por defecto activado)
bundle exec jekyll serve --livereload

# Build del sitio (genera _site/)
bundle exec jekyll build

# Limpiar archivos generados
bundle exec jekyll clean
```

## Estructura del Proyecto

```
memo-backend/
├── _config.yml           # Configuración principal de Jekyll
├── _data/                # Datos estructurados (YAML/JSON)
├── _includes/            # Componentes reutilizables (HTML parciales)
├── _layouts/             # Plantillas de página
├── _posts/               # Artículos del blog (YYYY-MM-DD-titulo.md)
├── _site/                # Sitio generado (no editar)
├── assets/               # Recursos estáticos
│   ├── css/              # Estilos personalizados
│   ├── img/              # Imágenes
│   └── js/               # JavaScript
├── pages/                # Páginas estáticas
│   ├── solid.md          # Principios SOLID
│   ├── bibliografia.md   # Referencias
│   └── mapamental.md     # Mapa mental de conceptos
├── aboutme.md            # Acerca de mí
├── index.html            # Página principal
├── tags.html             # Página de etiquetas
├── Gemfile               # Dependencias Ruby
└── README.md             # Este archivo
```

## Crear Nuevo Contenido

### Nuevo Post

1. Crear archivo en `_posts/` con formato: `YYYY-MM-DD-titulo.md`
2. Agregar front matter:

```yaml
---
layout: post
title: Título del Post
subtitle: Subtítulo descriptivo
thumbnail-img: /assets/img/posts/nombre-imagen.png
tags: [tag1, tag2, tag3]
comments: true
author: Alejandro Urrestarazu
---
```

3. Escribir contenido en Markdown
4. Probar localmente con `bundle exec jekyll serve`

### Nueva Página

1. Crear archivo `.md` en `pages/`
2. Agregar front matter con `layout: page`
3. Actualizar navegación en `_config.yml` si es necesario

## Convenciones de Estilo

El sitio utiliza cajas especiales para destacar información:

```markdown
{: .box-success}
Texto destacado en caja verde

{: .box-warning}
Texto de advertencia en caja amarilla

{: .box-error}
Texto de error en caja roja
```

## Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'feat: descripción'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Soporte

Si estás en Argentina y quieres apoyar mi trabajo para seguir generando contenido, puedes invitarme un [Cafecito](https://cafecito.app/urrestarazu).

## Enlaces

- **Sitio web**: [https://memobackend.com.ar/](https://memobackend.com.ar/)
- **GitHub**: [https://github.com/urrestarazu-alejandro/memo-backend](https://github.com/urrestarazu-alejandro/memo-backend)
- **LinkedIn**: [Alejandro Urrestarazu](https://www.linkedin.com/in/urrestarazualejandro/)

## Licencia

Este proyecto está basado en el template [Beautiful Jekyll](https://github.com/daattali/beautiful-jekyll) por Dean Attali.

---

Hecho con ❤️ para la comunidad de desarrolladores backend en español.
