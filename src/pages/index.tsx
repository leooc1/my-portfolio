import React, { useEffect, useState } from 'react'
import { Poppins } from 'next/font/google'
import Loader from '@/components/loader/Loader'
import Head from 'next/head'
import Header from '@/components/navbar/Header'
import Initial from '@/components/home/Initial'
import Projects from '@/components/projetos/Projects'

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] })

export default function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // setInterval(() => {
      setLoading(false)
    // }, 1000)
  }, [loading])
  return (
    <>
      <Head>
        <title>Meu Portfólio | Leonardo</title>
      </Head>
      <main className={`h-full bg-primary ${poppins.className}`}>
        {loading ?
          <Loader /> :
          <>
            <Header />
            <Initial />
            <Projects />
          </>
        }
      </main>
    </>
  )
}
