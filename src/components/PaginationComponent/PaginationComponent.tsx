import {FC, PropsWithChildren} from "react";
import {IPrevNextModel} from "../../models/IPrevNextModel";
import {useSearchParams} from "react-router-dom";

interface IProps extends PropsWithChildren {
    prev: IPrevNextModel | null
    next: IPrevNextModel | null
}

const PaginationComponent: FC<IProps> = ({prev, next}) => {
    const [query, setQuery]
        = useSearchParams({page: '1'});
    const changePage = (action: string) => {
        switch (action) {
            case 'prev':
                setQuery({...prev})
                break;
            case 'next':
                setQuery({...next})
                break;
        }
    }
    return (
        <div>
            <button onClick={()=>changePage('prev')}>prev</button>
            <button onClick={()=>changePage('next')}>next</button>
        </div>
    );
};

export {PaginationComponent};