# SRS v1 - Especificación de Requisitos
REQ-001: El sistema permitirá listar productos existentes.
REQ-002: El sistema permitirá agregar productos con cantidad mayor o igual a 0.
REQ-003: El sistema filtrará productos por fecha de ingreso.

RNF-001: Trazabilidad completa (Issue -> PR -> Commit -> Release).
RNF-002: Control de integridad y configuración mediante SemVer.

## Evidencia de Auditoría Funcional (REQ-001)
- [x] Criterio 1: list_products() retorna estructura tipo lista.
- [x] Criterio 2: Retorna lista vacía en estado inicial.
- [x] Criterio 3: Retorna elementos registrados tras invocar add_product().
- Resultado: Pruebas unitarias en tests/test_app.py ejecutadas y aprobadas.
