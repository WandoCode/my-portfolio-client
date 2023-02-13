import { MouseEvent, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  type: 'link' | 'button'
  level: 'primary' | 'secondary'
  onclick?: (e: MouseEvent<HTMLButtonElement>) => void
  href?: string
  className?: string
  loading: boolean
}

function Button({
  onclick,
  type,
  level,
  href,
  children,
  className,
  loading,
}: Props) {
  const mainClass = () => {
    let name = className
      ? `${className} btn btn--${level}`
      : `btn btn--${level}`

    if (loading) name += ' btn--loading'

    return name
  }

  if (type === 'link')
    return (
      <a href={href} className={mainClass()}>
        {children}
      </a>
    )
  else
    return (
      <button className={mainClass()} onClick={onclick} disabled={loading}>
        {children}
      </button>
    )
}

export default Button
