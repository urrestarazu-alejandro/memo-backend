# Humanos y Agentes en Bucles de Ingeniería de Software

Foto de Kief Morris

**Kief Morris**

Kief Morris vive en Londres y trabaja como especialista global en tecnología en la nube para Thoughtworks.

---

Este artículo forma parte de "Explorando IA Generativa". Una serie que captura las exploraciones de tecnólogos de Thoughtworks sobre el uso de tecnología de IA generativa para el desarrollo de software.

**4 de marzo de 2026**

¿Deberían los humanos mantenerse fuera del proceso de desarrollo de software y dejar que el código fluya naturalmente, o necesitamos desarrolladores revisando cada línea de código? Creo que la respuesta es enfocarse en el objetivo de convertir ideas en resultados. El lugar correcto para nosotros los humanos es construir y gestionar el bucle de trabajo en lugar de dejar que los agentes actúen por su cuenta o microgestionar lo que producen. Llamemos a esto "sobre el bucle".

Como creadores de software, construimos un resultado convirtiendo nuestras ideas en software funcional e iterando a medida que aprendemos y evolucionamos nuestras ideas. Este es el "bucle del por qué". Hasta que llegue el levantamiento de la IA, los humanos ejecutaremos este bucle porque somos quienes queremos lo que produce.

El proceso de construir el software es el "bucle del cómo". El bucle del cómo implica crear, seleccionar y utilizar artefactos intermedios como código, pruebas, herramientas e infraestructura. También puede incluir documentación como diseños técnicos y ADRs. Estamos acostumbrados a verlos muchos como entregables, pero los artefactos intermedios son realmente solo un medio para lograr un fin.

**Los bucles de retroalimentación en la entrega de software: Un bucle superior "por qué" conectado a un bucle inferior "cómo". El bucle del por qué itera sobre una idea y software funcional. El bucle del cómo itera sobre artefactos intermedios como especificaciones, código y pruebas.**

**Figura 1: El bucle del por qué itera sobre ideas y software, el bucle del cómo itera sobre la construcción del software**

En realidad, el bucle del cómo contiene múltiples bucles. El bucle del cómo más externo especifica y entrega el software funcional para el bucle del por qué. El bucle más interno genera y prueba código. Los bucles intermedios desglosan niveles más altos de trabajo en tareas más pequeñas para que los bucles inferiores las implementen, y luego validen los resultados.

**Múltiples niveles de bucles "cómo" apoyando el bucle "por qué". Un bucle exterior itera sobre una característica. Un bucle central itera sobre historias. Un bucle interior itera sobre código.**

**Figura 2: El bucle del cómo tiene múltiples niveles de bucles internos que trabajan en incrementos más pequeños de la implementación completa**

Estos bucles pueden seguir prácticas como revisiones de diseño y etapas de pruebas. Podrían construir sistemas aplicando enfoques arquitectónicos y patrones de diseño como microservicios o CUPID. Como los artefactos intermedios que salen de estas prácticas y patrones, todos ellos son un medio para lograr el resultado que realmente nos importa.

Pero, ¿quizás no nos importan los medios utilizados para lograr nuestros objetivos? ¿Quizás podemos simplemente dejar que los LLM ejecuten el bucle del cómo como quieran?

## Humanos fuera del bucle

Muchas personas han descubierto la alegría de dejar que los humanos se enfoquen en el bucle del por qué, y dejen el bucle del cómo para que los agentes se encarguen. Esta es la definición común de "vibe coding". Algunas interpretaciones del Desarrollo Dirigido por Especificaciones (SDD) son muy similares, con humanos invirtiendo esfuerzo en escribir el resultado que queremos, pero sin dictar cómo el LLM debe lograrlo.

**Humanos fuera del bucle: Un bucle superior "por qué" con un humano en la parte superior. El bucle itera sobre una idea y software funcional. Esto se conecta a un bucle inferior "cómo" por un robot, que itera sobre artefactos intermedios como código.**

**Figura 3: Humano ejecuta el bucle del por qué, agente ejecuta el bucle del cómo.**

