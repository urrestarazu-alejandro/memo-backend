---
layout: post
title: Casos de uso
subtitle: Represental al intencion del sistema (LO QUE debe hacerse).
#gh-repo: daattali/beautiful-jekyll
#gh-badge: [star, fork, follow]
#thumbnail-img: https://es.wikipedia.org/wiki/Dualidad_onda_corp%C3%BAsculo#/media/Archivo:Dualite.jpg
tags: []
#comments: true
#mathjax: true
author: Alejandro Urrestarazu
---

## Casos de uso


![Capataz dando ordenes a obreros](/assets/img/posts/openart-image_cañerias_colores-512.png){: .mx-auto.d-block :}


**Casos de Uso: Un enfoque clave para el desarrollo de software eficiente y efectivo**

En el mundo del diseño de software, los Casos de Uso son una herramienta fundamental para garantizar que las aplicaciones se desarrollen de manera eficiente y efectiva.

**¿Qué son los Casos de Uso?**

Un Caso de Uso es una definición clara del comportamiento o acción que un usuario puede realizar dentro de un sistema. Se enfoca en la perspectiva del usuario final, identificando las acciones más importantes que pueden tomar dentro del sistema. Los Casos de Uso son la base para el desarrollo de software, ya que nos permiten entender
mejor las necesidades y expectativas del usuario.


### Razones para determinar correctamente los casos de uso


La definición de Casos de Uso ofrece varios beneficios en el desarrollo de software:

*   **Mejora la comprensión del usuario**: Los Casos de Uso nos ayudan a comprender mejor las necesidades y expectativas del usuario final, lo que resulta en un diseño más intuitivo y fácil de usar.

*   **Garantiza un desarrollo eficiente**: Al enfocarnos en las acciones más importantes que el usuario puede realizar, podemos priorizar las funcionalidades más importantes y asegurarnos de que estén bien diseñadas.

*   **Aumenta la calidad del código**: Los Casos de Uso nos ayudan a garantizar que el código sea simple, legible y fácil de mantener.


### Casos de uso según Clean Architecture y DDD


La arquitectura limpia (Clean Architecture) es un patrón que puede ser aplicado en cualquier diseño de software, mientras que el Diseño dirigido por el dominio (Domain-Driven Design, DDD) es una filosofía más amplia sobre cómo modelar los conceptos empresariales para garantizar que el código refleja realmente los requisitos de la empresa. 


El DDD puede ser aplicado dentro de una arquitectura limpia o en cualquier otra arquitectura de software.


Ambas comparten una visión común sobre la importancia de separar las capas del software en función de su nivel de abstracción. Sin embargo, existen diferencias en la forma en que se aplican estos principios.

En la **arquitectura limpia**, el diseño se centra principalmente en la separación de preocupaciones y la separación lógica de los diferentes niveles de abstracción del software (Entidades, casos de uso, controladores y frameworks), para minimizar las dependencias y mantener el código limpio, simple y fácil de mantener.

En esta arquitectura las reglas del negocio están dentro de la capa de dominio, mientras que las reglas de aplicación están dentro de la capa de "Casos de uso". Esto nos da una pista clave de que los casos de uso no son sinónimo de regla de negocio.

En el **DDD**, el diseño se centra en modelar los conceptos empresariales de forma precisa y comprensible, lo que resulta en un modelo de dominio fuerte, independiente del código y capaz de evolucionar independientemente del software. El DDD enfatiza la importancia de colaborar con los stakeholders (expertos en el dominio, arquitectos y desarrolladores) para garantizar que el código refleje realmente los requisitos de la empresa.
En DDD los casos de uso corresponden a los "Application services" o servicios de aplicaciones, son la fachada exterior del dominio de nuestro sistema, por lo que son el punto de entrada-salida para interactuar con la funcionalidad interna. Estos servicios son responsables de controlar el flujo principal de la aplicación. 
Aquí tenemos la segunda pista clave, los casos de uso deben encargarse del flujo de la aplicación. 


### Modelando los casos de uso

#### Requerimiento: registrar un usuario de una aplicación

