import type { Post } from '../data/posts'

export function PostCard({ post }: { post: Post }) {
  const content = (
    <>
      <div className="card-top"><span className="post-number mono">POST_{String(post.number).padStart(2, '0')}</span><time>{post.date}</time></div>
      <div className="card-body">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </div>
      <div className="card-action">{post.published ? <>Ler postagem <span aria-hidden="true">↗</span></> : <><span className="status-dot" /> Em breve</>}</div>
    </>
  )

  return post.published ? <a className="post-card" href={`#/post/${post.id}`}>{content}</a> : <article className="post-card upcoming">{content}</article>
}
