# Modelo de Calidad (ISO/IEC 25010)

| Atributo | Definicion | Metrica verificable | EC que lo soporta |
| :--- | :--- | :--- | :--- |
| **Mantenibilidad** | Facilidad para modificar codigo. | Cobertura de pruebas unitarias >= 75%. | /tests/, /src/ |
| **Seguridad** | Proteccion de datos academicos. | 0 credenciales expuestas en repo. | /config/, /src/ |
| **Eficiencia** | Desempeno bajo carga. | Respuesta <= 1.5s con 500 usuarios. | /src/, /config/ |
| **Fiabilidad** | Frecuencia de ejecucion sin fallas. | Exito en generacion de PDF >= 99.8%. | /src/, /tests/ |
| **Usabilidad** | Facilidad de uso para docentes. | Carga de acta en <= 4 clics. | /docs/SRS/, /src/ |
| **Trazabilidad** | Rastreo de cambios de notas. | 100% registros con log (userID, timestamp). | /src/, CM_PLAN.md |
