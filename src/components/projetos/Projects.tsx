import React, {useState} from 'react'
import Project from './Project'

export default function Projects({ theme }: { theme: string }) {

  return (
    <section className={`flex flex-wrap mx-auto gap-6 px-5 justify-evenly pt-24 max-w-7xl relative`} id='projetos'>
      <Project theme={theme} imagem='/projetos/sneakers.jpeg' description='Uma página web de um tênis em uma loja fictícia, possibilitando interações com o site.' site='https://sneakers-product.vercel.app/' repositorio='https://github.com/leooc1/product-page' tech='Next.js, React, TypeScript, CSS, Tailwind' />
      <Project theme={theme} imagem='/projetos/todo.jpeg' description='Uma página web que tem funcionalidades para gerenciar tarefas, permitindo adicionar, excluir e marcar tarefas como concluídas.' site='https://todo-app-rose-theta.vercel.app/' repositorio='https://github.com/leooc1/todo-app' tech='Next.js, React, TypeScript, CSS, Tailwind' />
      <Project theme={theme} imagem='/projetos/space.jpeg' description='Um site que mostra informações sobre o espaço, contendo destinos, equipe e tecnologias.' site='https://space-tourism-drab.vercel.app/' repositorio='https://github.com/leooc1/space-tourism' tech='Next.js, React, TypeScript, CSS, Tailwind' />
      <Project theme={theme} imagem='/projetos/weather-app.png' description='Uma página que consome uma API de clima, possibilitando pesquisar um local e retornar as informações climáticas do local pesquisado.' site='https://leooc1.github.io/react-api/' repositorio='https://github.com/leooc1/react-api' tech='React, CSS, JavaScript' />
      <Project theme={theme} imagem='/projetos/calculator-app.png' description='Uma calculadora com operadores simples, e com a possibilidade de trocar o tema das cores dela.' site='https://leooc1.github.io/calculator-app/' repositorio='https://github.com/leooc1/calculator-app' tech='HTML, CSS, JavaScript' />
      <Project theme={theme} imagem='/projetos/credit-card.png' description='Uma página de cadastro de cartão de crédito, com verificação e validação de dados.' site='https://leooc1.github.io/payment-record/register/' repositorio='https://github.com/leooc1/payment-record' tech='HTML, CSS, JavaScript' />
    </section>
  )
}
