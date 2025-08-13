---
layout: post
title: BDD
subtitle: BDD
#gh-repo: daattali/beautiful-jekyll
#gh-badge: [star, fork, follow]
#thumbnail-img: https://es.wikipedia.org/wiki/Dualidad_onda_corp%C3%BAsculo#/media/Archivo:Dualite.jpg
tags: []
#comments: true
#mathjax: true
author: Alejandro Urrestarazu
---


La **Behavior-Driven Development (BDD)** es un enfoque de desarrollo de software que centra la atención en los casos de uso de las funciones del sistema. Su objetivo
principal es garantizar que el software cumpla con lo que se espera de manera consistente y predecible.

### Conceptos clave de BDD:
1. **Casos de Uso (Use Cases):** Son descripciones detalladas de las funcionalidades del sistema, incluyendo los accionamientos (acciones) y los valores (valores). Un caso
de uso representa lo que el usuario espera que haga con el software.
2. **Testes:** Sustituyen las pruebas unitarias tradicionales. Los testes secriben en términos descriptivos, basados en los casos de uso, y verifican si el código cumple con
lo esperado.
3. **Implementación:** Basada en los testes, el código se desarrolla para cumplir con los requisitos declarados en los casos de uso.

### Estructura general de BDD:
1. **Establecer los Casos de Uso:**
   - Definir qué hace el sistema.
   - Especificar las acciones y los valores associados.

2. **Escribir Testes:**
   - Crear testes descriptivos en lugar de enunciados formales.
   - Verificar que el código cumpla con los casos de uso definidos.

3. **Desarrollar Código:**
   - Escribir el código asegurándose de que cumpla con los testes.
   - Los testes guían el desarrollo y evitan la obsolescencia funcional.

### beneficios de BDD:
- Mejora la claridad de los requisitos.
- Incrementa la cobertura de testes en el desarrollo.
- Asegura que el código sea compatible con los casos de uso reales del usuario.
- Simplifica la documentación y la comunicación entre los desarrolladores, los dueños del proyecto y los usuarios finales.

### Ejemplo básico:
Supongamos que se está desarrollando una aplicación de compra digital. Un caso de uso podría ser:

> **"Dado un Lista de productos en el carrito, la compra debería calcular el total correcto con impuestos."**

Un teste associated con este caso de uso podría verificar si el cálculo del total incluye los impuestos correctamente.

### Herramientas comunes para BDD:
- **Cucumber:** Un lenguaje natural para definir los casos de uso en inglés, y luego map those definitions a diferentes lenguajes como JUnit o xUnit.
- **Spython:** Un framework para escribir testes en Python basados en casos de uso.

### Resumen:
La BDD es una metodología de desarrollo que enfatiza en los casos de uso para definir claramente lo que el sistema debe hacer. A través de los testes descriptivos y la
documentación, el desarrollo se dirige hacia una implementación funcional y consistente.


### Introducción

La **BDD (Behaviors-Driven Development)** y la **TDD (Test-Driven Development)** son dos metodologías de desarrollo de software diferentes, cada una con su propia enfoque. A continuación, analizaremos sus conceptos principales, procesos de desarrollo, y cómo se aplican en contextos reales.

### 1. Test-Driven Development (TDD)

#### Concepto
La **Test-Driven Development** es un enfoque de programación que prioriza la testación para guiar el desarrollo del código. En lugar de empezar con la implementación del
código, se inicia con los tests correspondientes a las funcionalidades requeridas.

#### Proceso de Desarrollo
El proceso TDD sigue un cíclo bien conocido:

- **Red (fail)**: Escribir tests que fallen (fallen) para capturar las expectativas y OUTPUTS.
- **Green (Implement)**: Implementar el código mínimo necesario para hacer los tests pasar.
- **Refactor**: Mejorar el código para mejorar su organización, legibilidad y rendimiento, sin cambiar su funcionalidad.

#### avantages
- Asegura la calidad del código a través de la testación automática.
- Desenvuelve features de manera incremental, asegurando que cada parte del código cumpla con los requisitos.

### 2. Behavior-Driven Development (BDD)

#### Concepto
La **Behavior-Driven Development** se centra en los comportamientos necesarios para cumplir con las necesidades del negocio. Utiliza lenguajes específicos como **Gherkin**
para comunicar con los Stakeholders de manera clara y consistente.

