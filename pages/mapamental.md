---
layout: page
title: Mapa mental del sitio
subtitle: 
footer-extra: cafecito.html
---

El siguiente gráfico conecta las ideas y los contenidos que podras encontrar próximamente en el sitio:

```mermaid
mindmap
  root("`**Memo Backend**`")
  ::icon(fas fa-memory)
    id("`**Principios**`")
        ::icon(fas fa-yin-yang)
        SOC - Separación de intereses
        id("`**SOLID**`")
        ::icon(fas fa-gem)
            SRP - Principio de responsabilidad única
            OCP - Principio de abierto/cerrado
            LCP - Principio de sustitución de Liskov
            ISP - Principio de segregación de la interfaz
            DIP - Principio de inversión de la dependencia
    id(Estilos arquitectónicos)
    ::icon(fas fa-university)
    id(Patrones arquitectónicos)
    ::icon(fas fa-igloo)
    id(Patrones de diseño)
    ::icon(fas fa-puzzle-piece)
        Creacionales
        ::icon(fas fa-industry)
        Estructurales
        ::icon(fas fa-cubes)
        Comportamiento
        ::icon(fas fa-key)
    id(Anti-Patrones de diseño)
    ::icon(fas fa-compass)
```  

[![Solid](https://img.shields.io/badge/Ver%20todo%20el%20contenido%20sobre-Solid-blue?style=for-the-badge)](https://memobackend.com.ar/tags/#solid)

### Patrones de diseño

```mermaid
mindmap
  root("`**Memo Backend**`")
  ::icon(fas fa-memory)
    id(Patrones de diseño)
    ::icon(fas fa-puzzle-piece)
        Creacionales
        ::icon(fas fa-industry)
            Factory Method: Método fábrica, Constructor virtual
            Abstract Factory: Fábrica abstracta
            Builder: Constructor
            Prototype: Prototipo, Clon, Clone
            Singleton: Instancia única
        Estructurales
        ::icon(fas fa-cubes)
            Adapter: Adaptador, Envoltorio, Wrapper
            Bridge: Puente
            Composite: Objeto compuesto, Object Tree
            Decorator: Decorador, Envoltorio, Wrapper
            Facade: Fachada
            Flyweight: Peso mosca, Peso ligero, Cache
            Proxy
        Comportamiento
        ::icon(fas fa-key)
            Chain of Responsibility: Cadena de responsabilidad, CoR, Chain of Command
            Command: Comando, Orden, Action, Transaction
            Iterator: Iterador
            Mediator: Mediador, Intermediary, Controller
            Memento: Recuerdo, Instantánea, Snapshot
            Observer: Observador, Publicación-Suscripción
            State: Estado
            Strategy: Estrategia
            Template Method: Método plantilla
            Visitor: Visitante
```

[![Patrones de diseño](https://img.shields.io/badge/Ver%20todo%20el%20contenido%20sobre-Patrones%20de%20dise%C3%B1o-blue?style=for-the-badge)](https://memobackend.com.ar/tags/#Patrones%20de%20dise%C3%B1o)

### Patrones Arquitectónicos 

```mermaid
mindmap
  root("`**Memo Backend**`")
  ::icon(fas fa-memory)
    id(Patrones arquitectónicos)
    ::icon(fas fa-igloo)
        MVP: Modelo-Vista-Presentador
        MVC: Modelo-Vista-Controlador
        MVVM: Modelo-Vista-Viewmodel
        MVVM-C: MVVM with Coordinator
        MVI: Model-View-Intent
        VIPER: View Interactor Presenter Entity Router
```  

### Estilos Arquitectónicos

```mermaid
mindmap
  root("`**Memo Backend**`")
  ::icon(fas fa-memory)
    id(Estilos arquitectónicos)
    ::icon(fas fa-university)
        Monolito
            Onion
            Layered: En capas
        SOA: Service oriented 
            Microservices
            Broker
            Serverless
        Component-Based
            Microkernel
            Object-Oriented
            Plug-in
        Distributed Systems
            Peer-to-Peer
            Space-based - Basado en el espacio
        Event-Driven - Impulsado por eventos
            Publish-Subscribe
            Event-Driven
        Interpreter
            Python Interpreter
            JavaScript Engine 
            JVM
        Data-centric
            CQRS
            Event-Sourcing
            Kappa
            Lambda
```  


### Objetos


```mermaid
mindmap
  root("`**Memo Backend**`")
  ::icon(fas fa-memory)
    id(Objetos)
    ::icon(fa-solid fa-car-on)
        Modelos Anémicos
        Modelos Enriquecidos
        Inmutabilidad
```  

### Conceptos del diseño de sistemas

```mermaid
---
config:
  layout: tidy-tree
---
mindmap
  root(System Design Concepts))
    SCALING & CONSISTENCY
      Vertical/Horizontal
      CAP Triangle
      PACELC Pyramid
      ACID/BASE
      Strong/Eventual Consistency
    PERFORMANCE & ARCHITECTURE
      Throughput/Latency
      Amdahl's Law Graph
      Stateful/Microservices/Serverless Servers
      Monoliths
      Monoliths Cloud
      Sharding
      Replication
      Consistent Hashing Ring
    DATABASE & STORAGE
      Indexing (B-Trees/LSM)
      WAL Log
      WAL Normalization/Denormalization
      Polyglot Persistence
      Bloom Filters
      Vector Databases
    CACHING & MESSAGING
      Caching Strategies
      Cache Eviction (LRU/LFU)
      Message Queues
      Pub-Sub
      Dead Letter Queues
      Distributed Tracing
    OBSERVABILITY & SECURITY
      SLA/SLO/SLI
      OAuth 2.0 & OIDC
      TLS/SSL Handshake
      Zero Trust Security Shield
    RELIABILITY & PATTERNS
      Rate Limiting
      Circuit Breaker
      Bulkhead
      Retry/Exponential Backoff
      Idempotency Checkmark
      Leader Election
      SAGA
      2PC
    NETWORKING & COMMUNICATION
      Load Balancer
      Reverse/Forward Proxy
      API Gateway
      CDN
      DNS
      HTTP/2
      TCP/UDP Packets
      HTTP/2 & HTTP/3
      gRST/gRPC & REST
      WebSocket/SSE
      Long Polling
      Gossip Protocol
```  
