import React from 'react';
import Details from './home/details/Details';

export default function Contato() {
  function handleCopyClick(){
    let emailElement = document.getElementById('copy');
    if (emailElement) {
      let textToCopy = emailElement.innerText;
      let tempInput = document.createElement('input');
      tempInput.value = textToCopy;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      alert('Email copiado para a área de transferência!');
    }
  };

  return (
    <section id='contato' className='h-screen py-20 text-white flex sm:flex-row flex-col justify-center items-center gap-8'>
      <form action="" className='flex flex-col gap-5 text-black'>
        <input type="text" name="" id="" placeholder='Nome Completo'/>
        <input type="text" name="" id="" placeholder='nome@email.com'/>
        <input type="text" name="" id="" placeholder='Assunto'/>
        <textarea name="" id="" cols={30} rows={10} placeholder='Mensagem'></textarea>
        <button type="submit" className='bg-white'>Enviar</button>
      </form>
      <div>
        <p id='copy'>leonardoocvrb@gmail.com<button onClick={handleCopyClick}>Copy</button></p>
        <Details />
      </div>
    </section>
  );
}