#### Proceso de Desarrollo
El proceso BDD implica:

- **Definir características**: Identificar las características (features) que el sistema debe ofrecer, basadas en User Stories con OUTPUTS de aceptación.
- **Contextos**: Definir contextos que describen el entorno en el que se aplican los User Stories.
- **Scenarios**: Describir las situaciones que el sistema debe gestionar, y cómo se verán afectados por las interacciones del usuario.

#### ventajas
- Asegura que los desarrolladores y los actores del sistema están alineados en Comportamientos (behaviors) para cumplir con las necesidades del negocio.
- Fomenta la colaboración entre equipes de desarrollo y no-technical teams, asegurando comprensión común de las especificaciones.

### Comparación entre BDD y TDD

| **Comparación**            | **TDD**                          | **BDD**                          |
|---------------------------|------------------------------------|------------------------------------|
| **Focus**                  | Tests como guía para el código     | Características, User Stories, Scenarios   |
| **Proceso de Desarrollo**  | Red > Green > Refactor               | Identificar características > Definir User Stories > Definir contextos > Escenárias > Pruebas |
| **Output**                 | Código bien testado                 | Sistemas que cumplen con las especificaciones de negocio y están bien testados  |
| **Collaboration**          | Menos colaboración entre eqs        | Mayor colaboración, especialmente con Stakeholders no técnicos  |

### Contexto de Aplicación

- **TDD es útil en proyectos donde:**
  - Se necesita una calidad robusta del código.
  - Los tests son una parte integral del proceso de desarrollo.
  - Se usan metodologías que priorizan la testación.

- **BDD es útil en proyectos donde:**
  - Se necesitan claras especificaciones de negocio en Comportamientos (behaviors).
  - Existe una colaboración importante entre desarrolladores y Stakeholders no técnicos.
  - Se busca alinear el desarrollo con las necesidades del negocio de manera clara y consistente.

### Integración de BDD y TDD

Aunque ambos metodologías tienen fines diferentes, es posible que se utilice una en un proyecto inicial para definir los User Stories y Scenarios, y otra en la etapa de
testación para automática la testación. Sin embargo, su integración puede ser compleja y no siempre es necesaria, ya que cada metodología tiene su propia manera de abordar
el desarrollo del software.

### Casos de Uso

- **TDD se usa en proyectos más pequeños o medianos en tamaño, donde la calidad del código es fundamental.**
- **BDD se usa en proyectos más grandes, especialmente cuando hay una necesidad de claridad en las especificaciones de negocio y colaboración entre eqs es crucial.**

### Conclusión

Ambas metodologías, BDD y TDD, son powerful para abordar diferentes aspectos del desarrollo del software. **BDD** se centra en alinear el desarrollamientoun con las
necesidades del negocio a través de Comportamientos, mientras que **TDD** se centra en testar y asegurar la calidad del código. La elección entre ellas dependerá del
contexto del proyecto y los objetivos específicos.

---


Behaviour-Driven Development (BDD) es un proceso de desarrollo de software que se apoya en Cucumber. Sin embargo, hay más a BDD que solo
usarlo. En lugar de ello, BDD es una forma de trabajar entre equipos de software que cierra la brecha entre personas técnicas y no técnicas mediante el fomento de la
colaboración y un enfoque en iteraciones rápidas para mejorar la comunicación y el flujo de valor.

El BDD se enfoca en trabajar en iteraciones rápidas y pequeñas, con un enfoque en documentar ejemplos concretos que ilustran cómo desea actuar el sistema, usando estos
ejemplos para guiar la transición desde la concepción a la implementación.

El BDD se combina con agile en procesos de desarrollo ya existentes. El BDD es una serie de plugins para su proceso existente que le permitirá a su equipo entregar a tiempo
y seguro lanzamientos de software funcionales que cumplen las necesidades evolucionarias de su organización.

Los tres pasos principales del BDD son la Fase de Descubrimiento, donde se trata el problema de manera colaborativa y se buscan ejemplos concretos para guiar las decisiones;
la Fase de Formulación, donde estas ideas se documentan para confirmar que hay un acuerdo entre todos sobre lo que debe ser construido; y la Fase de Automatización, donde se
desarrolla el código utilizando pruebas automáticas guiadas.

