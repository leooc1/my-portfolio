import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Menu({ theme }: { theme: string }) {
    const [hamburger, setHamburger] = useState(true)

    function toggleMenu() {
        setHamburger(!hamburger)
        const menu = document.querySelector('#menu')
        menu?.classList.toggle('h-0')
        if (theme === 'dark') { menu?.classList.toggle('bg-white') }
        else { menu?.classList.toggle('bg-primary') }
        menu?.classList.toggle('h-96')
        const navbar = document.querySelector('#navbar')
        setTimeout(() => {
            navbar?.classList.toggle('hidden')
            navbar?.classList.toggle('flex')
        }, 150)
    }

    return (
        <>
            <div id='menu' className={`fixed w-full py-3 transition-menu h-0 top-0 z-40 md:hidden flex justify-center items-center`}>
                <label className={`burger top-5 right-5 absolute transition-menu cursor-pointer ${theme === 'dark' ? '' : 'invert'}`}>
                    <input type="checkbox" id="burger" onClick={toggleMenu} checked={hamburger ? false : true} />
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <nav id='navbar' className={`${theme === 'dark' ? 'text-primary' : 'text-gray-200'} hidden flex-col gap-8 text-3xl`}>
                    <Link onClick={toggleMenu} href="#" className={` uppercase font-light text-center`}>
                        Home
                    </Link>
                    <Link onClick={toggleMenu} href="#projetos" className={` uppercase font-light text-center`}>
                        Projetos
                    </Link>
                    <Link onClick={toggleMenu} href="#sobre" className={` uppercase font-light text-center`}>
                        Sobre
                    </Link>
                    <Link onClick={toggleMenu} href="#contato" className={` uppercase font-light text-center`}>
                        Contato
                    </Link>
                </nav>
            </div>
            <div onClick={toggleMenu} className={`w-full h-full ${hamburger ? 'hidden' : 'bg-[#000000a2]'} transition-menu fixed bottom-0 z-30`}></div>
        </>
    )
}