import {User} from "./User";
import {useStore} from "../../context";

const Users = () => {
    const {userSlice:{allUsers}} = useStore()
    return (
        <div>
            {allUsers.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};