import React, { useEffect } from 'react'
import { Header } from './../../components/Header';
import { Hero } from './../../components/Hero'
import { About } from './../../components/About'
import { Skills } from './../../components/Skills'
import { Contact } from './../../components/Contact'
import { Footer } from './../../components/Footer'

const index = () => {

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default index
