# Quick Start - Testing Tailwind Migration

## Opción 1: Setup Automático (Recomendado) 🚀

Ejecuta el script de setup una sola vez:

```bash
cd /Users/ale/repositorios/memo-backend
bash setup-jekyll.sh
```

Este script:
- ✅ Configura GEM_HOME en tu directorio personal
- ✅ Instala Bundler 2.4.22 (compatible con Ruby 2.6)
- ✅ Instala Jekyll 4.3.3
- ✅ Instala todas las dependencias del proyecto
- ✅ Agrega configuración a tu ~/.zshrc

Luego inicia el servidor:

```bash
bash start-jekyll.sh
```

O simplemente:

```bash
./start-jekyll.sh
```

## Opción 2: Setup Manual 🔧

Si prefieres hacerlo paso a paso:

```bash
# 1. Configurar GEM_HOME
export GEM_HOME="$HOME/.gem"
export PATH="$HOME/.gem/bin:$PATH"

# 2. Instalar Bundler compatible con Ruby 2.6
gem install bundler -v 2.4.22

# 3. Instalar dependencias
bundle install

# 4. Iniciar servidor
bundle exec jekyll serve --livereload
```

## URLs para Testing

Una vez iniciado el servidor:

- **Home (Bootstrap):** http://localhost:4000
- **Test Tailwind:** http://localhost:4000/tailwind-test.html

## Qué Verificar

### ✅ Página Test Tailwind

- [ ] Fondo oscuro (#454546)
- [ ] Color primario naranja (#ff9800)
- [ ] Navegación sticky con glass-morphism
- [ ] Footer oscuro con SVG icons
- [ ] Material Symbols icons visibles
- [ ] Hover states (naranja)
- [ ] Grid responsive (1→2→3 columnas)

### ✅ Navegación

- [ ] Desktop: Links visibles, dropdowns funcionan
- [ ] Mobile: Hamburger menu abre/cierra
- [ ] Sticky: Se queda fija al hacer scroll

### ✅ Footer

- [ ] Social icons (GitHub, LinkedIn, Twitter, Instagram)
- [ ] LinkedIn button con SVG
- [ ] Responsive (stack en móvil)

### ✅ Páginas Bootstrap (No Rompidas)

- [ ] Home funciona normal
- [ ] Posts funcionan
- [ ] No hay errores en console

## Troubleshooting Rápido

### Error: Permisos al hacer bundle install

**Error:** `There was an error while trying to write to /Library/Ruby/Gems/2.6.0/...`

**Solución automática:**
```bash
bash fix-bundler.sh
```

**Solución manual:**
```bash
# Limpiar instalación anterior
rm -rf .bundle vendor/bundle

# Configurar Bundler para instalar localmente
bundle config set --local path 'vendor/bundle'

# Instalar
bundle install
```

### Error: "command not found: bundle"

```bash
export GEM_HOME="$HOME/.gem"
export PATH="$HOME/.gem/bin:$PATH"
gem install bundler -v 2.4.22
```

### Error: "Could not locate Gemfile"

Verifica que estés en el directorio correcto:

```bash
cd /Users/ale/repositorios/memo-backend
pwd
# Debe mostrar: /Users/ale/repositorios/memo-backend
```

### Error: Tailwind no carga

Verifica que la página tenga en el front matter:

```yaml
---
layout: page
title: Test
use-tailwind: true  # ← Esta línea es crucial
---
```

### El servidor no actualiza cambios

Hard refresh: Cmd + Shift + R (Mac) o Ctrl + Shift + R (Windows/Linux)

## Documentación Completa

Para más detalles, ver:
- `docs/TESTING_TAILWIND_MIGRATION.md` - Guía completa de testing
- `/Users/ale/.claude/plans/nifty-wiggling-castle.md` - Plan completo de migración

## Ayuda

Si sigues teniendo problemas:

1. Revisa la consola del navegador (F12 → Console)
2. Revisa la terminal donde corre Jekyll por errores
3. Consulta la sección Troubleshooting en `docs/TESTING_TAILWIND_MIGRATION.md`

---

**Happy Testing! 🎉**
