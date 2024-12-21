---
layout: post
title: Patrones y estilos de software
subtitle: soluciones reutilizables
thumbnail-img: /assets/img/posts/plano-laberinto-dedalo512.png
tags: [Patrones de diseño,Patrones arquitectónicos,Estilos Arquitectónicos,C4]
comments: true
author: Alejandro Urrestarazu
---

## Patrones y estilos de software

![Plano arquitectura laberinto de dédalo](/assets/img/posts/plano-laberinto-dedalo512.png){: .mx-auto.d-block :}

Antes de adentrarnos en el mundo del software, me parece importante clarificar algunos conceptos. Aunque existe un debate sobre estas definiciones, podemos establecer unas bases útiles para quienes están empezando.

Existen tres conceptos relacionados con la estructura y organización de un sistema de software que difieren en su enfoque y nivel de abstracción. Estos son:

* Patrones de diseño de software.
* Patrones arquitectónicos de software.
* Estilos arquitectónicos de software.

![Patrones y estilos de software](/assets/img/Patrones-y-estilos-software.png){: .mx-auto.d-block :}


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

### Modelo C4

Para ayudarnos de manera gráfica en que ambito o contexto se usa cada concepto podemos ayudarnos del modelo C4.

![Modelo C4 y arquitecturas](/assets/img/Modelo-C4-Patrones.png){: .mx-auto.d-block :}

El **modelo C4** (Context, Containers, Components, and Code) para visualizar la arquitectura del software fue creado por Simon Brown. Es un marco enfocado en ayudar a los desarrolladores a describir y documentar diferentes niveles de abstracción en su arquitectura de software. Este modelo busca simplificar la comprensión de la arquitectura de un sistema de software para todos los interesados, sin importar su nivel técnico. 

Aquí se describen brevemente cada uno de los niveles:

1. **Contexto**: Este es el nivel más alto y muestra el sistema completo desde una perspectiva global. Aquí, el objetivo es mapear y explicar cómo el sistema de software interactúa con sus usuarios finales, otros sistemas y todos los servicios relacionados. Este diagrama ayuda a entender el entorno, las interacciones y las dependencias externas del sistema. Ejemplos de elementos que se suelen incluir son los usuarios (roles de usuario), los sistemas con los que se comunica, y las interacciones principales.

2. **Contenedores**: En este nivel se descompone el sistema en varios contenedores o módulos de alto nivel. Un contenedor podría ser, por ejemplo, una aplicación móvil, una aplicación web, un servidor de bases de datos, o incluso un sistema de archivos. 
Este nivel ayuda a los desarrolladores a visualizar la disposición general del sistema y las tecnologías asociadas a cada contenedor. Aquí la atención se centra en la responsabilidad de cada contenedor y cómo se comunican entre sí.

3. **Componentes**: Aquí se desglosa cada contenedor en sus componentes individuales. Los componentes son partes de un contenedor que funcionan juntas para proporcionar funcionalidades específicas. 
Este diagrama detalla la organización interna del contenedor, incluyendo cómo se organizan los diferentes componentes, cómo interactúan y cómo están estructurados para trabajar juntos. 
Un componente puede ser, por ejemplo, un módulo dentro de una aplicación web, una base de datos o cualquier parte interna de un contenedor que tenga una función clara.

4. **Código**: Este es el nivel de detalle más bajo del modelo C4, en el que se abordan las clases, funciones o métodos específicos dentro de cada componente. A este nivel se representa el diseño del software a nivel de código, mostrando detalles como relaciones de herencia, interacciones o incluso **patrones de diseño** utilizados.


El enfoque C4 es valioso porque permite a los arquitectos y desarrolladores visualizar diferentes aspectos de la arquitectura de software en varios niveles de granularidad y abstractos, haciendo los conceptos accesibles y comprensibles para diferentes públicos, desde técnicos hasta no técnicos. 
Además, al proporcionar una visión escalonada, facilita identificar dónde pueden surgir problemas y cómo se interconectan las diferentes partes del sistema.

