import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export default function NotFound() {
  return (
    <Container className="flex h-full items-center">
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold text-white">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl text-white">
          Page not found
        </h1>
        <p className="mt-4 text-base text-white">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button href="/" variant="secondary" className="static z-50 mt-4">
          Go back home
        </Button>
      </div>
    </Container>
  )
}
