---
layout: post
title: Combo: Chain of Responsibility + Strategy
subtitle: Combinación de Patrones: cadena de responsabilidad y estrategia
thumbnail-img: /assets/img/posts/atlas_peatonal.png
tags: [Chain of Responsibility,Strategy, Patrones de diseño]
comments: true
author: Alejandro Urrestarazu
---

## Combinación de Patrones: Chain of Responsibility + Strategy

Imaginemos un sistema diseñado para facilitar el envoltorio de regalos para Papá Noel (también conocido como Santa Claus, Viejito Pascuero o San Nicolás). En este sistema, cada duende está especializado en manejar un tipo específico de regalo, como bombones, pelotas o peluches. Además, hay dos estilos de envoltura disponibles: bolsas y cajas.

Para abordar este problema de diseño de manera eficiente, podemos emplear una combinación de los patrones **Chain of Responsibility** y **Strategy**.

El patrón **Chain of Responsibility** nos permitirá establecer una cadena de duendes donde cada uno es responsable de envolver un tipo particular de regalo. Al pasar un regalo a través de esta cadena, se garantiza que será atendido por el duende adecuado.

Por otro lado, utilizaremos el patrón **Strategy** para proporcionar múltiples enfoques para el envoltorio de los regalos. Cada tipo de regalo puede tener diferentes estrategias de envoltura, como optar por bolsas o cajas, lo que permite personalizar la presentación según las características del regalo.

### Código de Ejemplo

#### Modelos

La clase `Regalo` representa un regalo individual que necesita ser envuelto. Cada objeto de esta clase tiene dos características fundamentales:

- **Tipo (`tipo`)**: Un atributo de tipo `TipoRegalo` que indica la categoría del regalo. Esto podría ser un bombón, una pelota o un peluche.

- **Contenido (`contenido`)**: Una cadena de texto que proporciona una descripción adicional del regalo o detalla lo que incluye. Puede ser útil para personalizar más aún el proceso de envoltura o simplemente para diferenciar entre regalos similares.

~~~
public class Regalo {
  private final TipoRegalo tipo;
  private final String contenido;

  public Regalo(TipoRegalo tipo, String contenido) {
    this.tipo = tipo;
    this.contenido = contenido;
  }

  public TipoRegalo getTipo() {
    return tipo;
  }

  public String getContenido() {
    return contenido;
  }
}
~~~

`TipoRegalo` es un `enum` que define los tipos posibles de regalos que un duende puede manejar. Al ser una enumeración, proporciona un conjunto fijo de constantes predeterminadas y es uno de los tipos en los que podría especializarse un duende:

~~~
public enum TipoRegalo {
    BOMBON,
    PELOTA,
    PELUCHE
}
~~~

Esta enumeración es fundamental para la correcta categorización y gestión de los regalos dentro del sistema, asegurando que el regalo sea tratado adecuadamente en función de su tipo.

#### Patrón Strategy

El patrón de diseño **Strategy** permite definir una familia de algoritmos, encapsular cada uno de ellos y hacerlos intercambiables. Esto fomenta la separación de la lógica de negocio y promueve la flexibilidad y reutilización del código.

En este caso, el patrón Strategy se utiliza para modelar diferentes formas de envolver los regalos, separando claramente el concepto del regalo en sí (su tipo y contenido) de la manera en que se envuelven (envoltura). Esto facilita la incorporación de nuevas estrategias de envoltura sin modificar las clases de regalo existentes.

La interfaz `Envoltura` define el contrato que todas las estrategias de envoltura deben seguir.

~~~
public interface Envoltura {
  void envolver(Regalo regalo);
}
~~~

La clase `Bolsa` es una implementación concreta de la interfaz `Envoltura` y representa una estrategia donde el regalo se envuelve utilizando una bolsa.


