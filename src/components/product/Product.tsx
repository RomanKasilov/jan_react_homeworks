import React, {FC} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import style from './Product.module.css'
import {Carousel, CarouselItem} from "react-bootstrap";

export interface IProductProps {
    "id": number,
    "title": string,
    "description": string,
    "price": number,
    "discountPercentage"?: number,
    "rating"?: number,
    "stock"?: number,
    "brand"?: string,
    "category"?: string,
    "thumbnail"?: string,
    "images"?: string[]
}

type IProductTypeProps = IProductProps & { children?: React.ReactNode }
const Product: FC<IProductTypeProps> = ({title, description, price,images}) => {

    return (
        <div className={style.flex_wrapper}>
<div>
    <h2>{title}</h2>
    <div>price: {price}</div>
<p>{description}</p>
</div>
            <Carousel className={style.carousel}>

                {
                    images?.map((image, index) =>
                        <CarouselItem key={index} >
                            <img className ="d-block w-100"  src={image} alt={title}/>
                        </CarouselItem>)
                }

            </Carousel>


            {/*<div>*/}
            {/*    {*/}
            {/*        images?.map((image,index)=> <img key={index} src={image} alt={title}/>)*/}
            {/*    }*/}
            {/*</div>*/}
        </div>
    );
};

export {Product};