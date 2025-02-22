'use client'
import { ShoppingBag, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Menu } from './headerData'

function Header() {
  const [indexLink, setIndexLink] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className={`${isScrolled? "fixed w-full  left-[50%] top-[0%] translate-x-[-50%] translate-y-0   max-w-[100%]":""} transition-all   p-3 max-w-[1360px] mx-auto flex justify-between items-center bg-white `}>
        <div>
            <Image src="/Logo_Dark.svg" alt="logo" width={150} height={100} />
        </div>
        <div>
           <ul className='flex space-x-8'>
            {Menu?.Header?.map((item,index) => (
                <li key={item?.id} className={index===indexLink? "active":""} onClick={()=>setIndexLink(index)}><Link href={item?.link} >{item?.title}</Link></li>
            ))}
           </ul>                                                                                                                                            
        </div>
        <div className='flex space-x-4'>
        <div className='bg-[#ececec] p-2 rounded-full'>
            <ShoppingBag size={20} color='#000'/>
            </div>
            <div className='bg-[#323232] p-2 rounded-full'>
            <User size={20} color='#fff' />
            </div>
        </div>
    </div>
  )
}

export default Header