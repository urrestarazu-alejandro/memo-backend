---
layout: post
title: "Resolver dos veces: reconocer vs. poseer un patrón"
subtitle: "Por qué resolver un ejercicio una sola vez no es suficiente para dominarlo"
thumbnail-img:  # TODO: agregar imagen en /assets/img/posts/
tags: [algoritmos, entrevistas-tecnicas, practica-deliberada, aprendizaje, leetcode]
comments: true
author: Alejandro Urrestarazu
---

Si practicás ejercicios de algoritmos para entrevistas técnicas, seguramente ya pasaste por esto: resolvés un
problema, ves la solución, entendés perfecto la lógica... y una semana después no podés reproducirla desde cero.
No es que no entendiste el problema. Es que nunca lo generaste vos mismo — solo lo reconociste.

Esa distinción entre reconocer y generar es la base de una técnica de práctica deliberada que vale la pena adoptar,
sin importar cuántos ejercicios lleves resueltos.

## Tabla de Contenidos

- [El problema con las listas de ejercicios tradicionales](#el-problema-con-las-listas-de-ejercicios-tradicionales)
- [La técnica: segunda resolución, en frío](#la-técnica-segunda-resolución-en-frío)
- [Por qué el segundo intento es el que realmente importa](#por-qué-el-segundo-intento-es-el-que-realmente-importa)
- [Cómo elegir qué problemas merecen este tratamiento](#cómo-elegir-qué-problemas-merecen-este-tratamiento)
- [Organizar la práctica por patrón, no por dificultad](#organizar-la-práctica-por-patrón-no-por-dificultad)
- [En resumen](#en-resumen)

{: .box-warning}
Este post asume que ya sabés identificar qué patrón usar frente a un problema nuevo. Si todavía te cuesta esa
parte, arrancá por [La pregunta que revela el patrón](/2026-08-12-pregunta-que-revela-el-patron/) — cubre cómo
encontrar la estructura de datos correcta antes de programar.

## El problema con las listas de ejercicios tradicionales

La mayoría de las listas de práctica están ordenadas por dificultad, por frecuencia en entrevistas, o por empresa.
Eso hace que caigamos en la trampa de acumular cantidad: resolver 200 problemas distintos, marcarlos como "hechos",
y sentir que progresamos.

Pero resolver un problema una sola vez, incluso si lo lográs sin ayuda, construye principalmente reconocimiento.
La próxima vez que veas ese patrón vas a pensar "ah, esto se parece a...", pero no necesariamente vas a poder
escribir la solución de memoria bajo presión, que es exactamente lo que pide una entrevista real.

## La técnica: segunda resolución, en frío

La propuesta es simple de enunciar y exigente de cumplir:

1. **Resolvé el ejercicio honestamente.** Sin mirar la solución hasta haber hecho un intento real y agotado tus ideas.
2. **Anotá el insight clave y el error que cometiste.** Cada problema bien elegido tiene un detalle sutil que casi
   todos pifian la primera vez (un chequeo de límite, un orden de operaciones, una condición de corte).
3. **Dejalo reposar unos días.** El objetivo es que el recuerdo de la solución se desvanezca lo suficiente como
   para que el segundo intento sea generación real, no memoria de corto plazo.
4. **Volvé a resolverlo desde una pantalla en blanco.** Sin notas, sin la solución anterior a la vista. Si lo
   lográs, el patrón es tuyo. Si no, el ejercicio vuelve a la rotación — no importa cuántas veces lo hayas
   "resuelto" antes.

{: .box-success}
La primera resolución te enseña el patrón. La segunda, en frío, es la que confirma que lo ownaste.

## Por qué el segundo intento es el que realmente importa

Pensalo así: una entrevista técnica nunca te va a dar el ejercicio exacto que practicaste. Te va a dar una
variación, con el mismo patrón pero disfrazado distinto. Si tu única prueba de dominio fue leer una solución ajena
y asentir, no tenés forma de saber si vas a poder aplicar ese patrón bajo presión, con un problema levemente
distinto y sin la solución a mano.

El segundo solve cold es, en la práctica, un simulacro de eso: sin red, sin pistas, reconstruyendo la lógica desde
el razonamiento del patrón, no desde la memoria del código.

## Cómo elegir qué problemas merecen este tratamiento

No todos los ejercicios ameritan una segunda vuelta. Conviene priorizar los que cumplen dos condiciones a la vez:

- Son un ejemplo limpio de un patrón recurrente (hash maps, sliding window, backtracking, DP, grafos sobre grillas,
  etc.), no un caso exótico que rara vez se repite.
- Tienen un detalle específico que casi siempre se pifia la primera vez — una condición límite, un orden de
  chequeos, una estructura de datos que hay que restaurar después de usarla.

Esa intersección es donde está el mayor retorno por hora de práctica. Un problema durísimo pero aislado enseña
poco; un problema simple pero con una trampa sutil y reutilizable enseña mucho.

## Organizar la práctica por patrón, no por dificultad

Una vez que tenés un patrón dominado — por ejemplo, el truco del complemento con hash map en Two Sum — el
siguiente paso no es saltar a un patrón completamente distinto, sino profundizar: resolver más variantes del mismo
patrón (problemas de conteo, anagramas, pares) antes de pasar a sliding window o DFS.

Esto refuerza el reflejo en lugar de coleccionar soluciones aisladas. La meta no es "haber visto" muchos problemas,
sino tener un puñado de movimientos mentales tan automatizados que los reconozcas — y los generes — apenas
aparece la forma del problema, aunque el enunciado sea distinto al que practicaste.

## En resumen

{: .box-success}
- Resolver un ejercicio una vez construye reconocimiento; resolverlo de nuevo, en frío y días después, construye
  generación — que es lo que realmente se evalúa en una entrevista.
- Elegí ejercicios que sean ejemplos limpios de un patrón y que tengan un detalle sutil fácil de pifiar la primera vez.
- Agrupá la práctica por patrón, no por dificultad, y profundizá antes de saltar a otro tema.
- Un problema no está "terminado" cuando entendés la solución. Está terminado cuando podés reproducirla desde
  cero, sin ayuda, unos días después.

La calidad de la práctica le gana a la cantidad. Doce problemas bien trabajados, con su segunda vuelta en frío,
valen más que cien resueltos una sola vez y olvidados a la semana.
