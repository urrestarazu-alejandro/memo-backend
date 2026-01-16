#!/bin/bash

# Script para solucionar problemas de permisos con Bundler
# Ejecutar con: bash fix-bundler.sh

set -e  # Exit on error

echo "🔧 Fix Bundler Permissions"
echo "=========================="
echo ""

# Configurar GEM_HOME
export GEM_HOME="$HOME/.gem"
export PATH="$HOME/.gem/bin:$PATH"

echo "📍 Limpiando instalación anterior..."
# Limpiar cualquier instalación parcial
rm -rf .bundle
rm -rf vendor/bundle

echo ""
echo "🔧 Configurando Bundler para instalar localmente..."
# Configurar Bundler para instalar en vendor/bundle (dentro del proyecto)
bundle config set --local path 'vendor/bundle'

echo ""
echo "📦 Instalando dependencias..."
bundle install

echo ""
echo "✅ ¡Arreglado!"
echo ""
echo "Para iniciar Jekyll, ejecuta:"
echo "  bash start-jekyll.sh"
echo ""
echo "O directamente:"
echo "  bundle exec jekyll serve --livereload"
echo ""
