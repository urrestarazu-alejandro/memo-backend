---
layout: post
title: Principio de inversión de la dependencia 
subtitle: Ningún cliente debería estar forzado a depender de métodos que no usa
#gh-repo: daattali/beautiful-jekyll
#gh-badge: [star, fork, follow]
thumbnail-img: https://es.wikipedia.org/wiki/Dualidad_onda_corp%C3%BAsculo#/media/Archivo:Dualite.jpg
tags: [solid,ISP]
#comments: true
#mathjax: true
author: Alejandro Urrestarazu
---

## DIP: Principio de Inversión de Dependencia

El Principio de Inversión de Dependencia (Dependency Inversion Principle, DIP) se sustenta en dos pilares esenciales:

{: .box-success}
1. Los módulos de alto nivel no deben depender directamente de los módulos de bajo nivel. Ambos deben depender de abstracciones.
2. Las abstracciones no deben depender de detalles concretos. Los detalles deben depender de las abstracciones.

En pocas palabras, este principio nos indica que los sistemas más flexibles son aquellos en los que las dependencias se establecen en base a abstracciones, en lugar de depender directamente de implementaciones concretas.


Sin embargo, aplicar esta idea de forma rígida como una regla inflexible no es realista, ya que en los sistemas de software es inevitable depender de algunas implementaciones concretas. Por ejemplo, la clase `String` en Java es una implementación concreta y no sería práctico ni necesario convertirla en una abstracción. 

La razón por la cual la dependencia de esta clase concreta, `String`, no representa un problema radica en su estabilidad. Los cambios en esta clase son extremadamente raros y están estrictamente controlados. Esto evita que los programadores y arquitectos se vean preocupados por cambios imprevistos o frecuentes en dicha clase. 
Esta estabilidad es lo que hace que las dependencias en ciertas clases concretas sean aceptables en un contexto bien controlado.

Otro concepto crucial y relacionado es el que los GOF nos presentaron en su libro "Design Patterns: Elements of Reusable Object-Oriented Software":

{: .box-success}
Programa para una interfaz, no para una implementación.

Existen dos beneficios principales al manejar objetos únicamente a través de la interfaz definida por las clases abstractas:

1. Los clientes no necesitan saber los tipos específicos de objetos que utilizan, siempre y cuando los objetos sigan la interfaz que los clientes esperan.
2. Los clientes no necesitan conocer las clases que implementan esos objetos. Los clientes solo requieren conocimiento de la clase abstracta que define la interfaz.

Cada cambio en una interfaz abstracta conlleva un cambio en sus implementaciones concretas. Por otro lado, los cambios en las implementaciones concretas no siempre, ni siquiera comúnmente, requieren modificaciones en las interfaces que implementan. Por lo tanto, las interfaces son menos propensas a cambios que las implementaciones.


La implicación principal es que las arquitecturas de software estables son aquellas que evitan depender de concreciones volátiles y que favorecen el uso de interfaces abstractas estables. Esta implicación se traduce en un conjunto específico de prácticas de codificación:

* **Evitar hacer referencia a clases concretas volátiles.** En su lugar, utilizar interfaces abstractas. Esta regla aplica en todos los lenguajes de programación, ya sea de tipado estático o dinámico. Además, establece restricciones significativas en la creación de objetos y promueve el uso de Abstract Factories.

* **Evitar heredar de clases concretas volátiles.** Esto es una extensión de la regla anterior, pero es importante mencionarlo por separado. En los lenguajes de tipado estático, la herencia es la relación más fuerte y rígida del código fuente; por lo tanto, debe usarse con precaución. En los lenguajes de tipado dinámico, la herencia es menos problemática, pero sigue siendo una forma de dependencia y debe manejarse con cuidado.

* **Evitar anular funciones concretas.** Las funciones concretas a menudo generan dependencias en el código fuente. Al anular esas funciones, no se eliminan esas dependencias; de hecho, se heredan. Para manejar esas dependencias, es necesario convertir la función en abstracta y crear múltiples implementaciones.




### Beneficios de DIP

La implementación del Principio de Inversión de Dependencia (DIP) mejora la flexibilidad y mantenibilidad del software al reducir las dependencias en implementaciones concretas y fomentar el uso de abstracciones. Aunque no todas las dependencias pueden ser abstractas, el objetivo es minimizar las dependencias concretas, salvo en casos donde se garantice la estabilidad. Se busca evitar depender de elementos concretos volátiles en nuestro sistema, lo que nos permite desarrollar un código con bajo acoplamiento.

### Fábricas

Para cumplir con estas directrices, la creación de objetos concretos volátiles requiere un tratamiento especial. Esta precaución se justifica porque, en la mayoría de los lenguajes de programación, la creación de un objeto implica una dependencia del código fuente de la definición concreta de ese objeto.

En la mayoría de los lenguajes orientados a objetos, como Java, se utiliza comúnmente una fábrica abstracta para gestionar esta dependencia indeseable.

### Patrón de Inyección de Dependencias

El Principio de Inversión de Dependencia se implementa habitualmente mediante el uso de patrones de diseño como la Inversión de Control (IoC) y la Inyección de Dependencias (DI). Estos patrones ofrecen mecanismos para que las dependencias sean inyectadas en los objetos, en lugar de permitir que los objetos creen sus propias dependencias.

Mucha gente se refiere a la la Inyección de Dependencias (DI) como Inversión de Control (IoC) (también conocido como el Principio de Hollywood - "No nos llames, te llamaremos"). 
Estos dos términos a veces se usan indistintamente, pero DI es un subconjunto de IoC. 