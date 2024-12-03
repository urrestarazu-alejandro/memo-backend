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


## ¿Que son los casos de usos según DDD?

En el contexto de Domain-Driven Design (DDD), los casos de uso son descripciones de cómo los usuarios interactúan con un sistema para lograr un objetivo específico. Se centran en las tareas que los actores (usuarios o sistemas externos) llevan a cabo y cómo estas tareas se relacionan con el modelo del dominio.

### Características de los Casos de Uso en DDD:
Enfoque en el Usuario: Los casos de uso se centran en las necesidades del usuario y describen el comportamiento del sistema desde su perspectiva.

Interacción: Definen cómo los actores interactúan con el sistema y qué resultados esperan obtener.

Modelado del Dominio: Ayudan a identificar las entidades, agregados y servicios involucrados en una funcionalidad específica, alineando la lógica empresarial con las necesidades del usuario.

Escenarios: Incluyen escenarios principales (flujos normales) y alternativos (flujos de error o excepciones), lo que ayuda a comprender cómo manejar diversas situaciones.

Reutilización: Pueden ser reutilizados en diferentes contextos y aplicaciones, promoviendo la consistencia en la implementación de la lógica empresarial.

## Arquitectura limpia

En la qrquitectura planteado por el tio Bob los Casos de uso son también conocidos como interactores o lógica de aplicación, esta capa contiene las reglas de negocio específicas de la aplicación y representa los casos de uso u operaciones que admite el sistema. Los casos de uso organizan el flujo de datos entre las entidades y los sistemas externos.

En la arquitectura limpia, los casos de uso son esenciales porque representan la intención del sistema y deben ser claramente visibles en su estructura. La arquitectura debe elevar los casos de uso a entidades de primer nivel, lo que facilita a los desarrolladores entender el funcionamiento del sistema. Esto significa que los comportamientos deseados deben estar claramente expuestos y ser fácilmente identificables dentro de la estructura arquitectónica.

Los casos de uso, al ser específicos de una aplicación, están más cerca de los inputs y outputs del sistema en comparación con las entidades, que son generalizaciones aplicables a múltiples aplicaciones. Los casos de uso dependen de las entidades, pero no al revés.

Además, una buena arquitectura asegura que los objetos de caso de uso estén desacoplados de detalles de implementación como HTML o SQL, manteniendo así su independencia y flexibilidad. Esto permite que las decisiones sobre frameworks y herramientas se pospongan, evitando que el sistema quede atado a elecciones tecnológicas prematuras. En resumen, los casos de uso son el núcleo de la arquitectura limpia, guiando su diseño para cumplir con los objetivos funcionales del sistema.

#### CASOS DE USO

El primer punto (casos de uso) significa que la arquitectura del sistema debe respaldar la intención del sistema. Si el sistema es una aplicación de carrito de compras, entonces la arquitectura debe respaldar los casos de uso del carrito de compras. De hecho, esta es la primera preocupación del arquitecto y la primera prioridad de la arquitectura. La arquitectura debe respaldar los casos de uso.

Sin embargo, como hemos comentado anteriormente, la arquitectura no ejerce mucha influencia sobre el comportamiento del sistema. Hay muy pocas opciones de comportamiento que la arquitectura pueda dejar abiertas. Pero la influencia no lo es todo. Lo más importante que puede hacer una buena arquitectura para apoyar el comportamiento es aclarar y exponer ese comportamiento de modo que la intención del sistema sea visible a nivel arquitectónico.

Una aplicación de carrito de compras con una buena arquitectura se verá como una aplicación de carrito de compras. Los casos de uso de ese sistema serán claramente visibles dentro de la estructura de ese sistema. Los desarrolladores no tendrán que buscar comportamientos, porque esos comportamientos serán elementos de primera clase visibles en el nivel superior del sistema. Esos elementos serán clases, funciones o módulos que tendrán posiciones destacadas dentro de la arquitectura y tendrán nombres que describan claramente su función.

### Que significa el concepto de Interactor según Robert C. Martin

El concepto de Interactor, según Robert C. Martin (también conocido como "Uncle Bob"), se refiere a una parte fundamental del diseño de sistemas en el contexto de la Clean Architecture. 
Estos interactuadores debían ser el punto de entrada al código de lógica de negocio. 
Un Interactor es responsable de manejar la lógica de negocio para un caso de uso específico dentro de la aplicación.


Los casos de uso no son sólo una construcción UML. Su uso en código crea una abstracción que permite la migración de lógica empresarial de alto nivel de un mecanismo de entrega a otro con relativa facilidad.

### Características del Interactor:

1. Responsabilidad: El Interactor encapsula toda la lógica necesaria para llevar a cabo un caso de uso. Se encarga de recibir los datos de entrada, procesarlos según las reglas del negocio y devolver los resultados apropiados.

1. Independencia: Los Interactors no deben depender de detalles específicos de la tecnología o la interfaz del usuario (por ejemplo, no deben saber nada sobre bases de datos, interfaces gráficas, etc.). Esto permite que sean reutilizables y fácilmente testables.

