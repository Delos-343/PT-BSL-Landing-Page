import React from 'react'

const CTA = () => {
  return (
    <div className="bg-black h-full">
        <div className="relative px-4 py-10 overflow-hidden text-center sm:text-left sm:px-6 sm:py-16 lg:p-12 xl:p-16">
            <h2 className="text-3xl font-semibold font-display py-6 text-black dark:text-white">
                SELAMAT DATANG DI BSL CARGO
            </h2>
            <p className="mt-4 max-w-xl text-gray-400">
                Menyediakan layanan pendistribusian barang ke luar pulau menggunakan kapal PELNI atau kapal kargo,
                sedangkan cargo udara merupakan pengiriman cepat menggunakan pesawat cargo,
                maka jasa cargo darat sebenarnya adalah fasilitas utama yang harus dimiliki sebuah perusahaan jasa ekspedisi.
            </p>
            <form>
                <div className="sm:flex mt-10">
                    <form className="flex flex-col md:flex-row w-3/4 sm:w-full max-w-sm md:space-x-3 space-y-6 md:space-y-0 justify-center mx-16 sm:mx-0">
                        <div className=" relative w-full">
                            <input type="text" id="&quot;form-subscribe-Subscribe" className="border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email"/>
                        </div>
                        <button className="flex-shrink-0 px-8 py-2 text-base border text-white shadow-md hover:bg-white hover:text-gray-700 transition ease-in-out duration-300" type="submit">
                            Send
                        </button>
                    </form>
                </div>
            </form>
            <div className="hidden lg:block absolute inset-y-0 lg:left-2/3 xl:left-1/2 top-10 right-0 bg-no-repeat custom-img-sec"></div>
        </div>
    </div>
  )
}

export default CTA