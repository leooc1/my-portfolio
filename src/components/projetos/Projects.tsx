import React from 'react'
import Project from './Project'

export default function Projects({theme}:{theme:string}) {
  return (
    <section className='flex flex-wrap gap-6 px-5 justify-evenly pt-24' id='projetos'>
        <Project theme={theme} imagem='/projetos/sneakers.jpeg' description='Uma página web de um tênis em uma loja fictícia, possibilitando interações com o site.' site='https://sneakers-product.vercel.app/' repositorio='https://github.com/leooc1/product-page'/>
        <Project theme={theme} imagem='/projetos/todo.jpeg' description='Uma página web que tem funcionalidades para gerenciar tarefas, permitindo adicionar, excluir e marcar tarefas como concluídas.' site='https://todo-app-rose-theta.vercel.app/' repositorio='https://github.com/leooc1/todo-app'/>
        <Project theme={theme} imagem='/projetos/space.jpeg' description='Um site que mostra informações sobre o espaço, contendo destinos, equipe e tecnologias.' site='https://space-tourism-drab.vercel.app/' repositorio='https://github.com/leooc1/space-tourism'/>
    </section>
  )
}
