import React from 'react'

interface TecnologyProps {
  tech: string
  theme: string
}

export default function Tecnology(props: TecnologyProps) {
  return (
    <p className={`${props.theme === 'dark' ? 'text-white' : 'text-primary'} max-w-[300px] my-2 font-medium`}>Tecnologias usadas: {props.tech}</p>
  )
}
