import React from 'react'

export default function Sobre() {

  return (
    <section id='sobre' className='flex justify-center items-center pt-24 pb-20'>
      <div className='bg-gray-800 w-[90%] min-w-[300px] md:w-[600px] min-h-[300px] '>
        <h2 className='bg-neutral-900 w-full text-white font-extralight py-1 text-center relative'>
          <div className='absolute text-xl -translate-y-1/2 top-1/2 left-1'>△</div>
          <div className='absolute text-xl -translate-y-1/2 top-1/2 left-7'>〇</div>
          <div className='absolute text-3xl -translate-y-1/2 top-1/2 left-14'>×</div>
          <div className='absolute text-xl -translate-y-1/2 top-1/2 left-20'>▢</div>
          <div className='absolute text-xl -translate-y-1/2 top-1/2 right-1'>△</div>
          <div className='absolute text-xl -translate-y-1/2 top-1/2 right-7'>〇</div>
          <div className='absolute text-3xl -translate-y-1/2 top-1/2 right-14'>×</div>
          <div className='absolute text-xl -translate-y-1/2 top-1/2 right-20'>▢</div>
          sobre_mim</h2>
        <p className='text-white p-3 text-base font-light tracking-widest text-justify'>
          Comecei a estudar as tecnologias web há 8 meses, enquanto cursava a faculdade. Desde então, tenho continuado a aprendizagem, realizando exercícios e projetos para praticar e aprimorar ainda mais minhas habilidades nessas tecnologias. Minha especialidade inclui <span className='font-semibold'>React</span>, <span className='font-semibold'>HTML</span>, <span className='font-semibold'>CSS</span>, <span className='font-semibold'>JavaScript</span> e <span className='font-semibold'>Tailwind</span>.
        </p>
      </div>
    </section>
  )
}
