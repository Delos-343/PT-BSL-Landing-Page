import Image from 'next/image'
import React from 'react'
import IgImg1 from '../public/ig-img-1.jpg'
import IgImg2 from '../public/ig-img-2.jpg'
import IgImg3 from '../public/ig-img-3.jpg'
import IgImg4 from '../public/ig-img-4.jpg'
import IgImg5 from '../public/ig-img-5.jpg'
import IgImg6 from '../public/ig-img-6.jpg'

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className='font-bold text-2xl p-4' id="portfolio">
            Portfolio Kami
        </h1>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image
                src={IgImg1}
                alt='/'
                layout='responsive'
                width='677'
                height='451'
                />
            </div>
            <div className='w-full h-full'>
                <Image
                src={IgImg2}
                alt='/'
                width='215'
                height='217'
                layout='responsive'
                objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image
                src={IgImg3}
                alt='/'
                width='215'
                height='217'
                layout='responsive'
                objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image
                src={IgImg4}
                alt='/'
                width='215'
                height='217'
                layout='responsive'
                objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image
                src={IgImg5}
                alt='/'
                width='215'
                height='217'
                layout='responsive'
                objectFit='cover'
                />
            </div>
        </div>
    </div>
  )
}

export default Portfolio