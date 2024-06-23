import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import { StartPage } from "./screens/StartPage";
import { Comparison } from "./screens/Comparison";
import { LogIn } from "./screens/LogIn";
import { History } from "./screens/History";
import { OldComparison } from "screens/OldComparison";

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
            element: <History token={token} />,
        },
        {
            path: "/oldcomparison",
            element: <OldComparison token={token} />,
        }
    ]);

    return element;
};

export default ProjectRoutes;
