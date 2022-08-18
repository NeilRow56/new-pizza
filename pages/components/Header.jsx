import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '../../assets/Logo.png'
import { UilShoppingBag } from "@iconscout/react-unicons"

function Header() {
  return (
    <div>
        <nav className="flex h-16 items-center px-4 justify-between shadow-md">
            {/* logo side */}
            <div className="flex">
            <Image src={Logo} alt = "" width={40} height={40}/>
            <span className="py-1 px-2 flex-col items-center text-3xl font-bold" >Fudo</span>
            </div>
        
            {/* menu side */}
            <ul className="flex space-x-2 ">
                <li className="hover:text-red-800">
                <Link href="/">
              <a className="text-lg font-bold ">Home</a>
                </Link>
                </li>
                <li className="hover:text-red-800">
                <Link href="/">
              <a className="text-lg font-bold">Menu</a>
                </Link>
                </li>
                <li className="hover:text-red-800">
                <Link href="/">
              <a className="text-lg font-bold">Contact</a>
                </Link>
                </li>
            </ul>

             {/* cart side */}
             <div className="flex items-center">
             <Link href="/cart">
                <a className="p-2 flex">
                  
                    
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      5
                    </span>
                  
                
                
                </a>
              </Link>
              <Link href="/cart">
                <a >
                <UilShoppingBag />
                </a>
              
              </Link>
              
             </div>

        </nav>
      
      
    </div>
  )
}

export default Header
