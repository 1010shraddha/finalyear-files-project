// import React from "react";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
// import Routers from "../../routers/Routers";

// import AdminNav from '../../admin/AdminNav';
// import { useLocation } from "react-router-dom";

// const Layout = () => {

//     const location = useLocation()
//     return (
//     <>

//     {
//         location.pathname.startsWith('/dashboard') ? <AdminNav/> :<Header/>
//     }
//     <Header/>
//     <div>
//         <Routers/>
//     </div>
//     <Footer/>
//     </>
//     );
// };why are using location?

// export default Layout;
import React, { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import AdminNav from '../../admin/AdminNav';
import { useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//code.tidio.co/ht8fvnxvvxj96ootop8ebiqumetuv9gc.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup to avoid duplicates
        };
    }, []);

    return (
        <>
            {location.pathname.startsWith('/dashboard') ? <AdminNav/> : <Header/>}
            
            <div>
                <Routers/>
            </div>
            
            <Footer/>
        </>
    );
};

export default Layout;
