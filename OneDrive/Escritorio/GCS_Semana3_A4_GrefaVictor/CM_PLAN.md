# Plan de Gestion de Configuracion de Software (CM_PLAN)

| EC | Ubicacion | ^¿Por que es EC? | Quien lo modifica |
| :--- | :--- | :--- | :--- |
| **SRS_v1.md** | /docs/SRS/ | Define requisitos funcionales y RNF; regula el alcance. | Analista / PO |
| **Quality_Model.md** | /docs/Quality/ | Define estandar de calidad e indicadores para auditar entregas. | QA Lead / Arquitecto |
| **Lifecycle_Impact.md** | /docs/Lifecycle/ | Registra analisis de impacto y trazabilidad de cambios. | Lead Dev / PM |
| **app_logic.js** | /src/ | Contiene logica de negocio (promedios, aprobaciones). | Developer |
| **grades.test.js** | /tests/ | Suite de pruebas unitarias que valida logica de notas. | QA / Dev |
| **config.example.env** | /config/ | Define variables de entorno para DB e integraciones. | DevOps / SysAdmin |
| **CM_PLAN.md** | / | Regula nomenclatura, versionado y control de cambios. | CM Manager |
| **CHANGELOG.md** | / | Historial de caracteristicas anadidas, corregidas o eliminadas. | Lead Dev / Release Mgr |
