import type { Post } from '../data/posts'

export function PostNavigation({ previous, next }: { previous?: Post; next?: Post }) {
  return (
    <nav className="post-navigation" aria-label="Navegação entre postagens">
      {previous ? <a href={`#/post/${previous.id}`}><span>← Anterior</span><strong>{previous.title}</strong></a> : <span />}
      {next ? <a href={`#/post/${next.id}`} className="next"><span>Próximo →</span><strong>{next.title}</strong></a> : <span />}
    </nav>
  )
}
