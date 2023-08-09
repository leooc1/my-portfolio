import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Form({theme}: {theme: string}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e: any) {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            alert('Preencha todos os campos!')
            return
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }
        emailjs.send('service_8xxbxrp', 'template_njtl02m', templateParams, 'kB_ka-HbN9x6qELCx')
            .then((result) => {
                console.log(result.text);
                setName('')
                setEmail('')
                setMessage('')
                alert('E-mail enviado com sucesso!')
            }, (error) => {
                console.log(error.text);
            }
            );

    }

    return (
        <form className='flex flex-col gap-5 w-full sm:w-auto md:w-96' onSubmit={sendEmail}>
            <input type="text" name="nome" id="nome" className={`${theme==='dark'?'bg-[#000019] border-white':'bg-white border-primary'} border py-1 px-2`} placeholder='Digite seu nome e sobrenome' onChange={(e) => { setName(e.target.value) }} value={name} />

            <input type="email" name="email" id="email" className={`${theme==='dark'?'bg-[#000019] border-white':'bg-white border-primary'} border py-1 px-2`} placeholder='Digite seu e-mail' onChange={(e) => { setEmail(e.target.value) }} value={email} />

            <textarea name="mensagem" id="mensagem" cols={30} rows={10} className={`${theme==='dark'?'bg-[#000019] border-white':'bg-white border-primary'} border py-1 px-2 min-h-[34px]`} placeholder='Sua mensagem . . .' onChange={(e) => { setMessage(e.target.value) }} value={message}></textarea>

            <button type="submit" className={`border ${theme==='dark'?'bg-[#000019] border-white':'bg-white border-primary'} py-1 px-2 w-28 mx-auto`}>Enviar</button>
        </form>
    )
}
