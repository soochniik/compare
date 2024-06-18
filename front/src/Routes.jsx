import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import { StartPage } from "./screens/StartPage";
import { Comparison } from "./screens/Comparison";
import { LogIn } from "./screens/LogIn";
import { History } from "./screens/History";

const ProjectRoutes = () => {
    const [token, setToken] = useState(null);
    let element = useRoutes([ 
        { 
            path: "/",
            element: <StartPage />,
        },
        { 
            path: "/login",
            element: <LogIn setToken={setToken} />,
        },
        { 
            path: "/comparison",
            element: <Comparison token={token} />,
        },
        { 
            path: "/history",
            element: <History />,
        },
    ]);

    return element;
};

export default ProjectRoutes;
