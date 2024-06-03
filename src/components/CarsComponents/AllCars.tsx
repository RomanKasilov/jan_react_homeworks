import {ICarWithAuth} from "../../models/ICarWithAuth";
import {FC, PropsWithChildren} from "react";
import {SingleCar} from "./SingleCar";

interface IProps extends PropsWithChildren {
    allCarsWithAuth:ICarWithAuth[]
}
const AllCars:FC<IProps> = ({allCarsWithAuth}) => {
    return (
        <div>
            {allCarsWithAuth.map(singleCarWithAuth =>
                <SingleCar key={singleCarWithAuth.id} singleCarWithAuth={singleCarWithAuth}/>)}
        </div>
    );
};

export {AllCars};