# Computação Visual

Blog acadêmico criado para registrar a evolução ao longo da disciplina de Computação Visual. O projeto usa React, TypeScript e Vite, sem backend ou banco de dados.

## Executar localmente

É necessário ter Node.js 20 ou mais recente.

```bash
npm install
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação. Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Adicionar uma postagem

Todas as postagens ficam em `src/data/posts.ts`. Para publicar uma nova:

1. Localize o placeholder correspondente.
2. Troque `title` e `description` pelos textos definitivos.
3. Preencha `content` com um item do array para cada parágrafo.
4. Altere `published` para `true`.

O progresso, os cards e a navegação anterior/próxima são atualizados automaticamente.

## Estrutura

- `src/components`: componentes reutilizáveis da interface
- `src/data`: conteúdo e tipagem das postagens
- `src/hooks`: controle leve de navegação
- `src/pages`: páginas da aplicação
- `src/styles.css`: identidade visual e responsividade

## Scripts

- `npm run dev`: inicia o ambiente de desenvolvimento
- `npm run build`: valida o TypeScript e gera a aplicação
- `npm run lint`: executa a análise estática
- `npm run preview`: abre uma prévia do build
