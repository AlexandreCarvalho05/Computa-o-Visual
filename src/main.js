import { posts, publishedPosts } from './data/posts.js'

const app = document.querySelector('#app')
const route = () => location.hash.slice(1) || '/'
const postNumber = number => `POST_${String(number).padStart(2, '0')}`

function header(current) {
  const links = [['#/', 'Início', '/'], ['#/postagens', 'Postagens', '/postagens'], ['#/sobre', 'Sobre', '/sobre']]
  return `<header class="site-header">
    <a class="brand" href="#/" aria-label="Computação Visual — início"><span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>Computação Visual</span></a>
    <nav aria-label="Navegação principal">${links.map(([href, label, path]) => `<a href="${href}" class="${current === path ? 'active' : ''}">${label}</a>`).join('')}</nav>
  </header>`
}

const footer = () => `<footer class="footer"><p>Computação Visual <span>·</span> Diário acadêmico</p><p class="mono">RGB(2026)</p></footer>`

function pixelMatrix() {
  return `<div class="visual-wrap" aria-hidden="true"><div class="matrix-label mono">matriz[7][7]</div>
    <div class="pixel-matrix">${Array.from({ length: 49 }, (_, i) => `<i data-cell="${i}" style="--glow:${Math.max(0, 1 - (Math.abs(i % 7 - 3) + Math.abs(Math.floor(i / 7) - 3)) * .22)}"></i>`).join('')}</div>
    <div class="channels mono"><span>R 218</span><span>G 76</span><span>B 104</span></div></div>`
}

function postCard(post) {
  const content = `<div class="card-top"><span class="post-number mono">${postNumber(post.number)}</span><time>${post.date}</time></div>
    <div class="card-body"><h3>${post.title}</h3><p>${post.description}</p></div>
    <div class="card-action">${post.published ? 'Ler postagem <span aria-hidden="true">↗</span>' : '<span class="status-dot"></span> Em breve'}</div>`
  return post.published ? `<a class="post-card" href="#/post/${post.id}">${content}</a>` : `<article class="post-card upcoming">${content}</article>`
}

const postList = () => `<div class="post-grid">${posts.map(postCard).join('')}</div>`

function home() {
  const percentage = publishedPosts.length / posts.length * 100
  return `<main><section class="hero"><div class="hero-copy"><p class="eyebrow"><span class="signal"></span> Diário de aprendizagem · 2026</p>
    <h1>Entre pixels,<br><em>código</em> e percepção.</h1><p class="intro">Um registro da minha evolução durante a disciplina de Computação Visual — das primeiras matrizes às imagens que ganham vida na tela.</p>
    <a class="button" href="#/postagens">Explorar postagens <span aria-hidden="true">↓</span></a></div>${pixelMatrix()}</section>
    <section class="progress" aria-label="Progresso: ${publishedPosts.length} de ${posts.length} posts publicados"><div class="progress-copy"><span class="eyebrow">Progresso do semestre</span><strong>${publishedPosts.length} <small>de ${posts.length} posts publicados</small></strong></div><div class="progress-track" aria-hidden="true"><span style="width:${percentage}%"></span></div><span class="mono progress-value">${percentage}%</span></section>
    <section class="posts-section"><div class="section-heading"><div><p class="eyebrow">Registro cronológico</p><h2>Postagens</h2></div><p>Oito momentos para documentar ideias, descobertas e experimentos ao longo do semestre.</p></div>${postList()}</section></main>`
}

const allPosts = () => `<main class="inner-page"><header class="page-title"><p class="eyebrow">Arquivo · 2026</p><h1>Todas as postagens</h1><p>Acompanhe, em ordem cronológica, cada etapa desta jornada pela Computação Visual.</p></header>${postList()}</main>`

const about = () => `<main class="inner-page about-page"><header class="page-title"><p class="eyebrow">Sobre este espaço</p><h1>Aprender também é registrar.</h1></header><div class="about-grid"><div class="about-lead"><p>Este blog nasceu como um diário acadêmico para acompanhar minha evolução na disciplina de Computação Visual.</p></div><div class="about-copy"><p>A proposta é transformar cada etapa do semestre em um registro: conceitos novos, ferramentas, experimentos e as mudanças na forma como observo imagens produzidas por computadores.</p><p>Ao final, serão oito postagens — oito pontos em uma matriz maior de aprendizado.</p><div class="rgb-key mono"><span>R · representar</span><span>G · gerar</span><span>B · buscar</span></div></div></div></main>`

function postPage(post) {
  const index = publishedPosts.findIndex(item => item.id === post.id)
  const previous = publishedPosts[index - 1], next = publishedPosts[index + 1]
  const navLink = (item, nextLink = false) => item ? `<a href="#/post/${item.id}" class="${nextLink ? 'next' : ''}"><span>${nextLink ? 'Próximo →' : '← Anterior'}</span><strong>${item.title}</strong></a>` : '<span></span>'
  return `<main class="article-page"><a class="back-link" href="#/postagens">← Voltar para postagens</a><article><header class="article-header"><p class="eyebrow mono">${postNumber(post.number)} <span>/</span> <time>${post.date}</time></p><h1>${post.title}</h1><p>${post.description}</p></header><div class="article-content">${post.content.map(paragraph => `<p>${paragraph}</p>`).join('')}</div></article><nav class="post-navigation" aria-label="Navegação entre postagens">${navLink(previous)}${navLink(next, true)}</nav></main>`
}

const notFound = () => `<main class="not-found"><p class="eyebrow mono">ERRO_404</p><h1>Pixel não encontrado.</h1><a class="button" href="#/">Voltar ao início</a></main>`

function render() {
  const current = route()
  let page
  if (current === '/') page = home()
  else if (current === '/postagens') page = allPosts()
  else if (current === '/sobre') page = about()
  else if (current.startsWith('/post/')) {
    const post = posts.find(item => item.id === current.replace('/post/', '') && item.published)
    page = post ? postPage(post) : notFound()
  } else page = notFound()
  app.innerHTML = header(current) + page + footer()
  bindPixelMatrix()
}

function bindPixelMatrix() {
  const matrix = document.querySelector('.pixel-matrix')
  if (!matrix) return
  matrix.addEventListener('pointermove', event => {
    const target = event.target.closest('[data-cell]')
    if (!target) return
    const active = Number(target.dataset.cell)
    matrix.querySelectorAll('i').forEach((cell, i) => {
      const distance = Math.abs(i % 7 - active % 7) + Math.abs(Math.floor(i / 7) - Math.floor(active / 7))
      cell.style.setProperty('--glow', Math.max(0, 1 - distance * .22))
    })
  })
}

window.addEventListener('hashchange', () => { render(); window.scrollTo({ top: 0, behavior: 'instant' }) })
render()
