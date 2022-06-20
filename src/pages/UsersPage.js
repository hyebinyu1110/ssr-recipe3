import UsersContainer from "../containers/UsersContainer";
import UserContainer from "../containers/UserContainer";
import { Route } from 'react-router-dom';


const UsersPage = () => {
    return (
        <div>
            <UsersContainer />
            <Route
                path="/users/:id"
                render={({ match }) => <UserContainer id={match.params.id} />}
            />
        </div>
    )
}

export default UsersPage;