import { PostList } from '../components/PostList'
import { posts } from '../data/posts'

export function Posts() {
  return (
    <main className="inner-page">
      <header className="page-title"><p className="eyebrow">Arquivo · 2026</p><h1>Todas as postagens</h1><p>Acompanhe, em ordem cronológica, cada etapa desta jornada pela Computação Visual.</p></header>
      <PostList posts={posts} />
    </main>
  )
}
