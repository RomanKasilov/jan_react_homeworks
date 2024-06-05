import {useDataContext} from "../../context/DataContext";
import {User} from "./User";

const Users = () => {
    const {users: {allUsers}} = useDataContext()
    return (
        <div>
            {allUsers.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};