import { IndianRupee } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProductCard({name,description,price,key,id}) {
  return (
    <Link href={`/product/${id}`} key={key}>
    <div className='bg-white border'>
        <div className='md:min-h-[400px] bg-[#f5f5f5]'>
          <Image src="/Sliders/Banner1.jpg" alt="hero" width={600} height={500} />
        </div>
        <div className='mt-2 p-2'>
            <h1 className='text-lg font-semibold'>{name}</h1>
            <p className='text-sm text-gray-500'>{description}</p>
            <p className='text-lg font-semibold flex justify-start items-center'><IndianRupee size={16}/> {price}</p>
        </div>
    </div>
    </Link>
  )
}

export default ProductCard