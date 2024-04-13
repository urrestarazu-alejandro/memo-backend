---
layout: post
title: Principio de responsabilidad única
subtitle: Un módulo debe tener una sola razón para cambiar.
#gh-repo: daattali/beautiful-jekyll
#gh-badge: [star, fork, follow]
tags: [solid]
#comments: true
#mathjax: true
author: Alejandro Urrestarazu
---

## SRP

Aunque la idea de mis blogs es crear contenido en Español, como el acrónimo SOLID está en idioma inglés es necesario nombrarlo en su idiama de origen **Single Responsibility Principle** para que la **S** tenga sentido.

Una frase que resume de que se trata este principio y que van a ver hasta el cansancio es:

{: .box-success} 
Un módulo debe tener una sola razón para cambiar.

Si un módulo tiene más de una razon para cambiar nos indica que tiene más de una responsabilidad. Todos los módulos con más de una responsabilidad deben dividirse en bloques más pequeños donde cada uno tiene una sola responsabilidad y motivo para cambiar.

Aunque uno puede pensar que esta definición es equivalente a decir que un módulo hace solamente una cosa, esto es erróneo y en relidad ese concepto corresponde con la definición de función y no al principio de responsabilidad única.

### ¿Que es un módulo?

Una forma simple de pensarlo es que un módulo es un archivo fuente, pero solo aplica a los lenguajes compilados. Por lo que una definición más acertada es:

{: .box-success} 
un módulo es solo un conjunto cohesivo de funciones y estructuras de datos.
