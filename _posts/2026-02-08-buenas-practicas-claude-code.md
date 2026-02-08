---
layout: post
title: Buenas Prácticas de Claude Code
subtitle: 
thumbnail-img: /assets/img/posts/openart-image_cañerias_colores-512.png
tags: [agéntica,Claude Code]
author: Alejandro Urrestarazu
---


# Buenas Prácticas de Claude Code

## Tabla de Contenidos

- [Gestión del Contexto](#gestión-del-contexto)
- [Corrección y Retroalimentación Rápida](#corrección-y-retroalimentación-rápida)
- [Verificación de Resultados](#verificación-de-resultados)
- [Separar Investigación de Implementación](#separar-investigación-de-implementación)
- [Ser Específico desde el Principio](#ser-específico-desde-el-principio)
- [Uso del Modo Plan](#uso-del-modo-plan)
- [Comandos Esenciales](#comandos-esenciales)
- [Trabajo con Sesiones](#trabajo-con-sesiones)
- [Tests y Cobertura](#tests-y-cobertura)
- [Exploración del Código](#exploración-del-código)
- [Creación de Pull Requests](#creación-de-pull-requests)
- [Trabajo con Imágenes](#trabajo-con-imágenes)

---

## Gestión del Contexto

### El Recurso Más Importante

La ventana de contexto es el recurso más crítico que debes gestionar al trabajar con Claude Code. **El rendimiento se degrada cuando el contexto se llena.**

**¿Qué incluye la ventana de contexto?**
- Toda tu conversación (cada mensaje intercambiado)
- Cada archivo que Claude lee
- Cada salida de comando ejecutado
- Resultados de búsquedas y exploraciones

**El problema:** Una sola sesión de debugging o exploración del código puede generar y consumir **decenas de miles de tokens**. Cuando la ventana de contexto se está llenando, Claude puede comenzar a "olvidar" instrucciones anteriores o cometer más errores.

### Estrategias para Gestionar el Contexto

1. **Monitorea continuamente el uso de contexto** con una línea de estado personalizada
2. **Usa `/clear` estratégicamente** para resetear el contexto entre tareas no relacionadas
3. **Aplica estrategias de reducción de tokens** (ver documentación específica)
4. **Considera usar subagentes** para tareas aisladas que no necesitan todo el contexto
5. **Usa Skills y CLAUDE.md** para información reutilizable sin saturar el contexto

### Cuándo Usar `/clear`

**Usa `/clear` cuando:**
- Cambias a una tarea completamente diferente
- Has corregido a Claude más de dos veces sobre el mismo problema
- El contexto está saturado con enfoques fallidos
- Notas que Claude está "olvidando" instrucciones o cometiendo errores inusuales

**Después de `/clear`:**
- Comienza con un prompt más específico
- Incorpora lo que aprendiste en los intentos anteriores
- Una sesión limpia con mejor prompt casi siempre supera una sesión larga con correcciones acumuladas

---

## Corrección y Retroalimentación Rápida

### Principio Fundamental

**Los mejores resultados vienen de ciclos de retroalimentación ajustados.** Aunque Claude ocasionalmente resuelve problemas perfectamente en el primer intento, corregirlo rápidamente cuando se desvía generalmente produce mejores soluciones más rápido.

### Herramientas de Corrección

#### Tecla Esc - Detener en Medio de la Acción

```
Presiona: Esc
Resultado: Claude se detiene inmediatamente
Beneficio: El contexto se preserva, puedes redirigir
```

**Cuándo usar:**
- Claude está tomando un enfoque incorrecto
- Necesitas aclarar algo antes de que continúe
- Quieres agregar información adicional

#### Esc + Esc o `/rewind` - Rebobinar

```
Presiona: Esc + Esc
O ejecuta: /rewind
Resultado: Menú de rebobinado para restaurar estados previos
```

**Cuándo usar:**
- Claude ya hizo cambios que no quieres
- Quieres volver a un punto anterior de la conversación
- Necesitas explorar un enfoque alternativo desde un punto específico

#### `/clear` - Resetear Todo

```
Ejecuta: /clear
Resultado: Contexto completamente limpio
```

**Señal de alerta:** Si has corregido a Claude más de dos veces sobre el mismo problema en una sesión, el contexto está saturado con enfoques fallidos.

---

## Verificación de Resultados

### Por Qué es Importante

Claude necesita una forma de verificar que su trabajo es correcto. Sin verificación, puede iterar en la dirección equivocada.

### Tipos de Verificación

#### 1. Tests Automatizados

```bash
# Proporciona un comando de test claro
npm run test
pytest tests/
cargo test
```

**Beneficios:**
- Verificación objetiva e inmediata
- Claude puede iterar hasta que todos los tests pasen
- Previene regresiones

#### 2. Capturas de Pantalla o Salidas Esperadas

```
"El botón debería verse azul y mostrar 'Enviar'"
"La salida debe ser un JSON con campos: id, name, email"
"El comando debe retornar exit code 0"
```

#### 3. Extensión Claude in Chrome para UI

Para cambios de interfaz de usuario:
- Claude abre nuevas pestañas en tu navegador
- Prueba la UI automáticamente
- Itera hasta que el código funcione correctamente

#### 4. Linters y Validadores

```bash
eslint src/
flake8 .
cargo clippy
```

### Regla de Oro

**Invierte en hacer tu verificación sólida como una roca.** Cuanto más clara y objetiva sea la verificación, mejor será el resultado de Claude.

---

## Separar Investigación de Implementación

### El Problema

Permitir que Claude salte directo a codificar puede producir código que **resuelve el problema equivocado**. Sin una fase de exploración y planificación, Claude puede malinterpretar requisitos o tomar decisiones arquitectónicas subóptimas.

### La Solución: Modo Plan

El Modo Plan permite que Claude lea archivos y responda preguntas **sin hacer cambios**. Esto separa la exploración de la ejecución.

### Flujo de Trabajo Recomendado (4 Fases)

#### Fase 1: Entra en Modo Plan

```bash
# Iniciar sesión en Modo Plan
claude --permission-mode plan

# O cambiar durante una sesión
Shift+Tab (cicla entre modos)
```

**Indicador:** Verás `⏸ plan mode on` en la parte inferior de la terminal.

**Ejemplo de exploración:**
```
Lee /src/auth y entiende cómo manejamos sesiones y login.
También mira cómo gestionamos variables de entorno para secretos.
¿Qué patrones de autenticación estamos usando actualmente?
```

#### Fase 2: Pide un Plan Detallado

```
Quiero agregar autenticación OAuth de Google.
Crea un plan de implementación detallado que incluya:
1. Los cambios necesarios en la base de datos
2. Los nuevos endpoints de API
3. Las modificaciones en el frontend
4. Consideraciones de seguridad
```

#### Fase 3: Revisa y Edita el Plan

```
Presiona: Ctrl+G
Resultado: El plan se abre en tu editor de texto predeterminado
```

**Edita el plan directamente:**
- Ajusta prioridades
- Agrega consideraciones que Claude pasó por alto
- Modifica el enfoque arquitectónico
- Aclaraciones sobre requisitos

#### Fase 4: Sal del Modo Plan e Implementa

```bash
# Cambiar a modo normal
Shift+Tab (hasta ver modo normal)
```

Ahora Claude implementará según el plan acordado y revisado.

### Consultas "Headless" en Modo Plan

También puedes ejecutar consultas directamente en Modo Plan:

```bash
claude -p "analiza la implementación actual y crea un plan completo"
```

---

## Ser Específico desde el Principio

### La Diferencia entre Vago y Específico

#### ❌ Vago (Evitar)
```
"arregla el bug"
"mejora el rendimiento"
"agrega validación"
```

#### ✅ Específico (Preferir)
```
"arregla el bug de login donde los usuarios ven una pantalla en blanco 
después de ingresar credenciales incorrectas. El error ocurre en 
/src/auth/login.js línea 45"

"mejora el rendimiento del endpoint /api/users reduciendo las consultas 
N+1 en la relación users-posts. Actualmente toma 3.2s, debería ser < 500ms"

"agrega validación en el formulario de registro:
- email debe ser válido (formato RFC 5322)
- contraseña mínimo 8 caracteres con al menos 1 número
- nombre de usuario solo alfanumérico, 3-20 caracteres"
```

### Plantilla para Tareas Específicas

```
Objetivo: [Qué quieres lograr]

Contexto: [Por qué es necesario, qué problema resuelve]

Archivos relevantes: [Dónde está el código relacionado]

Requisitos específicos:
1. [Requisito detallado 1]
2. [Requisito detallado 2]
3. [Requisito detallado 3]

Verificación: [Cómo sabrás que funciona]
```

### Ejemplo Completo

```
Objetivo: Implementar sistema de roles de usuario

Contexto: Necesitamos diferentes niveles de acceso (admin, editor, viewer)
para la gestión de contenido en /src/content

Archivos relevantes:
- /src/models/user.js (modelo actual de usuario)
- /src/middleware/auth.js (middleware de autenticación)
- /src/routes/content.js (rutas que necesitan protección)

Requisitos específicos:
1. Agregar campo 'role' en el modelo User (enum: admin, editor, viewer)
2. Crear middleware checkRole(allowedRoles) para proteger rutas
3. Admin: acceso total
4. Editor: puede crear y editar, no puede eliminar
5. Viewer: solo lectura
6. Migración de BD que asigne role 'viewer' a usuarios existentes

Verificación:
- Tests en /tests/roles.test.js deben pasar
- Usuario viewer no puede acceder a DELETE /api/content/:id
- Usuario admin puede acceder a todas las rutas
```

---

## Uso del Modo Plan

### Tres Casos de Uso Principales

#### 1. Exploración de Código

**Cuándo:** Quieres investigar el código a fondo antes de cambiar cualquier cosa.

**Ejemplo:**
```
Estoy en Modo Plan.
Explora /src/payment y documenta:
- Cómo procesamos pagos actualmente
- Qué pasarelas de pago usamos
- Dónde se manejan errores de pago
- Qué información se registra en logs
```

#### 2. Desarrollo Iterativo

**Cuándo:** Quieres iterar en la dirección con Claude antes de implementar.

**Ejemplo:**
```
Modo Plan activado.
Necesito refactorizar el sistema de caché. 
Primero analiza el código actual en /src/cache.
Luego propón 3 enfoques diferentes para mejorarlo.
Discutiremos cuál implementar.
```

#### 3. Cambio Durante una Sesión

Puedes cambiar a Modo Plan en cualquier momento:

```
Presiona: Shift+Tab
Resultado: Cicla entre modos de permiso
```

**Modos disponibles:**
1. Normal (ediciones requieren confirmación)
2. Auto-Accept (`⏵⏵ accept edits on` - acepta ediciones automáticamente)
3. Plan Mode (`⏸ plan mode on` - solo lectura)
4. Delegate Mode (cuando hay equipos de agentes activos)

---

## Comandos Esenciales

### Comandos de Sesión

#### `/help`
```
/help
```
Muestra todos los comandos disponibles con descripciones.

#### `/resume`
```
/resume
```
- Abre selector interactivo de sesiones
- Muestra sesiones del mismo repositorio git
- Puedes renombrar sesiones (presiona `R` en el selector)

**Atajos de teclado en el selector:**
- `Enter`: Continuar sesión seleccionada
- `R`: Renombrar sesión
- `↑/↓`: Navegar entre sesiones

#### `/clear`
```
/clear
```
Resetea el contexto completamente. Útil entre tareas no relacionadas.

### Comandos de Configuración

#### `/model`
```
/model sonnet    # Para la mayoría de tareas de coding
/model opus      # Para decisiones arquitectónicas complejas
/model haiku     # Para tareas simples y rápidas
```

**Guía de selección:**
- **Sonnet**: Balance perfecto para la mayoría de tareas de coding
- **Opus**: Razonamiento más fuerte para arquitectura compleja
- **Haiku**: Tareas simples, respuestas rápidas

#### `/config`
```
/config
```
Abre interfaz de configuración con pestañas para:
- Estado general
- Permisos
- Herramientas
- Variables de entorno

#### `/login`
```
/login
```
Cambiar de cuenta. Opciones disponibles:
- Claude.ai (suscripción Pro, Max, Teams o Enterprise)
- Claude Console (acceso API con créditos prepagos)
- Amazon Bedrock, Google Vertex AI o Microsoft Foundry

### Comandos de Permisos

#### `/allowed-tools`
```
/allowed-tools
```
Configura qué herramientas puede usar Claude:
- Bash (ejecutar comandos)
- Read (leer archivos)
- Write (crear/modificar archivos)
- Edit (editar archivos existentes)
- Glob (buscar archivos por patrón)
- Grep (buscar contenido en archivos)

---

## Trabajo con Sesiones

### Organización de Sesiones

Las sesiones se almacenan **por directorio de proyecto**. Esto significa que cada proyecto tiene su propio conjunto de conversaciones.

### Nombres Descriptivos

**Mala práctica:**
```
"sesión 1"
"fix"
"temp"
```

**Buena práctica:**
```
"oauth-google-implementation"
"fix-payment-timeout-bug"
"refactor-cache-system"
"add-user-roles-feature"
```

### Comandos de Línea para Sesiones

#### Continuar la sesión más reciente
```bash
claude --continue
```

#### Abrir selector de sesiones
```bash
claude --resume
```

#### Reanudar sesión específica por nombre
```bash
claude --resume oauth-google-implementation
```

#### Reanudar desde Pull Request
```bash
claude --from-pr 123
```

### Git Worktrees

El selector `/resume` muestra sesiones del mismo repositorio git, **incluyendo worktrees**. Esto es útil cuando trabajas en múltiples features en paralelo.

### Renombrar Sesiones

1. Ejecuta `/resume`
2. Navega a la sesión que quieres renombrar
3. Presiona `R`
4. Ingresa el nuevo nombre

---

## Tests y Cobertura

### Generación de Tests

Claude puede generar tests que siguen los patrones y convenciones existentes de tu proyecto.

#### Sé Específico sobre el Comportamiento

**Vago:**
```
"crea tests para este código"
```

**Específico:**
```
"crea tests para la función calculateDiscount que verifiquen:
1. Descuento del 10% para compras > $100
2. Descuento del 20% para compras > $500
3. Sin descuento para compras < $100
4. Error cuando el monto es negativo
5. Manejo correcto de valores decimales"
```

### Análisis de Patrones

Claude examina tus archivos de test existentes para coincidir con:
- Estilo de código y formateo
- Frameworks de testing (Jest, pytest, RSpec, etc.)
- Patrones de aserciones
- Estructura de los tests (describe/it, test/assert, etc.)
- Mocks y fixtures

### Identificación de Casos Extremos

**Solicitud efectiva:**
```
"Analiza la función processPayment y sugiere tests para:
- Casos extremos que podría haber pasado por alto
- Condiciones de error
- Valores límite
- Entradas inesperadas o malformadas
- Condiciones de carrera (si aplica)
- Escenarios de timeout
"
```

### Cobertura Completa

```
"Genera tests que logren al menos 90% de cobertura de código 
para el módulo /src/auth, incluyendo:
- Happy paths (caminos felices)
- Error paths (caminos de error)
- Edge cases (casos extremos)
- Boundary conditions (condiciones límite)
"
```

---

## Exploración del Código

### Uso del Símbolo `@`

El símbolo `@` permite incluir rápidamente archivos, directorios o recursos sin esperar a que Claude los lea automáticamente.

#### Incluir Archivo Completo

```
@/src/models/user.js

Analiza este modelo y explica las relaciones.
```

**Resultado:** El contenido completo del archivo se incluye en la conversación.

#### Incluir Directorio

```
@/src/components

Lista todos los componentes React y explica su propósito.
```

**Resultado:** Proporciona un listado del directorio con información de archivos.

#### Recursos MCP

```
@gdrive:document-id

Resume este documento de Google Drive.
```

**Formato:** `@server:resource`

### Navegación Efectiva

#### Entender Estructura del Proyecto

```
Explora la estructura de /src y crea un mapa mental de cómo 
se organizan los módulos y sus dependencias.
```

#### Encontrar Funcionalidad Específica

```
Busca en todo el proyecto dónde se implementa la lógica de 
envío de emails. Incluye archivos de configuración y templates.
```

#### Analizar Dependencias

```
Analiza /src/services/payment.js y lista todas sus dependencias,
tanto internas (otros módulos del proyecto) como externas (npm packages).
```

---

## Creación de Pull Requests

### Dos Métodos

#### Método 1: Pregunta Directa

```
Crea un PR para mis cambios con el título:
"Implementar autenticación OAuth de Google"

Incluye en la descripción:
- Resumen de cambios
- Archivos principales modificados
- Instrucciones de testing
- Consideraciones de seguridad
```

#### Método 2: Usando el Skill `/commit-push-pr`

```
/commit-push-pr
```

**Hace en un solo paso:**
1. Commit de los cambios
2. Push al repositorio remoto
3. Apertura del Pull Request

### Revisión Antes de Enviar

**Siempre revisa el PR generado por Claude:**

```
Antes de crear el PR, muéstrame:
- El mensaje de commit propuesto
- La descripción del PR
- Los archivos que serán incluidos
- Posibles riesgos o consideraciones
```

### Destacar Riesgos

```
Revisa los cambios en este PR y destaca:
- Potenciales breaking changes
- Áreas que necesitan atención especial en el code review
- Cambios que afectan la seguridad
- Modificaciones en APIs públicas
```

---

## Trabajo con Imágenes

### Análisis de Imágenes

Claude puede analizar imágenes en tu codebase.

#### Proporcionar Ruta de Imagen

```
Analiza esta imagen: /assets/wireframe-dashboard.png

Identifica:
- Elementos de UI presentes
- Layout y estructura
- Componentes que necesitaríamos crear
- Sugerencias de implementación
```

### Interacción con Referencias de Imágenes

Cuando Claude referencia imágenes (por ejemplo, `[Image #1]`):

**En Mac:**
```
Cmd+Click en el link
```

**En Windows/Linux:**
```
Ctrl+Click en el link
```

**Resultado:** La imagen se abre en tu visor predeterminado.

### Casos de Uso

#### 1. Implementar desde Mockup

```
Tengo un mockup en /designs/login-page.png
Créame el componente React que replique este diseño usando Tailwind CSS.
```

#### 2. Analizar Screenshots de Bugs

```
Este screenshot muestra el bug: /bugs/layout-broken.png
Analiza qué está mal y sugiere el fix en el CSS.
```

#### 3. Comparar Visual

```
Compara estas dos imágenes:
- /screenshots/before.png
- /screenshots/after.png

¿Los cambios en el código lograron el resultado esperado?
```

---

## Consejos Adicionales

### Interrumpir y Guiar

**No esperes a que Claude termine si va en la dirección equivocada.** Es una conversación, puedes interrumpir en cualquier momento con `Esc`.

### Delegar, No Dictar

En lugar de dar instrucciones paso a paso:

**Menos efectivo:**
```
1. Abre user.js
2. Agrega un campo email
3. Actualiza la migración
4. Modifica el validator
```

**Más efectivo:**
```
Necesito agregar un campo de email al modelo User con validación.
Asegúrate de actualizar también las migraciones y tests.
```

Claude puede descubrir los pasos por sí mismo.

### Es una Conversación

Trata a Claude como un colega:
- Haz preguntas de seguimiento
- Pide aclaraciones
- Discute enfoques alternativos
- Solicita que explique su razonamiento

### Pedir Ayuda a Claude Code

```
/help

o simplemente pregunta:
"¿Cómo puedo hacer X en Claude Code?"
"¿Cuál es la mejor práctica para Y?"
```

---

## Recursos Adicionales

### Documentación Oficial

- **Quickstart**: Primeros pasos en 5 minutos
- **How Claude Code Works**: Conceptos del loop agentic
- **Common Workflows**: Guías paso a paso
- **Extend Claude Code**: Skills, MCP, subagentes, hooks
- **Troubleshooting**: Soluciones para problemas comunes

### Explorar Capacidades

```
"Muéstrame ejemplos de lo que puedes hacer con Claude Code"
"¿Qué tipos de tareas automatizas mejor?"
"Dame consejos específicos para trabajar con proyectos grandes"
```

---

## Resumen de Reglas de Oro

1. **Gestiona el contexto activamente** - es tu recurso más valioso
2. **Corrige rápido** - los ciclos de feedback ajustados producen mejores resultados
3. **Proporciona verificación clara** - tests, outputs esperados, linters
4. **Separa exploración de implementación** - usa Modo Plan
5. **Sé específico desde el inicio** - detalles claros = mejores resultados
6. **Usa `/clear` estratégicamente** - después de 2+ correcciones en el mismo problema
7. **Nombra sesiones descriptivamente** - facilita reanudar trabajo
8. **Interrumpe cuando sea necesario** - no esperes a que termine si va mal
9. **Delega, no dictes** - deja que Claude descubra los pasos
10. **Es una conversación** - haz preguntas, discute, aclara

---

**Última actualización**: Febrero 2026  
**Fuente**: [Claude Code Documentation](https://code.claude.com/docs)