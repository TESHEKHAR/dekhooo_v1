import CatagoryCard from '@/components/Cards/CatagoryCard'
import { CompassIcon } from 'lucide-react'
import React from 'react'

function CatogaryListing() {
  return (
    <div className='py-3 mt-2'>
            <h1 className='text-2xl mb-3 flex items-center gap-2'><CompassIcon size={28}/> Exprole Collections</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 cursor-pointer gap-3'>
            <CatagoryCard/>
            <CatagoryCard/>
            <CatagoryCard/>
            <CatagoryCard/>
            </div>
    </div>
  )
}

export default CatogaryListing