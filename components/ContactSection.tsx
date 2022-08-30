import React from 'react'

const ContactSection = () => {
  return (
    <div className="relative flex items-top justify-center min-h-screen bg-black sm:items-center pt-24 px-8 sm:p-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">

                    <form className="p-6 flex flex-col justify-center pt-5 max-w-full">
                        <div className="flex flex-col w-full">
                            <label htmlFor="name" className="hidden"> Full Name </label>
                            <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 my-4 py-3 px-3 bg-white border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                        </div>

                        <div className="flex flex-col w-full mt-2">
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