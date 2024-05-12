---
layout: page
title: Mapa mental del sitio
subtitle: 
---

El siguiente gráfico conecta las ideas y los contenidos que podras encontrar próximamente en el sitio:

```mermaid
mindmap
  root("`**Memo Backend**`")
  ::icon(fas fa-sun)
    id("`**SOLID**`")
    ::icon(fas fa-yin-yang)
        SOC: Separación de intereses
        SRP - Principio de responsabilidad única
        OCP - Principio de abierto/cerrado
        LCP - Principio de sustitución de Liskov
        ISP - Principio de segregación de la interfaz
        DIP - Principio de inversión de la dependencia
    id(Estilos arquitectónicos)
    ::icon(fas fa-university)
        Monolito
        En capas
        Impulsado por eventos
        Sistemas autónomos
        Microservicios
        Basado en el espacio
    id(Patrones arquitectónicos)
    ::icon(fas fa-igloo)
        MVP: Modelo-Vista-Presentador
        MVC: Modelo-Vista-Controlador
        MVVM: Modelo-Vista-Viewmodel
        DDD: Diseño impulsado por dominios
    id(Patrones de diseño)
    ::icon(fas fa-puzzle-piece)
        Creacionales
        ::icon(fas fa-industry)
        Estructurales
        ::icon(fas fa-cubes)
        Comportamiento
        ::icon(fas fa-key)
```  