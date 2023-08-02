import React, { useEffect, useState } from 'react'
import { Poppins } from 'next/font/google'
import Loader from '@/components/loader/Loader'
import Head from 'next/head'
import Header from '@/components/Header'
import Initial from '@/components/Initial'
import Projects from '@/components/Projects'

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] })

export default function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [loading])
  return (
    <>
      <Head>
        <title>Meu Portfólio | Leonardo</title>
      </Head>
      <main className={`h-full ${poppins.className}`}>
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
