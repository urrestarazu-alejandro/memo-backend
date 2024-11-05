---
layout: post
title: Combo Observer y Decorator
subtitle: Patrón Observador junto al decorador
#gh-repo: daattali/beautiful-jekyll
#gh-badge: [star, fork, follow]
#thumbnail-img: https://es.wikipedia.org/wiki/Dualidad_onda_corp%C3%BAsculo#/media/Archivo:Dualite.jpg
tags: [Observer,Decorator, Patrones de diseño]
#comments: true
#mathjax: true
author: Alejandro Urrestarazu
---

## Combinación de Patrones: Observer + Decorator

![Capataz dando ordenes a obreros](/assets/img/posts/capacapataz-ordenando-obreros.png){: .mx-auto.d-block :}


## Descripción General

Este ejemplo demuestra el uso combinado de los patrones de diseño Observer y Decorator.

### Patrones Utilizados

- **Observer**: Permite que un objeto (Capataz) notifique a otros objetos (Obreros) sobre cambios en su estado.
- **Decorator**: Permite agregar responsabilidades adicionales a un objeto (Profesion) de manera dinámica.

## Clases y Archivos

### `Tareas.java`

Define un enum con las diferentes tareas que pueden realizar los obreros.

```java
public enum Tareas {
  PINTAR_PAREDES,
  CONECTAR_CANOS,
  CONSTRUIR_PAREDES
}
```

### `Profesion.java`

Clase abstracta que define el método `realizarTrabajo`.

```java
public abstract class Profesion {
  public abstract void realizarTrabajo();
}
```

### `ProfesionBase.java`

Implementación base de `Profesion`.

```java
public class ProfesionBase extends Profesion {
  @Override
  public void realizarTrabajo() {
    System.out.println("Está trabajando.");
  }
}
```

### `DecoradorProfesion.java`

Clase abstracta que extiende `Profesion` y contiene una referencia a un objeto `Profesion`.

```java
abstract class DecoradorProfesion extends Profesion {
  protected Profesion profesion;

  public DecoradorProfesion(Profesion profesion) {
    this.profesion = profesion;
  }

  @Override
  public void realizarTrabajo() {
    profesion.realizarTrabajo();
  }
}
```

### `ProfesionAlbanil.java`, `ProfesionPintor.java`, `ProfesionPlomero.java`

Clases concretas que extienden `DecoradorProfesion` y añaden comportamiento específico.

```java
public class ProfesionAlbanil extends DecoradorProfesion {
  public ProfesionAlbanil(Profesion profesionDecorado) {
    super(profesionDecorado);
  }

  @Override
  public void realizarTrabajo() {
    System.out.println("Está haciendo trabajos de albañilería.");
  }
}

public class ProfesionPintor extends DecoradorProfesion {
  public ProfesionPintor(Profesion profesion) {
    super(profesion);
  }

  @Override
  public void realizarTrabajo() {
    System.out.println("Está pintando.");
  }
}

public class ProfesionPlomero extends DecoradorProfesion {
  public ProfesionPlomero(Profesion profesion) {
    super(profesion);
  }

  @Override
  public void realizarTrabajo() {
    System.out.println("Está haciendo trabajos de plomería.");
  }
}
```

### `Suscriptor.java`

Interfaz que define el método `notificar`.

```java
public interface Suscriptor {
  void notificar(Tareas tareas);
}
```

### `Obrero.java`

Implementa `Suscriptor` y utiliza el patrón Decorator para cambiar su `Profesion` según la tarea asignada.

```java
public class Obrero implements Suscriptor {
  private final String nombre;
  private Profesion profesion;

  public Obrero(String nombre) {
    this.nombre = nombre;
    this.profesion = new ProfesionBase();
  }

  @Override
  public void notificar(Tareas tareas) {
    switch (tareas) {
      case CONSTRUIR_PAREDES:
        profesion = new ProfesionAlbanil(profesion);
        break;
      case PINTAR_PAREDES:
        profesion = new ProfesionPintor(profesion);
        break;
      case CONECTAR_CANOS:
        profesion = new ProfesionPlomero(profesion);
        break;
    }
  }

  public void trabajar() {
    System.out.println("> Soy " + nombre + " y estoy trabajando.");
    profesion.realizarTrabajo();
  }
}
```

### `Capataz.java`

Clase que gestiona la lista de `Obreros` y les notifica cuando hay una nueva tarea.

```java
public class Capataz {
  private List<Suscriptor> obreros = new ArrayList<>();
  private Tareas tareas;

  public void addObrero(Suscriptor obrero) {
    obreros.add(obrero);
  }

  public void removeObrero(Suscriptor obrero) {
    obreros.remove(obrero);
  }

  public void setOrden(Tareas tareas) {
    this.tareas = tareas;
    notifyObreros();
  }

  private void notifyObreros() {
    for (Suscriptor obrero : obreros) {
      obrero.notificar(tareas);
    }
  }
}
```

### `Main.java`

Clase principal que demuestra el uso de los patrones Observer y Decorator.

```java
public class Main {
  public static void main(String[] args) {
    Capataz capataz = new Capataz();

    Obrero obrero1 = new Obrero("Pedro");
    Obrero obrero2 = new Obrero("Juan");

    capataz.addObrero(obrero1);
    capataz.addObrero(obrero2);

    capataz.setOrden(Tareas.CONSTRUIR_PAREDES);
    obrero1.trabajar();
    obrero2.trabajar();

    capataz.setOrden(Tareas.CONECTAR_CANOS);
    obrero1.trabajar();
    obrero2.trabajar();

    capataz.setOrden(Tareas.PINTAR_PAREDES);
    obrero1.trabajar();
    obrero2.trabajar();
  }
}
```

---

Este ejemplo muestra cómo los patrones Observer y Decorator pueden trabajar juntos para gestionar dinámicamente las responsabilidades de los objetos en un sistema.