import React from 'react'

import { increaseCounter } from '../store/productSlice'
import { useDispatch, useSelector } from 'react-redux'

export const Posts = () => {
    const products = useSelector((state) => state.products.product)
    const dispatch = useDispatch()

    const bayProduct = () => {
        dispatch(increaseCounter())
    }

    return (
        <div className="container">
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px'}}>
                {products.map((product) => (
                    <div key={product._id} className="product"
                        style={{maxWidth: '300px'}}>
                        <img src={product.picture} alt="" />
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <h2>{product.name}</h2>
                            <h3>{product.price}</h3>
                        </div>
                        <p style={{height: '100px', width: '100%', overflow: 'hidden'}}>{product.description}</p>
                        <button onClick={bayProduct}>КУПИТЬ</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
