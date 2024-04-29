import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../Redux/productSlice'
import { STATUS } from '../Redux/productSlice'

const Product = () => {
  const { data: products, status } = useSelector((store) => store.product);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProduct())
  }, [])

  if (status === STATUS.LOADING) {
    return <h1 className='mt-4 text-center text-4xl'>Loading...</h1>
  };
  if (status === STATUS.ERROR) {
    return <h1>Somthing went wrong!</h1>
  };
  return (
    <div className='flex flex-wrap px-20 py-10 gap-10'>
      {
        products.map((elm) => <Card key={elm.id} elm={elm} />
        )}

    </div>
  )
}

export default Product
