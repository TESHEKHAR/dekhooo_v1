import ProductCard from '@/components/Cards/ProductCard'
import React from 'react'
import { data } from './Product'
import { ListIcon } from 'lucide-react'

function ProductListing() {
  return (
    <div className='py-3 mt-2'>
       {/* <h1 className='text-2xl mb-3 flex items-center gap-2 text-[#6e6e6e]'><ListIcon size={28} color='#6e6e6e'/> Latest Products</h1> */}
        <div className='grid grid-cols-1 md:grid-cols-3 cursor-pointer'>
            {data?.map((product) => (
                <ProductCard
                id={product.id}
                description={product.description}
                name={product.name}
                price={product.price}
                key={product.id}
                />
            ))}
            {data?.map((product) => (
                <ProductCard
                id={product.id}
                description={product.description}
                name={product.name}
                price={product.price}
                key={product.id}
                />
            ))}
        </div>
        <div className='flex justify-center mt-3'>
            <button className='bg-[#f5f5f5] px-3 py-1 rounded-md'>Load More</button>
        </div>
    </div>
  )
}

export default ProductListing