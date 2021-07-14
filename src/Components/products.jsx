import React from 'react';

const products = (props) => {
    return (   
        <div>
            <h1>Productos</h1>
            {
                props.products.map((product, index) =>
                    <span key={index}>
                        <p>{product.name}</p>
                        <p>{product.price + "€"}</p>
                        <p>{product.quantityProduct}</p>
                        <button onClick={() => {
                            props.increment(product);
                        }}>+</button>
                        <button onClick={() => props.decrement(product)}>-</button>
                    </span>
                )
            }
        </div>
    )
}

export default products;