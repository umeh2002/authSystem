import { createBrowserRouter } from "react-router-dom";
import Register from "../Auth/Register";
import SignIn from "../Auth/SignIn";
import Layout from "../Common/Layout";

export const mainRouter = createBrowserRouter([
    {
        path:"/" ,
        element:<Layout/> ,
        children:[{}]
    },
    {
        path:"/register" ,
        element:<Register/>
    },
    {
        path:"/sign-in" ,
        element:<SignIn/>
    }
])