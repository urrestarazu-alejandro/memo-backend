---
layout: post
title: "Patrones y estilos de software - Parte 1: Conceptos"
subtitle: soluciones reutilizables
thumbnail-img: /assets/img/posts/plano-laberinto-dedalo512.png
tags: [Patrones de diseño,Patrones arquitectónicos,Estilos Arquitectónicos,C4]
comments: true
author: Alejandro Urrestarazu
---

## Patrones y estilos de software - Parte 1: Conceptos

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

Los patrones de diseño operan en el código fuente, definiendo cómo las clases y objetos interactúan y colaboran entre sí. Son independientes del lenguaje de programación, aunque su implementación puede variar según el paradigma (orientado a objetos, funcional, etc.).

**Características principales:**
- **Alcance**: Relaciones entre clases y objetos específicos
- **Granularidad**: Micro-arquitectura (métodos, clases, interfaces)
- **Independencia**: Pueden usarse en cualquier capa de la aplicación
- **Catálogo**: Formalizados principalmente por el Gang of Four (GoF)

Algunos ejemplos de patrones de diseño son **Singleton** (garantiza una única instancia de una clase), **Factory** (encapsula la creación de objetos) y **Observer** (notifica cambios a objetos dependientes).

### Patrones arquitectónicos de software

Los patrones arquitectónicos son _soluciones_ que describen cómo implementar **estructuras a nivel de componentes** y sus relaciones. Estos patrones definen la organización de subsistemas o módulos dentro de una aplicación, estableciendo sus responsabilidades y canales de comunicación.

A diferencia de los patrones de diseño que se enfocan en clases individuales, los patrones arquitectónicos organizan grupos de componentes que trabajan juntos para resolver problemas específicos de la arquitectura de software.

**Características principales:**
- **Alcance**: Organización de componentes y subsistemas
- **Granularidad**: Módulos, capas, servicios
- **Dependencia**: Suelen depender del contexto de la aplicación (web, móvil, desktop)
- **Propósito**: Separación de responsabilidades a nivel de componentes

Algunos ejemplos de patrones arquitectónicos son: Modelo-Vista-Controlador (**MVC**) que separa la lógica de negocio de la presentación, Modelo-Vista-Presentador (**MVP**) que desacopla aún más la vista del modelo, o View-Interactor-Presenter-Entity-Router (**VIPER**) común en aplicaciones móviles iOS para maximizar la separación de responsabilidades.

### Estilos Arquitectónicos de software

Los estilos arquitectónicos son configuraciones de alto nivel que definen la estructura global y las **relaciones e interacciones de componentes** en un sistema de software. Son decisiones fundamentales que afectan todo el sistema y son difíciles de cambiar una vez implementadas.

La función de los estilos arquitectónicos es proporcionar una base conceptual con principios fundamentales para el diseño de sistemas. Definen el "vocabulario" de componentes y conectores que se pueden usar, junto con las restricciones sobre cómo pueden combinarse.

**Características principales:**
- **Alcance**: Sistema completo o subsistemas mayores
- **Granularidad**: Contenedores, servicios, sistemas externos
- **Impacto**: Decisiones estratégicas que afectan atributos de calidad (escalabilidad, mantenibilidad, rendimiento)
- **Filosofía**: Establecen principios y restricciones arquitectónicas

**Cuándo elegir cada estilo:**
- **Arquitectura en capas**: Cuando necesitas separación clara de responsabilidades y modificaciones independientes por capa
- **Cliente-servidor**: Para distribuir carga computacional y centralizar recursos
- **Dirigida por eventos**: Cuando requieres alta escalabilidad y desacoplamiento temporal entre componentes
- **Microservicios**: Para equipos independientes y despliegues autónomos
- **Monolítica**: Proyectos pequeños o cuando la simplicidad operacional es prioritaria

Algunos ejemplos de estilos arquitectónicos son: la **arquitectura en capas** (donde los componentes se organizan en capas horizontales como presentación, lógica de negocio y persistencia), la arquitectura **cliente-servidor** (separando la funcionalidad en servidores que proveen servicios y clientes que los consumen) y la **arquitectura dirigida por eventos** (centrada en la producción, detección y reacción a eventos).

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

### Diferencias clave y cuándo usar cada concepto

Para clarificar aún más las diferencias entre estos tres conceptos, consideremos sus características distintivas:

| Aspecto | Patrones de Diseño | Patrones Arquitectónicos | Estilos Arquitectónicos |
|---------|-------------------|-------------------------|------------------------|
| **Nivel de abstracción** | Bajo (código) | Medio (componentes) | Alto (sistema) |
| **Alcance** | Clases y objetos | Módulos y subsistemas | Sistema completo |
| **Momento de decisión** | Durante implementación | Durante diseño detallado | Durante diseño inicial |
| **Facilidad de cambio** | Alta | Media | Baja |
| **Ejemplo de pregunta** | ¿Cómo creo objetos? | ¿Cómo organizo mi aplicación web? | ¿Qué estructura global tendrá mi sistema? |

{: .box-warning}
**Importante**: Estos conceptos no son excluyentes sino complementarios. Un sistema de software típicamente utiliza un estilo arquitectónico (como capas), implementa varios patrones arquitectónicos (como MVC en la capa de presentación), y aplica múltiples patrones de diseño (como Factory, Observer, Strategy) en su implementación.

### Relación entre los conceptos

La jerarquía natural de estos conceptos fluye de lo general a lo específico:

1. **Primero** se elige un **estilo arquitectónico** basado en requisitos no funcionales (escalabilidad, disponibilidad, mantenibilidad)
2. **Luego** se seleccionan **patrones arquitectónicos** apropiados para cada subsistema o módulo
3. **Finalmente** se implementan **patrones de diseño** específicos para resolver problemas a nivel de código

Esta progresión refleja el proceso natural de diseño: comenzamos con decisiones estratégicas de alto nivel y gradualmente refinamos hacia decisiones tácticas de implementación.

## Conclusión

Comprender la distinción entre patrones de diseño, patrones arquitectónicos y estilos arquitectónicos es fundamental para comunicarnos efectivamente como desarrolladores y arquitectos de software. Cada concepto opera en un nivel diferente de abstracción y responde a diferentes tipos de preguntas.

Los **estilos arquitectónicos** nos dan el marco conceptual general del sistema, los **patrones arquitectónicos** organizan nuestros componentes y módulos, y los **patrones de diseño** nos ayudan a escribir código limpio, mantenible y reutilizable.

El modelo C4 nos proporciona una herramienta visual poderosa para documentar y comunicar estas decisiones en sus niveles apropiados de abstracción, asegurando que todos los stakeholders del proyecto puedan entender la arquitectura según su necesidad de detalle.

{: .box-success}
En futuras entregas de esta serie exploraremos ejemplos prácticos de cómo estos conceptos se aplican conjuntamente en proyectos reales, con código y diagramas específicos.

---
*Última modificación: 8 de febrero de 2026*

