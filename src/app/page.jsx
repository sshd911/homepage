import { Container } from '@/components/Container'
import { GitHubIcon } from '@/components/SocialIcons'
import Link from 'next/link'
import clsx from 'clsx'
// import Image from 'next/image'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

export const metadata = {
  title: 'Homepage',
  description: "sshd911's homepage",
}

const projects = [
  {
    name: 'Comming soon...',
    description: 'Under Construction...',
    link: {
      href: 'http://project-01.sshd911.com',
      label: 'project-01.sshd911.com',
    },
    // logo: logoCommingsoon,
  },
  {
    name: 'Comming soon...',
    description: 'Under Construction...',
    link: {
      href: 'http://project-02.sshd911.com',
      label: 'project-02.sshd911.com',
    },
    // logo: logoCommingsoon,
  },
]

const supports = [
  {
    name: 'bitcoin',
    address: 'bc1qhatlg6vs5sc95pfgzly39axtgxztcfqq5pgtkp',
    url: 'https://google.com',
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-white transition"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Raad</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default async function result() {
  let articles = await getAllArticles()
  
  return (
    <Container className="m-16 pb-10">
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-16">
        <div className="order-first lg:row-span-2">
          <div className="text-white text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            sshd911
          </div>
          <div className="mt-6 space-y-1 text-base text-white font-semibold">
            {`On this website, I'm gonna post my works.`}
            <br />
            {`To be honest, I'm not quite sure what it is, or where it's going but let's say it's a portfolio.`}
          </div>
        </div>
        <div className="z-50 lg:order-none lg:pl-20 lg:pt-[50px]">
          <ul role="list">
            <SocialLink href="https://github.com/sshd911" icon={GitHubIcon}>
              GitHub
            </SocialLink>
            <SocialLink
              href="mailto:contact@sshd911.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 border-zinc-700/40 pt-8"
            >
              contact@sshd911.com
            </SocialLink>
          </ul>
        </div>
      </div>
      <div>
        <div className="text-white pt-10 text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:pt-0">
          OverView
        </div>
        <div className="space-y-20">
          <SimpleLayout title="Projects">
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2"
            >
              {projects.map((project, index) => (
                <Card
                  as="li"
                  key={project.name}
                  className={`${
                    projects.length % 2 !== 0 && index === projects.length - 1
                      ? 'sm:col-span-2'
                      : ''
                  }`}
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700/50 shadow-md shadow-zinc-800/5 ring-0 ring-zinc-900/5">
                    {/* <Image src={project.logo} alt="" className="h-8 w-8" /> */}
                    ?
                  </div>
                  <h2 className="mt-6 text-base font-semibold text-white">
                    <Card.Link href={project.link.href}>
                      {project.name}
                    </Card.Link>
                  </h2>
                  <Card.Description>{project.description}</Card.Description>
                  <p className="relative z-10 mt-6 flex text-sm font-medium text-white transition">
                    <LinkIcon className="h-6 w-6 flex-none" />
                    <span className="">{project.link.label}</span>
                  </p>
                </Card>
              ))}
            </ul>
          </SimpleLayout>
          <SimpleLayout title="Articles">
            <div className="md:border-l md:border-zinc-100 md:border-zinc-700/40 md:pl-6">
              <div className="mx-auto flex flex-col space-y-16">
                {articles.map((article) => (
                  <Article key={article.slug} article={article} />
                ))}
              </div>
            </div>
          </SimpleLayout>
          <SimpleLayout title="Support" className="">
            <div className="md:border-l md:border-zinc-100 md:border-zinc-700/40 md:pl-6">
              <div className="mx-auto flex flex-col space-y-16">
                {supports.map((support) => (
                  <div
                    key={support.name}
                    className="md:grid md:grid-cols-4 md:items-baseline"
                  >
                    <Card className="md:col-span-3">
                      <Card.Description>
                        {support.address} 
                      </Card.Description>
                      {/* <Card.Cta>Donate</Card.Cta> */}
                    </Card>
                    <Card.Eyebrow className="mt-1 hidden md:block">
                      {support.name}
                    </Card.Eyebrow>
                  </div>
                ))}
              </div>
            </div>
          </SimpleLayout>
        </div>
      </div>
    </Container>
  )
}
