---
layout: post
title: Combo Observer y Abstract Factory
subtitle: Patrón Observador junto a la fábrica abstracta
thumbnail-img: /assets/img/posts/capataz-ordenando-obreros.png
tags: [Observer,Abstract Factory, Patrones de diseño]
author: Alejandro Urrestarazu
---

## Combinación de Patrones: Observer + Abstract Factory

![Capataz dando ordenes a obreros](/assets/img/posts/capataz-ordenando-obreros.png){: .mx-auto.d-block :}

Imaginemos que queremos modelar un sistema diseñado para asignar obreros a un capataz, quien es responsable de dar órdenes.

En este sistema, los obreros tienen la libertad de cambiar de profesión sin restricciones, gracias a sus amplias habilidades y conocimientos.

Además, es importante considerar que en el futuro se podrán agregar nuevas profesiones, por lo que el diseño del código debe ser completamente independiente de estas.

El capataz puede dar órdenes en cualquier momento, y los obreros notificados deben adaptarse a su nuevo trabajo de inmediato.


### Patrones Utilizados

- **Observer**: es un patrón de comportamiento que define una relación uno-a-muchos entre objetos, de tal manera que cuando un objeto cambia su estado, todos sus dependientes (observadores) son notificados y actualizados automáticamente. Lo usaremos para notificar a los trabajadores sobre las tareas asignadas por un capataz (notificador).

- **Abstract Factory**: es un patrón de creación que proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas. Lo usaremos para crear diferentes tipos de profesiones.

## Profesiones


La clase `Profesion` es una clase abstracta que define un método `descripcion()` que debe ser implementado por las subclases para proporcionar una descripción de la profesión. 


~~~
public abstract class Profesion {
  public abstract String descripcion();
}
~~~


~~~
public class ProfesionAlbanil extends Profesion {
  @Override
  public String descripcion() {
    return "Realizo trabajos de albañilería.";
  }
}
~~~


~~~
public class ProfesionPintor extends Profesion {
  @Override
  public String descripcion() {
    return "Realizo trabajos de pinturería.";
  }
}
~~~


~~~
public class ProfesionPlomero extends Profesion {
  @Override
  public String descripcion() {
    return "Realizo trabajos de plomería.";
  }
}
~~~


### Fábrica de profesiones


La interfaz `ProfesionFactory` define un método `crearProfesion()` para crear profesiones. Las clases de fábrica concretas como `ProfesionAlbanilFactory` implementan esta interfaz para crear profesiones específicas.

~~~
public interface ProfesionFactory {
  Profesion crearProfesion();
}
~~~


Ahora vamos a ver las fabricas de clases concretas que representan las profesiones. Este patrón de fábrica permite la creación de diferentes profesiones sin necesidad de conocer la clase exacta que se instanciará, promoviendo un acoplamiento débil y un mantenimiento más sencillo.


~~~
public class ProfesionAlbanilFactory implements ProfesionFactory {
  @Override
  public Profesion crearProfesion() {
    return new ProfesionAlbanil();
  }
}
~~~


~~~
public class ProfesionPintorFactory implements ProfesionFactory {
  @Override
  public Profesion crearProfesion() {
    return new ProfesionPintor();
  }
}
~~~


~~~
public class ProfesionPlomeroFactory implements ProfesionFactory {
  @Override
  public Profesion crearProfesion() {
    return new ProfesionPlomero();
  }
}
~~~


#### Capataz y obreros

La clase `Capataz` representa a un capataz que gestiona una lista de trabajadores (`obreros`) y les asigna tareas. 
El método `darOrden()` asigna una tarea a los trabajadores y llama a `notificarObreros()` para notificarles sobre la tarea.

~~~
public class Capataz {
  private Set<Suscriptor> obreros = new HashSet<>();
  private Tarea tarea;

  public void darOrden(Tarea tarea) {
    this.tarea = tarea;
    notificarObreros();
  }

  private void notificarObreros() {
    for (Suscriptor obrero : obreros) {
      obrero.recibir(tarea);
    }
  }
}
~~~

La clase `Obrero` implementa la interfaz `Suscriptor`, que define un método `recibir()` para recibir tareas. 

Cuando se recibe una tarea, la profesión del trabajador se actualiza en función de la tarea utilizando una fábrica. 

Por ejemplo, si la tarea es `CONSTRUIR_PAREDES`, se utiliza una `ProfesionAlbanilFactory` para crear una `ProfesionAlbanil`.

