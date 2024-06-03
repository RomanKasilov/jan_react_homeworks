import carService from "../../services/car.service";
import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {AxiosError} from "axios";
import authService from "../../services/auth.service";
import {ICarWithAuth} from "../../models/ICarWithAuth";
import {AllCars} from "../../components/CarsComponents/AllCars";

const CarsPage = () => {
    const [query] = useSearchParams();
    const navigateFunction = useNavigate();
    const [allCarsWithAuth, setAllCarsWithAuth] = useState<ICarWithAuth[]>([])
    useEffect(() => {
        const getCarsData = async () => {
            try {
                const response = await carService.getAllCars(query.get('page') || '1')
               setAllCarsWithAuth([...response.items])
            } catch (e) {
                const axiosError = e as AxiosError;
                if (axiosError && axiosError?.response?.status === 401) {
                    try {
                        await authService.refresh()
                    } catch (e) {
                       return navigateFunction('/')
                    }
                    const response = await carService.getAllCars(query.get('page') || '1')
                    setAllCarsWithAuth([...response.items])
                }
            }
        }
        getCarsData()
    }, [query]);

    return (
        <>
            <AllCars allCarsWithAuth={allCarsWithAuth}/>
        </>
    );
};

export {CarsPage};