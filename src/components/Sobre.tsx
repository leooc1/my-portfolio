import React from 'react'

export default function Sobre() {
  return (
    <section id='sobre' className='flex justify-center items-center py-20'>
        <div className='bg-gray-800 w-[90%] min-w-[300px] md:w-[600px] min-h-[300px] rounded-xl'>
            <h2 className='bg-neutral-900 w-full text-white font-extralight py-1 text-center relative rounded-t-xl'>
                <div className='w-3 h-3 rounded-full absolute bg-red-600 -translate-y-1/2 top-1/2 left-1'></div>
                <div className='w-3 h-3 rounded-full absolute bg-yellow-400 -translate-y-1/2 top-1/2 left-5'></div>
                <div className='w-3 h-3 rounded-full absolute bg-green-500 -translate-y-1/2 top-1/2 left-9'></div>
                sobre_mim</h2>
            <p className='text-white p-3 text-base font-light text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusantium reprehenderit dolor optio ex eius illo natus, molestiae assumenda, quisquam error! Libero nemo recusandae adipisci eligendi, numquam itaque tempore aspernatur!
                Voluptas reiciendis a commodi pariatur sequi, nostrum architecto, neque blanditiis id fugiat vero harum ipsam assumenda ut, error quis eius incidunt nisi quas tempora nihil at nesciunt. Laboriosam, doloribus laudantium?
            </p>
        </div>
    </section>
  )
}
