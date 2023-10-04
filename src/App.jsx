import { useEffect } from 'react'
import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import Footer from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'

function App() {

  useEffect(() => {
    if(window.location.hash){
      window.location.hash = '';
    }
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
