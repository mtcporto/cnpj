# Validação da modernização

## Evidências visuais

Screenshots gerados em 26/10/2026 com Chrome headless:

- `artifacts/screenshots/original-desktop.png` — versão anterior, desktop 1440×1000.
- `artifacts/screenshots/original-mobile.png` — versão anterior, mobile 390×844.
- `artifacts/screenshots/modernization-desktop.png` — versão modernizada, desktop 1440×1000.
- `artifacts/screenshots/modernization-mobile.png` — versão modernizada, mobile 390×844.

## Testes executados

- `npm test`: 2 testes unitários aprovados para validação e formatação de CNPJ.
- `node --check js/*.js`: sintaxe dos módulos aprovada.
- `git diff --check`: aprovado.
- BrasilAPI real: CNPJ `33.000.167/0001-01` respondeu HTTP 200.
- Smoke test no navegador: CNPJ inválido exibiu mensagem de erro; consulta válida renderizou resultado e histórico.

## Segurança revisada

- HTML de dados externos é escapado antes da renderização.
- Consulta possui timeout de 10 segundos e valida o JSON recebido.
- Não há proxy CORS público.
- Dependências Leaflet carregam SRI; os scripts de PDF existentes permanecem CDN e devem receber hashes oficiais verificados antes de uma CSP estrita.

## Pendências

- Confirmar o domínio de produção para adicionar canonical, `robots.txt` e sitemap sem inventar URL.
- Executar auditoria automatizada de acessibilidade (axe/Lighthouse) no ambiente de preview.
- Validar exportação PDF e mapa em navegador real com as permissões de rede do deployment.
