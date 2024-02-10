import React from 'react'
import { useGetProductsQuery } from '../../redux/slice/product'

const ProductCom = () =>  {
 const {data} =   useGetProductsQuery()


  return (
    <div>ProductCom</div>
  )
}

export default ProductCom