~~~
public class Obrero implements Suscriptor {
  private final String nombre;
  private Profesion profesion;

  public Obrero(String nombre) {
    this.nombre = nombre;
    this.profesion = new ProfesionBase();
  }

  @Override
  public void recibir(Tarea tarea) {
    ProfesionFactory factory;
    switch (tarea) {
      case CONSTRUIR_PAREDES:
        factory = new ProfesionAlbanilFactory();
        break;
      case PINTAR_PAREDES:
        factory = new ProfesionPintorFactory();
        break;
      case CONECTAR_CANOS:
        factory = new ProfesionPlomeroFactory();
        break;
      default:
        throw new IllegalArgumentException("Tarea desconocida: " + tarea);
    }
    profesion = factory.crearProfesion();
  }

  public void trabajar() {
    System.out.println("> Hola! Soy " + nombre + ": " + profesion.descripcion());
  }
}
~~~

#### Aplicación

El código proporcionado define la clase `Main`, que sirve como punto de entrada para la aplicación. 

~~~
public class Main {
  public static void main(String[] args) {
    Capataz capataz = new Capataz();
    Obrero obrero1 = new Obrero("Pedro");
    Obrero obrero2 = new Obrero("Juan");

    obrero1.trabajar();
    obrero2.trabajar();

    capataz.agregarObrero(obrero1);
    capataz.darOrden(Tarea.CONSTRUIR_PAREDES);
    obrero1.trabajar();
    obrero2.trabajar();

    capataz.agregarObrero(obrero2);
    capataz.darOrden(Tarea.CONECTAR_CANOS);
    obrero1.trabajar();
    obrero2.trabajar();

    capataz.quitarObrero(obrero2);
    capataz.darOrden(Tarea.PINTAR_PAREDES);
    obrero1.trabajar();
    obrero2.trabajar();
  }
}
~~~


Esta clase demuestra la interacción entre un capataz (Capataz) y los obreros (Obrero), mostrando el patrón observador en acción.  

Primero, se crea una instancia de `Capataz`, que gestionará a los obreros y les asignará tareas. También se crean dos instancias de `Obrero`, obrero1 y obrero2, con los nombres "Pedro" y "Juan" respectivamente. 

Inicialmente, ambos obreros llaman al método `trabajar()` para imprimir las descripciones de sus profesiones actuales.

A continuación, `obrero1` se añade a la lista de obreros gestionados por el Capataz utilizando el método `agregarObrero()`. 

El Capataz asigna la tarea `CONSTRUIR_PAREDES` a sus obreros llamando al método darOrden(). 

Después de recibir la tarea, `obrero1` actualiza su profesión en consecuencia e imprime la descripción actualizada de su profesión.


Después de esto, `obrero2` se añade a la lista de obreros, y el Capataz asigna una nueva tarea `CONECTAR_CANOS`. Ambos obreros actualizan sus profesiones basándose en la nueva tarea e imprimen las descripciones actualizadas de sus profesiones.

Finalmente, `obrero2` se elimina de la lista de obreros utilizando el método quitarObrero(). El Capataz asigna otra tarea `PINTAR_PAREDES`, y el obrero restante, `obrero1`, actualiza su profesión e imprime la descripción actualizada. `obrero2` no actualiza su profesión ya que ya no es gestionado por el Capataz.

Veamos la salida por pantalla de este ejemplo:

~~~
> Hola! Soy Pedro: Listo para trabajar!
> Hola! Soy Juan: Listo para trabajar!

* Capataz: tienen 3 horas para Construir paredes

> Hola! Soy Pedro: Realizo trabajos de albañilería.
> Hola! Soy Juan: Listo para trabajar!

* Capataz: tienen 2 horas para Conectar caños

> Hola! Soy Pedro: Realizo trabajos de plomería.
> Hola! Soy Juan: Realizo trabajos de plomería.

* Capataz: tienen 1 horas para Pintar paredes

> Hola! Soy Pedro: Realizo trabajos de pinturería.
> Hola! Soy Juan: Realizo trabajos de plomería.
~~~

Con este ejemplo, podemos observar cómo se ha desacoplado la acción de dar órdenes de aquellos que las esperan. Además, las profesiones desempeñadas por los obreros son completamente independientes, ya que lo único que nos interesa en esta dinámica es la acción de trabajar.