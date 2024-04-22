---
layout: post
title: Principio de responsabilidad única
subtitle: Un módulo debe tener una sola razón para cambiar.
#thumbnail-img: /assets/img/posts/SOLID.png
tags: [solid,SRP]
comments: true
author: Alejandro Urrestarazu
---

## SRP: Single Responsibility Principle

Aunque la idea de mis blogs es crear contenido en Español, como el acrónimo SOLID está en idioma inglés es necesario nombrarlo en su idioma de origen **Single Responsibility Principle** para que la **S** tenga sentido.

Una frase que resume de que se trata este principio y que van a ver hasta el cansancio es:

{: .box-success} 
Un módulo debe tener una sola razón para cambiar.

Si un módulo tiene más de una razón para cambiar nos indica que tiene más de una responsabilidad. Todos los módulos con más de una responsabilidad deben dividirse en bloques más pequeños donde cada uno tiene una sola responsabilidad y motivo para cambiar.

Aunque uno puede pensar que esta definición es equivalente a decir que un módulo hace solamente una cosa, esto es erróneo y en relidad ese concepto corresponde con la definición de función y no al principio de responsabilidad única.

### ¿Que es un módulo?

Una forma simple de pensarlo es que un módulo es un archivo fuente, pero solo aplica a los lenguajes compilados. Por lo que una definición más acertada es:

{: .box-success} 
un módulo es un conjunto cohesivo de funciones y estructuras de datos.

Larry Constantine definió cohesion a finales de la decada de 1960 y podemos entender la cohesion como funcionalidades que tienen tanto en común que tiene sentido que esten en agrupadas en un mismo lugar.

### ¿Razón para cambiar?

La razón de ser de los sistemas informáticos es satisfacer a los usuarios y como probablemente haya un grupo de usuarios, es más correcto hablar de un "Actor". Entonces un módulo es responsable de satisfacer las necesidades de un único actor.

### Indicios de que estamos violando el principio

* Duplicación accidental: Por ejemplo cuando una clase tiene varios métodos, donde cada uno es responsable ante un actor diferente.

* Fusiones: Cuando varios desarrolladores tienen cambios que afecten al código fuente de una clase y son solicitados por diferentes actores pueden generar un choque el la lógica de la clase.

<!-- Ver como solucionarlo, revisar libro adaptive-code-agile -->
<!-- SRP and the Decorator pattern -->
<!-- The Composite pattern -->
<!-- Predicate decorators -->