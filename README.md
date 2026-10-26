# Consulta CNPJ

Aplicação web estática para consulta de dados cadastrais de empresas brasileiras pela BrasilAPI.

## Arquitetura

O projeto usa HTML semântico, CSS nativo e módulos JavaScript ES sem framework ou build step:

- `index.html`: shell acessível, SEO e carregamento de dependências externas.
- `css/app.css`: tokens visuais, layout responsivo, modo claro/escuro e estados de interação.
- `js/validation.js`: normalização, formatação e validação de CNPJ.
- `js/api.js`: consulta BrasilAPI, validação de resposta, timeout e erros de rede.
- `js/render.js`: renderização escapada dos resultados e histórico.
- `js/storage.js`: histórico e preferência de tema no `localStorage`.
- `js/map.js`: geocodificação Nominatim e mapa Leaflet sob demanda.
- `js/export.js`: impressão, compartilhamento e exportação PDF.
- `js/app.js`: composição da interface e eventos.

## Funcionalidades

Consulta e validação de CNPJ, histórico local, rate limiting de interface, mapa, impressão, PDF, compartilhamento e tema claro/escuro.

Os dados vêm diretamente da [BrasilAPI](https://brasilapi.com.br/). O mapa usa Leaflet, OpenStreetMap e Nominatim. Não existe API própria ou MCP neste projeto.

## Desenvolvimento e testes

Sirva os arquivos por HTTP para permitir as integrações externas:

```bash
python3 -m http.server 8080
npm test
```

O navegador precisa de JavaScript para consultas interativas; a página informa essa dependência quando ele está desativado.

## Segurança e privacidade

Entradas e dados exibidos são normalizados/escapados antes da renderização. A consulta tem timeout de 10 segundos e não usa proxy CORS público. O histórico fica no armazenamento local do navegador.