El atractivo de que los humanos se mantengan fuera del bucle del cómo es que el bucle del por qué es el que realmente nos importa. El desarrollo de software es un dominio complicado que inevitablemente se hunde en procesos sobreingenierizado y en lidiar con deuda técnica. Y cada nuevo modelo de LLM hasta ahora ha mejorado en tomar una solicitud del usuario y escupir software funcional. Si no estás satisfecho con lo que escupe, dile al LLM y te dará otra iteración.

Si los LLM pueden escribir y cambiar código sin nosotros, ¿nos importa si el código es "limpio"? No importa si un nombre de variable expresa claramente su propósito mientras un LLM pueda descubrirlo. ¿Quizás ni siquiera necesitamos preocuparnos en qué idioma está escrito el software?

Nos importa la calidad externa, no la calidad interna por sí misma. La calidad externa es lo que experimentamos como usuario u otro interesado del software. La calidad funcional es un requisito, el sistema necesita funcionar correctamente. Y para software en producción también nos importa la calidad operativa no funcional. Nuestro sistema no debería bloquearse, debería ejecutarse rápidamente, y no queremos que publique datos confidenciales en sitios de redes sociales. No queremos ejecutar facturas masivas de alojamiento en la nube, y en muchos dominios necesitamos pasar auditorías de cumplimiento.

Nos importa la calidad interna cuando afecta los resultados externos. Cuando los programadores humanos rastreaban la base de códigos, agregaban características y corregían errores, podían hacerlo más rápida y confiablemente en una base de códigos limpia. Pero, ¿a los LLM no les importa la experiencia del desarrollador?

En teoría, nuestros agentes LLM pueden producir una base de códigos enormemente complicada y enmarañada, probarla y corregirla ejecutando comandos de shell ad hoc, y eventualmente producir un sistema correcto, compatible y de alto rendimiento. Solo conseguimos que nuestros enjambres hagan el Ralph Wiggum en ello, ejecutándose en centros de datos que extraen energía de los océanos hirviendo en los que flotan, y eventualmente llegaremos allí.

En la práctica, una base de códigos limpiamente diseñada y bien estructurada tiene beneficios externos importantes sobre una base de códigos desordenada. Cuando los LLM pueden entender y modificar más rápidamente el código, trabajan más rápido y se pierden menos. Sí nos importa el tiempo y el costo de construir los sistemas que necesitamos.

## Humanos en el bucle

Algunos desarrolladores creen que la única forma de mantener la calidad interna es estar estrechamente involucrado en los niveles más bajos del bucle del cómo. A menudo, cuando un agente se atasca en algún código roto, un desarrollador humano puede comprenderlo y corregirlo en segundos. La experiencia y el juicio humano todavía superan a los LLM en muchas situaciones.

**Humanos en el bucle: Un bucle único "por qué+cómo" con un humano en la parte superior y un robot en la inferior. El bucle itera sobre idea, artefactos intermedios como código y pruebas, y software funcional.**

**Figura 4: Humano ejecuta el bucle del por qué y el bucle del cómo**

Cuando la gente habla de "humanos en el bucle", a menudo se refieren a humanos como guardianes dentro del bucle más interno donde se genera código, como inspeccionar manualmente cada línea de código creada por un LLM.

El desafío cuando insistimos en estar demasiado involucrados en el proceso es que nos convertimos en un cuello de botella. Los agentes pueden generar código más rápido de lo que los humanos pueden inspeccionarlo manualmente. Los informes sobre productividad de desarrolladores con IA muestran resultados mixtos, lo que puede deberse en parte a que los humanos dedican más tiempo a especificar y revisar código del que ahorran obteniendo que los LLM lo generen.

Necesitamos adoptar el pensamiento clásico de "desplazar a la izquierda". Hace tiempo escribíamos todo nuestro código, lo pasábamos a un equipo de QA para probar, y luego intentábamos corregir suficientes errores para lanzar una versión. Luego descubrimos que cuando los desarrolladores escriben y ejecutan pruebas mientras trabajamos, encontramos y corregimos problemas inmediatamente, lo que hace que todo el proceso sea más rápido y confiable.

Lo que funciona para los humanos puede funcionar también para los agentes. Los agentes producen mejor código cuando pueden evaluar la calidad del código que producen ellos mismos en lugar de confiar en que lo comprobemos nosotros. Necesitamos instruirles sobre lo que buscamos y darles orientación sobre las mejores formas de lograrlo.

