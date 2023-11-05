import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";
import { AuthContext } from "../Provider/AuthProvider";



const PrivateRoute = ({children}) => {

    const location = useLocation();

    const {user,loading} = useContext(AuthContext);
    
    if (user?.email) {
        return children
    }
    
    if (loading){
        return <Spinner></Spinner>
    }


     return <Navigate state={location.pathname} to="/login"></Navigate>
    
};

export default PrivateRoute;