---
layout: post
title: Patrones y estilos de software
subtitle: soluciones reutilizables
#thumbnail-img: https://es.wikipedia.org/wiki/Dualidad_onda_corp%C3%BAsculo#/media/Archivo:Dualite.jpg
tags: [Patrones de diseño,Patrones arquitectónicos,Estilos Arquitectónicos]
comments: true
author: Alejandro Urrestarazu
---

## Patrones y estilos de software

Antes de adentrarnos en el mundo del software, me parece importante clarificar algunos conceptos. Aunque existe un debate sobre estas definiciones, podemos establecer unas bases útiles para quienes están empezando.

Existen tres conceptos relacionados con la estructura y organización de un sistema de software que difieren en su enfoque y nivel de abstracción. Estos son:

* Patrones de diseño de software.
* Patrones arquitectónicos de software.
* Estilos arquitectónicos de software.

![SOLID ciudad inca perdida](/assets/img/Patrones-y-estilos-software.png){: .mx-auto.d-block :}


### Patrones de diseño de software

{: .box-success}
Un patrón de diseño es una forma canónica nombrada para una combinación de estructuras de software y procedimientos que han demostrado ser útiles a lo largo de los años.- Uncle bob

Tal como nos dice el tío Bob los patrones de diseño de software son _soluciones_ reutilizables a problemas recurrentes (No es necesario reinventar la rueda) a nivel de diseño pero más específicamente a **nivel de implementación de clases y objetos**.
Algunos ejemplos de patrones de diseño son **Singleton**, **Factory** y **Observer**.

### Patrones arquitectónicos de software

Los patrones arquitectónicos son son _soluciones_ ya que describen cómo implementar **estructuras a nivel de componentes**.

Algunos ejemplos de patrones arquitectónicos son: Modelo-Vista-Controlador (**MVC**), Modelo-Vista-Presentador (**MVP**) o  View-Interactor-Presenter-Entity-Router (**VIPER**).

### Estilos Arquitectónicos de software

Los estilos arquitectónicos son configuraciones de alto nivel que definen la estructura global y las **relaciones e interacciones de componentes** en un sistema de software.
La función de los estilos arquitectónicos es proporcionar una base conceptual con principios fundamentales para el diseño de sistemas y ayudan a definir la organización general de un sistema de software.

Algunos de ejemplos de estilos arquitectónicos son: la **arquitectura en capas** (donde los componentes se organizan en capas horizontales), la arquitectura **cliente-servidor** (separando la funcionalidad en servidores que proveen servicios y clientes que los consumen) y la **arquitectura dirigida por eventos** (centrada en reaccionar a eventos).
