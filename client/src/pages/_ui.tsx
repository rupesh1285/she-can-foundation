import { Link } from 'react-router-dom'

export function Button({ children, to, variant = 'primary' }: { children: React.ReactNode; to?: string; variant?: 'primary' | 'secondary' }) {
  const cls = `button ${variant === 'primary' ? 'button--primary' : 'button--secondary'}`
  if (to && to.startsWith('#')) {
    return (
      <a className={cls} href={to}>
        {children}
      </a>
    )
  }

  return (
    <Link className={cls} to={to ?? '/'}>
      {children}
    </Link>
  )
}
