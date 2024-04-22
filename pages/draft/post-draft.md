---
layout: post
title: Principio de Abierto-Cerrado
subtitle: Un módulo debe tener una sola razón para cambiar.
#gh-repo: daattali/beautiful-jekyll
#gh-badge: [star, fork, follow]
thumbnail-img: https://es.wikipedia.org/wiki/Dualidad_onda_corp%C3%BAsculo#/media/Archivo:Dualite.jpg
tags: [solid]
#comments: true
#mathjax: true
author: Alejandro Urrestarazu
---

## OCP: Open/Closed principle

Es la **O** en SOLID y viene del ingles "open/closed principle".
Este término fue creado por por Bertrand Meyer en 1988, y definio la regla como:

{: .box-success} 
Un artefacto de software debe estar abierto a la extensión pero cerrado a la modificación.

Esta definición parece ser contradictoria por incluir en la definicion dos cosas opuestas pero en realidad hacen referencia a distintas cosas. 

### ¿Cómo puede ser algo abierto y cerrado a la vez?

Una segunda defición más clara es la que nos da Robert C. Martin (Desarrollo ágil de software: principios, patrones y prácticas - Prentice Hall, 2003):

{: .box-note}
**“Abierto para extensión”:** Esto significa que el comportamiento del módulo se puede ampliar. A medida que cambian los requisitos de la aplicación, podemos ampliar el módulo con nuevos comportamientos que satisfagan esos cambios. En otras palabras, podemos cambiar lo que hace el módulo.

{: .box-note}
**“Cerrado a modificaciones”:** Ampliar el comportamiento de un módulo no da como resultado cambios en el código fuente o binario del módulo. La versión binaria ejecutable del módulo, ya sea en una biblioteca enlazable, una DLL o un .jar de Java, permanece intacta.

Es decir el código debe tener una naturaleza dual como la luz que se comporta como onda y particula a la vez.
En este caso nuestro código debe cumplir con requisitos y funcionalidades nuevas, y por otro lado aceptar estas funciones minimizando la edición del dódigo existente (Lo ideal es no tener que tocar para nada el código).
Parece imposible, ¿no?.

Una manera de lidiar con esto es a traves de una grafo de dependencias 

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```  