~~~
public class Bolsa implements Envoltura {
  @Override
  public void envolver(Regalo regalo) {

    System.out.println("El regalo: " + regalo.getContenido() + " se envolvió en una bolsa.");
  }
}
~~~

- **Método `envolver(Regalo regalo)`:** Este método sobrescribe el de la interfaz y proporciona la lógica específica para envolver el regalo en una bolsa. En este caso, muestra un mensaje que indica que el contenido del regalo se ha envuelto en una bolsa.



La clase `Caja` es otra implementación concreta de la interfaz `Envoltura`, representando una estrategia en la que el regalo se empaqueta dentro de una caja.

~~~
public class Caja implements Envoltura {
  @Override
  public void envolver(Regalo regalo) {
    System.out.println("El regalo: " + regalo.getContenido() + " se empaquetó en una caja.");
  }
}
~~~

### Patrón Chain of Responsibility

El patrón **Chain of Responsibility** permite procesar una solicitud por parte de varios objetos, sin especificar el receptor exacto. Cada objeto en la cadena decide si maneja la solicitud o la pasa al siguiente en la cadena. En este ejemplo, utilizamos el patrón para gestionar un proceso de envoltura de regalos mediante una serie de "duendes" especializados, donde cada duende maneja un tipo específico de regalo.
Es decir la lógica de procesamiento se distribuye entre los duendes, simplificando la gestión del flujo de trabajo y la modificación del mismo.


#### La clase abstracta `Duende` 

Define la estructura básica para los manejadores de la cadena de envoltura de regalos. Todos los tipos de duendes se derivan de esta clase base. Esta configuración permite que cada duende decida si debe procesar un regalo o pasarlo al siguiente duende en la cadena.

~~~
public abstract class Duende {
  protected Duende siguiente;

  public void setSiguiente(final Duende siguiente) {
    this.siguiente = siguiente;
  }

  public abstract void procesar(final Regalo regalo);
}
~~~

 **Campo `siguiente`:** Referencia al siguiente duende en la cadena. Si el duende actual no puede procesar el regalo, lo delega al siguiente objeto.

- **Método `setSiguiente(Duende siguiente)`:** Define el siguiente eslabón en la cadena de responsabilidades, estableciendo así la secuencia en que se procesarán los regalos.

- **Método Abstracto `procesar(Regalo regalo)`:** Obligatorio en todas las subclases. Cada duende implementa su versión de este método para determinar si es capaz de manejar el regalo o si debe pasarlo al siguiente en la cadena.

#### Implementaciones Concretas de `Duende`

Cada subclase de `Duende` se especializa en procesar un tipo específico de regalo y está asociada con una estrategia de envoltura particular. No obstante, la decisión de cómo se envuelve el regalo se delega a la estrategia de envoltura, y el duende solo se preocupa por procesar o delegar.


Duende que es especialista en bombones. Si el tipo de regalo coincide con la especialidad del duende, significa que debe encargarse de su envoltura. En caso contrario debe solicitarle al siguiente duende en la fila que lo procese.
Cada duende tiene un tipo de envoltura asociado a su especialidad pero es indiferente a la misma ya que solo le interesa la acción de envolver.


~~~
public class DuendeBombones extends Duende {
  private final Envoltura envoltura;

  public DuendeBombones(Envoltura envoltura) {
    this.envoltura = envoltura;
  }

  @Override
  public void procesar(Regalo regalo) {
    if (TipoRegalo.BOMBON.equals(regalo.getTipo())) {
      envoltura.envolver(regalo);
    } else if (siguiente != null) {
      siguiente.procesar(regalo);
    }
  }
}
~~~

Duende que se especializa en pelotas

~~~
public class DuendePelotas extends Duende {
  private final Envoltura envoltura;

  public DuendePelotas(final Envoltura envoltura) {
    this.envoltura = envoltura;
  }

