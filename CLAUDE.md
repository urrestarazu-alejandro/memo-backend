# CLAUDE.md - Memorias de un Backend

## Descripción del Proyecto

**Memo Backend** es un blog/sitio web estático sobre desarrollo de software backend en español, creado por Alejandro Urrestarazu. El proyecto está construido con Jekyll y sirve como biblioteca de conocimientos sobre principios de desarrollo backend, patrones de diseño y arquitectura de software.

- **URL**: https://memobackend.com.ar/
- **Repositorio**: https://github.com/urrestarazu-alejandro/memo-backend
- **Template base**: Beautiful Jekyll por Dean Attali
- **Idioma principal**: Español

## Tecnologías

- **Jekyll** (v4.x): Generador de sitios estáticos basado en Ruby
- **Markdown**: Formato de contenido para posts y páginas
- **Kramdown**: Motor de procesamiento Markdown
- **Rouge**: Syntax highlighter
- **Disqus**: Sistema de comentarios
- **Google Analytics**: Analíticas web (gtag: G-G4VYTYZNY0)

## Estructura del Proyecto

```
memo-backend/
├── _config.yml           # Configuración principal de Jekyll
├── _data/                # Datos estructurados (YAML/JSON)
├── _includes/            # Componentes reutilizables (HTML parciales)
├── _layouts/             # Plantillas de página (post, page, default, etc.)
├── _posts/               # Artículos del blog (formato: YYYY-MM-DD-titulo.md)
├── _site/                # Sitio generado (no editar, en .gitignore)
├── assets/               # Recursos estáticos
│   ├── css/              # Estilos personalizados
│   ├── img/              # Imágenes (incluye posts/)
│   └── js/               # JavaScript
├── pages/                # Páginas estáticas
│   ├── solid.md          # Introducción a principios SOLID
│   ├── bibliografia.md   # Referencias y bibliografía
│   ├── mapamental.md     # Mapa mental de conceptos
│   ├── tutorial/         # Tutoriales
│   └── draft/            # Borradores
├── aboutme.md            # Página "Acerca de mí"
├── index.html            # Página principal (feed de posts)
├── tags.html             # Página de etiquetas
├── Gemfile               # Dependencias Ruby
└── README.md             # Documentación del proyecto
```

## Convenciones de Código

### Formato de Posts

Todos los posts en `_posts/` deben seguir esta estructura:

**Nomenclatura de archivo:**
```
YYYY-MM-DD-titulo-del-post.md
```

**Front Matter (YAML obligatorio):**
```yaml
---
layout: post
title: Título del Post
subtitle: Subtítulo descriptivo (opcional)
thumbnail-img: /assets/img/posts/nombre-imagen.png
tags: [tag1, tag2, tag3]
comments: true
author: Alejandro Urrestarazu
footer-extra: cafecito.html  # Opcional
---
```

**Contenido:**
- Usar Markdown (Kramdown)
- Imágenes en `/assets/img/posts/`
- Sintaxis para cajas de información:
  ```markdown
  {: .box-success}
  Texto destacado en caja verde

  {: .box-warning}
  Texto de advertencia en caja amarilla

  {: .box-error}
  Texto de error en caja roja
  ```

### Tags Comunes

Los tags se usan para relacionar artículos. Tags frecuentes:
- `solid`, `SRP`, `OCP`, `LSP`, `ISP`, `DIP` (principios SOLID)
- `patrones-diseño`, `design-patterns`
- `arquitectura-software`
- `java`, `backend`
- `clean-code`, `refactoring`

### Páginas Estáticas

Las páginas en `pages/` usan:
```yaml
---
layout: page
title: Título de la Página
---
```

## Comandos Útiles

### Desarrollo Local
```bash
# Instalar dependencias
bundle install

# Servir el sitio localmente (con auto-reload)
bundle exec jekyll serve

# Servir con drafts visibles
bundle exec jekyll serve --drafts

# Build del sitio (genera _site/)
bundle exec jekyll build
```

### Git
```bash
# Ver estado
git status

# Commit
git add .
git commit -m "feat: descripción del cambio"

# Push
git push origin master
```

## Flujo de Trabajo para Nuevo Contenido

### Crear un Nuevo Post

1. Crear archivo en `_posts/` con formato: `YYYY-MM-DD-titulo.md`
2. Agregar front matter completo
3. Escribir contenido en Markdown
4. Agregar imágenes a `/assets/img/posts/` si es necesario
5. Probar localmente con `bundle exec jekyll serve`
6. Commit y push a master

### Crear una Nueva Página

1. Crear archivo `.md` en `pages/`
2. Agregar front matter con `layout: page`
3. Actualizar navegación en `_config.yml` si es necesario:
   ```yaml
   navbar-links:
     Nombre: "pages/archivo"
   ```

## Configuración Importante

### _config.yml

Configuraciones clave que NO deben modificarse sin revisar:
- `url-pretty`: "memobackend.com.ar"
- `timezone`: "America/Argentina/Cordoba"
- `permalink`: "/:year-:month-:day-:title/"
- `disqus`: ID de comentarios
- `gtag`: ID de Google Analytics

### Navegación

La barra de navegación se define en `_config.yml`:
```yaml
navbar-links:
  Acerca de mí: "aboutme"
  Recursos:
    - Principios SOLID: "pages/solid"
    - Mapa mental: "pages/mapamental"
    - Bibliografía: "pages/bibliografia"
```

## Contenido Temático

### Temas Principales

El sitio cubre principalmente:
1. **Principios SOLID**: Los 5 principios fundamentales del diseño orientado a objetos
2. **Patrones de Diseño**: Gang of Four y combinaciones de patrones
3. **Arquitectura de Software**: Estilos arquitectónicos, casos de uso
4. **Clean Code**: Objetos inmutables, modelos anémicos vs enriquecidos
5. **Buenas Prácticas**: TDD, BDD, pre/post condiciones

### Recursos Clave

- **Mapa Mental**: Visualización de conceptos interconectados (usa Mermaid)
- **Bibliografía**: Referencias y libros recomendados
- **SOLID**: Página índice con enlaces a todos los principios

## Notas para Claude

### Al Crear Nuevo Contenido

- Mantener el estilo técnico pero accesible en español
- Usar ejemplos de código cuando sea relevante
- Incluir imágenes ilustrativas (generalmente en `/assets/img/posts/`)
- Agregar tags apropiados para relacionar con otros posts
- Mantener consistencia con el tono editorial existente

### Al Modificar Configuración

- Revisar que los cambios en `_config.yml` no rompan la navegación
- Probar localmente antes de hacer commit
- No modificar configuraciones de analytics o comentarios sin consultar

### Al Trabajar con Git

- Branch principal: `master`
- Commits en español preferentemente
- Usar prefijos convencionales: `feat:`, `fix:`, `chore:`, `docs:`

### Archivos que NO Modificar

- `_site/`: Generado automáticamente, ignorado en git
- `beautiful-jekyll-theme.gemspec`: Configuración del tema base
- `.jekyll-cache/`: Caché de Jekyll
- `Gemfile.lock`: Gestionado automáticamente por Bundler

## Enlaces Útiles

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Beautiful Jekyll Theme](https://github.com/daattali/beautiful-jekyll)
- [Kramdown Syntax](https://kramdown.gettalong.org/syntax.html)
- [Mermaid Diagrams](https://mermaid.js.org/) (usado para mapas mentales)

## Soporte

- **Cafecito** (donaciones Argentina): https://cafecito.app/urrestarazu
- **LinkedIn**: https://www.linkedin.com/in/urrestarazualejandro/
- **GitHub**: https://github.com/urrestarazu-alejandro
