import type { Post } from '../data/posts'
import { PostCard } from './PostCard'

export function PostList({ posts }: { posts: Post[] }) {
  return <div className="post-grid">{posts.map((post) => <PostCard key={post.id} post={post} />)}</div>
}
