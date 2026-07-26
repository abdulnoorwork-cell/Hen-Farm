import React from 'react'
import Button from './Button';
import hero_image from '../assets/hero.avif'
import { useInView } from 'react-intersection-observer';
import {Link} from 'react-router-dom'

const Hero = () => {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false })
    return (
        <main>
            {/* Hero */}
            <div
                className="relative min-h-[80vh] 2xl:min-h-[85vh] bg-cover bg-center flex items-center justify-start"
                style={{
                    backgroundImage:
                        `url(${hero_image})`,
                }}
            >
                {/* Green Overlay */}
                <div className="absolute inset-0 bg-lime-950/50"></div>

                <div ref={ref} className={`box ${inView ? "show" : ""} relative z-10 container mx-auto px-5 h-full flex items-center py-20`}>
                    <div className="text-white">
                        <h1 className="2xl:text-[58px] md:text-5xl text-4xl leading-none uppercase">
                            Poultry Performance & <br />
                            Productivity Challenges
                        </h1>

                        <div className="w-24 h-1 bg-green-500 mt-4 mb-6"></div>

                        <p className="sm:text-xl text-lg mb-8 text-gray-100 font-light tracking-wider max-sm:leading-tight">
                            We make it a priority to offer flexible <br /> services
                            to accommodate your needs.
                        </p>
                        <Link to={'/contact'} onClick={() => { scrollTo(0, 0) }}>
                            <Button text={'Get A Quote Now'} />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero