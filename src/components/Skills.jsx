import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { DiFirebase, DiMongodb } from 'react-icons/di';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";

const Skills = () => {
    const skills = [
        { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
        { name: "CSS", level: 85, icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
        { name: "React JS", level: 90, icon: <FaReact className="text-blue-400 text-5xl" /> },
        { name: "Node JS", level: 75, icon: <FaNodeJs className="text-green-500 text-5xl" /> },
        { name: "Firebase", level: 80, icon: <DiFirebase className="text-yellow-500 text-5xl" /> },
        { name: "MongoDB", level: 75, icon: <DiMongodb className="text-green-600 text-5xl" /> },
        { name: "GitHub", level: 85, icon: <FaGithub className="text-gray-400 text-5xl" /> },
        { name: "Tailwind CSS", level: 85, icon: <RiTailwindCssFill className="text-[#38bdf8] text-5xl" /> },
        { name: "Daisy UI", level: 80, icon: <SiDaisyui className="text-green-400 text-5xl" /> },
    ];
// bg-gray-900
    return (
        <div className="bg-base-200 py-16 px-6 lg:px-20">
            <div className="container mx-auto max-w-5xl text-center">
                <h1 className="text-4xl font-bold text-green-600 mb-12">My Skills</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center bg-gray-800 rounded-full p-6 shadow-lg">
                            <div className="w-20 h-20 flex items-center justify-center bg-gray-700 rounded-full mb-4">
                                {skill.icon}
                            </div>
                            <p className="text-green-400 text-lg font-bold">{skill.level}%</p>
                            <p className="text-white text-sm mt-2">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