  @Override
  public void procesar(Regalo regalo) {
    if (TipoRegalo.PELOTA.equals(regalo.getTipo())) {
      envoltura.envolver(regalo);
    } else if (siguiente != null) {
      siguiente.procesar(regalo);
    }
  }
}
~~~

Duende que es especialista en peluches.

~~~
public class DuendePeluches extends Duende {
  private final Envoltura envoltura;

  public DuendePeluches(Envoltura envoltura) {
    this.envoltura = envoltura;
  }

  @Override
  public void procesar(Regalo regalo) {
    if (TipoRegalo.PELUCHE.equals(regalo.getTipo())) {
      envoltura.envolver(regalo);
    } else if (siguiente != null) {
      siguiente.procesar(regalo);
    }
  }
}
~~~


#### Integración de Patrones

Ahora ponemos todo junto e integramos los patrones de diseño **Chain of Responsibility** y **Strategy** para crear un sistema flexible de envoltura de regalos. 


Este sistema permite asignar regalos específicos a duendes especialistas que, a su vez, utilizan diferentes estrategias de envoltura.


#### Clase Principal: `Main`

~~~
public class Main {
  public static void main(String[] args) {
    // Crear instancias de estrategias de envoltura
    Envoltura envolturaBolsa = new Bolsa();
    Envoltura envolturaCaja = new Caja();

    // Crear duendes especializados en los distintos tipos de regalos
    Duende duendeBombones = new DuendeBombones(envolturaCaja);
    Duende duendePelotas = new DuendePelotas(envolturaBolsa);
    Duende duendePeluches = new DuendePeluches(envolturaCaja);


    // Configuración de la cadena de responsabilidad en la cual cada duende delegará
    duendeBombones.setSiguiente(duendePelotas);
    duendePelotas.setSiguiente(duendePeluches);

    // Creación de varios regalos para el procesamiento
    Regalo regalo1 = new Regalo(TipoRegalo.BOMBON, "Bombones de chocolate");
    Regalo regalo2 = new Regalo(TipoRegalo.PELOTA, "Pelota de futbol");
    Regalo regalo3 = new Regalo(TipoRegalo.PELOTA, "Pelota de tenis");
    Regalo regalo4 = new Regalo(TipoRegalo.PELUCHE, "Oso teddy");

    // Procesamiento de regalos a través de la cadena de responsabilidad
    duendeBombones.procesar(regalo1);
    duendeBombones.procesar(regalo2);
    duendeBombones.procesar(regalo3);
    duendeBombones.procesar(regalo4);
  }
}
~~~


### Ejecución del Código

Al ejecutar el código anterior, obtendremos la siguiente salida:

~~~~
El regalo: Bombones de chocolate se empaquetó en una caja.
El regalo: Pelota de futbol se envolvió en una bolsa.
El regalo: Pelota de tenis se envolvió en una bolsa.
El regalo: Oso teddy se empaquetó en una caja.
~~~~

### Análisis final de este Combo

En este ejemplo, hemos visto cómo el patrón de diseño **Chain of Responsibility** se utiliza para manejar diferentes tipos de solicitudes (representadas por los regalos), a través de una cadena de "handlers" especializados (los duendes). Cada duende es responsable de procesar un tipo específico de regalo. Si un duende no puede procesar un regalo, este se delega al siguiente duende en la cadena.


Simultáneamente, el patrón **Strategy** se utiliza para separar la lógica de envoltura de los regalos en dos estrategias distintas, logrando una separación clara entre el concepto de regalo y el de su envoltura. Esto proporciona un gran beneficio en términos de flexibilidad y mantenibilidad: si se deciden cambiar las estrategias de envoltura, solo será necesario modificar las estrategias de `Envoltura`, sin afectar la lógica de los duendes o el procesamiento del sistema en su conjunto.


Esta integración de patrones resalta cómo los paradigmas de diseño pueden conjugarse para abordar problemas complejos de manera eficiente, organizando y flexibilizando el flujo de trabajo dentro del sistema.
