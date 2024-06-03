import carService from "../../services/car.service";
import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {AxiosError} from "axios";
import authService from "../../services/auth.service";
import {AllCars} from "../../components/CarsComponents/AllCars";
import {PaginationComponent} from "../../components/PaginationComponent/PaginationComponent";
import {ICarPaginatedModel} from "../../models/ICarPaginatedModel";

const CarsPage = () => {
    const [query] = useSearchParams();
    console.log(query.get('page'))


    const navigateFunction = useNavigate();
    const [allCarsWithAuth, setAllCarsWithAuth]
        = useState<ICarPaginatedModel>({
        total_items: 0,
        total_pages: 0,
        prev: null,
        next: null,
        items: []
    })
    useEffect(() => {
        const getCarsData = async () => {
            try {
                const response =
                    await carService.getAllCars(query.get('page') || '1')
                if (response) {
                    setAllCarsWithAuth(response)
                }

            } catch (e) {
                const axiosError = e as AxiosError;
                if (axiosError && axiosError?.response?.status === 401) {
                    try {
                        await authService.refresh()
                    } catch (e) {
                        return navigateFunction('/')
                    }
                    const response = await carService.getAllCars(query.get('page') || '1')
                    if (response) {
                        setAllCarsWithAuth(response)
                    }
                }
            }
        }
        getCarsData()
    }, [query]);
    console.log(allCarsWithAuth)
    return (
        <>
            <AllCars allCarsWithAuth={allCarsWithAuth.items}/>
            <PaginationComponent prev={allCarsWithAuth.prev} next={allCarsWithAuth.next}/>
        </>
    );
};

export {CarsPage};