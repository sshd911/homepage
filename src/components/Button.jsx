import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-white hover:bg-zinc-700 active:bg-zinc-800 active:text-white/70 bg-zinc-700 hover:bg-zinc-600 kactive:bg-zinc-700 ractive:text-white/70',
  secondary:
    'bg-zinc-50 font-medium text-white hover:bg-zinc-100 active:bg-zinc-100 active:text-white/60 bg-zinc-800/50 text-white hover:bg-zinc-800 hover:text-white active:bg-zinc-800/50 active:text-white/70',
}

export function Button({ variant = 'primary', className, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
