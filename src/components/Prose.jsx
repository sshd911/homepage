import clsx from 'clsx'

export function Prose({ className, ...props }) {
  return (
    <div className={clsx(className, 'prose prose-invert')} {...props} />
  )
}