El objetivo es que cada cambio sea pequeño y repetido, con la intención de reducir el riesgo y maximizar el valor agregado a su sistema. El BDD ayuda a las equipos a tener
las conversaciones correctas al momento para reducir el tiempo gastado en reuniones y aumentar la cantidad de código útil producido.


---

Behaviour-Driven Development (BDD) es una forma de desarrollo de software que enfoca en colaboración entre diferentes roles, como desarrolladores, testeres, analistas y
product owners, para construir un sistema que satisfaga las necesidades empresariales. BDD se basa en el enfoque de trabajar en pequeñas iteraciones y en la creación de ejemplos concretos que ilustran cómo desea funcionar el sistema.

El BDD utiliza un enfoque denominado "specifications" para documentar estos ejemplos, es decir, especificaciones que describen las características del sistema a desarrollar
y pueden ser entendidas por personas y máquinas. Estas especificaciones se utilizan para guiar el desarrollo de código, proporcionando una forma rápida y eficaz de verificar
que el sistema está funcionando correctamente.

La documentación de BDD también es automatizada, lo que significa que los ejemplos se pueden ejecutar y comparar con la implementación real para verificar que el sistema
está cumpliendo con las especificaciones definidas. Esto reduce la carga de trabajo de pruebas manuales y aumenta la confianza en el código.

El BDD también proporciona un lenguaje común entre los diferentes roles involucrados en el desarrollo del sistema, lo que facilita la comunicación e incrementa la eficiencia
en el proceso de desarrollo. El objetivo final es entregar un producto que funciona correctamente y satisface las necesidades de la empresa.


---


Gherkin es una sintaxis de descripción utilizada en Behaviour-Driven Development (BDD) para describir las especificaciones del sistema a desarrollar. En el siguiente
ejemplo, vemos un escenario y sus pasos escritos en Gherkin:
```
Escenario: El usuario puede registrarse
    Dado que el usuario no está registrado
    Cuando ingresa su correo electrónico y contraseña en el formulario de registro
    Cuando presiona el botón "Registrar"
    Entonces el sistema debe mostrar una pantalla de confirmación y guardar la información del usuario en la base de datos
```
Este escenario (Scenario) describe cómo debería funcionar el formulario de registro. El usuario no está registrado, ingresa su correo electrónico y contraseña en el formulario de registro, presiona el botón "Registrar" y debe ver una pantalla de confirmación que indica que se ha guardado la información del usuario en la base de datos.

Gherkin proporciona una forma rápida y eficaz de documentar ejemplos concretos para guiar el desarrollo de código, facilitando la comunicación entre los diferentes roles involucrados en el proceso de desarrollo y reduciendo el tiempo gastado en reuniones.


---


El BDD (Behavior-Driven Development) en Cucumber se utiliza para escribir pruebas funcionales que describen los comportamientos esperados de un software. Las pruebas se
escrituran en "Features" y cada feature consiste en uno o más "Scenarios".

El equipo completo colabora al principio para establecer el lenguaje y el estilo utilizados en las pruebas. Más tarde, se puede realizar de manera eficiente por un par
formado por un desarrollador (o alguien responsable de la automatización) y un tester (o alguien responsable de la calidad), siempre que su salida sea revisada activamente
por el representante del proyecto.

Las pruebas están escritas en "Features" y cada feature consiste en uno o más "Scenarios". Cada scenario tiene una descripción corta en la línea superior que explica lo que
cubre, seguida de algunas combinaciones de "Steps" - líneas que comienzan con los términos Given, When y Then (generalmente en ese orden).

Se recomienda una consistencia en las pruebas de Cucumber. Es mejor elegir un término para representar el mismo concepto en todas partes. Además, si se tienen muchas líneas
que usan la misma palabra clave, es mejor dividirlas en varias líneas.

También se recomienda utilizar técnicas de análisis colaborativo como el Mapping de Ejemplos y la Tormenta de Eventos para descubrir ejemplos juntos. Todos los roles del
equipo (desarrolladores, tester, representantes de negocios) deben mantener una conversación regular para mejorar las características y entender cómo hablar sobre,
desarrollar y probar su aplicación.
