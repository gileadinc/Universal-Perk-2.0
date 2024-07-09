'use client'
import { useRef, useState } from 'react'

import { ArrowBigDown, Check, CloudCog, Fingerprint, Lock, Menu, X } from 'lucide-react'
import Hero from '@/components/hero'
import Header from '@/components/header'
import Clients from '@/components/clients'
import Features from '@/components/features'
import Projects from '@/components/projects'
import Schedule from '@/components/schedule'
import Contact from '@/components/contact_us'
import Footer from '@/components/footer'

const  LandingPage = () => {


    
   

    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({behaviour: "smooth"})
    }
    return (
        <div className="bg-white">
            <Header/>
            <main className="isolate">
               <Hero />
               <Features/>
               <Clients />
               <Projects/>
               <Schedule/>
                <Contact />
            </main>
            <Footer /> 
        </div>
    )
}

export default LandingPage