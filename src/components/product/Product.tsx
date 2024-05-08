import React, {FC} from "react";

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
        <div>
<div>
    <h2>{title}</h2>
    <div>{price}</div>
<p>{description}</p>
</div>
            <div>
                {
                    images?.map((image,index)=> <img key={index} src={image} alt={title}/>)
                }
            </div>
        </div>
    );
};

export {Product};