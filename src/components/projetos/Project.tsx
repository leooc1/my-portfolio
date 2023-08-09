import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
interface ProjectProps {
  imagem: string
  description: string
  site: string
  repositorio: string
  theme: string
}

export default function Project(props: ProjectProps) {
  return (
    <>
      <div className='flex flex-col h-80 justify-between'>
        <div className='flex flex-col gap-2'>
          <Image src={props.imagem} width={300} height={300} alt='imagem do projeto' />
          <p className={`max-w-[300px] ${props.theme === 'dark' ? 'text-white' : 'text-primary'} text-justify`}>{props.description}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <Link className={`${props.theme === 'dark' ? 'text-white btn-project-dark' : 'text-primary btn-project-light'}`} href={props.site} target='_blank'>Visualizar site</Link>
          <Link className={`${props.theme === 'dark' ? 'text-white btn-project-dark' : 'text-primary btn-project-light'}`} href={props.repositorio} target='_blank'>Ir para repositório</Link>
        </div>
      </div>
    </>
  )
}
