import React from 'react'
import { UilShoppingBag,  UilGithub,  UilInstagram } from "@iconscout/react-unicons"
import Image from 'next/image'
import Logo from '../../assets/Logo.png'

function Footer() {
  return (
    <div className=" flex flex-col space-y-5 mx-auto items-center justify-center bg-gradient-to-t from-red-400/50 to-red-50/50 hover:from-pink-500/50 hover:to-yellow-500/50">
      <span className="text-xl text-red-500 pt-4">ALL RIGHTS RESERVED</span>
      <div className="flex ">
        < UilShoppingBag className="w-8 h-8 m-2 text-red-600"  />
        <UilGithub className="w-8 h-8 m-2 text-red-600"  />
        <UilInstagram className="w-8 h-8 m-2 text-red-600"  />
      </div>
      <div className="flex">
            <Image src={Logo} alt = "" width={40} height={40}/>
            <span className="py-1 px-2 flex-col items-center text-3xl font-bold" >Fudo</span>
            </div>
    </div>
  )
}

export default Footer
