import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProjectDetails from "../pages/ProjectDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>
    },
    {
        path: '/projectDetails/:id',
        element: <ProjectDetails></ProjectDetails>,
        loader: ()=> fetch('../projects.json'),
    }
]);

export default router;