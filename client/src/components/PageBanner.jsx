import React from 'react'
import banner_image from '../assets/page-banner-img.avif'

const PageBanner = ({page, title, bold, para}) => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-20"
            style={{
                backgroundImage:
                    `url(${banner_image})`,
            }}
        >
            <div className="absolute inset-0 bg-black/55"></div>

            <div className="container mx-auto px-5 relative z-10">
                <div className="max-w-2xl text-white">
                    <h6 className="uppercase tracking-[3px] text-lime-500 font-semibold max-sm:text-sm">
                        {page}
                    </h6>

                    <h2 className="2xl:text-5xl sm:text-[46px] text-4xl font-bold mt-4 leading-[1.2em]">
                        {title}
                        <span className="text-lime-500"> {bold}</span>
                    </h2>

                    <p className="mt-5 text-gray-200">
                        {para}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default PageBanner