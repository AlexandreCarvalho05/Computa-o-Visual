import { PostNavigation } from '../components/PostNavigation'
import { publishedPosts, type Post } from '../data/posts'

export function PostPage({ post }: { post: Post }) {
  const index = publishedPosts.findIndex((item) => item.id === post.id)
  return (
    <main className="article-page">
      <a className="back-link" href="#/postagens">← Voltar para postagens</a>
      <article>
        <header className="article-header">
          <p className="eyebrow mono">POST_{String(post.number).padStart(2, '0')} <span>/</span> <time>{post.date}</time></p>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </header>
        <div className="article-content">{post.content.map((paragraph, i) => <p key={i}>{paragraph}</p>)}</div>
      </article>
      <PostNavigation previous={publishedPosts[index - 1]} next={publishedPosts[index + 1]} />
    </main>
  )
}
