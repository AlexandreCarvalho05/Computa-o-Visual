export const posts = [
  {
    id: 'expectativas-da-disciplina',
    number: 1,
    title: 'O que eu esperava da disciplina de Computação Visual?',
    date: '18/08/2026',
    description: 'Primeiras impressões sobre pixels, matrizes e o que espero aprender ao longo do semestre.',
    published: true,
    content: [
      'Antes de começar a disciplina, eu imaginava que Computação Visual seria focada principalmente em entender como computadores trabalham com imagens, vídeos e elementos gráficos, talvez aprendendo sobre edição, criação de imagens ou até animações.',
      'Depois da apresentação inicial, percebi que a disciplina vai um pouco além disso. Vamos estudar como o computador representa e interpreta uma imagem.',
      'Uma imagem que enxergamos normalmente é, para o computador, formada por uma grande quantidade de pixels organizados em uma matriz. Cada pixel possui informações de cor que podem ser representadas, por exemplo, através dos valores de RGB (vermelho, verde e azul).',
      'A partir dessas informações, podemos realizar diferentes operações sobre uma imagem e até identificar determinadas características e elementos presentes nela.',
      'Achei interessante perceber que algo tão visual para nós pode ser representado pelo computador basicamente através de números organizados em matrizes. Minha expectativa para a disciplina agora é entender melhor como essas informações podem ser manipuladas para gerar, modificar e analisar imagens.'
    ]
  },

  {
    id: 'conhecendo-opengl',
    number: 2,
    title: 'Conhecendo um pouco sobre OpenGL',
    date: '18/08/2026',
    description: 'Um primeiro contato com a biblioteca gráfica, suas formas primitivas e o papel da GPU.',
    published: true,
    content: [
      'Pesquisando um pouco sobre Computação Visual, encontrei o OpenGL, uma tecnologia bastante conhecida quando o assunto é geração de gráficos utilizando computadores.',
      'O nome OpenGL vem de Open Graphics Library. De forma simplificada, ele fornece ferramentas que permitem que um programa envie instruções para que o computador desenhe elementos gráficos na tela.',
      'Com ele é possível trabalhar desde formas simples, como pontos, linhas e triângulos, até cenas muito mais complexas em duas ou três dimensões.',
      'Uma característica interessante é que muitos objetos gráficos complexos podem ser construídos a partir de formas bem simples. Um modelo 3D, por exemplo, pode ser formado pela combinação de vários triângulos.',
      'O OpenGL também pode aproveitar a GPU, que é o componente do computador especializado em realizar muitos dos cálculos necessários para gerar gráficos.',
      'Ainda estamos no começo da disciplina, então meu primeiro contato com OpenGL foi mais para entender sua finalidade. Ao longo das aulas, quero entender melhor como essas instruções acabam se transformando nos elementos que vemos na tela.'
    ]
  },

  {
    id: 'transformacoes-de-intensidade',
    number: 3,
    title: 'Transformações de Intensidade em Imagens',
    date: '01/09/2026',
    description: 'Como alterar os valores dos pixels pode revelar detalhes e melhorar a visualização de uma imagem.',
    published: true,
    content: [
      'Nesta etapa da disciplina, começamos a estudar as transformações de intensidade, uma das formas mais básicas de processamento digital de imagens. Diferente de simplesmente visualizar uma imagem, agora começamos a modificar diretamente os valores que formam seus pixels.',

      'Essas transformações acontecem no domínio espacial, ou seja, diretamente sobre os pixels da imagem. No caso das transformações de intensidade, cada pixel pode ser processado individualmente por uma função que recebe sua intensidade original e calcula uma nova intensidade para a imagem de saída.',

      'Um exemplo simples é o negativo de uma imagem. Nesse caso, os níveis de intensidade são invertidos: regiões claras tornam-se escuras e regiões escuras tornam-se claras. Apesar de parecer apenas um efeito visual, essa transformação pode ajudar a destacar detalhes que originalmente estavam em regiões muito escuras.',

      'Também estudamos a transformação logarítmica. Ela consegue expandir intensidades mais baixas e comprimir intensidades mais altas. Na prática, isso pode tornar detalhes presentes em regiões escuras mais visíveis sem fazer com que as partes mais claras da imagem fiquem completamente brancas.',

      'Outra transformação interessante é a transformação de potência, também chamada de transformação gama. O valor de gama controla como a imagem será modificada. Valores menores que 1 podem clarear regiões escuras, enquanto valores maiores que 1 podem ajudar a trabalhar regiões muito claras. Esse princípio também é utilizado na correção gama de dispositivos de exibição.',

      'Além dessas transformações, vimos técnicas como o alargamento de contraste, que aumenta a diferença entre níveis de intensidade, e o fatiamento de intensidade, que permite destacar apenas uma determinada faixa de valores. Isso pode ser útil, por exemplo, para destacar vasos sanguíneos em imagens médicas ou regiões específicas em imagens de satélite.',

      'O que mais me chamou atenção foi perceber que melhorar ou destacar informações de uma imagem não significa necessariamente alterar objetos nela. Muitas vezes, basta aplicar operações matemáticas sobre os valores dos pixels. Uma pequena mudança nos números pode gerar uma diferença enorme naquilo que conseguimos enxergar.'
    ]
  },

  ...[
    ['15/09/2026', 4],
    ['29/09/2026', 5],
    ['13/10/2026', 6],
    ['27/10/2026', 7],
    ['10/11/2026', 8]
  ].map(([date, number]) => ({
    id: `post-${number}`,
    number,
    title: 'Em breve',
    date,
    description: 'Uma nova etapa da jornada em Computação Visual.',
    content: [],
    published: false
  }))
]

export const publishedPosts = posts.filter(post => post.published)