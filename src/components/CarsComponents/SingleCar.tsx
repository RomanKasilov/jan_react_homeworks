import {FC, PropsWithChildren} from "react";
import {ICarWithAuth} from "../../models/ICarWithAuth";

interface IProps extends PropsWithChildren {
    singleCarWithAuth:ICarWithAuth
}
const SingleCar :FC<IProps>= ({singleCarWithAuth}) => {
    return (
        <div>
            <div>{singleCarWithAuth.brand} {singleCarWithAuth.year}</div>
            <div>prise: {singleCarWithAuth.price}</div>
        </div>
    );
};

export {SingleCar};