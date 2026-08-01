# Analisis de Impacto - Cambio 2FA para Docentes

| Fase | ¿Que cambia? | EC afectados | Riesgo si no se controla | Evidencia de validacion |
| :--- | :--- | :--- | :--- | :--- |
| **Requisitos** | RNF-04: OTP via APP/SMS para firma. | SRS_v1.md | Ambiguedad en implementacion. | Acta firmada por PO. |
| **Diseno/Config** | Parametrizar claves API de TOTP. | config.example.env | Exposicion de claves privadas. | PR Code Review. |
| **Desarrollo** | Middleware 2FA antes de guardar notas. | /src/app_logic.js | Bypass de seguridad en notas. | Commit ligado a #2FA-ACAD. |
| **Pruebas** | Tests unitarios para validacion de OTP. | /tests/grades.test.js | Vulnerabilidad a fuerza bruta. | Reporte 100% tests pasados. |
