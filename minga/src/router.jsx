import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./Home";

const Router= createBrowserRouter([
    {
        path:"/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home/>,
            } 
        ]
    }
]
)

export default Router;