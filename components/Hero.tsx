import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 text-center sm:text-left bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 h-screen bg-black/70 z-[2]' />
      <div className='p-2 sm:p-5 max-w-screen-xl mx-auto text-white z-[2]'>
        <h2 className='text-4xl sm:text-7xl font-bold mb-7 sm:m-0'>
          PT BALQIS SUKSES LOGISTINDO
        </h2>
        <p className='py-7 text-xl sm:text-2xl'>
          International & Domestic Freight Forwarding
        </p>
        <button className='mt-7 px-8 py-2 border hover:bg-white hover:text-gray-700 transition ease-in-out duration-300'> Contact Us </button>
      </div>
    </div>
  )
}

export default Hero;
