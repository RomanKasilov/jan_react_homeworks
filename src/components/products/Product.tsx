import React, {FC} from "react";
import {Carousel, CarouselItem} from "react-bootstrap";

import {IProductProps} from "../../types";

import 'bootstrap/dist/css/bootstrap.min.css'
import style from './Product.module.css'


type IProductTypeProps = IProductProps & { children?: React.ReactNode }

const Product: FC<IProductTypeProps> = ({title, description, price, images}) => {

    return (
        <div className={style.flex_wrapper}>
            <div className={style.info}>
                <h2>{title}</h2>
                <div>price: {price}</div>
                <p>{description}</p>
            </div>
            <Carousel variant='dark' className={style.carousel}>

                {
                    images.map((image, index) =>
                        <CarouselItem key={index}>
                            <img className={style.img} src={image} alt={title}/>
                        </CarouselItem>)
                }

            </Carousel>

        </div>
    );
};

export {Product};