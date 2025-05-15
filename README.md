# Consulta CNPJ

Uma aplicação web para consultar informações detalhadas de empresas brasileiras a partir do número de CNPJ. Os dados são obtidos através da API pública BrasilAPI e exibidos de forma organizada em cards, com opções de impressão, exportação em PDF, visualização no mapa e histórico de consultas.

## Funcionalidades

- Formatação e validação automática do CNPJ durante a digitação  
- Limite de 5 consultas por minuto (rate limiting)  
- Cache local para evitar novas requisições (máximo de 50 entradas)  
- Histórico das últimas 10 consultas (armazenado em `localStorage`)  
- Visualização do endereço no mapa usando Leaflet.js e Nominatim (OpenStreetMap)  
- Geração de PDF via jsPDF + html2canvas  
- Impressão direta do resultado  
- Compartilhamento de resultados (Web Share API ou fallback para cópia de link)  
- Modo claro/escuro persistente (toggle e `localStorage`)  
- Modal de documentação com abas (Visão Geral, Tecnologias, UI/UX, Performance, Segurança, Acessibilidade)  

## Tecnologias Utilizadas

- **HTML5** e **CSS3** (Flexbox, variáveis CSS e media queries)  
- **JavaScript (ES6+)** nativo para lógica, manipulação de DOM e controle de estado  
- **[BrasilAPI](https://brasilapi.com.br/)** – API pública para dados de CNPJ  
- **Leaflet.js** – Renderização de mapas interativos  
- **Nominatim (OpenStreetMap)** – Geocodificação de endereço  
- **jsPDF** – Geração de documentos PDF  
- **html2canvas** – Captura de elementos HTML como imagem para PDF  
- **localStorage** – Armazenamento de histórico de consultas e preferência de tema  
- **Font Awesome** (opcional) para ícones no botão de mapa  

## Como usar

1. Clone ou baixe o projeto em um servidor local (evita problemas de CORS ao abrir via `file:`).  
2. Acesse `http://localhost/mt/cnpj/index.html`.  
3. Digite um CNPJ válido e pressione **Consultar** ou **Enter**.  
4. Navegue pelas opções de impressão, exportação e mapa.  
5. Consulte o histórico no final da página ou compartilhe o link gerado.

## Estrutura de Arquivos

- `index.html` – Página principal com toda a lógica embutida  
- `README.md` – Descrição do projeto e tecnologias  