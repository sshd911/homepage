import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container>
      <header>
        <h1 className="mt-8 mx-auto text-3xl sm:text-4xl font-bold">
          {title}
        </h1>
        <p className="mt-6 text-base text-white">
          {intro}
        </p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
}
