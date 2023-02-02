import { PropsWithChildren } from 'react'
interface Props extends PropsWithChildren {
  type: 'link' | 'button'
  level: 'primary' | 'secondary'
  onclick?: () => void
  href?: string
  className?: string
}
function Button({ onclick, type, level, href, children, className }: Props) {
  const mainClass = className
    ? `${className} btn btn--${level}`
    : `btn btn--${level}`

  if (type === 'link')
    return (
      <a href={href} className={mainClass}>
        {children}
      </a>
    )
  else
    return (
      <button className={mainClass} onClick={onclick}>
        {children}
      </button>
    )
}

export default Button
