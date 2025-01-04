import { useEffect, useState } from "react";
import Projects from "./Projects";

const MyProjects = () => {
    const [projects, setProjects] = useState([])
    useEffect(()=> {
        fetch('projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center mb-5">
            {
                projects.map((project, idx) => <Projects key={idx} project={project}></Projects>)
            }
        </div>
    );
};

export default MyProjects;