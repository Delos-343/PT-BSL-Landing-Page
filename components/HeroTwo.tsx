/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import heroTwoImg from '../public/heroTwo-img.jpg'
import React from 'react'

const HeroTwo = () => {
  return (
    <section className="relative bg-black h-screen p-5 sm:p-0 flex items-center justify-center mb-12 text-center sm:text-left">
        <Image
            className="absolute inset-0 object-cover object-fit w-full h-full opacity-25 sm:opacity-100"
            src={heroTwoImg}
            alt="Contact Hero img"
            layout="fill"
        />

        <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-black/70"></div>

        <div className="relative max-w-screen-xl p-2 sm:p-5 mx-auto lg:h-screen lg:items-center lg:flex">
            <div className="max-w-xl text-center sm:text-left">
                <h1 className="text-3xl font-bold sm:text-5xl">
                    HUBUNGI
                    <strong className="font-bold text-orange-500 sm:block px-2 sm:px-0 sm:py-2">
                    Kami
                    </strong>
                </h1>

                        <div className="flex items-center mt-10 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-60">
                                Ruko Parpostel Raya No.28D,
                                Jatiasih Bekasi
                            </div>
                        </div>

                        <div className="flex items-center mt-6 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                +62 (21)8241-8936
                                <br />
                                +62 (858)9470-0506
                            </div>
                        </div>

                        <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                cs2.jktbslcargo@gmail.com
                                <br />
                                ops.cgkbslcargo@gmail.com
                            </div>
                        </div>

                <div className="flex flex-wrap gap-4 mt-8 text-center">
                    <a className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring" href="/#contact-form">
                        Kirim Pesan
                    </a>

                    <a className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring" href="https://www.google.com/maps/search/Ruko+Parpostel+Raya+No.28D+Jatiasih+Bekasi/@-6.2989104,106.9395735,14.21z" target="_blank" rel="noreferrer">
                        Lokasi Kita
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroTwo