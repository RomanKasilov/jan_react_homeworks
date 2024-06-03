import {IPrevNextModel} from "./IPrevNextModel";
import {ICarWithAuth} from "./ICarWithAuth";

export interface ICarPaginatedModel {
    total_items: number,
    total_pages: number,
    prev: IPrevNextModel | null,
    next: IPrevNextModel | null,
    items: ICarWithAuth[]
}