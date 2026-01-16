# Testing Tailwind Migration Locally

Este documento explica cómo probar localmente la migración de Bootstrap a Tailwind CSS que hemos implementado hasta ahora.

## Estado Actual de la Implementación

✅ **FASE 1 Completada:** Fundación Tailwind
✅ **FASE 2 Completada:** Componentes Críticos (nav, footer, header)

**Sistema Dual:** El sitio ahora soporta ambos sistemas (Bootstrap y Tailwind) de manera condicional usando el flag `use-tailwind: true` en el front matter.

---

## Requisitos Previos

### 1. Verificar que tengas Ruby y Jekyll instalados

```bash
ruby --version
# Debe ser >= 2.5.0

gem --version

jekyll --version
# Debe ser >= 3.8
```

### 2. Si no tienes Jekyll instalado

#### Opción A: Si tienes Ruby 3.2+ (recomendado)

```bash
gem install bundler jekyll
```

#### Opción B: Si tienes Ruby 2.6 (como en este proyecto)

Ruby 2.6 no es compatible con Bundler 4.x. Instala versiones específicas:

```bash
# Instalar bundler compatible con Ruby 2.6
gem install bundler -v 2.4.22 --user-install

# O si tienes problemas de permisos:
export GEM_HOME="$HOME/.gem"
export PATH="$HOME/.gem/bin:$PATH"
gem install bundler -v 2.4.22
gem install jekyll -v 4.3.3
```

#### Opción C: Actualizar Ruby (mejor solución a largo plazo)

Si quieres actualizar Ruby a una versión más reciente:

```bash
# Con Homebrew en Mac
brew install ruby

# O con rbenv (recomendado para desarrollo)
brew install rbenv ruby-build
rbenv install 3.3.0
rbenv global 3.3.0
echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc
source ~/.zshrc
```

---

## Pasos para Probar Localmente

### 1. Navegar al directorio del proyecto

```bash
cd /Users/ale/repositorios/memo-backend
```

### 2. Instalar dependencias (si es necesario)

Si existe un archivo `Gemfile` en el proyecto:

```bash
bundle install
```

Si no existe, Jekyll puede funcionar sin Bundler para sitios simples.

### 3. Iniciar el servidor local de Jekyll

```bash
jekyll serve
```

O con Bundler:

```bash
bundle exec jekyll serve
```

**Opciones útiles:**

```bash
# Con live reload (recarga automática al hacer cambios)
jekyll serve --livereload

# Con drafts visible
jekyll serve --drafts

# En un puerto diferente
jekyll serve --port 4001

# Ver cambios en archivos de configuración
jekyll serve --livereload --force_polling
```

### 4. Acceder al sitio en tu navegador

Una vez iniciado el servidor, verás un mensaje como:

```
Server address: http://127.0.0.1:4000/
Server running... press ctrl-c to stop.
```

Abre tu navegador en: **http://localhost:4000**

---

## Qué Probar

### 1. Página de Test de Tailwind

**URL:** http://localhost:4000/tailwind-test.html

