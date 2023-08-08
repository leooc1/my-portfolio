import React, { useState, useEffect } from 'react'

export default function Sobre() {
  useEffect(() => {
    lastLogin()
  }, [])

  const [semana, setSemana] = useState<string>('')
  const [mes, setMes] = useState<string>('')
  const [dia, setDia] = useState<number>(0)
  const [hora, setHora] = useState<number>(0)
  const [min, setMin] = useState<number>(0)
  const [seg, setSeg] = useState<number>(0)

  function lastLogin() {
    var data = new Date();
    setSemana(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][data.getDay()])
    setMes(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'][data.getMonth()])
    setDia(data.getDate())
    setHora(data.getHours())
    setMin(data.getMinutes())
    setSeg(data.getSeconds())
  }

  return (
    <section id='sobre' className='flex justify-center items-center pt-24 pb-20'>
        <div className='bg-gray-800 w-[90%] min-w-[300px] md:w-[600px] min-h-[300px] rounded-xl'>
            <h2 className='bg-neutral-900 w-full text-white font-extralight py-1 text-center relative rounded-t-xl'>
                <div className='w-3 h-3 rounded-full absolute bg-red-600 -translate-y-1/2 top-1/2 left-1'></div>
                <div className='w-3 h-3 rounded-full absolute bg-yellow-400 -translate-y-1/2 top-1/2 left-5'></div>
                <div className='w-3 h-3 rounded-full absolute bg-green-500 -translate-y-1/2 top-1/2 left-9'></div>
                sobre_mim</h2>
            <p className='text-white pt-3 pl-3 text-base font-light tracking-widest'>
            Last login: {semana} {mes} {dia} {hora}:{min}:{seg} on my_portfolio
            </p>
            <p className='text-white p-3 text-base font-light tracking-widest text-justify'>
            ~ % Comecei a estudar as tecnologias web há 8 meses, enquanto cursava a faculdade. Desde então, tenho continuado a aprendizagem, realizando exercícios e projetos para praticar e aprimorar ainda mais minhas habilidades nessas tecnologias. Minha especialidade inclui <span className='font-semibold'>React</span>, <span className='font-semibold'>HTML</span>, <span className='font-semibold'>CSS</span>, <span className='font-semibold'>JavaScript</span> e <span className='font-semibold'>Tailwind</span>.
            </p>
        </div>
    </section>
  )
}
