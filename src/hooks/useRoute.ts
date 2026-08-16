import { useEffect, useState } from 'react'

const normalizeHash = () => window.location.hash.slice(1) || '/'

export function useRoute() {
  const [route, setRoute] = useState(normalizeHash)

  useEffect(() => {
    const onHashChange = () => {
      setRoute(normalizeHash())
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return route
}