Ahora veamos un ejemplo de flujo clásico que es el de registrar un usuario de una aplicación. Aunque es muy clásico sigue existiendo el debate de cómo modelar con casos de usos (O que no se debe modelar). 
Haciéndonos a un lado de este debate es interesante para ver y aprender.


**Requerimientos**


Los requerimientos iniciales que nos dieron para crear un nuevo usuario para el sistema son:

* El usuario debe proporcionar los siguientes campos:
    - Nombre de usuario: debe tener una longitud máxima de 20 caracteres y solo permite letras y números.
    - Correo electrónico: debe ser único y válido, con soporte para etiquetas y dominios personalizados.
    - Contraseña: Como entrada debe ser una cadena de texto simple (sin encriptación) que se guardará cifrada al momento de crear el usuario. Con validacion de al menos una mayúscula, al menos una minúscula, al menos un dígito, al menos un caracter especial (@#$%^&+=) y entre 8 y 12 caracteres.

* Una vez creado el usuario, se enviará una notificación por correo electrónico a la dirección de email proporcionada.

**Diagrama de flujo**


Con estos requerimientos ya tenemos suficientes datos para empezar. Siempre es muy útil antes de diseñar los casos de usos comenzar con un diagrama de flujos.
El siguiente diagrama muestra qué pasos se deben realizar para registrar un usuario:


```mermaid
---
title: Flujo para registrar un usuario.
---
flowchart TD
    A((Usuario)) --> B[Completar formulario]
    B --> C[Validación de datos]
    C --> D[Cifrado de contraseña]
    D --> E[Creación / persistencia del usuario]
    E --> F[Envío de notificación]
```


**Pasos**

1. **Completar formulario**: El usuario ingresa su nombre, correo electrónico y contraseña.
2. **Validación de datos**: Se verifican las validaciones de nombre, correo electrónico y contraseña
para asegurarnos de que se cumplan los requisitos.
3. **Cifrado de contraseña**: Si se cumplen las validaciones, el sistema cifra la contraseña para
proteger el password del usuario.
4. **Creación / persistencia del usuario**: El sistema guarda el usuario con los datos proporcionados.
5. **Envío de notificación**: Se envía un email al usuario para notificar y confirmar su creación.


**Diagrama de clases**


Con estos pasos en mente podemos diseñar el diagrama de clases para los casos de uso.

Supongamos que para la implementación crearemos una API que respetará el patrón de Clean Architecture.


**Clean Architecture**


---


![Clean Architecture diagram - blog.cleancoder.com](/assets/img/posts/Clean-Architecture-Diagram.jpg){: .mx-auto.d-block :}

Clean Architecture diagram - blog.cleancoder.com

La parte más importante que debemos respetar de este diagrama es el flujo de control. Los **controladores** utilizan los **casos de uso de entrada** (Interfaces). Estos CU de input son implementados por los **Interactors** que son las reglas de negocio específicas de la aplicación (Ver Diagrama de flujo). Los Interactors a su vez hacen uso de los **Casos de uso de salida** (Interfaces) que a su vez son implementados por los presentadores que dependen a su vez de frameworks y drivers. 

![Clean Architecture diagram - blog.cleancoder.com](/assets/img/posts/clean-architecure-flow-control.png){: .mx-auto.d-block :}


---


Por un lado podemos pensar que nuestro punto de entrada a la funcionalidad de registro es a través de un **Controller** (UserController) que invoca un caso de uso para crear un usuario (UserManagerInputUseCase).

Este caso de uso indicará el orden que se deben ir ejecutando los casos de usos particulares necesarios y propagando las **entidades** entre ellos.


```mermaid
---
title: Diagrama de clases para registrar un usuario. Nivel de servicios , gateways y casos de uso
---
classDiagram
    direction LR

    CipherServiceBase64 --|> CipherOutputUseCase
    GoogleEmailService --|> NotificationOutputUseCase

    namespace services {
        class CipherServiceBase64{
            +String encrypt(String text)
            +String decrypt(String encryption)
        }

        class GoogleEmailService{
            +boolean send(String from, String to, String subject, String message)
        }
    }

    UserDbGateway --|> UserDbOutputUseCase
    namespace gateways{
        class UserDbGateway{
            +boolean create(User user)
        }
    }
    namespace usecases_input {
        class PasswordValidationInputUseCase {
            <<Interface>>
            +void validate(String password)
        }

        class UserManagerInputUseCase {
            <<Interface>>
            +boolean createUser(String name, String email, String password)
        }
    }

    DefaultPasswordValidationInteractorUseCase --|> PasswordValidationInputUseCase
    DefaultUserManagerInteractorUseCase --|> UserManagerInputUseCase

    namespace usecases_interactor {
        class DefaultPasswordValidationInteractorUseCase{
            +void validate(String password)
        }

        class DefaultUserManagerInteractorUseCase{
            -PasswordValidationInputUseCase passwordValidationInputUseCase
            -UserDbOutputUseCase userDbOutputUseCase
            -CipherOutputUseCase cipherOutputUseCase
            -NotificationOutputUseCase notificationOutputUseCase

            +boolean createUser(String name, String email, String password)
        }
    }

    namespace usecases_output {
        class CipherOutputUseCase{
            <<Interface>>
            +String encrypt(String text)
            +String decrypt(String encryption)
        }

        class NotificationOutputUseCase{
            <<Interface>>
            +boolean send(String from, String to, String subject, String message)
        }

        class UserDbOutputUseCase{
            <<Interface>>
            +boolean create(User userForm)
        }
    }
```

En las entidades tenemos la informacion de nuestro dominio de negocio.


```mermaid
---
title: Diagrama de clases para registrar un usuario. Entidades del dominio
---
classDiagram
    direction LR

    namespace entities {
        class UserForm {
            +String name
            +String email
            +String password
        }

        class Password {
            +String encryption
            +String cipherName
        }

        class Usuario {
            +String nombre
            +String email
            +Password password
        }
    }
```


Para este ejemplo, consideramos las validaciones como casos de uso pero pueden resolverse dentro del dominio, esto dependerá del enfoque y el grado de enriquecimiento que tomemos para nuestras entidades del sistema. 
(Ver post [Modelos Anémicos vs. Modelos Enriquecidos](https://memobackend.com.ar/2024-06-11-modelos-anemicos-enriquecidos/)).

La única validación que decidí sacarla fuera del dominio es la de la contraseña ya que una vez que se ingresó en el formulario, se revisa que cumpla las condiciones y luego se propaga cifrada a través de todo el sistema para aumentar la seguridad.


### Errores al diseñar los CU

Los errores más comunes al desarrollar casos de uso pueden incluir:


1. No tener claridad sobre el propósito del caso de uso y no alinearlo con las necesidades del negocio. Esto puede hacer que los resultados finales no sean lo esperado o no satisfagan a los usuarios.

2. Ignorar el contexto empresarial en el cual opera el sistema y los cambios que pueden ocurrir en el futuro, lo que puede hacer que el caso de uso sea rígido y no adaptable.

3. No tener suficiente abstracción en las interfaces y clases involucradas en la implementación del caso de uso, lo que puede hacer que el código sea dependiente de una tecnología específica o plataforma. Esto hace que el caso de uso no pueda ser reutilizado o transferido a otros entornos sin problemas.

4. No hacer un análisis suficiente y exhaustivo de los casos de uso posibles y sus respectivas implementaciones, lo que puede llevar a fallas de diseño o funcionalidades no deseadas en el sistema.

5. No tener un proceso de pruebas eficaz para garantizar la calidad del código y el comportamiento esperado en todo entorno.

6. No tener suficiente documentación de los casos de uso, lo que puede provocar confusión en los desarrolladores y dificultades para entender el comportamiento del sistema.


### Conclusión


La herramienta clave para el desarrollo de software eficiente y efectivo son los Casos de Uso, ya
que nos permiten enfocarnos en las acciones más importantes que un usuario puede tomar dentro del
sistema, es decir, en el flujo de control de la aplicación. Hemos visto cómo un diagrama de flujo
ayuda a seleccionar los casos de uso básicos que tendremos y pasarlos a un diagrama de clases nos da
indicaciones para llevarlos al código.

Además, esta herramienta nos ayuda a comprender mejor la perspectiva del usuario final y garantizar
sistemas más intuitivos, fáciles de usar y eficientes en el proceso de desarrollo.