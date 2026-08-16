export type Post = {
  id: string
  number: number
  title: string
  date: string
  description: string
  content: string[]
  published: boolean
}

export const posts: Post[] = [
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
      'Achei interessante perceber que algo tão visual para nós pode ser representado pelo computador basicamente através de números organizados em matrizes. Minha expectativa para a disciplina agora é entender melhor como essas informações podem ser manipuladas para gerar, modificar e analisar imagens.',
    ],
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
      'Ainda estamos no começo da disciplina, então meu primeiro contato com OpenGL foi mais para entender sua finalidade. Ao longo das aulas, quero entender melhor como essas instruções acabam se transformando nos elementos que vemos na tela.',
    ],
  },
  ...[
    ['01/09/2026', 3], ['15/09/2026', 4], ['29/09/2026', 5],
    ['13/10/2026', 6], ['27/10/2026', 7], ['10/11/2026', 8],
  ].map(([date, number]) => ({
    id: `post-${number}`,
    number: number as number,
    title: 'Em breve',
    date: date as string,
    description: 'Uma nova etapa da jornada em Computação Visual.',
    content: [],
    published: false,
  })),
]

export const publishedPosts = posts.filter((post) => post.published)
