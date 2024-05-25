---
layout: post
title: Patrones y estilos de software
subtitle: soluciones reutilizables
#gh-repo: daattali/beautiful-jekyll
#gh-badge: [star, fork, follow]
thumbnail-img: https://es.wikipedia.org/wiki/Dualidad_onda_corp%C3%BAsculo#/media/Archivo:Dualite.jpg
tags: [solid,DIP]
#comments: true
#mathjax: true
author: Alejandro Urrestarazu
---

## Patrones y estilos de software

Antes de meternos en el mundo del software me parece importante aclarar algunos conceptos. Existe un debate sobre estas deficiniciones, pero sin meternos en el podemos definir unas bases que son de utilidad para quienes están comenzando.


Existen tres conceptos referidos a la estructura y organización de un sistema de software que se diferencian en su enfoque y nivel de abstracción. Estos son:

* Patrones de diseño de software.
* Patrones arquitectónicos de software
* Estilos arquitectónicos de software

![SOLID ciudad inca perdida](/assets/img/Patrones-y-estilos-software.png){: .mx-auto.d-block :}


### Patrones de diseño de software

{: .box-success}
Un patrón de diseño es una forma canónica nombrada para una combinación de estructuras de software y procedimientos que han demostrado ser útiles a lo largo de los años.- Uncle bob

Tal como nos dice el tío Bob los patrones de diseño de software son _soluciones_ reutilizables a problemas recurrentes (No es necesario reinventar la rueda) a nivel de diseño pero más especificamente a **nivel de implementación de clases y objetos**.
Algunos ejemplos de patrones de diseño son Singleton, Factory y Observer.

### Patrones arquitectónicos de software

Los patrones arquitectónicos son son _soluciones_ ya que describen cómo implementar **estructuras a nivel de componenentes**.

Algunos ejemplos de patrones arquitectónicos son: Modelo-Vista-Controlador (MVC), Modelo-Vista-Presentador (MVP) o  View-Interactor-Presenter-Entity-Router (VIPER).

### Estilos Arquitectónicos de software

Los estilos arquitectónicos son configuraciones de alto nivel que definen la estructura global y las **relaciones e interacciones de componentes** en un sistema de software.
La funcion de los estilos arquitectónicos es proporcionar una base conceptual con principios fundamentales para el diseño de sistemas y ayudan a definir la organización general de un sistema de software.

Algunos de ejemplos de estilos arquitectónicos son: la arquitectura en capas (donde los componentes se organizan en capas horizontales), la arquitectura cliente-servidor (separando la funcionalidad en servidores que proveen servicios y clientes que los consumen) y la arquitectura dirigida por eventos (centrada en reaccionar a eventos).

