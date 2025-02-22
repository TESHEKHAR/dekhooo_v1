import Link from 'next/link'
import React from 'react'

function CatagoryCard({id,key}) {
    return (
        <Link href={`/Catagory/${id}`} key={key}>
            <div className='bg-white border'>
                <div className='md:min-h-[200px] bg-[#f5f5f5]'> </div>
            </div>
        </Link>
    )
}

export default CatagoryCard