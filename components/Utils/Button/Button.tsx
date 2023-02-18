import Link from 'next/link'
import { MouseEvent, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  type: 'link' | 'button'
  level: 'primary' | 'secondary'
  onclick?: (e: MouseEvent<HTMLButtonElement>) => void
  href?: string
  className?: string
  disabled?: boolean
  [x: string]: any
}

function Button({
  onclick,
  type,
  level,
  href,
  children,
  className,
  disabled = false,
  ...args
}: Props) {
  const mainClass = () =>
    className ? `${className} btn btn--${level}` : `btn btn--${level}`

  if (type === 'link' && href)
    return (
      <Link href={href} className={mainClass()} {...args}>
        {children}
      </Link>
    )
  else
    return (
      <button
        className={mainClass()}
        onClick={onclick}
        disabled={disabled}
        {...args}
      >
        {children}
      </button>
    )
}

export default Button
