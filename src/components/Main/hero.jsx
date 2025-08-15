import React from 'react'
import Event from '../../assets/Siem/sr6.jpg'
const Hero = () => {
  return (
        <section id="home" className="min-h-screen flex items-center py-24 md:py-32 relative overflow-hidden hero-grid-bg">
            <div className="container mx-auto px-4 z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">Pranati Neelam</h1>
                        <p className="text-lg md:text-xl mt-6 text-gray-300 max-w-lg mx-auto lg:mx-0">
                            Welcome to my world through the lens. I craft visual stories that are emotive, timeless, and uniquely yours.
                        </p>
                        <a href="#gallery" className="inline-block mt-10 bg-accent-gold text-black py-3 px-8 rounded-full uppercase tracking-widest font-bold hover:bg-opacity-80 transition-all duration-300">View My Work</a>
                    </div>

                    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full max-w-lg mx-auto">
                        <img src="https://placehold.co/800x1200/222/444?text=Portrait" alt="Collage image 1" className="absolute w-[45%] rounded-lg shadow-2xl top-0 left-[20%] transform -rotate-6 transition-transform duration-300 hover:scale-105 hover:rotate-0 hover:z-10" />
                        <img src="https://placehold.co/800x600/333/555?text=Landscape" alt="Collage image 2" className="absolute w-[55%] rounded-lg shadow-2xl top-[25%] right-0 transform rotate-3 transition-transform duration-300 hover:scale-105 hover:rotate-0 hover:z-10" />
                        <img src={Event} alt="Collage image 3" className="absolute w-[50%] rounded-lg shadow-2xl bottom-0 left-0 transform rotate-4 transition-transform duration-300 hover:scale-105 hover:rotate-0 hover:z-10" />
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Hero;