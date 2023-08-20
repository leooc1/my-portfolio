import React from 'react'
import Image from 'next/image'
import Tecnology from './Tecnology'
import Link from 'next/link'
interface ProjectProps {
  imagem: string
  description: string
  site: string
  repositorio: string
  theme: string
  tech: string
}

export default function Project(props: ProjectProps) {
  return (
    <>
      <div className='flex flex-col min-h-[375px] justify-between items-center'>
        <div className='flex flex-col gap-2'>
          <Image src={props.imagem} width={300} height={300} alt='imagem do projeto' />
          <p className={`max-w-[300px] ${props.theme === 'dark' ? 'text-white' : 'text-primary'} text-justify font-normal`}>{props.description}</p>
        </div>
        <Tecnology tech={props.tech} theme={props.theme}/>
        <div className='flex flex-col gap-2'>
          <Link className={`${props.theme === 'dark' ? 'text-white btn-project-dark' : 'text-primary btn-project-light'}`} href={props.site} target='_blank'>Visualizar site</Link>
          <Link className={`${props.theme === 'dark' ? 'text-white btn-project-dark' : 'text-primary btn-project-light'}`} href={props.repositorio} target='_blank'>Ir para repositório</Link>
        </div>
        <hr className='w-full mt-3'/>
      </div>
    </>
  )
}
