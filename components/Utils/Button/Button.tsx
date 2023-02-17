import Link from 'next/link'
import { MouseEvent, PropsWithChildren } from 'react'
import { Status } from '../../Home/Contact/Contact'

interface Props extends PropsWithChildren {
  type: 'link' | 'button'
  level: 'primary' | 'secondary'
  onclick?: (e: MouseEvent<HTMLButtonElement>) => void
  href?: string
  className?: string
  status?: Status
  [x: string]: any
}

function Button({
  onclick,
  type,
  level,
  href,
  children,
  className,
  status = 'idle',
  ...args
}: Props) {
  const mainClass = () => {
    let name = className
      ? `${className} btn btn--${level}`
      : `btn btn--${level}`

    if (status === 'loading') name += ' btn--loading'
    else if (status === 'success') name += ' btn--success'
    else if (status === 'error') name += ' btn--error'

    return name
  }

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
        disabled={status === 'loading'}
        {...args}
      >
        {children}
      </button>
    )
}

export default Button
