import React from 'react'
import Link from 'next/link'
import Menu from './Menu'
interface HeaderProps {
  theme: string
  children: any
}

export default function Header(props:HeaderProps) {
  return (
    <>
      <div className={`fixed z-40 flex ${props.theme === 'dark' ? 'bg-white' : 'bg-primary'} h-16 w-full items-center sm:px-10 px-3 flex justify-between`}>
        <Link href='/'>
          <h1 className={`text-3xl font-semibold ${props.theme==='dark'?'text-primary':'text-gray-200'}`}>&lt;LEONARDO/&gt;</h1>
        </Link>
        <div className='flex w-full justify-end items-center'>
          {props.children}
          <nav className={`w-[336px] md:flex hidden justify-end gap-5 ${props.theme==='dark'?'text-primary':'text-gray-200'}`}>
            <Link className='text-xl hover:font-semibold transition-all w-20 text-center'
              href='#'>Home</Link>
            <Link className='text-xl hover:font-semibold transition-all w-20 text-center' href='#projetos'>Projetos</Link>
            <Link className='text-xl hover:font-semibold transition-all w-20 text-center' href='#sobre'>Sobre</Link>
            <Link className='text-xl hover:font-semibold transition-all w-20 text-center' href='#contato'>Contato</Link>
          </nav>
        </div>
      </div>
      <Menu theme={props.theme}/>
    </>
  )
}
