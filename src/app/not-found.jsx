import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export default function NotFound() {
  return (
    <Container className="">
      <div className="flex flex-col flex-auto h-[100vh] justify-center items-center">
        <p className="text-base font-semibold text-white">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl text-white">
          Page not found
        </h1>
        <Button href="/" variant="secondary" className="static z-50 mt-4">
          Go back home
        </Button>
      </div>
    </Container>
  )
}
