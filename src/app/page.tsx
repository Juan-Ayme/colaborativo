"use client";  // Indica que este componente es un Client Component

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [activeSection, setActiveSection] = useState('inicio')

  const handleNavClick = (section: string) => {
    setActiveSection(section)
  }

  return (
    <div className="min-h-screen bg-[#fdf6e9]">
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/image/tierra.png" alt="Mikuy Logo" width={40} height={40} className="mr-2" />
          <span className="text-2xl font-bold text-[#ff4d4d]">Mikuy</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><button onClick={() => handleNavClick('inicio')} className="text-gray-700 hover:text-[#ff4d4d]">Inicio</button></li>
            <li><button onClick={() => handleNavClick('colaborador')} className="text-gray-700 hover:text-[#ff4d4d]">¿Como ser colaborador?</button></li>
            <li><button onClick={() => handleNavClick('apoyar')} className="text-gray-700 hover:text-[#ff4d4d]">Apoyar</button></li>
            <li><button onClick={() => handleNavClick('nosotros')} className="text-gray-700 hover:text-[#ff4d4d]">Nosotros</button></li>
            <li><button onClick={() => handleNavClick('contactos')} className="text-gray-700 hover:text-[#ff4d4d]">Contactos</button></li>
          </ul>
        </nav>
        <button className="bg-white text-[#ff4d4d] px-4 py-2 rounded-full border border-[#ff4d4d] hover:bg-[#ff4d4d] hover:text-white transition-colors">
          Soy aliado
        </button>
      </header>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'inicio' && (
          <>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Dona tus <span className="inline-block bg-[#ffa500] text-white px-2 py-1 rounded-lg transform -rotate-6">Alimentos</span>
                </h1>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  sobrantes a la comunidad
                </h2>
                <p className="text-gray-600 mb-6">
                  Conecta con tu comunidad compartiendo alimentos sobrantes de forma segura y ecológica
                </p>
                <button className="bg-[#ff4d4d] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#ff3333] transition-colors">
                  Publicar comida sobrante
                </button>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <Image src="/image/undraw_love_it_heart_dxlp (1).svg" alt="Woman with heart" width={300} height={200} />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="bg-[#ffa500] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Image src="/image/llevar.png" alt="Share icon" width={212} height={212} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Compartir comida sobrante</h3>
                <p className="text-gray-600">
                  Publica fácilmente los alimentos que te han sobrado para que puedan ser ...
                </p>
                <Link href="#" className="text-[#ff4d4d] font-semibold mt-2 inline-block">Leer más</Link>
              </div>
              <div className="text-center">
                <div className="bg-[#ffa500] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Image src="/image/voluntario.png" alt="Volunteers icon" width={212} height={212} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Voluntarios aprobados</h3>
                <p className="text-gray-600">
                  Nuestro equipo de voluntarios ha sido cuidadosamente verificado para garantizar ...
                </p>
                <Link href="#" className="text-[#ff4d4d] font-semibold mt-2 inline-block">Leer más</Link>
              </div>
              <div className="text-center">
                <div className="bg-[#ffa500] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Image src="/image/reciclable.png" alt="Biodegradable icon" width={212} height={212} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Contenedores biodegradables</h3>
                <p className="text-gray-600">
                  Nos comprometemos con el medio ambiente. Toda la comida recogida se transporta en envases biodegradables ...
                </p>
                <Link href="#" className="text-[#ff4d4d] font-semibold mt-2 inline-block">Leer más</Link>
              </div>
            </div>
          </>
        )}

        {activeSection === 'colaborador' && (
            <div className="w-full h-2/4 flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 space-x-4 2xl:space-x-0">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
            <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300">Página en Desarrollo</p>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">Estamos trabajando en ello</p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">Whoops, la página web se encuentra en desarrollo. Por favor, paciencia.</p>            </div>
              <div className="w-full lg:w-1/2 lg:h-full flex lg:items-center justify-center p-4">
                <Image src="/image/devd.svg" alt="Woman with heart" width={300} height={200} />
              </div>
            </div>
        )}

        {activeSection === 'apoyar' && (
                      <div className="w-full h-2/4 flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 space-x-4 2xl:space-x-0">
                      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
                      <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300">Página en Desarrollo</p>
                      <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">Estamos trabajando en ello</p>
                      <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">Whoops, la página web se encuentra en desarrollo. Por favor, paciencia.</p>            </div>
                        <div className="w-full lg:w-1/2 lg:h-full flex lg:items-center justify-center p-4">
                          <Image src="/image/devd.svg" alt="Woman with heart" width={300} height={200} />
                        </div>
                      </div>
        )}

        {activeSection === 'nosotros' && (
                      <div className="w-full h-2/4 flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 space-x-4 2xl:space-x-0">
                      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
                      <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300">Página en Desarrollo</p>
                      <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">Estamos trabajando en ello</p>
                      <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">Whoops, la página web se encuentra en desarrollo. Por favor, paciencia.</p>            </div>
                        <div className="w-full lg:w-1/2 lg:h-full flex lg:items-center justify-center p-4">
                          <Image src="/image/devd.svg" alt="Woman with heart" width={300} height={200} />
                        </div>
                      </div>
        )}

        {activeSection === 'contactos' && (
                      <div className="w-full h-2/4 flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 space-x-4 2xl:space-x-0">
                      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
                      <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300">Página en Desarrollo</p>
                      <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">Estamos trabajando en ello</p>
                      <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">Whoops, la página web se encuentra en desarrollo. Por favor, paciencia.</p>            </div>
                        <div className="w-full lg:w-1/2 lg:h-full flex lg:items-center justify-center p-4">
                          <Image src="/image/devd.svg" alt="Woman with heart" width={300} height={200} />
                        </div>
                      </div>
        )}
      </main>
    </div>
  )
}
