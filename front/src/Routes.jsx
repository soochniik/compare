import React from "react";
import { useRoutes } from "react-router-dom";
import { StartPage } from "./screens/StartPage";
import { Comparison } from "./screens/Comparison";
import { LogIn } from "./screens/LogIn";
import { History } from "./screens/History";

const ProjectRoutes = () => {
    let element = useRoutes([ 
        { 
            path: "/",
            element: <StartPage />,
        },
        { 
            path: "login",
            element: <LogIn />,
        },
        { 
            path: "comparison",
            element: <Comparison />,
        },
        { 
            path: "history",
            element: <History />,
        },
    ]);

    return element;
};

export default ProjectRoutes;
