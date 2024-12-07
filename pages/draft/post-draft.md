---
layout: post
title: Casos de uso
subtitle: Represental al intencion del sistema (LO QUE debe hacerse).
#gh-repo: daattali/beautiful-jekyll
#gh-badge: [star, fork, follow]
#thumbnail-img: https://es.wikipedia.org/wiki/Dualidad_onda_corp%C3%BAsculo#/media/Archivo:Dualite.jpg
tags: []
#comments: true
#mathjax: true
author: Alejandro Urrestarazu
---

## Casos de uso

![Capataz dando ordenes a obreros](/assets/img/posts/capataz-ordenando-obreros.png){: .mx-auto.d-block :}


**Casos de Uso: Un enfoque clave para el desarrollo de software eficiente y efectivo**

En el mundo del diseño de software, los Casos de Uso son una herramienta fundamental para garantizar que las aplicaciones se desarrollen de manera eficiente y efectiva. En
este artículo, exploraremos la importancia de los Casos de Uso, cómo se definen y cuáles son sus beneficios en el desarrollo de software.

**¿Qué son los Casos de Uso?**

Un Caso de Uso es una definición clara del comportamiento o acción que un usuario puede realizar dentro de un sistema. Se enfoca en la perspectiva del usuario final,
identificando las acciones más importantes que pueden tomar dentro del sistema. Los Casos de Uso son la base para el desarrollo de software, ya que nos permiten entender
mejor las necesidades y expectativas del usuario.


### Razones para determinar correctamente los casos de uso


La definición de Casos de Uso ofrece varios beneficios en el desarrollo de software:

*   **Mejora la comprensión del usuario**: Los Casos de Uso nos ayudan a comprender mejor las necesidades y expectativas del usuario final, lo que resulta en un diseño más
intuitivo y fácil de usar.
*   **Garantiza un desarrollo eficiente**: Al enfocarnos en las acciones más importantes que el usuario puede realizar, podemos priorizar las funcionalidades más
importantes y asegurarnos de que estén bien diseñadas.
*   **Aumenta la calidad del código**: Los Casos de Uso nos ayudan a garantizar que el código sea simple, legible y fácil de mantener.


### Casos de uso segun Clean Architecture y DDD


La arquitectura limpia (Clean Architecture) es un patrón que puede ser aplicado en cualquier diseño de software, mientras que el Diseño dirigido por el dominio (Domain-Driven Design, DDD) es una filosofía más amplia sobre cómo modelar los conceptos empresariales para garantizar que el código refleja realmente los requisitos de la empresa. El DDD puede ser aplicado dentro de una arquitectura limpia o en cualquier otra arquitectura de software.

Ambas comparten una visión común sobre la importancia de separar las capas del software en función de su nivel de abstracción. Sin embargo, existen diferencias en la forma en que se aplican estas principios.

En la **arquitectura limpia**, el diseño se centra principalmente en la separación de preocupaciones y la separación lógica de los diferentes niveles de abstracción del software (Entidades, casos de uso, controladores y frameworks), para minimizar las dependencias y mantener el código limpio, simple y fácil de mantener.
En esta arquitectura las reglas del negocio están dentro de la capa de dominio, mientras que las reglas de aplicacion estan dentro de la capa de "Casos de uso". Esto nos da una pista clave de que los casos de uso no son sinonimo de regla de negocio.

En el **DDD**, el diseño se centra en modelar los conceptos empresariales de forma precisa y comprensible, lo que resulta en un modelo de dominio fuerte, independiente del código y capaz de evolucionar independientemente del software. El DDD enfatiza la importancia de colaborar con los stakeholders (expertos en el dominio, arquitectos y desarrolladores) para garantizar que el código refleje realmente los requisitos de la empresa.
En DDD los casos de uso corresponden a los "Application services" o servicios de aplicaciones, son la fachada exterior del dominio de nuestro sistema, por lo que son el punto de entrada-salida para interactuar con la funcionalidad interna. Estos servicios son responsables de controlar el flujo principal de la aplicacion. 
Aqui tenemos la segunda pista clave, los casos de uso deben encargarse del flujo de la aplicacion. 



### Veamos un ejemplo

Un clasico flujo es el de registrar un uaurio de una aplicacion. Aunque es muy clasico sigue existiendo el debate de como modelarlo con casos de usos (O que no se debe modelar). Haciendonos a un lado de este debate es interesante para ver aprender.

El siguiente diagrama muestra que pasos se deben realizar para registrar:

```mermaid
---
title: Flujo para registrar un usuario.
---
graph LR
    A(Usuario) --> B[Registrar]
    B --> C[Verificar]
    C --> D[Crear]
    D --> E[Notificar]
```


```mermaid
---
title: Diagrama de clase para los casos de uso
---
classDiagram
direction LR
namespace entidades {
    class Registro {
        +String nombre
        +Email email
        +Contraseña contraseña
    }

    class Email {
        +String usuario
        +String dominio
        +String plusTag
    }

    class Contraseña {
        +String contraseñaCifrada
    }
}

    RegistroUseCase <.. ValidacionesUseCase
    RegistroUseCase <.. CreacionUsuarioUseCase
    RegistroUseCase <.. NotificionUsuarioUseCase 

namespace casosDeUso {
    class RegistroUseCase {
        -ValidacionesUseCase validaciones
        -CreacionUsuarioUseCase creacionUsuario
        -NotificarUsuarioUseCase notificarUsuario
        +bool registrarUsuario(Registro registro)
    }

    class ValidacionesUseCase {
        +bool nombreEsValido(String nombre)
        +bool correoElectronicoEsValido(Email correo)
        +bool contraseñaEsValida(Constraseña constraseña)
    }

    class CreacionUsuarioUseCase {
        +bool crear(Registro registro)
    }

    class NotificionUsuarioUseCase {
        +bool notificar(Registro registro)
    }
}

```


### Los errores más comunes al desarrollar casos de uso pueden incluir:

1. No tener claridad sobre el propósito del caso de uso y no alinearlo con las necesidades del negocio. Esto puede hacer que los resultados finales no sean lo esperado o no satisfagan a los usuarios.

2. Ignorar el contexto empresarial en el cual opera el sistema y los cambios que pueden ocurrir en el futuro, lo que puede hacer que el caso de uso sea rígido y no adaptable.

3. No tener suficiente abstracción en las interfaces y clases involucradas en la implementación del caso de uso, lo que puede hacer que el código sea dependiente de una tecnología específica o plataforma. Esto hace que el caso de uso no pueda ser reutilizado o transferido a otros entornos sin problemas.

4. No hacer un análisis suficiente y exhaustivo de los casos de uso posibles y sus respectivas implementaciones, lo que puede llevar a fallas de diseño o funcionalidades no deseadas en el sistema.

5. No tener un proceso de pruebas eficaz para garantizar la calidad del código y el comportamiento esperado en todo entorno.

6. No tener suficiente documentación de los casos de uso, lo que puede provocar confusión en los desarrolladores y dificultades para entender el comportamiento del sistema.



Conclusión
----------

Los Casos de Uso son una herramienta clave para el desarrollo de software eficiente y efectivo, ya que nos permiten enfocarnos en las acciones más importantes que el usuario puede tomar dentro del sistema, es decir el flujo de control de la aplicacion. 
Esto nos ayuda a comprender mejor la perspectiva del usuario final y garantizar sistemas más intuitivos, fáciles de usar y eficientes en el proceso de desarrollamiento.
