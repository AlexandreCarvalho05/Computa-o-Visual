# Computação Visual

Blog acadêmico criado para registrar a evolução ao longo da disciplina de Computação Visual. O projeto usa somente HTML, CSS e JavaScript nativo, sem frameworks, backend ou banco de dados.

## Executar localmente

Não é necessário instalar dependências nem compilar o projeto. Abra a pasta no VS Code, clique com o botão direito em `index.html` e selecione **Open with Live Server**.

Também é possível publicar os arquivos diretamente em qualquer hospedagem de sites estáticos.

## Adicionar uma postagem

Todas as postagens ficam em `src/data/posts.js`. Para publicar uma nova:

1. Localize o placeholder correspondente.
2. Troque `title` e `description` pelos textos definitivos.
3. Preencha `content` com um item do array para cada parágrafo.
4. Altere `published` para `true`.

O progresso, os cards e a navegação anterior/próxima são atualizados automaticamente.

## Estrutura

- `index.html`: estrutura base e metadados
- `src/main.js`: interface, navegação e interação da matriz RGB
- `src/data/posts.js`: conteúdo das postagens
- `src/styles.css`: identidade visual e responsividade
