#!/bin/bash

# Script de setup para Jekyll con Ruby 2.6
# Ejecutar con: bash setup-jekyll.sh

set -e  # Exit on error

echo "🔧 Jekyll Setup Script"
echo "====================="
echo ""

# Verificar versión de Ruby
RUBY_VERSION=$(ruby --version)
echo "✓ Ruby detectado: $RUBY_VERSION"
echo ""

# Configurar GEM_HOME en el directorio de usuario
echo "📦 Configurando GEM_HOME..."
export GEM_HOME="$HOME/.gem"
export PATH="$HOME/.gem/bin:$PATH"

# Agregar a .zshrc si no existe
if ! grep -q "export GEM_HOME=" ~/.zshrc 2>/dev/null; then
    echo "" >> ~/.zshrc
    echo "# Jekyll/Ruby gems configuration" >> ~/.zshrc
    echo 'export GEM_HOME="$HOME/.gem"' >> ~/.zshrc
    echo 'export PATH="$HOME/.gem/bin:$PATH"' >> ~/.zshrc
    echo "✓ Variables agregadas a ~/.zshrc"
else
    echo "✓ Variables ya existen en ~/.zshrc"
fi

echo ""

# Verificar si bundler ya está instalado
if command -v bundle &> /dev/null; then
    BUNDLER_VERSION=$(bundle --version)
    echo "✓ Bundler ya instalado: $BUNDLER_VERSION"
else
    echo "📥 Instalando Bundler 2.4.22 (compatible con Ruby 2.6)..."
    gem install bundler -v 2.4.22
    echo "✓ Bundler instalado correctamente"
fi

echo ""

# Verificar si Jekyll ya está instalado
if command -v jekyll &> /dev/null; then
    JEKYLL_VERSION=$(jekyll --version)
    echo "✓ Jekyll ya instalado: $JEKYLL_VERSION"
else
    echo "📥 Instalando Jekyll..."
    gem install jekyll -v 4.3.3
    echo "✓ Jekyll instalado correctamente"
fi

echo ""

# Configurar Bundler para instalar en vendor/bundle (dentro del proyecto)
echo "🔧 Configurando Bundler..."
bundle config set --local path 'vendor/bundle'
echo "✓ Bundler configurado para instalar en vendor/bundle"

echo ""

# Instalar dependencias del proyecto
echo "📦 Instalando dependencias del proyecto..."
if [ -f "Gemfile" ]; then
    bundle install
    echo "✓ Dependencias instaladas correctamente"
else
    echo "⚠️  No se encontró Gemfile. Saltando bundle install."
fi

echo ""
echo "✅ Setup completado!"
echo ""
echo "Para iniciar el servidor Jekyll, ejecuta:"
echo "  bundle exec jekyll serve --livereload"
echo ""
echo "O simplemente:"
echo "  ./start-jekyll.sh"
echo ""
