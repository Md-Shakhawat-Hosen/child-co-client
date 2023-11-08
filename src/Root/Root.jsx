import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Root = () => {

    const location = useLocation()
    // console.log(location);
     useEffect(() => {
       // Update the document title based on the current route
       if (location.pathname === '/') {
        document.title =  'ChildCo || Home'
       }
       else {
        const route = location.pathname.substring(1);

        document.title = 'ChildCo || ' + route.charAt(0).toUpperCase() + route.slice(1);
       }

       
     }, [location.pathname]);
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;