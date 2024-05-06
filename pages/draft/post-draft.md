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

## LSP: Principio de sustitución de Liskov

Es la **L** en SOLID y viene del ingles "Liskov Substitution Principle".

En 1988, Barbara Liskov formuló la siguiente propiedad de sustitución:

{: .box-success} 
si para cada objeto o1 de tipo **S** hay un objeto o2 de tipo **T** tal que para todos los programas P definidos en términos de **T**, el comportamiento de P no cambia cuando se sustituye o1 para o2 entonces **S** es un *subtipo* de **T**.

En esta definición tenemos el tipo T también llamado **tipo base** el cual tiene métodos que pueden ser anulados por el subtipo.
Tenemos el subtipo S que es una clase que herada del tipo T, 
Además al invocar el programa no van a saber, y no deberían saberlo, que subtipo están invocando. Esto se deba a que el comportamiento del programa no debe cambiar tanto haciendo uso de T o de S.


### Reglas del contrato de Liskov

¿Cómo hacer para no violar el principio LSP?

* Las condiciones previas no se pueden reforzar en un subtipo:
Siempre que una subclase anula un método existente que contiene condiciones previas, nunca debe fortalecer las condiciones previas existentes. Hacerlo potencialmente rompería cualquier código de cliente que ya asuma que la subclase define los contratos de condiciones previas más fuertes posibles para cualquier método.

* Las poscondiciones no se pueden debilitar en un subtipo:
Al aplicar condiciones posteriores a subclases, se aplica la regla opuesta. En lugar de no poder fortalecer las poscondiciones, no puedes debilitarlas. En cuanto a todas las reglas de sustitución de Liskov relacionadas con los contratos, la razón por la que no se pueden debilitar las poscondiciones es porque los clientes existentes podrían romper cuando se les presente la nueva subclase. En teoría, si cumple con el LSP, cualquier subclase que cree debería ser utilizable por todos los clientes existentes sin provocar fallos inesperados.

* Las invariantes del supertipo deben conservarse en un subtipo.
Siempre que se crea una nueva subclase, debe seguir respetando todos los invariantes de datos que formaban parte de la clase base. La violación de este principio es fácil de introducir porque las subclases tienen mucha libertad para introducir nuevas formas de cambiar datos que antes eran privados.

