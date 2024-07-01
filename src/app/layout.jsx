import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s',
    default:
      "sshd911's homepage",
  },
  description: "I'm gonna post my works. Feel free to visit.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-black antialiased" suppressHydrationWarning>
      <body className="flex h-full">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
