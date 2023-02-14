import Link from 'next/link'
import { MouseEvent, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  type: 'link' | 'button' | 'innerLink'
  level: 'primary' | 'secondary'
  onclick?: (e: MouseEvent<HTMLButtonElement>) => void
  href?: string
  className?: string
  loading?: boolean
  [x: string]: any
}

function Button({
  onclick,
  type,
  level,
  href,
  children,
  className,
  loading = false,
  ...args
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
      <a href={href} className={mainClass()} {...args}>
        {children}
      </a>
    )
  else if (type === 'innerLink' && href) {
    return (
      <Link href={href} className={mainClass()} {...args}>
        {children}
      </Link>
    )
  } else
    return (
      <button
        className={mainClass()}
        onClick={onclick}
        disabled={loading}
        {...args}
      >
        {children}
      </button>
    )
}

export default Button
