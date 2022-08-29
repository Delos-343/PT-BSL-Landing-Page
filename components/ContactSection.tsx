import React from 'react'

const ContactSection = () => {
  return (
    <div className="relative flex items-top justify-center min-h-screen bg-black sm:items-center pt-24 px-8 sm:p-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="py-10 px-14 mr-2 bg-black border">
                        <h1 className="text-3xl text-gray-800 dark:text-white font-semibold tracking-tight">
                            Get in Touch
                        </h1>
                        <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                            Send us an email by filling in the form
                        </p>

                        <div className="flex items-center mt-10 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-60">
                                Jl. Wibawa Mukti IV No. 26B,
                                Jatiasih-Bekasi 17422
                            </div>
                        </div>

                        <div className="flex items-center mt-6 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                +62 (218)490-7144
                            </div>
                        </div>

                        <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                bslcargo.co.id
                            </div>
                        </div>
                    </div>

                    <form className="p-6 flex flex-col justify-center pt-20">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="hidden"> Full Name </label>
                            <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 my-4 py-3 px-3 bg-white border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                        </div>

                        <div className="flex flex-col mt-2">
                            <label htmlFor="email" className="hidden"> Email </label>
                            <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 mb-8 py-3 px-3 bg-white border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                        </div>

                        <button type="submit" className="md:w-32 bg-black hover:bg-white hover:text-gray-700 text-white py-3 px-6 mt-0 sm:mt-6 border transition ease-in-out duration-300">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection