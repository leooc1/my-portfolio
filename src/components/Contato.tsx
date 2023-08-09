import React from 'react';
import Details from './Details';
import Form from './Form';

export default function Contato() {
  const svg = <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z" fill="rgba(255,255,255,1)"></path></svg>

  function handleCopyClick() {
    let tempInput = document.createElement('input');
    tempInput.value = 'leonardoocvrb@gmail.com';
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    // notificação de copiado
    let notify = document.getElementById('notify');
    notify?.classList.remove('hidden');
    setTimeout(() => {
    notify?.classList.add('hidden');
    }, 1500);
  };

  return (
    <section id='contato' className='min-h-screen pt-24 pb-10 px-8 text-white flex sm:flex-row flex-col-reverse justify-center items-center gap-8'>
      <Form />
      <div>
        <p className='text-3xl font-light pb-5 text-center'>E-mail para contato</p>
        <div className='flex items-center justify-center'>
          <p id='copy' className='font-light'>leonardoocvrb@gmail.com</p>
          <button onClick={handleCopyClick} className='bg-[#000019] border-2 border-white ml-4 p-1 rounded-md relative'>{svg}
          <span id='notify' className='absolute top-9 -left-5 italic hidden'>copiado!</span>
          </button>
        </div>
        <Details />
      </div>
    </section>
  );
}
