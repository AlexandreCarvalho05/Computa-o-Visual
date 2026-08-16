type HeaderProps = { currentRoute: string }

const links = [
  { href: '#/', label: 'Início', route: '/' },
  { href: '#/postagens', label: 'Postagens', route: '/postagens' },
  { href: '#/sobre', label: 'Sobre', route: '/sobre' },
]

export function Header({ currentRoute }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href="#/" aria-label="Computação Visual — início">
        <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
        <span>Computação Visual</span>
      </a>
      <nav aria-label="Navegação principal">
        {links.map((link) => (
          <a key={link.route} href={link.href} className={currentRoute === link.route ? 'active' : ''}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
