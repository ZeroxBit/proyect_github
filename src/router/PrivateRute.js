import { Redirect, Route } from "react-router-dom";
import { getTokenServices } from "../services/authServices";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = getTokenServices();

    return (
        <Route
            {...rest}
            render={(props) =>
                token ? (
                    <Component {...props} {...rest} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;
