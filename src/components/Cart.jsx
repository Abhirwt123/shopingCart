import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseProductQuantity, increaseProductQuantity, removeItem } from '../Redux/cartSlice';

const Cart = () => {
  const products = useSelector((store) => store.cart);
  const dispatch = useDispatch()
  const handleRemoveProduct = (elm) => {
    dispatch(removeItem(elm))
  }
  if (products.length == 0) {
    return <h1 className='text-4xl mt-4 text-bold text-center'>Store is empty. Please add items First....</h1>
  }
  return (
    <div className='px-20 mt-6'>
      {
        products.map((elm) => {
          return (
            <div className='flex justify-between mb-4 items-center' key={elm.id}>
              <img src={elm.images[0]} alt="images" className='w-16 h-16 object-cover' />
              <p>{elm.title}</p>
              <div className='flex'>
                <p className='text-start me-12'>$-{elm.price}</p>
                <button className='px-4 py-1 bg-gray-600 text-xl font-bold text-white' onClick={()=>dispatch(decreaseProductQuantity(elm.id))}>-</button>
                <input type="number" className='w-[40px] border' value={elm.quantity} />
                <button className='px-4 py-1 bg-gray-600 text-xl font-bold text-white' onClick={()=>dispatch(increaseProductQuantity(elm.id))}
                >+</button>
              </div>
              <button className="px-2 py-2 bg-red-600" onClick={() => handleRemoveProduct(elm.id)}>Remove</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cart
