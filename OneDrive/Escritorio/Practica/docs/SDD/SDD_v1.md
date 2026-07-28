# Documento de Diseño de Software (SDD v1.0)

## 1. Arquitectura
Arquitectura de 3 capas (Cliente, API REST, Base de Datos).

## 2. Componentes Principales
* **AuthService:** Módulo encargado del registro y login.
* **ProductService:** Módulo para la consulta de productos.
* **DatabaseConnector:** Módulo de integración con la base de datos.

## 3. Decisiones Técnicas
* Uso de JavaScript (Node.js) para un entorno de ejecución liviano.
* Estructura modular para desacoplar lógica de negocio y capas de datos.