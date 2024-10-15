---
layout: post
title: Objetos inmutables
subtitle: Un objeto cuyo estado no puede ser modificado una vez creado.
thumbnail-img: /assets/img/posts/atlas_peatonal.png
tags: [Inmutabilidad,Cache,Concurrencia,Patrón Constructor,Builder]
comments: true
author: Alejandro Urrestarazu
---

## Objeto inmutables

![Estatua de Atlas sosteniendo el mundo](/assets/img/posts/atlas_peatonal.png){: .mx-auto.d-block :}


Tomando la definición de [objeto inmutable en wikipedia](https://es.wikipedia.org/wiki/Objeto_inmutable): 


{: .box-success}
tanto en la programación orientada a objetos y programación funcional un «objeto inmutable» es un objeto cuyo estado no puede ser modificado una vez creado.


Es decir se refiere a la incapacidad de cambiar el estado de un objeto una vez que ha sido creado.

## ¿Cuál es su uso?

1. **Simplicidad Conceptual:**
- Los objetos inmutables son más fáciles de entender y razonar, ya que una vez creados, su estado no cambia. Esto reduce la complejidad al tratar de seguir cómo y cuándo un objeto puede modificarse.


2. **Seguridad en Programas Concurrentes:**
- En entornos de programación concurrente, los objetos inmutables son inherentemente seguros sin necesidad de sincronización. Esto se debe a que múltiples hilos pueden acceder a los mismos objetos inmutables sin riesgo de que el estado del objeto cambie durante la ejecución.


3. **Uso Eficiente en Cachés:**
- Dado que los objetos inmutables no cambian, pueden almacenarse en cachés para ser reutilizados. Esto puede ahorrar recursos al evitar la creación repetida de objetos equivalentes.


4. **Facilidad en la Reutilización y el Compartido:**
- Dado que no cambian, los objetos inmutables se pueden compartir entre diferentes puntos de un programa sin el riesgo de que una parte cambie el valor de otra parte.


5. **Inmutabilidad Intrínseca de las Claves en Estructuras de Datos:**
- Muchas estructuras de datos, como los mapas (hashes), utilizan objetos como claves. Si estas claves son inmutables, garantiza que el `hash` y las comparaciones permanezcan constantes e impide errores lógicos en las operaciones con dichas estructuras.


6. **Reducción de Errores:**
- Eliminan una categoría de errores relacionados con la modificación de datos no planificada o imprevista, ya que aseguran que una vez establecido, el comportamiento del objeto no puede cambiar.


7. **Facilitación del Diseño Funcional:**
- En paradigmas de programación funcional, los objetos inmutables son usados extensivamente porque encajan naturalmente con la idea de funciones sin efectos secundarios.


#### Ejemplos en el Mundo Real

- **Clases de Java como `String`, `Integer`, `Boolean`:** Son inmutables. Por ejemplo, `String` en Java es inmutable, lo cual facilita que objetos `String` sean compartidos y reutilizados.

- **Uso en APIs Públicas:** Cuando una API retorna objetos inmutables, se previene que el cliente los modifique inesperadamente, preservando la integridad del estado interno.

Al diseñar sistemas complejos, especialmente aquellos con múltiples hilos o servicios, el uso de objetos inmutables puede reducir significativamente la aparición de errores difíciles de detectar relacionados con el estado compartido y la mutabilidad. 


### Pasos para Crear un Objeto Inmutable en Java

1. **Declarar la Clase como `final`:**
    Esto impide que otras clases puedan heredar de esta clase y potencialmente modificar su comportamiento.

    ~~~
    public final class MiClaseInmutable {
        // campos y métodos aquí
    }
    
    ~~~

2. **Hacer Todos los Campos `final` y Privados:**

    En Java, declarar un atributo como `final` implica que la referencia o el valor del campo no puede cambiar después de que se ha inicializado, pero no necesariamente garantiza que el objeto en sí mismo sea inmutable. 
    Garantiza que los campos se puedan inicializar sólo una vez, ya sea en el punto de declaración o dentro del constructor, y no puedan cambiar una vez establecidos.

    ~~~
    private final int miCampo;
    ~~~

    {: .box-warning}
    El uso de `final` es un paso hacia la inmutabilidad al evitar la reasignación, pero no es suficiente por sí solo para garantizar un objeto completamente inmutable. 

    Es importante combinar `final` con otras prácticas de diseño como las que describiremos a continuación.

3. **Inicializar los Campos en el Constructor:**
    Asegúrate de que todos los campos se inicializan dentro del constructor y no expongas métodos para cambiar su valor después.
    En este punto también podemos ayudarnos del `patrón Constructor` para que encapsule el proceso de construir una estructura compleja de datos inmutable.

    ~~~
    public MiClaseInmutable(int valorInicial) {
        this.miCampo = valorInicial;
    }
    ~~~

4. **Evitar Métodos `setters`:**
    No proporciones métodos que permitan modificar los campos, como setters.

5. **Proporcionar Métodos de Acceso (`getters`) Seguros:**
    Si necesitas exponer el valor de los campos, usa getters. Asegúrate de retornar copias de cualquier objeto mutable interno.

    ~~~
    public int getMiCampo() {
        return miCampo;
    }
    ~~~

6. **Si el Objeto Tiene Referencias a Objetos Mutables:**
    Devuelve copias defensivas de los objetos (por ejemplo, arreglos, listas).

    ~~~
    private final int[] miArray;

    public MiClaseInmutable(int[] array) {
        // Crear una copia para asegurar que miArray sea inmutable
        this.miArray = array.clone();
    }

    public int[] getMiArray() {
        return miArray.clone(); // Retorna una copia para preservarlo inmutable
    }
    ~~~


### Ejemplo de una clase inmutable

A continuación, te muestro un ejemplo simple de una clase inmutable en Java:

~~~
public final class Punto {

    private final int x;
    private final int y;

    public Punto(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    // No hay setters para modificar x e y

    @Override
    public String toString() {
        return "Punto{" + "x=" + x + ", y=" + y + '}';
    }
}
~~~


En este ejemplo, la clase `Punto` es inmutable porque:

- Está definida como `final`.
- Sus campos `x` e `y` son privados y finales.
- No hay métodos para cambiar el valor de `x` o `y` después de que el objeto ha sido creado.


### Consejos Adicionales

- **Validaciones en el Constructor:** Si ciertas restricciones deben aplicarse a los valores de los campos, realiza estas validaciones dentro del constructor.

- **Usar Clases de Ayuda:** Considera el uso de objetos inmutables proporcionados por Java, como `String`, `Integer`, y muchos tipos de la biblioteca estándar que ya son inmutables. Esto puede simplificar el diseño de tus estructuras de datos.

- **Mantén el Número Mínimo de Campos:** Reduce el número de campos tanto como sea posible, ya que mantener la inmutabilidad es más fácil cuando hay menos datos para gestionar.

Implementar inmutabilidad puede requerir algo más de trabajo de diseño inicial, pero las ventajas de seguridad y simplicidad que proporciona a menudo lo compensan, especialmente en sistemas complejos.