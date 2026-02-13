---
layout: post
title: Java Toolbox Java 25 (LTS)
subtitle: Nuevas funcionalidades en la versión LTS de septiembre 2025
thumbnail-img: /assets/img/posts/java-25-toolbox-gallina-quiniela.png
tags: [java,LTS,java-25,backend,concurrencia,pattern-matching,performance]
comments: true
author: Alejandro Urrestarazu
---

# Java Toolbox: Java 25 (LTS)

![Java 25 Toolbox - Gallina Quiniela](/assets/img/posts/java-25-toolbox-gallina-quiniela.png){: .mx-auto.d-block :}

## Tabla de Contenidos

- [Introducción](#introducción)
- [Estados de los JEPs](#estados-de-los-jeps)
- [Características Finalizadas](#características-finalizadas)
  - [Scoped Values (JEP 506)](#scoped-values-jep-506)
  - [Flexible Constructor Bodies (JEP 513)](#flexible-constructor-bodies-jep-513)
  - [Instance Main Methods (JEP 512)](#instance-main-methods-jep-512)
  - [Compact Object Headers (JEP 519)](#compact-object-headers-jep-519)
  - [Key Derivation Function API (JEP 510)](#key-derivation-function-api-jep-510)
  - [Ahead-of-Time Method Profiling (JEP 515)](#ahead-of-time-method-profiling-jep-515)
  - [Generational Shenandoah (JEP 521)](#generational-shenandoah-jep-521)
- [Características en Preview](#características-en-preview)
  - [Module Import Declarations (JEP 511)](#module-import-declarations-jep-511)
  - [Primitive Types in Patterns (JEP 507)](#primitive-types-in-patterns-jep-507)
  - [Structured Concurrency (JEP 505)](#structured-concurrency-jep-505)
- [Características Experimentales](#características-experimentales)
  - [JFR CPU-Time Profiling (JEP 509)](#jfr-cpu-time-profiling-jep-509)
- [Características en Incubación](#características-en-incubación)
  - [Vector API (JEP 508)](#vector-api-jep-508)
- [Conclusión](#conclusión)

---

## Introducción

El 16 de septiembre de 2025, Oracle lanzó **Java 25**, la nueva versión LTS (Long-Term Support) que incluye **18 JEPs** (Java Enhancement Proposals) enfocados en mejorar el lenguaje, las APIs estándar y el rendimiento del runtime.

Esta versión representa un salto significativo desde Java 21 LTS, consolidando años de experimentación en áreas críticas:
- **7 características finalizadas** que evolucionaron desde incubación y preview
- **Mejoras de performance y runtime** bajo los auspicios de Project Leyden y HotSpot JVM
- **Nuevas APIs** para concurrencia, criptografía y simplificación del lenguaje

Oracle proporcionará soporte extendido para Java 25 por **al menos 8 años**, convirtiéndola en una base sólida para proyectos de producción.

{: .box-success}
**Java 25 LTS** es la primera versión LTS desde Java 21 (septiembre 2023), con miles de mejoras que aumentan la productividad del desarrollador y mejoran el rendimiento, estabilidad y seguridad de la plataforma.

---

## Estados de los JEPs

Antes de explorar las características, es importante entender los diferentes estados en los que puede encontrarse un JEP (Java Enhancement Proposal):

### Incubator (Incubación)

**¿Qué es?** Una API o módulo experimental que se incluye en el JDK pero no forma parte de la especificación Java SE.

**Características:**
- Requiere flags especiales para ser usado: `--add-modules jdk.incubator.<nombre>`
- Puede cambiar significativamente entre versiones
- No hay garantía de estabilidad
- Ideal para experimentación y feedback temprano

**Ejemplo:**
```bash
# Usar módulo incubator
javac --add-modules jdk.incubator.vector MyClass.java
java --add-modules jdk.incubator.vector MyApp
```

{: .box-warning}
**Advertencia**: Las APIs en incubación pueden cambiar o eliminarse sin previo aviso. **No usar en producción**.

### Preview (Vista previa)

**¿Qué es?** Una característica del lenguaje o API estándar que está completamente especificada pero aún no es definitiva.

**Características:**
- Requiere el flag `--enable-preview` para compilar y ejecutar
- Puede sufrir cambios menores basados en feedback de la comunidad
- Forma parte de la especificación Java SE
- Más estable que incubator, pero no definitiva

**Ejemplo:**
```bash
# Usar características en preview
javac --enable-preview --release 25 MyClass.java
java --enable-preview MyApp
```

**Progresión típica:**
1. **Primera Preview** → 2. **Segunda Preview** → 3. **Tercera Preview** → 4. **Finalizada**

Cada iteración de preview incorpora mejoras basadas en el uso real por la comunidad.

### Experimental

**¿Qué es?** Una característica de JVM o GC que está disponible pero requiere activación explícita mediante flags.

**Características:**
- Generalmente relacionada con rendimiento o runtime
- Puede tener overhead o comportamiento inesperado
- Requiere flags JVM específicos (ej: `-XX:+UnlockExperimentalVMOptions`)
- Se usa para validar conceptos antes de convertirlos en estándar

**Ejemplo:**
```bash
# Activar característica experimental
java -XX:+UnlockExperimentalVMOptions -XX:+UseNewFeature MyApp
```

### Final (Finalizada)

**¿Qué es?** Una característica completamente estable y parte permanente de la plataforma Java.

**Características:**
- No requiere flags especiales
- Garantía de estabilidad y compatibilidad hacia atrás
- Especificación completa y documentada
- **Lista para producción**

{: .box-success}
**Producción**: Las características finalizadas son seguras para usar en aplicaciones de producción y cuentan con soporte completo.

### Ciclo de vida típico de un JEP

```
┌─────────────┐
│  Incubator  │ (1-3 versiones)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Preview   │ (1-4 versiones)
│ Primera →   │
│ Segunda →   │
│ Tercera     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│    Final    │ (Permanente)
└─────────────┘
```

### Distribución en Java 25

| Estado | Cantidad | Requiere flags | Producción |
|--------|----------|----------------|------------|
| **Finalizada** | 7 JEPs | ❌ No | ✅ Sí |
| **Preview** | 3 JEPs | ✅ `--enable-preview` | ⚠️ No recomendado |
| **Experimental** | 1 JEP | ✅ Flags JVM | ⚠️ No recomendado |
| **Incubator** | 1 JEP | ✅ `--add-modules` | ❌ No |

### Recomendaciones

**Para producción:**
- ✅ Usar solo características **finalizadas**
- ✅ Mantenerse actualizado con la documentación oficial
- ✅ Probar exhaustivamente antes de migrar

**Para desarrollo/experimentación:**
- ⚠️ Las características en **preview** son relativamente estables
- ⚠️ Las características **experimentales** pueden afectar el rendimiento
- ❌ Evitar **incubator** a menos que sea para aprendizaje/feedback

---

# Características Finalizadas

{: .box-success}
Las siguientes características están **completamente estables** y listas para usar en producción. No requieren flags especiales.

---

## Scoped Values (JEP 506)

### ¿Qué es?

**Scoped Values** (JEP 506) es una alternativa moderna a `ThreadLocal` diseñada específicamente para compartir datos inmutables entre componentes de una aplicación sin pasarlos explícitamente como parámetros.

{: .box-success}
**Estado: FINALIZADA** - Pasó por incubación (JDK 20) y varias iteraciones de preview (JDK 21-24) antes de finalizarse en Java 25.

### El problema con ThreadLocal

`ThreadLocal` ha sido útil pero tiene limitaciones importantes:

```java
// ThreadLocal - puede causar memory leaks
private static final ThreadLocal<User> CURRENT_USER = new ThreadLocal<>();

public void processRequest(Request request) {
    try {
        CURRENT_USER.set(authenticate(request));
        // ... procesar request
    } finally {
        CURRENT_USER.remove(); // Fácil olvidar esto = memory leak
    }
}
```

**Problemas de ThreadLocal:**
- **Mutable**: Los valores pueden cambiar, causando efectos secundarios
- **Memory leaks**: Olvidar `remove()` causa fugas de memoria
- **Mal rendimiento con Virtual Threads**: Diseñado para threads del sistema operativo

### Solución con Scoped Values

```java
// Java 25 - Scoped Values
import java.lang.ScopedValue;

private static final ScopedValue<User> CURRENT_USER = ScopedValue.newInstance();

public void processRequest(Request request) {
    User user = authenticate(request);

    // El valor existe solo dentro de este scope
    ScopedValue.where(CURRENT_USER, user)
               .run(() -> {
                   processBusinessLogic();
                   // Automáticamente se limpia al salir
               });
}

private void processBusinessLogic() {
    User user = CURRENT_USER.get(); // Acceso inmutable
    System.out.println("Procesando para: " + user.getName());
}
```

### Uso con Virtual Threads

```java
import java.lang.ScopedValue;
import java.util.concurrent.Executors;

public class ScopedValueExample {
    static final ScopedValue<String> USER = ScopedValue.newInstance();

    public static void main(String[] args) throws InterruptedException {
        try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {

            executor.submit(() ->
                ScopedValue.where(USER, "Alice").run(() -> {
                    System.out.println("Thread: " + Thread.currentThread());
                    System.out.println("User: " + USER.get());
                })
            );

            executor.submit(() ->
                ScopedValue.where(USER, "Bob").run(() -> {
                    System.out.println("Thread: " + Thread.currentThread());
                    System.out.println("User: " + USER.get());
                })
            );

            Thread.sleep(200); // Esperar a que terminen
        }
    }
}
```

### Ventajas

1. **Inmutabilidad**: Los valores no pueden cambiar dentro del scope
2. **Sin memory leaks**: Limpieza automática al salir del scope
3. **Performance**: Más eficiente que ThreadLocal, especialmente con Virtual Threads
4. **Seguridad**: Valores compartidos de forma segura entre threads

### Cambio en Java 25

{: .box-warning}
**Cambio de la versión final**: El método `ScopedValue.orElse()` ya no acepta `null` como argumento.

### Casos de uso

- **Contextos de seguridad**: Usuario autenticado, permisos, roles
- **Request IDs**: Trazabilidad en logs distribuidos
- **Configuración por request**: Locale, timezone, tenant ID
- **Transacciones**: Estado transaccional sin propagación manual

---

## Flexible Constructor Bodies (JEP 513)

### ¿Qué es?

**Flexible Constructor Bodies** (JEP 513) permite escribir código antes de llamar a `super()` o `this()`, eliminando una restricción histórica de Java.

{: .box-success}
**Estado: FINALIZADA** - Estuvo en preview en JDK 22-24 y se finaliza en Java 25.

### El problema anterior

Antes de Java 25, `super()` o `this()` debían ser la primera línea en un constructor:

```java
// Antes de Java 25 - NO compilaba
public class UserAccount {
    private final String username;
    private final String normalizedEmail;

    public UserAccount(String username, String email) {
        // Error: debe llamar a super() o this() primero
        String cleaned = email.trim().toLowerCase();

        super(); // Debe ser la primera línea
        this.username = username;
        this.normalizedEmail = cleaned;
    }
}
```

### Solución en Java 25

```java
// Java 25 - Código antes de super()
public class Employee extends Person {
    final String name;
    final int age;

    Employee(String name, int age) {
        // ¡Ahora podemos validar ANTES de llamar a super()!
        if (age < 18 || age > 67) {
            throw new IllegalArgumentException("Age must be between 18 and 67");
        }

        super(age); // Ya no necesita ser la primera línea
        this.name = name;
    }
}
```

### Ejemplo con inicialización compleja

```java
public class ComplexObject extends BaseObject {
    private final Configuration config;

    public ComplexObject(Map<String, Object> rawConfig) {
        // Validación y transformación antes de super()
        if (rawConfig == null || rawConfig.isEmpty()) {
            throw new IllegalArgumentException("Config cannot be empty");
        }

        // Procesar configuración
        String mode = (String) rawConfig.get("mode");
        int timeout = (Integer) rawConfig.getOrDefault("timeout", 5000);

        // Crear objeto de configuración
        Configuration processedConfig = new Configuration(mode, timeout);

        super(processedConfig.getMode()); // Llamada a super con datos procesados

        this.config = processedConfig;
    }
}
```

### Ventajas

1. **Validación temprana**: Verificar argumentos antes de construir el objeto
2. **Transformaciones locales**: Preparar datos sin métodos auxiliares
3. **Código más legible**: Menos indirección y constructores auxiliares
4. **Fail-fast**: Fallar rápidamente antes de incurrir en costos de construcción

### Casos de uso

- **Validación de argumentos**: Rechazar valores inválidos antes de construcción
- **Normalización de datos**: Limpiar y formatear inputs
- **Cálculos preparatorios**: Derivar valores antes de asignar campos
- **Logging**: Registrar intentos de construcción

---

## Instance Main Methods (JEP 512)

### ¿Qué es?

**Compact Source Files and Instance Main Methods** (JEP 512) hace que Java sea más accesible para principiantes, permitiendo escribir programas sin boilerplate de clases.

{: .box-success}
**Estado: FINALIZADA** - Java ahora soporta archivos compactos y métodos main de instancia.

### El problema anterior

```java
// Antes: Hello World tradicional
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### Solución en Java 25

```java
// Java 25 - Compact Source File
void main() {
    IO.println("Hello, World!");
}
```

### Nueva clase java.lang.IO

Java 25 introduce `java.lang.IO` para simplificar entrada/salida:

```java
void main() {
    // Salida
    IO.println("¿Cuál es tu nombre?");
    IO.print(">>> ");

    // Entrada
    String name = IO.readln();

    IO.println("¡Hola, " + name + "!");
}
```

**Métodos disponibles:**
- `IO.println(Object o)` - Imprimir con salto de línea
- `IO.println()` - Salto de línea
- `IO.print(Object o)` - Imprimir sin salto de línea
- `IO.readln()` - Leer línea
- `IO.readln(String prompt)` - Leer línea con prompt

### Imports automáticos

Todas las clases públicas de `java.base` se importan automáticamente:

```java
void main() {
    // No necesitamos importar List, ArrayList, etc.
    List<String> names = new ArrayList<>();
    names.add("Alice");
    names.add("Bob");

    IO.println("Names: " + names);
}
```

### Instance main methods

El método `main` ahora puede ser de instancia (no estático):

```java
// Main de instancia
class Calculator {
    private int result = 0;

    void main() {
        add(10);
        multiply(5);
        IO.println("Result: " + result);
    }

    void add(int value) {
        result += value;
    }

    void multiply(int value) {
        result *= value;
    }
}
```

### Ventajas

1. **Aprendizaje simplificado**: Ideal para enseñar programación
2. **Scripting rápido**: Escribir scripts sin boilerplate
3. **Prototipos ágiles**: Desarrollo rápido de demos
4. **Menor barrera de entrada**: Java más accesible para principiantes

---

## Compact Object Headers (JEP 519)

### ¿Qué es?

**Compact Object Headers** (JEP 519) reduce el tamaño de los headers de objetos en arquitecturas de 64 bits, mejorando significativamente el uso de memoria.

{: .box-success}
**Estado: FINALIZADA** - Experimental en JDK 24, estable en Java 25.

### El problema anterior

En JVM de 64 bits, cada objeto tiene un header que ocupa espacio:
- **Con compressed oops**: 12 bytes
- **Sin compressed oops**: 16 bytes

Para aplicaciones con millones de objetos, esto representa un overhead significativo.

### Solución en Java 25

Java 25 reduce el tamaño del header de objeto a **8 bytes** en ambos casos:
- **Reducción con compressed oops**: 33%
- **Reducción sin compressed oops**: 50%

### Beneficios medidos

Según benchmarks oficiales (SPECjbb2015):

- **Heap usage**: Reducción del **22%**
- **CPU usage**: Reducción del **8%**
- **GC efficiency**: Recolecciones más rápidas
- **JSON processing**: Hasta **30% más rápido** (Amazon)

### Cómo habilitar

```bash
# Activar Compact Object Headers
java -XX:+UseCompactObjectHeaders MyApp

# Verificar que está activo
java -XX:+UseCompactObjectHeaders -XX:+PrintFlagsFinal MyApp | grep CompactObjectHeaders
```

{: .box-success}
**Recomendación**: Amazon reporta hasta **30% menos CPU** en algunos servicios con esta característica activada.

### Impacto en aplicaciones reales

**Antes (headers tradicionales):**
```
1,000,000 objetos × 12 bytes = 12 MB de overhead
```

**Después (compact headers):**
```
1,000,000 objetos × 8 bytes = 8 MB de overhead
→ Ahorro de 4 MB (33%)
```

### Casos de uso

- **Microservicios**: Mayor densidad de deployment
- **Caching**: Más objetos en memoria
- **Big Data**: Procesamiento de grandes volúmenes
- **Cloud**: Reducción de costos de memoria

---

## Key Derivation Function API (JEP 510)

### ¿Qué es?

**Key Derivation Function API** (JEP 510) introduce una API estándar para funciones de derivación de claves basadas en contraseñas (PBKDF2, scrypt, etc.).

{: .box-success}
**Estado: FINALIZADA** - API estándar para KDF en Java 25.

### El problema anterior

Derivar claves de contraseñas requería uso de APIs de bajo nivel:

```java
// Código complejo y propenso a errores
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;

char[] password = "hunter2".toCharArray();
byte[] salt = generateSalt();
int iterations = 65536;
int keyLength = 256;

PBEKeySpec spec = new PBEKeySpec(password, salt, iterations, keyLength);
SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");
SecretKey key = factory.generateSecret(spec);
```

### Solución en Java 25

```java
// Java 25 - API simplificada
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;

public class KeyDerivationExample {
    public static void main(String[] args) throws Exception {
        char[] password = "hunter2".toCharArray();
        byte[] salt = "somesalt".getBytes();

        // Usar API estándar
        PBEKeySpec spec = new PBEKeySpec(password, salt, 65536, 256);
        SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");
        SecretKey key = factory.generateSecret(spec);

        System.out.println("Derived key format: " + key.getFormat());
        System.out.println("Key length: " + key.getEncoded().length);
    }
}
```

### Ventajas

1. **API estandarizada**: No más dependencias externas
2. **Seguridad mejorada**: Implementaciones verificadas
3. **Flexibilidad**: Soporte para múltiples algoritmos (PBKDF2, scrypt)
4. **Facilidad de uso**: API más intuitiva

### Casos de uso

- **Autenticación**: Hash seguro de contraseñas
- **Cifrado**: Derivar claves de encryption desde passwords
- **Key stretching**: Aumentar seguridad de claves débiles
- **Password storage**: Almacenamiento seguro de credenciales

---

## Ahead-of-Time Method Profiling (JEP 515)

### ¿Qué es?

**Ahead-of-Time Method Profiling** (JEP 515) permite crear perfiles de ejecución reutilizables para acelerar el warm-up de aplicaciones Java.

{: .box-success}
**Estado: FINALIZADA** - Parte de Project Leyden, disponible en Java 25.

### El problema anterior

Cuando una aplicación Java inicia, el JVM debe:
1. Recopilar estadísticas de métodos
2. Identificar hot spots
3. Compilar código optimizado con JIT

Esto causa **startup lento** y **warm-up prolongado**.

### Solución en Java 25

```bash
# Paso 1: Grabar perfil de ejecución
java -XX:AOTMode=record -XX:AOTConfiguration=app.aotconf MyApp

# Paso 2: Crear caché AOT desde el perfil
java -XX:AOTMode=create -XX:AOTCache=app.aot -XX:AOTConfiguration=app.aotconf

# Paso 3: Usar caché AOT en ejecución productiva
java -XX:AOTCache=app.aot MyApp
```

### Beneficios medidos

- **Warm-up**: Reducción del **20%** en tiempo de calentamiento
- **Peak performance**: Alcanzado más rápidamente
- **Adaptable**: Si el comportamiento cambia, JIT se adapta
- **Sin cambios de código**: Optimización transparente

### Ventajas

1. **Startup más rápido**: Aplicaciones listas más pronto
2. **Sin cambios de código**: Optimización a nivel JVM
3. **Flexible**: Se adapta a cambios en runtime
4. **Acumulativo**: Combina AOT + JIT dinámico

### Casos de uso

- **Microservicios**: Reducir tiempo de inicio en cloud
- **Serverless**: Mejorar cold starts
- **Aplicaciones empresariales**: Warm-up más rápido
- **CI/CD**: Cachés compartidos entre deploys

---

## Generational Shenandoah (JEP 521)

### ¿Qué es?

**Generational Shenandoah** (JEP 521) agrega soporte generacional al garbage collector Shenandoah, mejorando throughput y pausas.

{: .box-success}
**Estado: FINALIZADA** - Experimental en JDK 24, estable en Java 25.

### El problema anterior

Shenandoah GC escaneaba todo el heap en cada ciclo, aunque la mayoría de objetos mueren jóvenes.

### Solución en Java 25

Shenandoah ahora maneja generaciones por separado:
- **Young generation**: Recolectada frecuentemente
- **Old generation**: Recolectada ocasionalmente

### Cómo habilitar

```bash
# Activar Generational Shenandoah
java -XX:+UseShenandoahGC -XX:ShenandoahGCMode=generational MyApp
```

### Beneficios

- **Mejor throughput**: Menos tiempo en GC
- **Pausas más cortas**: Colecciones young rápidas
- **Eficiencia**: Enfoque en objetos que mueren rápido
- **Alineación con G1/ZGC**: Características similares

### Casos de uso

- **Aplicaciones de baja latencia**: Pausas predecibles
- **Grandes heaps**: Manejo eficiente de memoria
- **Microservicios**: GC con overhead mínimo

---

# Características en Preview

{: .box-warning}
Las siguientes características requieren `--enable-preview` para compilar y ejecutar. **No se recomiendan para producción** hasta que sean finalizadas.

---

## Module Import Declarations (JEP 511)

### ¿Qué es?

**Module Import Declarations** (JEP 511) simplifica la importación de todas las clases exportadas por un módulo.

{: .box-warning}
**Estado: PRIMERA PREVIEW** - Requiere `--enable-preview`

### El problema anterior

```java
// Antes de Java 25 - imports individuales
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.Set;
import java.util.HashSet;
import java.util.stream.Collectors;
import java.util.stream.Stream;
// ... muchos más imports
```

### Solución en Java 25

```java
// Java 25 - import de módulo completo
import module java.base;

// Ahora todas las clases públicas del módulo están disponibles
public class DataProcessor {
    public Map<String, List<String>> processData(Set<String> input) {
        return input.stream()
                    .collect(Collectors.groupingBy(
                        s -> s.substring(0, 1),
                        Collectors.toList()
                    ));
    }
}
```

### Reemplazar star imports

```java
// Antes: múltiples star imports
import javax.xml.*;
import javax.xml.parsers.*;
import javax.xml.stream.*;

// Ahora: un solo import de módulo
import module java.xml;
```

### Manejo de ambigüedades

```java
// Problema: ambigüedad con Date
import module java.base;  // exporta java.util.Date
import module java.sql;   // exporta java.sql.Date

// Solución: import específico
import java.sql.Date;

public class Main {
    public static void main(String[] args) {
        Date d = Date.valueOf("2025-06-15");
        System.out.println("Date: " + d);
    }
}
```

### Cómo habilitar

```bash
# Compilar
javac --enable-preview --release 25 MyClass.java

# Ejecutar
java --enable-preview MyApp
```

### Ventajas

1. **Menos verbosidad**: Menos líneas de imports
2. **Mejor mantenibilidad**: No necesitas actualizar imports
3. **Claridad modular**: Dependencias explícitas de módulos

---

## Primitive Types in Patterns (JEP 507)

### ¿Qué es?

**Primitive Types in Patterns** (JEP 507) extiende el pattern matching para soportar tipos primitivos.

{: .box-warning}
**Estado: TERCERA PREVIEW** - Requiere `--enable-preview`

### El problema anterior

```java
// Antes - boxing necesario
Object value = 42; // int autoboxeado a Integer

switch (value) {
    case Integer i when i > 0 -> System.out.println("Positivo: " + i);
    case Integer i when i < 0 -> System.out.println("Negativo: " + i);
    case Integer i -> System.out.println("Cero");
    default -> System.out.println("No es Integer");
}
```

### Solución en Java 25

```java
// Java 25 - pattern matching con primitivos
Object value = 42;

switch (value) {
    case int i when i > 0 -> System.out.println("Positivo: " + i);
    case int i when i < 0 -> System.out.println("Negativo: " + i);
    case int i -> System.out.println("Cero");
    case long l -> System.out.println("Long: " + l);
    case double d -> System.out.println("Double: " + d);
    default -> System.out.println("Otro tipo");
}
```

### Pattern matching con instanceof

```java
// También funciona con instanceof
if (obj instanceof int i) {
    System.out.println("Es un int: " + i);
}

// Identificar tipo dinámicamente
public static String identifyType(Object value) {
    return switch (value) {
        case int i    -> String.format("int: %d", i);
        case Double d -> String.format("Double: %f", d);
        case String s -> String.format("String: %s", s);
        default       -> "Unknown type";
    };
}
```

### Cómo habilitar

```bash
# Compilar y ejecutar
javac --enable-preview --release 25 MyClass.java
java --enable-preview MyApp
```

### Ventajas

1. **Sin boxing overhead**: Mejor rendimiento
2. **Código más expresivo**: Patrones directos con primitivos
3. **Type safety**: El compilador valida conversiones

---

## Structured Concurrency (JEP 505)

### ¿Qué es?

**Structured Concurrency** (JEP 505) trata múltiples tareas concurrentes como una única unidad de trabajo.

{: .box-warning}
**Estado: QUINTA PREVIEW** - Requiere `--enable-preview`. Se espera finalización en Java 26.

### El problema anterior

```java
// Enfoque tradicional - complejo
ExecutorService executor = Executors.newCachedThreadPool();
try {
    Future<User> userFuture = executor.submit(() -> fetchUser(userId));
    Future<Orders> ordersFuture = executor.submit(() -> fetchOrders(userId));

    User user = userFuture.get();
    Orders orders = ordersFuture.get();

    return new UserProfile(user, orders);
} catch (InterruptedException | ExecutionException e) {
    // ¿Qué pasa con las tareas en curso?
    throw new RuntimeException(e);
} finally {
    executor.shutdown();
}
```

### Solución en Java 25

```java
// Java 25 - Structured Concurrency
import java.util.concurrent.StructuredTaskScope;

try (var scope = StructuredTaskScope.<String>open()) {

    var userTask = scope.fork(() -> fetchUser(userId));
    var ordersTask = scope.fork(() -> fetchOrders(userId));

    scope.join(); // Esperar a que todas terminen

    String user = userTask.get();
    String orders = ordersTask.get();

    System.out.println("Usuario: " + user);
    System.out.println("Pedidos: " + orders);
}
```

### Shutdown on failure

```java
// Cancelar todas si una falla
try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {

    var task1 = scope.fork(() -> fetchDataFromService1());
    var task2 = scope.fork(() -> fetchDataFromService2());

    scope.join();
    scope.throwIfFailed(); // Propagar excepciones

    String result1 = task1.resultNow();
    String result2 = task2.resultNow();

} catch (InterruptedException | ExecutionException e) {
    System.err.println("Error: " + e.getMessage());
}
```

### Cambios en Java 25

La quinta preview introduce:
1. **Métodos factory estáticos**: `StructuredTaskScope.open()`
2. **Mayor flexibilidad**: Mejores políticas de join y manejo de errores
3. **API más consistente**: Sintaxis más clara

### Cómo habilitar

```bash
# Compilar y ejecutar
javac --enable-preview --release 25 App.java
java --enable-preview App
```

### Ventajas

1. **Cancelación automática**: Si una falla, todas se cancelan
2. **Gestión de ciclo de vida**: Limpieza automática
3. **Código más limpio**: Estructura try-with-resources
4. **Sin thread leaks**: Imposible olvidar threads activos

---

# Características Experimentales

{: .box-warning}
Las características experimentales requieren flags JVM específicos. **No se recomiendan para producción**.

---

## JFR CPU-Time Profiling (JEP 509)

### ¿Qué es?

**JFR CPU-Time Profiling** (JEP 509) añade perfilado basado en tiempo de CPU a Java Flight Recorder.

{: .box-warning}
**Estado: EXPERIMENTAL** - Solo funciona en Linux actualmente.

### Problema anterior

Java Flight Recorder (JFR) solo medía el tiempo en "código Java puro", sin incluir tiempo en código nativo o bibliotecas del sistema.

### Solución en Java 25

JFR ahora puede medir:
- Tiempo de CPU real consumido
- Tiempo en código nativo
- Tiempo en bibliotecas del sistema
- Proporciona vista más precisa del uso de CPU

### Cómo habilitar

```bash
# Grabar con profiling de CPU
java -XX:StartFlightRecording=filename=cpu-time.jfr,duration=10s,settings=profile \
     -XX:+UnlockExperimentalVMOptions \
     -XX:+JFRCPUProfiling \
     MyApp
```

### Análisis

```bash
# Analizar el archivo JFR
jcmd <pid> JFR.dump filename=recording.jfr

# O usar JDK Mission Control / VisualVM
```

### Beneficios

- **Medición precisa**: Incluye todo el tiempo de CPU
- **Mejor diagnóstico**: Identifica cuellos de botella reales
- **Overhead bajo**: Diseñado para producción

### Casos de uso

- **Performance tuning**: Identificar métodos costosos
- **Análisis de I/O**: Ver tiempo real vs tiempo bloqueado
- **Optimización**: Decisiones basadas en datos precisos

---

# Características en Incubación

{: .box-warning}
Las características en incubación requieren `--add-modules` y **pueden cambiar significativamente**. **No usar en producción**.

---

## Vector API (JEP 508)

### ¿Qué es?

**Vector API** (JEP 508) proporciona una API para expresar computaciones vectoriales que se compilan a instrucciones SIMD del hardware.

{: .box-warning}
**Estado: DÉCIMA INCUBACIÓN** - Requiere `--add-modules jdk.incubator.vector`

### Motivación

Las CPUs modernas tienen instrucciones SIMD (Single Instruction Multiple Data) que pueden procesar múltiples datos simultáneamente, pero Java no las aprovecha fácilmente.

### Ejemplo básico

```java
import jdk.incubator.vector.*;

public class VectorExample {
    public static void main(String[] args) {
        float[] left = {1f, 2f, 3f, 4f};
        float[] right = {5f, 6f, 7f, 8f};

        // Cargar vectores
        FloatVector a = FloatVector.fromArray(FloatVector.SPECIES_128, left, 0);
        FloatVector b = FloatVector.fromArray(FloatVector.SPECIES_128, right, 0);

        // Sumar vectores (operación paralela)
        FloatVector c = a.add(b);

        // Extraer resultado
        float[] result = new float[FloatVector.SPECIES_128.length()];
        c.intoArray(result, 0);

        System.out.println("Vector result: " + java.util.Arrays.toString(result));
        // Output: [6.0, 8.0, 10.0, 12.0]
    }
}
```

### Operaciones soportadas

```java
// Operaciones aritméticas
FloatVector sum = a.add(b);
FloatVector diff = a.sub(b);
FloatVector product = a.mul(b);
FloatVector quotient = a.div(b);

// Operaciones lógicas
IntVector and = intVec1.and(intVec2);
IntVector or = intVec1.or(intVec2);

// Operaciones de comparación
VectorMask<Float> mask = a.compare(VectorOperators.GT, b);

// Operaciones matemáticas
FloatVector sqrt = a.sqrt();
FloatVector abs = a.abs();
```

### Cómo habilitar

```bash
# Compilar
javac --add-modules jdk.incubator.vector --enable-preview MyClass.java

# Ejecutar
java --add-modules jdk.incubator.vector --enable-preview MyApp
```

### Ventajas

1. **Performance**: Hasta 4-8x más rápido que código escalar
2. **Portable**: Java se encarga de usar instrucciones SIMD disponibles
3. **Type-safe**: API segura y tipada
4. **Expresivo**: Operaciones vectoriales claras

### Casos de uso

- **Machine Learning**: Operaciones matriciales
- **Procesamiento de imágenes**: Filtros y transformaciones
- **Procesamiento de señales**: FFT, convoluciones
- **Criptografía**: Operaciones paralelas
- **Análisis de datos**: Agregaciones masivas

### Consideraciones

{: .box-warning}
**Advertencia**: Al estar en incubación, la API puede cambiar. No usar en producción hasta que sea finalizada.

---

# Conclusión

**Java 25 LTS** representa un salto significativo en la evolución de Java, con mejoras en todos los niveles:

## Resumen por estado

### ✅ Características Finalizadas (7) - Listas para Producción

1. **Scoped Values (JEP 506)**: Alternativa moderna a ThreadLocal
2. **Flexible Constructor Bodies (JEP 513)**: Validación antes de super()
3. **Instance Main Methods (JEP 512)**: Java más simple para principiantes
4. **Compact Object Headers (JEP 519)**: 22% menos uso de heap
5. **Key Derivation Function API (JEP 510)**: KDF estandarizado
6. **AOT Method Profiling (JEP 515)**: 20% mejor warm-up
7. **Generational Shenandoah (JEP 521)**: GC más eficiente

### ⚠️ Características en Preview (3) - Experimentación

1. **Module Import Declarations (JEP 511)**: Imports simplificados
2. **Primitive Types in Patterns (JEP 507)**: Pattern matching completo
3. **Structured Concurrency (JEP 505)**: Concurrencia simplificada

### ⚠️ Características Experimentales (1)

1. **JFR CPU-Time Profiling (JEP 509)**: Profiling preciso de CPU

### ❌ Características en Incubación (1) - No usar en producción

1. **Vector API (JEP 508)**: Computaciones SIMD

## Mejoras de rendimiento

| Área | Mejora | JEP |
|------|--------|-----|
| Heap usage | -22% | 519 |
| CPU usage | -8% a -30% | 519 |
| Warm-up time | -20% | 515 |
| GC efficiency | Mejor throughput | 521 |

## Migración a Java 25

{: .box-success}
Como versión **LTS con soporte de 8 años**, Java 25 es ideal para proyectos nuevos y migración desde Java 21 LTS o anteriores.

### Recomendaciones

**Para producción:**
- ✅ Usar solo características **finalizadas**
- ✅ Activar Compact Object Headers para mejor rendimiento
- ✅ Considerar Generational Shenandoah para baja latencia
- ✅ Aprovechar AOT Method Profiling para microservicios

**Para experimentación:**
- ⚠️ Probar características en **preview** en entornos de desarrollo
- ⚠️ Dar feedback a OpenJDK sobre características en preview
- ❌ Evitar características en **incubación** en cualquier ambiente productivo

**Fuentes**:

- [OpenJDK JDK 25](https://openjdk.org/projects/jdk/25/)
- [Java 25, the Next LTS Release - InfoQ](https://www.infoq.com/news/2025/09/java25-released/)
- [New Features in Java 25 - Baeldung](https://www.baeldung.com/java-25-features)
- [What's New With Java 25 - JRebel](https://www.jrebel.com/blog/java-25)
- [Java 25 LTS and IntelliJ IDEA](https://blog.jetbrains.com/idea/2025/09/java-25-lts-and-intellij-idea/)

---

**Última actualización**: Febrero 2026
