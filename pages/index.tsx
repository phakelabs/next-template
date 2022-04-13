import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import { Icon } from '@iconify/react'
import styles from '@/styles/Home.module.css'

type Plugin = {
  name: string
  description: string
  url: string
}

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme()
  const plugins: Plugin[] = [
    {
      name: 'TailwindCSS',
      url: 'https://tailwindcss.com/',
      description: 'A utility-first CSS framework for rapid UI development.',
    },
    {
      name: 'next-themes',
      url: 'https://github.com/pacocoursey/next-themes',
      description: 'An abstraction for themes in your Next.js app.',
    },
    {
      name: '@headlessui/react',
      url: 'https://github.com/tailwindlabs/headlessui',
      description: 'Completely unstyled, fully accessible UI components for TailwindCSS.',
    },
    {
      name: '@iconify/react',
      url: 'https://docs.iconify.design/icon-components/react/',
      description: 'React component library for icon fonts.',
    },
  ]

  return (
    <>
      <Head>
        <title>@phakedev/next-template</title>
      </Head>

      <main className="px-6 h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-medium">Welcome to Next.js!</h1>
          <p className="text-zinc-500">Next.js starter template!</p>

          <div className="mt-4">
            <a href="https://github.com/phakedev/next-template" target="_blank" rel="noopener noreferrer" title="Github" className="inline-flex items-center gap-2 border-transparent">
              <Icon icon="ant-design:github-filled" className="w-8 h-8" />
              phakedev/next-template
            </a>
          </div>

          <div className="text-left mt-6">
            <h3 className="text-lg font-medium text-center mb-2">Plugins:</h3>
            <ul>
              {plugins.map(({ name, description, url }) => (
                <li key={name} className="flex items-center gap-2 text-zinc-500 mb-2">
                  <Icon icon="akar-icons:circle-check" className="text-emerald-500" />
                  <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 ">
                    {name}
                  </a>
                  - {description}
                </li>
              ))}
            </ul>
          </div>

          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="mt-4">
            {theme === 'dark' ? (
              <>
                <Icon icon="cil:moon" className={styles['theme-toggle-icon']} />
              </>
            ) : (
              <>
                <Icon icon="cil:sun" className={styles['theme-toggle-icon']} />
              </>
            )}
          </button>
        </div>
      </main>
    </>
  )
}

export default Home
