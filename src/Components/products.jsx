import React from 'react';

const products = (props) => {
    return (   
        <div>
            /****************** PRODUCTOS*/
            {
                props.products.map((product) =>
                    <span>
                        <p>{product.name}</p>
                        <p>{product.price + "€"}</p>
                        <p>{product.quantityProduct}</p>
                        <button onClick={() => {
                            props.increment(product);
                        }}>+</button>hool
                        <button onClick={() => props.decrement(product)}>-</button>
                    </span>
                )
            }
            <p>/****************** FIN PRODUCTOS*/</p>
Hola buenasji
        </div>
    )
}

export default products;