1. Orquestación: Actúan como orquestadores que coordinan diferentes partes del sistema (como repositorios y servicios) para cumplir con los objetivos del caso de uso.

1. Separación de Preocupaciones: Al mantener la lógica empresarial separada de las capas de presentación y persistencia, se facilita el mantenimiento y evolución del software.

### Ejemplo:
Si tu aplicación tiene un caso de uso para "Registrar un nuevo cliente", el Interactor correspondiente manejaría todo lo relacionado con ese registro: validaría los datos, verificaría si el cliente ya existe y guardaría la información en el repositorio adecuado.

En resumen, los Interactors son componentes clave en la Clean Architecture que garantizan que la lógica empresarial se mantenga limpia, organizada y desacoplada de otros aspectos del sistema.

#### Capas desacopladas

Considere los casos de uso. El arquitecto quiere que la estructura del sistema admita todos los casos de uso necesarios, pero no sabe cuáles son todos esos casos de uso. Sin embargo, el arquitecto sí conoce la intención básica del sistema. Es un sistema de carrito de compras, o es un sistema de lista de materiales, o es un sistema de procesamiento de pedidos. Por lo tanto, el arquitecto puede emplear el principio de responsabilidad única y el principio de cierre común para separar aquellas cosas que cambian por diferentes razones y para recopilar aquellas cosas que cambian por las mismas razones, dado el contexto de la intención del sistema.

¿Qué cambia por diferentes motivos? Hay algunas cosas obvias. Las interfaces de usuario cambian por razones que no tienen nada que ver con las reglas de negocio. Los casos de uso tienen elementos de ambos. Claramente, entonces, un buen arquitecto querrá separar las partes de la interfaz de usuario de un caso de uso de las partes de las reglas de negocio de tal manera que se puedan cambiar independientemente una de otra, mientras se mantienen esos casos de uso visibles y claros.

Las reglas de negocio pueden estar estrechamente vinculadas a la aplicación o pueden ser más generales. Por ejemplo, la validación de campos de entrada es una regla de negocio que está estrechamente vinculada a la aplicación en sí. Por el contrario, el cálculo de intereses en una cuenta y el recuento de inventario son reglas de negocio que están más estrechamente asociadas con el dominio. Estos dos tipos diferentes de reglas cambiarán a diferentes ritmos y por diferentes motivos, por lo que deben estar separadas para que puedan cambiarse de forma independiente.

La base de datos, el lenguaje de consulta e incluso el esquema son detalles técnicos que no tienen nada que ver con las reglas de negocio ni con la interfaz de usuario. Cambiarán a un ritmo y por motivos que son independientes de otros aspectos del sistema. En consecuencia, la arquitectura debería separarlos del resto del sistema para que puedan modificarse de forma independiente.

De esta manera, encontramos el sistema dividido en capas horizontales disociadas: la interfaz de usuario, las reglas de negocio específicas de la aplicación, las reglas de negocio independientes de la aplicación y la base de datos, por mencionar solo algunas.



## Que son los casos de usos segun UML?

En UML (Unified Modeling Language), los casos de uso son descripciones de los requisitos funcionales de un sistema desde la perspectiva del usuario. Representan interacciones entre los actores (usuarios o sistemas externos) y el sistema que se está desarrollando.

### Características de los Casos de Uso en UML:

Actores: Son las entidades externas (personas, otros sistemas) que interactúan con el sistema. Cada actor tiene un rol específico y puede ser un usuario humano o un sistema.

- Escenarios: Un caso de uso describe un conjunto de acciones o eventos que llevan a un resultado particular, a menudo representados como flujos de trabajo.

- Diagramas de Casos de Uso: Se utilizan para visualizar los casos de uso del sistema. Estos diagramas muestran los actores y cómo interactúan con los diferentes casos de uso, proporcionando una representación gráfica fácil de entender.

- Detalles del Caso de Uso: Cada caso de uso puede tener una descripción detallada que incluya:

    * Nombre del caso de uso.
    * Actores involucrados.
    * Precondiciones (lo que debe ser cierto antes de que comience el caso).
    * Flujo principal (la secuencia normal de interacciones).
    * Flujos alternativos (desviaciones del flujo principal, como errores o excepciones).
    * Postcondiciones (el estado del sistema después de que se complete el caso).
    * Requisitos Funcionales: Los casos de uso ayudan a identificar y documentar los requisitos funcionales del sistema, permitiendo una mejor comprensión tanto para desarrolladores como para partes interesadas.

### Ejemplo:

Un caso de uso típico podría ser "Iniciar sesión", donde se describirían los pasos necesarios para que un usuario ingrese sus credenciales y acceda al sistema, así como las respuestas esperadas ante entradas correctas o incorrectas.

En resumen, los casos de uso en UML son herramientas clave para capturar y comunicar la funcionalidad deseada en un sistema, facilitando el entendimiento entre todas las partes involucradas en el desarrollo del software.