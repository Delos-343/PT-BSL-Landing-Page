/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Card = () => {
  return (
    <div>
        <div className="grid shadow-lg w-full px-14 py-20 sm:py-48 bg-black relative overflow-hidden">

            <div className="hidden sm:block absolute -right-20 bottom-20 h-1/2 w-1/2 bg-contain bg-no-repeat mb-4 card-img-1 animate-1"></div>

            <div className="w-full sm:w-1/2 text-center sm:text-left">
                <p className="text-gray-100 text-3xl font-semibold mb-8">
                    Layanan Cargo Darat
                </p>
                <p className="mt-4 max-w-xl text-gray-400">
                    Kami melayani pengiriman barang dalam radius tertentu, misalnya antar kota dalam propinsi atau dari satu propinsi ke propinsi lain selama rute pengiriman masih bisa dilalui alat transportasi darat.
                </p>
            </div>
            
        </div>
        <div className="grid shadow-lg w-full px-14 py-20 sm:pt-28 sm:pb-40 bg-black relative overflow-hidden">

            <div className="hidden sm:block absolute right-36 bottom-28 h-1/3 w-1/3 bg-contain bg-no-repeat mb-4 card-img-2 animate-2"></div>

            <div className="w-full sm:w-1/2 text-center sm:text-left">
                <p className="text-gray-100 text-3xl font-semibold mb-8">
                    Layanan Cargo Laut
                </p>
                <p className="mt-4 max-w-xl text-gray-400">
                    Kami, perusahaan jasa ekspedisi profesional dimana tidak hanya menyediakan jasa cargo kapal cepat menggunakan kapal PELNI, namun juga jasa cargo laut FCL (Full Container Load) dan jasa cargo laut LCL (Less Cargo Load/Kubikasi).
                </p>
            </div>
            
        </div>
        <div className="grid shadow-lg w-full px-14 py-20 sm:pt-28 sm:pb-40 bg-black relative overflow-hidden">

            <div className="hidden sm:block absolute right-36 bottom-28 h-1/3 w-1/3 bg-contain bg-no-repeat mb-4 card-img-3 animate-3"></div>

            <div className="w-full sm:w-1/2 text-center sm:text-left">
                <p className="text-gray-100 text-3xl font-semibold mb-8">
                    Layanan Cargo Udara
                </p>
                <p className="mt-4 max-w-xl text-gray-400">
                    Kami, berupaya memaksimalkan pelayanan pengiriman barang melalui jasa cargo udara ini, menggunakan amarda penerbangan komersial dan charter dengan jangkauan pengoperasian yang luas dan merata.
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default Card