import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../Redux/cartSlice'

const Card = ({ elm }) => {
    const [isItemPresent,setIsItemPresent]=useState()
    const dispatch = useDispatch()
    const isProductPresent = useSelector((store) => store.cart)

    const handleAddProduct = (elm) => {
        const isPresent = isProductPresent.some((product) => product.id === elm.id);
        if (!isPresent) {
            dispatch(addItem(elm));
            setIsItemPresent(true)
        }

    }
    return (
        <div className='border-4 rounded-lg w-[300px] p-3'>
            <div className=' h-36'>
                <img src={elm.images[0]} alt="products" className='m-auto h-full object-cover' />
            </div>
            <p className='text-center'>{elm.title}</p>
            <p className='text-center'>Price - $ {elm.price}</p>
            <div className='text-center'>
                <button onClick={() => handleAddProduct(elm)} className={`bg-blue-300  px-6 py-1 rounded-md ${isItemPresent && "opacity-60"}`}>Add</button>
            </div>
        </div>
    )
}

export default Card
