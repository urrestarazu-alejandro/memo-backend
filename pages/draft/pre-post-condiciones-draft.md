---
layout: post
title: pre-post condiciones
subtitle: subtitulo
thumbnail-img: https://es.wikipedia.org/wiki/Dualidad_onda_corp%C3%BAsculo#/media/Archivo:Dualite.jpg
tags: [solid, LSP]
author: Alejandro Urrestarazu
---

### Reglas del contrato de Liskov

¿Cómo hacer para no violar el principio LSP?

Hay varias "reglas" que se deben seguir para cumplir con el LSP. Estas reglas se pueden dividir en dos categorías: **reglas de contrato** (relacionadas con las expectativas de las clases) y **reglas de variación** (relacionadas con los tipos que se pueden sustituir en el código).

#### Reglas del contrato

Estas reglas se relacionan con el contrato del supertipo y las restricciones impuestas a los contratos que se pueden agregar al subtipo.

* Las condiciones previas no se pueden reforzar en un subtipo.
* Las poscondiciones no se pueden debilitar en un subtipo.
* Las invariantes del supertipo deben conservarse en un subtipo.

#### Reglas de variación

Estas reglas se relacionan con la variación de argumentos y tipos de retorno.

* Debe haber contravarianza de los argumentos del método en el subtipo.
* Debe haber covarianza de los tipos de devolución en el subtipo.
* El subtipo no puede generar nuevas excepciones a menos que formen parte de la jerarquía de excepciones existente.

#### Contratos
A menudo se dice que los desarrolladores deberían programar según las interfaces , y un modismo relacionado es programar según un contrato . Sin embargo, más allá de las aparentes firmas de métodos, las interfaces transmiten una noción muy vaga de contrato. La firma de un método revela poco sobre los requisitos y garantías reales de la implementación del método.

#### Precondiciones
Las condiciones previas se definen como todas las condiciones necesarias para que un método se ejecute de manera confiable y sin fallas. La mayoría de los métodos requieren que una o más condiciones previas sean verdaderas antes de ser llamados. De forma predeterminada, las interfaces no exigen que ninguno de los implementadores de sus métodos cumpla tales garantías.

Lanzar una excepción es una forma eficaz de hacer cumplir los contratos de condiciones previas.

Con estas condiciones previas implementadas, los clientes deben asegurarse de que los parámetros que proporcionan estén dentro de rangos válidos antes de ser llamdos. 

Un corolario de esto es que todo el estado que se verifica en una condición previa debe ser accesible públicamente para los clientes. Si el cliente no puede verificar que el método al que está a punto de llamar arrojará un error debido a una condición previa no válida, el cliente no podrá garantizar que la llamada se realizará correctamente. 

Por lo tanto, el Estado privado no debería ser objeto de una condición previa; Las condiciones previas solo deben hacer referencia a los parámetros del método y las propiedades públicas de la clase.

#### Poscondiciones
Las poscondiciones verifican si un objeto se deja en un estado válido cuando se sale de un método. Siempre que el estado cambia en un método, es posible que el estado no sea válido debido a errores lógicos.

Las poscondiciones se pueden implementar de la misma manera que las precondiciones, mediante cláusulas de protección. Sin embargo, en lugar de colocar las cláusulas al inicio del método, las cláusulas de protección posteriores a la condición deben colocarse al final del método después de que se hayan realizado todas las ediciones del estado.

Al probar el estado con un rango válido predeterminado y generar una excepción si el valor queda fuera de ese rango, puede imponer una condición posterior al método. 

#### Invariantes de datos

Un tercer tipo de contrato es el invariante de datos. Una invariante de datos es un predicado que permanece verdadero durante toda la vida de un objeto; es verdadero después de la construcción y debe permanecer así hasta que el objeto esté fuera de alcance. Las invariantes de datos se relacionan con el estado interno esperado del objeto. 

Agregar una condición previa a un constructor puede ayudar a proteger un invariante de datos.

Cuando una invariante de datos es una propiedad pública, la cláusula de protección pasa al definidor.

### Covarianza y contravarianza

Todas las reglas restantes del principio de sustitución de Liskov se relacionan con la covarianza y la contravarianza. Generalmente, la varianza es un término que se aplica al comportamiento esperado de los subtipos en una jerarquía de clases que contiene tipos complejos.

#### Definiciones
Como se demostró anteriormente, es importante cubrir los conceptos básicos de este tema antes de profundizar en los detalles de los requisitos de variación del LSP.

Los prefijos co - y contra - son términos matemáticos que significan con y en contra , respectivamente. La varianza , en el contexto de los tipos, mide el comportamiento de los subtipos y su relación. Por lo tanto, la covarianza es una relación en la que los subtipos van entre sí y la contravarianza es una relación en la que los subtipos van unos contra otros.

#### Covarianza

El polimorfismo es la capacidad de un subtipo de ser tratado como si fuera una instancia del supertipo. 


#### Contravarianza
La contravarianza es un concepto similar a la covarianza. Mientras que la covarianza se relaciona con el tratamiento de los tipos que se utilizan como valores de retorno, la contravarianza se relaciona con el tratamiento de los tipos que se utilizan como parámetros de método.