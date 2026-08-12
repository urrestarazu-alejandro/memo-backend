---
layout: post
title: "La pregunta que revela el patrón: 7 estructuras de datos"
subtitle: "Una sola pregunta diagnóstica que señala la estructura correcta, aplicada a Hash Map, Sliding Window, DP, Binary Search, BFS/DFS, Heaps y Prefix Sums"
thumbnail-img: assets/img/posts/atril_pregunta.png
tags: [algoritmos, entrevistas-tecnicas, leetcode, java]
comments: true
author: Alejandro Urrestarazu
---

![Atril con la pregunta diagnóstica](/assets/img/posts/atril_pregunta.png){: .mx-auto.d-block :}

Si estás practicando para una entrevista técnica, seguramente ya te pasó: ves un problema nuevo y no sabés por
dónde arrancar, aunque hayas resuelto veinte parecidos antes. El problema no es de conocimiento — es que estás
tratando de reconocer el patrón por las palabras del enunciado, y el enunciado suele estar frecuentemente
diseñado para no dejarte hacer eso.

Esta idea se la debo a un newsletter que sigo,
[*Cracking the Tech Interview*](https://dglearning.substack.com/p/the-one-question-that-reveals-every?r=22l55o&utm_campaign=post&utm_medium=email)
de Rafay Abbasi. Es un método simple: en vez de memorizar qué patrón corresponde a qué enunciado, escribís la
fuerza bruta y le hacés una sola pregunta. Este post cubre cómo encontrar el patrón correcto *antes* de
programar — si después querés asegurarte de que de verdad lo dominás y no solo lo reconociste, seguí con
[Resolver dos veces](/2026-08-12-resolver-dos-veces-tecnica-practica-algoritmos/).

## Tabla de Contenidos

- [La pregunta base y por qué funciona](#la-pregunta-base-y-por-qué-funciona)
- [Cómo aplicarla en la entrevista, paso a paso](#cómo-aplicarla-en-la-entrevista-paso-a-paso)
- [1. Hash Map — chequeo de membresía repetido](#1-hash-map--chequeo-de-membresía-repetido)
- [2. Sliding Window — solapamiento entre ventanas consecutivas](#2-sliding-window--solapamiento-entre-ventanas-consecutivas)
- [3. Programación Dinámica — subproblemas recursivos repetidos](#3-programación-dinámica--subproblemas-recursivos-repetidos)
- [4. Binary Search — la pregunta extendida](#4-binary-search--la-pregunta-extendida)
- [5. BFS/DFS — no revisitar nodos ya explorados](#5-bfsdfs--no-revisitar-nodos-ya-explorados)
- [6. Heaps — evitar ordenar todo cuando solo importan los K extremos](#6-heaps--evitar-ordenar-todo-cuando-solo-importan-los-k-extremos)
- [7. Prefix Sums — precomputar para responder queries repetidas en O(1)](#7-prefix-sums--precomputar-para-responder-queries-repetidas-en-o1)
- [Un ejemplo resuelto: Subarray Sum Equals K](#un-ejemplo-resuelto-subarray-sum-equals-k)
- [Los 3 patrones que quedan afuera](#los-3-patrones-que-quedan-afuera)
- [Ejercicio recomendado](#ejercicio-recomendado)

## La pregunta base y por qué funciona

En vez de memorizar qué patrón corresponde a qué tipo de enunciado — algo que falla apenas el problema está
fraseado de forma inusual — conviene escribir primero la solución de fuerza bruta y después hacerse una sola
pregunta diagnóstica:

{: .box-success}
**"¿Dónde estoy haciendo el mismo trabajo más de una vez?"**

Funciona porque apunta a la estructura del cómputo, no a las palabras del enunciado. Dos problemas que suenan
totalmente distintos — "encontrar dos elementos que sumen X" y "encontrar el par de precios que activan un
descuento" — pueden tener exactamente la misma fuerza bruta por debajo (recorrer todos los pares), y por lo tanto
el mismo diagnóstico. Eso te salva cuando el entrevistador frasea el problema de forma rara justo para evitar que
lo reconozcas de memoria: no necesitás reconocer el patrón, lo derivás.

## Cómo aplicarla en la entrevista, paso a paso

1. Escribí (aunque sea mentalmente o en un comentario) la solución de fuerza bruta, por lenta que sea.
2. Preguntate en voz alta: "¿dónde estoy repitiendo el mismo cómputo?".
3. Señalá la línea exacta: el loop interno, la llamada recursiva.
4. Nombrá qué se repite — ¿un chequeo de membresía? ¿una suma? ¿un subproblema?
5. Elegí la estructura que lo elimina.

Narrar este proceso en voz alta es tan importante como llegar a la respuesta — le muestra al entrevistador que
pensás de forma sistemática, no que "te acordaste" la solución.

## 1. Hash Map — chequeo de membresía repetido

**Señal:** en tu fuerza bruta hay un loop interno que pregunta "¿este valor ya apareció?" o "¿cuántas veces
apareció?", respondiendo con un escaneo lineal cada vez.

Ejemplo (Two Sum): por cada elemento `i`, escaneás el resto buscando el complemento → O(n²). Guardando lo que ya
viste en un diccionario, la pregunta "¿está el complemento?" se resuelve en O(1).

```java
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> seen = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (seen.containsKey(complement)) {
            return new int[]{seen.get(complement), i};
        }
        seen.put(nums[i], i);
    }
    throw new IllegalArgumentException("No existe solución");
}
```

**Para entrevista:** cualquier variante de "¿existe X?", "¿cuántas veces vi X?", "elementos duplicados",
"complementos" → hash map/set es tu primer instinto.

## 2. Sliding Window — solapamiento entre ventanas consecutivas

**Señal:** procesás rangos contiguos (subarreglos de tamaño fijo o variable) y el siguiente rango comparte casi
todos los elementos con el anterior, pero lo recalculás desde cero.

Ejemplo: suma máxima de K elementos consecutivos. En vez de sumar cada ventana entera, restás el elemento que
sale y sumás el que entra.

```java
public int maxSumK(int[] nums, int k) {
    int window = 0;
    for (int i = 0; i < k; i++) {
        window += nums[i];
    }
    int best = window;
    for (int i = k; i < nums.length; i++) {
        window += nums[i] - nums[i - k];
        best = Math.max(best, window);
    }
    return best;
}
```

**Para entrevista:** funciona tanto para ventana fija (tamaño K) como variable (mientras se cumpla una condición,
expandir/contraer con dos punteros). Palabras clave: "subarreglo contiguo", "substring", "máximo/mínimo de
tamaño K".

## 3. Programación Dinámica — subproblemas recursivos repetidos

**Señal:** una recursión llama múltiples veces a la misma función con los mismos argumentos, en distintas ramas
del árbol de recursión (Fibonacci es el ejemplo canónico: `fib(3)` se calcula dos veces, `fib(2)` tres veces, etc.).

Cómo detectarlo rápido: dibujá (o imaginá) el árbol de llamadas. Si ves el mismo nodo repetido en ramas distintas,
ahí está el desperdicio.

```java
public long fibDp(int n) {
    if (n < 2) return n;
    long a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
        long next = a + b;
        a = b;
        b = next;
    }
    return b;
}
```

**Para entrevista:** primero identificá la recurrencia (¿cuál es el subproblema y cómo se relaciona con los
subproblemas más chicos?), luego decidí top-down con memoización (más fácil de derivar desde la recursión) o
bottom-up con tabulación (más eficiente en memoria/stack). Preguntate siempre: "¿qué necesito memorizar para no
recalcular esto?".

## 4. Binary Search — la pregunta extendida

Acá la pregunta original no aplica literalmente (un escaneo lineal no repite cómputo idéntico), así que se usa la
versión extendida: **"¿dónde estoy haciendo trabajo que la estructura de los datos ya volvió innecesario?"**

**Señal:** el arreglo está ordenado (o tiene alguna propiedad monótona). Si `nums[mid] < target`, ya sabés que
todo lo que está a la izquierda de `mid` es inútil — no porque lo hayas revisado antes, sino porque el orden lo
garantiza.

```java
public int binarySearch(int[] nums, int target) {
    int lo = 0, hi = nums.length - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return -1;
}
```

**Para entrevista:** cualquier vez que veas "ordenado", "monótono", "encontrar el punto donde cambia una
condición" (búsqueda binaria sobre la respuesta), pensá en binary search. Tip extra: binary search no es solo
para arreglos — se puede aplicar sobre un espacio de respuestas (ej. "mínimo valor X tal que...").

## 5. BFS/DFS — no revisitar nodos ya explorados

**Señal:** en un grafo o grilla, sin un marcador de "visitado", el mismo nodo o celda puede procesarse múltiples
veces desde distintos vecinos.

```java
public int numIslands(char[][] grid) {
    int rows = grid.length, cols = grid[0].length;
    int count = 0;
    for (int r = 0; r < rows; r++) {
        for (int c = 0; c < cols; c++) {
            if (grid[r][c] == '1') {
                dfs(grid, r, c);
                count++;
            }
        }
    }
    return count;
}

private void dfs(char[][] grid, int r, int c) {
    int rows = grid.length, cols = grid[0].length;
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] != '1') {
        return;
    }
    grid[r][c] = '0'; // marcar visitado inmediatamente
    dfs(grid, r + 1, c);
    dfs(grid, r - 1, c);
    dfs(grid, r, c + 1);
    dfs(grid, r, c - 1);
}
```

**Para entrevista:** DFS suele ser más natural cuando querés explorar completo un componente antes de seguir
(recursión o stack); BFS cuando te importa la distancia/nivel (camino más corto en grafo no ponderado). La clave
siempre es: marcar visitado apenas lo procesás, nunca después.

## 6. Heaps — evitar ordenar todo cuando solo importan los K extremos

**Señal:** necesitás los K elementos más grandes/chicos, pero tu solución ordena la colección entera
(O(n log n)), estableciendo el orden relativo de elementos que ni te importan.

```java
public List<Integer> topK(int[] nums, int k) {
    PriorityQueue<Integer> heap = new PriorityQueue<>();
    for (int n : nums) {
        heap.offer(n);
        if (heap.size() > k) {
            heap.poll();
        }
    }
    List<Integer> result = new ArrayList<>(heap);
    result.sort(Collections.reverseOrder());
    return result;
}
```

**Para entrevista:** heap de tamaño K te da O(n log K) en vez de O(n log n) — diferencia grande cuando K << n.
Útil también para "los K elementos más cercanos", "merge de K listas ordenadas", "mediana en un stream".

## 7. Prefix Sums — precomputar para responder queries repetidas en O(1)

**Señal:** te piden responder múltiples consultas de suma de rango sobre el mismo arreglo, y cada consulta
recalcula desde cero, repitiendo sumas parciales que ya se hicieron en consultas anteriores.

```java
public int[] buildPrefix(int[] nums) {
    int[] prefix = new int[nums.length + 1];
    for (int i = 0; i < nums.length; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    return prefix;
}

public int rangeSum(int[] prefix, int i, int j) {
    return prefix[j + 1] - prefix[i];
}
```

**Para entrevista:** cualquier "múltiples queries sobre el mismo arreglo/matriz" → pensá en precomputar (prefix
sums 1D o 2D). También se generaliza a XOR prefix sums, conteos acumulados, etc.

## Un ejemplo resuelto: Subarray Sum Equals K

Aplicar la pregunta dos veces seguidas sobre el mismo problema muestra bien la mecánica:

1. La fuerza bruta prueba todos los subarreglos posibles: **O(n³)**.
2. Primera pasada de la pregunta: "¿dónde repito trabajo?" → en el recálculo de cada suma de subarreglo. Se
   resuelve manteniendo una suma acumulada: **O(n²)**.
3. Segunda pasada de la misma pregunta sobre la nueva solución: "¿dónde repito trabajo de nuevo?" → en volver a
   recorrer el arreglo buscando pares de sumas que difieran en K. Se resuelve con un hash map de sumas de prefijo
   ya vistas: **O(n)**.

La pregunta no se aplica una sola vez y se abandona — se repite sobre la propia solución hasta que no quede
trabajo redundante.

## Los 3 patrones que quedan afuera

- **Two Pointers** (converger desde los extremos): no elimina trabajo repetido, explota que el input está
  ordenado para descartar candidatos con una sola comparación. Pregunta útil: "¿qué me garantiza el orden del
  input sobre qué puedo saltear?".
- **Backtracking:** no hay trabajo repetido que eliminar — hay que enumerar todo. La pregunta útil acá es otra:
  "¿qué invalidaría una solución parcial, y puedo chequearlo antes de seguir recursando?" (poda temprana).
- **Greedy:** la elección localmente óptima elimina candidatos sin cómputo extra. Vale la pena preguntarse "¿por
  qué la elección local es también la globalmente óptima?" para justificarlo ante el entrevistador.

## Ejercicio recomendado

Practicá con unos 20 problemas: escribí siempre la fuerza bruta primero, hacete la pregunta en voz alta, señalá
la línea exacta del trabajo repetido, y nombrá la estructura de datos que lo resuelve. Después de 20-40 problemas
se vuelve automático — que es justo el estado que querés tener en una entrevista real, donde el patrón "aparece"
en vez de tener que recordarlo.

Una vez que la pregunta se vuelve reflejo y encontrás el patrón rápido, el siguiente desafío ya no es
identificarlo — es demostrar que lo dominás de verdad. De eso trata
[Resolver dos veces](/2026-08-12-resolver-dos-veces-tecnica-practica-algoritmos/): la técnica para confirmar que
un patrón es tuyo y no solo algo que reconociste.
