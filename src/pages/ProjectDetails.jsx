import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProjectDetails = () => {
    const {id} = useParams();
    const projects = useLoaderData();
    const [project, setProject] = useState({})
    useEffect(()=> {
        const specificProject = projects.find(pro=> pro.id == id)
        setProject(specificProject);
    }, [id, projects]);
    
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <div className="flex flex-col lg:flex-row">
          {/* Project Image */}
          <div className="w-full lg:w-1/2">
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-80 object-cover rounded-t-lg lg:rounded-l-lg"
            />
          </div>

          {/* Project Info */}
          <div className="w-full lg:w-1/2 p-6">
            <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
            <p className="text-lg text-gray-700 mb-4">{project.description}</p>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Technology Stack:</h3>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                {project.stack && project.stack.map((tech, index) => (
                  <li key={index} className="mb-2">{tech}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2">Details:</h3>
              <p className="text-gray-700">{project.details}</p>
            </div>

            <div className="flex gap-4">
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              >
                View Live
              </a>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition duration-300"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
