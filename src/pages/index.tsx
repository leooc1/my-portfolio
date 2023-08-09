import React, { useEffect, useState } from 'react'
import { Poppins } from 'next/font/google'
import { parseCookies, setCookie } from 'nookies'
import Image from 'next/image'
import Loader from '@/components/loader/Loader'
import Head from 'next/head'
import Header from '@/components/navbar/Header'
import Initial from '@/components/Initial'
import Projects from '@/components/projetos/Projects'
import Sobre from '@/components/Sobre'
import Contato from '@/components/Contato'

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] })

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const cookies = parseCookies()
    let theme = cookies.theme || 'dark'
    setTheme(theme)
    setInterval(() => {
      setLoading(false)
    }, 1000)
  }, [loading, theme])

  function tradeTheme() {
    if (theme === 'dark') {
      setTheme('light')
      setCookie(null, 'theme', 'light', {
        maxAge: 3.156e+7,
        path: '/'
      })
    } else {
      setTheme('dark')
      setCookie(null, 'theme', 'dark', {
        maxAge: 3.156e+7,
        path: '/'
      })
    }
  }
  return (
    <>
      <Head>
        <title>Meu Portfólio | Leonardo</title>
      </Head>
      <main className={`h-full ${theme === 'dark' ? 'bg-primary' : 'bg-gray-200'} ${poppins.className}`}>
        {loading ?
          <Loader /> :
          <>
            <Header theme={theme}>
              <Image className={`cursor-pointer w-5 h-5 mr-8 sm:relative absolute right-10 ${theme==='dark'?'invert':''}`} src={`${theme === 'dark' ? '/theme/icon-sun.svg' : '/theme/icon-moon.svg'}`} alt="theme" width={20} height={20} onClick={tradeTheme} />
            </Header>
            <Initial theme={theme} />
            <Projects theme={theme} />
            <Sobre theme={theme} />
            <Contato theme={theme} />
          </>
        }
      </main>
    </>
  )
}
