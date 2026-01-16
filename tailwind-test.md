---
layout: page
title: Tailwind Test Page
use-tailwind: true
---

<div class="max-w-4xl mx-auto px-6 py-12">
  <h1 class="text-5xl font-bold text-primary mb-8">Tailwind CSS Test Page</h1>

  <div class="bg-industrial-panel border-2 border-industrial-frame rounded-lg p-8 mb-8">
    <h2 class="text-3xl font-serif text-secondary mb-4">Test Components</h2>
    <p class="text-industrial-text leading-relaxed mb-6">
      This is a test page to validate that Tailwind CSS is working correctly with the industrial dark mode theme.
    </p>

    <div class="flex gap-4 mb-6">
      <button class="bg-primary hover:bg-secondary text-black font-bold py-3 px-6 transition-colors uppercase text-sm tracking-wider">
        Primary Button
      </button>
      <button class="border-2 border-industrial-text px-8 py-3 font-bold text-white hover:bg-primary hover:text-black hover:border-primary transition-all uppercase tracking-widest text-sm">
        Secondary Button
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-industrial-frame border border-industrial-divider p-6">
        <h3 class="text-xl font-bold mb-2 text-white">Card 1</h3>
        <p class="text-industrial-text text-sm">This is a test card component.</p>
      </div>
      <div class="bg-industrial-frame border border-industrial-divider p-6">
        <h3 class="text-xl font-bold mb-2 text-white">Card 2</h3>
        <p class="text-industrial-text text-sm">Another test card component.</p>
      </div>
      <div class="bg-industrial-frame border border-industrial-divider p-6">
        <h3 class="text-xl font-bold mb-2 text-white">Card 3</h3>
        <p class="text-industrial-text text-sm">Third test card component.</p>
      </div>
    </div>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-bold mb-4 text-white font-serif">Typography Test</h2>
    <p class="text-lg mb-4 leading-[1.8] text-white">
      This is regular paragraph text using the display font (Inter). It should be readable and have proper line height.
    </p>
    <p class="font-mono text-sm text-industrial-text mb-4">
      This is monospace text using JetBrains Mono, typically used for code snippets or technical content.
    </p>
    <p class="font-serif text-xl italic text-secondary">
      This is serif text using Lora, perfect for elegant headings and emphasis.
    </p>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-bold mb-4 text-white font-serif">Material Icons Test</h2>
    <div class="flex gap-4 text-primary text-4xl">
      <span class="material-symbols-outlined">search</span>
      <span class="material-symbols-outlined">menu</span>
      <span class="material-symbols-outlined">close</span>
      <span class="material-symbols-outlined">arrow_back</span>
      <span class="material-symbols-outlined">arrow_forward</span>
      <span class="material-symbols-outlined">schedule</span>
    </div>
  </div>

  <div class="bg-industrial-dark border-t border-industrial-frame py-8 mt-12">
    <p class="text-center text-[10px] font-mono uppercase tracking-widest text-industrial-text">
      Tailwind integration test completed successfully
    </p>
  </div>
</div>