Esta página está configurada con `use-tailwind: true` y muestra:
- ✅ Colores industriales (#ff9800 primario, #454546 dark bg)
- ✅ Typography con Inter, JetBrains Mono, Lora
- ✅ Material Symbols icons
- ✅ Botones con hover states
- ✅ Cards responsive grid
- ✅ Dark mode activado

**Qué verificar:**
- [ ] Los colores se ven correctamente (naranja primario, fondos oscuros)
- [ ] Las fuentes cargan correctamente (Inter, JetBrains Mono, Lora)
- [ ] Los iconos de Material Symbols se muestran
- [ ] El fondo es oscuro (dark mode)
- [ ] Los botones cambian de color al hacer hover
- [ ] El grid de cards es responsive (cambia a 1, 2 o 3 columnas según el ancho)

### 2. Navegación (Nav) con Tailwind

**Elementos a verificar:**

- [ ] **Sticky navigation:** La nav se queda fija arriba al hacer scroll
- [ ] **Glass-morphism:** Fondo semi-transparente con blur
- [ ] **Logo/Title:** Se muestra correctamente
- [ ] **Avatar:** Si está configurado en `_config.yml`, debe aparecer
- [ ] **Desktop menu:** Links visibles en pantalla grande (>768px)
- [ ] **Dropdown menus:** Menús desplegables funcionan al hacer hover (desktop)
- [ ] **Mobile menu:** Hamburger menu aparece en móvil (<768px)
- [ ] **Mobile toggle:** Al hacer click abre/cierra el menú con animación
- [ ] **Search icon:** Material Symbol "search" visible
- [ ] **Hover states:** Links cambian a color naranja al hacer hover

**Cómo probar responsive:**
- Abre DevTools (F12 o Cmd+Option+I en Mac)
- Click en el ícono de responsive mode (📱)
- Prueba diferentes tamaños: iPhone SE (375px), iPad (768px), Desktop (1280px)

### 3. Footer con Tailwind

**Elementos a verificar:**

- [ ] **Fondo oscuro:** Background #1a1a1a (industrial-dark)
- [ ] **Social icons SVG:** GitHub, LinkedIn, Twitter, Instagram (si están configurados)
- [ ] **LinkedIn button:** Botón "Seguime en LinkedIn" con SVG inline
- [ ] **Cafecito button:** Si está en la página (home.html), debe verse
- [ ] **Copyright info:** Texto centrado con fuente monospace
- [ ] **Hover states:** Icons cambian a color naranja al hacer hover
- [ ] **Responsive:** En móvil se apilan verticalmente, en desktop horizontalmente

### 4. Páginas Existentes (Bootstrap)

**URL:** http://localhost:4000 (home page sin flag `use-tailwind`)

**Verificar que NO se rompió nada:**
- [ ] La home page se ve normal (Bootstrap activo)
- [ ] La navegación funciona (Bootstrap navbar)
- [ ] El footer se ve normal (Beautiful Jekyll footer)
- [ ] Los posts existentes funcionan
- [ ] No hay errores en la consola del navegador

---

## Comparación Visual

### Página con Bootstrap (Existente)
```
Colores: Grayscale (#333, #595, #F2F2F2)
Fuentes: Lora + Open Sans
Icons: Font Awesome
Navbar: Bootstrap navbar-light
Background: Claro/gris
```

### Página con Tailwind (Nueva)
```
Colores: Industrial (#ff9800, #454546, #ffc340)
Fuentes: Inter + JetBrains Mono + Lora
Icons: Material Symbols Outlined
Navbar: Glass-morphism sticky
Background: Dark (#454546)
```

---

## Troubleshooting

### Problema: Jekyll no inicia

**Error:** `command not found: jekyll`

**Solución:**
```bash
gem install jekyll bundler
```

### Problema: Error de permisos al instalar gems

**Error:** `You don't have write permissions for the /Library/Ruby/Gems/2.6.0 directory`

**Causa:** Estás intentando instalar en el Ruby del sistema (requiere sudo, no recomendado)

**Solución 1 - Instalar en directorio de usuario:**
```bash
# Configurar gem home en tu directorio personal
export GEM_HOME="$HOME/.gem"
export PATH="$HOME/.gem/bin:$PATH"

# Agregar a .zshrc para que sea permanente
echo 'export GEM_HOME="$HOME/.gem"' >> ~/.zshrc
echo 'export PATH="$HOME/.gem/bin:$PATH"' >> ~/.zshrc

# Instalar bundler
gem install bundler -v 2.4.22
```

**Solución 2 - Usar --user-install:**
```bash
gem install bundler -v 2.4.22 --user-install
```

### Problema: Bundler requiere Ruby >= 3.2.0

**Error:** `bundler requires Ruby version >= 3.2.0. The current ruby version is 2.6.10.210`

**Solución - Instalar versión compatible:**
```bash
# Bundler 2.4.22 es la última versión compatible con Ruby 2.6
gem install bundler -v 2.4.22 --user-install
```

### Problema: Error de permisos en bundle install

**Error:** `There was an error while trying to write to /Library/Ruby/Gems/2.6.0/cache/...`

**Causa:** Bundler está intentando instalar en el Ruby del sistema en lugar de tu directorio personal.

**Solución Automática:**
```bash
bash fix-bundler.sh
```

**Solución Manual:**
```bash
# 1. Limpiar intentos anteriores
rm -rf .bundle vendor/bundle

# 2. Configurar Bundler para instalar localmente (en el proyecto)
bundle config set --local path 'vendor/bundle'

# 3. Instalar dependencias
bundle install

# Esto creará un directorio vendor/bundle dentro del proyecto
# con todas las gemas necesarias
```

**Explicación:**
- `vendor/bundle` es una carpeta local dentro de tu proyecto
- No requiere permisos de administrador
- Cada proyecto puede tener sus propias versiones de gemas
- Es la forma recomendada de trabajar con Bundler

### Problema: Conflictos de dependencias

**Error:** `Bundler could not find compatible versions...`

**Solución:**
```bash
bundle update
bundle install
```

### Problema: Los cambios no se reflejan

**Solución:**
1. Detén el servidor (Ctrl+C)
2. Borra el cache:
   ```bash
   rm -rf _site .jekyll-cache
   ```
3. Reinicia:
   ```bash
   jekyll serve --livereload
   ```

### Problema: Tailwind no carga en la página de test

**Verificar:**
1. El front matter tiene `use-tailwind: true`
2. Abre DevTools → Network tab
3. Busca `cdn.tailwindcss.com` - debe cargar sin errores (status 200)
4. Verifica la consola del navegador por errores

### Problema: Material Icons no aparecen

**Verificar:**
1. DevTools → Network → busca `fonts.googleapis.com/css2?family=Material+Symbols`
2. Debe tener status 200
3. Revisa la consola por CORS errors
4. Prueba recargando con Cmd+Shift+R (hard refresh)

### Problema: Alpine.js no funciona (mobile menu no abre)

**Verificar:**
1. DevTools → Console → busca errores de Alpine.js
2. Network tab → busca `alpinejs@3.x.x/dist/cdn.min.js` (status 200)
3. En consola escribe `Alpine` - debe mostrar un objeto

### Problema: El sitio se ve roto en general

**Causa probable:** Conflicto entre Bootstrap y Tailwind

**Verificar:**
1. ¿La página tiene `use-tailwind: true` en el front matter?
2. Si tiene el flag, NO debe cargar Bootstrap CSS
3. DevTools → Network → no debe haber `bootstrap.min.css` cargando
4. Si ambos CSS cargan, hay un problema en los condicionales de `base.html`

---

## Archivos Modificados en Esta Migración

### Nuevos Archivos (Tailwind)
```
_includes/tailwind-head.html          # Config Tailwind inline
_includes/tailwind-fonts.html         # Google Fonts
_includes/material-icons.html         # Material Symbols
_includes/nav-tailwind.html           # Nav con glass-morphism
_includes/footer-tailwind.html        # Footer dark con SVG
_includes/header-tailwind.html        # Header posts con metadata
tailwind-test.md                      # Página de test
```

### Archivos Modificados
```
_includes/head.html                   # + Condicional Tailwind includes
_layouts/base.html                    # + Condicionales Bootstrap vs Tailwind
```

### Archivos Sin Modificar (Intactos)
```
_includes/nav.html                    # Nav Bootstrap (original)
_includes/footer.html                 # Footer Bootstrap (original)
_includes/header.html                 # Header Bootstrap (original)
_layouts/home.html                    # Home layout (original)
_layouts/post.html                    # Post layout (original)
... todos los demás layouts Bootstrap
```

---

## Cómo Activar Tailwind en una Página Existente

Para convertir cualquier página existente a Tailwind, simplemente agrega en el front matter:

```yaml
---
layout: page
title: Mi Página
use-tailwind: true    # ← Agregar esta línea
---
```

**Nota:** Algunas páginas pueden necesitar ajustes de layout. Los layouts actuales (home, post, page) aún usan Bootstrap containers. Estos se migrarán en la FASE 3.

---

## Comandos Útiles de Jekyll

```bash
# Ver versión
jekyll --version

# Limpiar cache y _site
jekyll clean

# Build sin servir
jekyll build

# Servir con verbose output
jekyll serve --verbose

# Servir con drafts
jekyll serve --drafts

# Servir con live reload
jekyll serve --livereload

# Servir en puerto custom
jekyll serve --port 4001

# Ver configuración
jekyll doctor
```

---

## DevTools Tips

### Ver clases Tailwind aplicadas

1. Abre DevTools (F12)
2. Click en el selector de elemento (📍)
3. Haz click en cualquier elemento
4. En el panel Elements, verás todas las clases Tailwind aplicadas
5. Ejemplo: `class="bg-industrial-bg text-white transition-colors duration-300"`

### Debugging responsive

1. DevTools → Toggle device toolbar (Cmd+Shift+M)
2. Selecciona dispositivo: iPhone, iPad, etc.
3. O ingresa dimensiones custom
4. Verifica breakpoints de Tailwind:
   - sm: 640px (mobile)
   - md: 768px (tablet)
   - lg: 1024px (laptop)
   - xl: 1280px (desktop)

### Ver network requests

1. DevTools → Network tab
2. Recarga la página
3. Filtra por:
   - `tailwind` - debe cargar desde CDN
   - `material` - debe cargar Material Symbols
   - `alpinejs` - debe cargar Alpine.js
4. Todos deben tener status 200 (verde)

---

## Próximos Pasos (No Implementados Aún)

Las siguientes fases están **pendientes**:

- **FASE 3:** Migrar layouts (base_particle, minimal, default, page, post, home)
- **FASE 4:** Crear tailwind-custom.css con @layer directives
- **FASE 5:** Completar social-networks-links-tailwind.html con todos los SVG
- **FASE 6:** Crear tailwind-site.js para interactividad custom

---

## Reportar Problemas

Si encuentras bugs o problemas durante el testing, documenta:

1. **URL afectada:** http://localhost:4000/...
2. **Navegador y versión:** Chrome 120, Safari 17, etc.
3. **Descripción del problema:** Qué esperabas vs qué pasó
4. **Screenshot:** Si es visual
5. **Console errors:** Abre DevTools → Console, copia errores
6. **Network errors:** DevTools → Network, requests fallidos (rojo)

---

## Checklist de Testing Completo

### ✅ FASE 1 & 2 - Fundación y Componentes

- [ ] Tailwind CDN carga correctamente
- [ ] Google Fonts (Inter, JetBrains Mono, Lora) cargan
- [ ] Material Symbols Outlined carga
- [ ] Alpine.js CDN carga
- [ ] Dark mode está activado (fondo oscuro)
- [ ] Colores industriales se aplican correctamente
- [ ] Nav sticky funciona
- [ ] Nav glass-morphism visible (blur en fondo)
- [ ] Nav responsive (hamburger en móvil)
- [ ] Mobile menu toggle abre/cierra con animación
- [ ] Dropdown menus funcionan (desktop)
- [ ] Footer con fondo oscuro
- [ ] Social icons SVG renderizan
- [ ] LinkedIn button funcional
- [ ] Hover states funcionan (naranja)
- [ ] Footer responsive (stack en móvil)
- [ ] Página test Tailwind renderiza correctamente
- [ ] Páginas Bootstrap existentes NO se rompieron
- [ ] No hay conflictos CSS entre Bootstrap y Tailwind
- [ ] No hay errores en console del navegador

### 🔄 Próximas Fases (Pendiente)

- [ ] FASE 3: Layouts migrados a Tailwind
- [ ] FASE 4: tailwind-custom.css creado
- [ ] FASE 5: Todos los social icons con SVG
- [ ] FASE 6: tailwind-site.js con interactividad

---

## Contacto

Si necesitas ayuda o tienes preguntas sobre la migración, consulta el plan completo en:
`/Users/ale/.claude/plans/nifty-wiggling-castle.md`

---

**Happy Testing! 🚀**
