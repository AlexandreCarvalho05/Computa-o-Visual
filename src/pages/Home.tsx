import { PixelMatrix } from '../components/PixelMatrix'
import { PostList } from '../components/PostList'
import { ProgressIndicator } from '../components/ProgressIndicator'
import { posts, publishedPosts } from '../data/posts'

export function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="signal" /> Diário de aprendizagem · 2026</p>
          <h1>Entre pixels,<br /><em>código</em> e percepção.</h1>
          <p className="intro">Um registro da minha evolução durante a disciplina de Computação Visual — das primeiras matrizes às imagens que ganham vida na tela.</p>
          <a className="button" href="#/postagens">Explorar postagens <span aria-hidden="true">↓</span></a>
        </div>
        <PixelMatrix />
      </section>
      <ProgressIndicator published={publishedPosts.length} total={posts.length} />
      <section className="posts-section">
        <div className="section-heading"><div><p className="eyebrow">Registro cronológico</p><h2>Postagens</h2></div><p>Oito momentos para documentar ideias, descobertas e experimentos ao longo do semestre.</p></div>
        <PostList posts={posts} />
      </section>
    </main>
  )
}
