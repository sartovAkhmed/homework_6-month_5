import React from 'react'
import { useSelector } from 'react-redux'

export const NavBar = () => {
    const count = useSelector((state) => state.products.count)

    return (
        <header>
            <div className="container">
                <div style={{
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    backgroundColor: 'gray',
                    width: '100%',
                    padding: '10px 20px',
                    marginBottom: '10px'
                }}>
                    <div className="logo">logo</div>
                    <nav>
                        <ul style={{display: 'flex', gap: '5px'}}>
                            <li>home</li>
                            <li>contacts</li>
                            <li>store</li>
                            <li>about us</li>
                        </ul>
                    </nav>
                    <div className="counter"
                        style={{fontSize: '24px', color: 'blue'}}>
                        <span>Корзина {count}</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
