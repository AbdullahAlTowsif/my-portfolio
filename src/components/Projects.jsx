import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Projects = ({project}) => {
    // eslint-disable-next-line react/prop-types
    const {id, name, image} = project;
    const navigate = useNavigate();
    const handleDetails = () => {
        navigate(`/projectDetails/${id}`)
    }

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img className="w-full h-48 object-cover"
                        src={image}
                        alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">
                        <button onClick={handleDetails} className="btn bg-teal-500">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;