## Humanos sobre el bucle

En lugar de inspeccionar personalmente lo que producen los agentes, podemos mejorar su capacidad de producirlo. La colección de especificaciones, controles de calidad y orientación del flujo de trabajo que controlan diferentes niveles de bucles dentro del bucle del cómo es el arnés del agente. La práctica emergente de construir y mantener estos arneses, Ingeniería del Arnés, es cómo los humanos trabajan sobre el bucle.

**Humanos sobre el bucle: Un bucle superior "por qué" conectado a un bucle inferior "cómo" por un humano. El bucle del por qué itera sobre una idea y software funcional. Un robot se sienta en la parte inferior del bucle inferior "cómo", que itera sobre artefactos intermedios como especificaciones y código.**

**Figura 5: Humano define el bucle del cómo y el agente lo ejecuta**

Algo como el concepto de sobre el bucle también ha sido descrito como el "bucle central", incluso por participantes del Retiro del Futuro del Desarrollo de Software. El bucle central se refiere a mover la atención humana a un bucle de nivel superior que el bucle de codificación.

La diferencia entre en el bucle y sobre el bucle es más visible en lo que hacemos cuando no estamos satisfechos con lo que el agente produce, incluyendo un artefacto intermedio. La forma "en el bucle" es corregir el artefacto, ya sea editándolo directamente o diciéndole al agente que haga la corrección que queremos. La forma "sobre el bucle" es cambiar el arnés que produjo el artefacto para que produzca los resultados que queremos.

Mejoramos continuamente la calidad de los resultados que obtenemos mejorando continuamente el arnés. Y entonces podemos llevarlo al siguiente nivel.

## La rueda de paletas agnóstica

El siguiente nivel es que los humanos dirijan a los agentes para gestionar y mejorar el arnés en lugar de hacerlo manualmente.

**Rueda de paletas: Un bucle superior "por qué" conectado a un bucle inferior "cómo" por un humano y un robot. El bucle del por qué itera sobre una idea y software funcional. El bucle del cómo itera sobre artefactos intermedios como especificaciones.**

**Figura 6: Humano dirige agente para construir y mejorar el bucle del cómo**

Construimos la rueda de paletas dando a los agentes la información que necesitan para evaluar el desempeño del bucle. Un buen punto de partida son las pruebas y evaluaciones ya incluidas en el arnés. La rueda de paletas se vuelve más poderosa a medida que le proporcionamos señales más ricas. Agrega etapas de canalización que miden el desempeño y validan escenarios de fallo. Alimenta datos operacionales de la producción, registros de viajes de usuario y resultados comerciales para ampliar el alcance y la profundidad de lo que los agentes pueden analizar.

Para cada paso del flujo de trabajo, tenemos que el agente revise los resultados y recomiende mejoras al arnés. El alcance incluye mejoras a cualquiera de las partes anteriores del flujo de trabajo que podrían mejorar esos resultados. Lo que tenemos ahora es un arnés de agente que genera recomendaciones para mejorarse a sí mismo.

Comenzamos considerando las recomendaciones de manera interactiva, solicitando a los agentes que implementen cambios específicos. También podemos hacer que los agentes agreguen sus recomendaciones al registro de tareas del producto, para que podamos priorizarlas y programarlas para que los agentes las recojan, apliquen y prueben como parte del flujo automatizado.

Conforme ganamos confianza, los agentes pueden asignar puntuaciones a sus recomendaciones, incluyendo los riesgos, costos y beneficios. Podríamos entonces decidir que las recomendaciones con ciertas puntuaciones deben aprobarse e implementarse automáticamente.

En algún punto, esto podría verse mucho como humanos fuera del bucle, vibe coding de la vieja escuela. Sospecho que eso será cierto para tipos estándar de trabajo que se realizan a menudo a medida que los bucles de mejora alcancen rendimientos decrecientes. Pero al ingeniería del arnés no solo obtendremos soluciones "lo suficientemente buenas" únicas, obtendremos sistemas robustos, quizás incluso antifrágiles que se mejoren continuamente a sí mismos.
