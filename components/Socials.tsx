import React from 'react'
import IgImg1 from '../public/ig-img-1.jpg'
import IgImg2 from '../public/ig-img-2.jpg'
import IgImg3 from '../public/ig-img-3.jpg'
import IgImg4 from '../public/ig-img-4.jpg'
import IgImg5 from '../public/ig-img-5.jpg'
import IgImg6 from '../public/ig-img-6.jpg'
import SocialsImg from './SocialsImg'

const Socials = () => {

  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>
          Follow Akun Kami di Instagram
        </p>
        <p className='py-8 font-medium'> <a href="https://instagram.com/pt.bslcargo/" target="_blank" rel="noreferrer"> @ pt.bslcargo </a> </p>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 p-4'>
            <SocialsImg socialImg={IgImg1} />
            <SocialsImg socialImg={IgImg2} />
            <SocialsImg socialImg={IgImg3} />
            <SocialsImg socialImg={IgImg4} />
            <SocialsImg socialImg={IgImg5} />
            <SocialsImg socialImg={IgImg6} />
        </div>
    </div>
  )
}

export default Socials
