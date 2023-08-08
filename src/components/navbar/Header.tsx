import React from 'react'
import Link from 'next/link'
import Menu from './Menu'

export default function Header() {
  return (
    <>
      <div className='fixed z-40 flex bg-white h-16 w-full items-center sm:px-10 px-3'>
        <Link href='/'>
          <h1 className='text-3xl font-semibold'>&lt;LEONARDO/&gt;</h1>
        </Link>
        <nav className='w-full md:flex hidden justify-end gap-8 '>
          <Link className='text-xl hover:font-semibold transition-all w-20 text-center'
            href='#'>Home</Link>
          <Link className='text-xl hover:font-semibold transition-all w-20 text-center' href='#projetos'>Projetos</Link>
          <Link className='text-xl hover:font-semibold transition-all w-20 text-center' href='#sobre'>Sobre</Link>
          <Link className='text-xl hover:font-semibold transition-all w-20 text-center' href='#contato'>Contato</Link>
        </nav>
      </div>
      <Menu />
    </>
  )
}
