import {useContext} from "react";
import {DataContext} from "../context/DataContext";

const AllUsersPage = () => {
    const { users: {allUsers}} = useContext(DataContext)
    return (
        <div>
            AllUsersPage
        </div>
    );
};

export {AllUsersPage};