#!/bin/bash

# Script para iniciar Jekyll con configuración correcta
# Ejecutar con: bash start-jekyll.sh

set -e  # Exit on error

# Configurar GEM_HOME
export GEM_HOME="$HOME/.gem"
export PATH="$HOME/.gem/bin:$PATH"

echo "🚀 Iniciando Jekyll server..."
echo ""
echo "📍 URL: http://localhost:4000"
echo "📄 Página de test Tailwind: http://localhost:4000/tailwind-test.html"
echo ""
echo "Presiona Ctrl+C para detener el servidor"
echo ""

# Iniciar Jekyll con livereload
bundle exec jekyll serve --livereload
