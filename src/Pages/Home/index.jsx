import React, { useEffect } from 'react'
import { Header } from './../../components/Header';
import { Hero } from './../../components/Hero'
import { About } from './../../components/About'
import { Skills } from './../../components/Skills'
import { Contact } from './../../components/Contact'
import { Footer } from './../../components/Footer'
import Projects from './../../components/Projects/Projects';

const index = () => {

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Contact />
      <Footer />
    </div>
  )
}

export default index
