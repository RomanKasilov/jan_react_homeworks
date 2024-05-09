import React, {FC, useEffect, useState} from "react";

import {Product} from "./Product";
import {IProductProps} from "../../types";


const Products: FC = () => {
    const [products, setProducts] = useState<IProductProps[]>([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(({products}) => setProducts(products))
    }, []);

    return (
        <div>
            {
                products.map(({id, title, description, price, images}: IProductProps) =>
                    <Product key={id} id={id} title={title} description={description} price={price} images={images}/>)
            }
        </div>
    );
};

export {Products};