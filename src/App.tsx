import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { posts } from './data/posts'
import { useRoute } from './hooks/useRoute'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { PostPage } from './pages/PostPage'
import { Posts } from './pages/Posts'

export default function App() {
  const route = useRoute()
  const postId = route.startsWith('/post/') ? route.replace('/post/', '') : null
  const post = postId ? posts.find((item) => item.id === postId && item.published) : undefined

  let page = <Home />
  if (route === '/postagens') page = <Posts />
  else if (route === '/sobre') page = <About />
  else if (post) page = <PostPage post={post} />
  else if (route !== '/') page = <main className="not-found"><p className="eyebrow mono">ERRO_404</p><h1>Pixel não encontrado.</h1><a className="button" href="#/">Voltar ao início</a></main>

  return <><Header currentRoute={route} />{page}<Footer /></>
}
