import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/towsif-logo.jpg';

const Navbar = () => {
    const links = (
        <>
            <li>
                <ScrollLink
                    to="about-me"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="cursor-pointer btn text-white bg-gray-800"
                >
                    About Me
                </ScrollLink>
            </li>
            <li>
                <ScrollLink
                    to="my-skills"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="cursor-pointer btn text-white bg-gray-800"
                >
                    My Skills
                </ScrollLink>
            </li>
            <li>
                <ScrollLink
                    to="my-education"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="cursor-pointer btn text-white bg-gray-800"
                >
                    My Education
                </ScrollLink>
            </li>
            <li>
                <ScrollLink
                    to="my-projects"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="cursor-pointer btn text-white bg-gray-800"
                >
                    My Projects
                </ScrollLink>
            </li>
            <li>
                <ScrollLink
                    to="contact-me"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="cursor-pointer btn text-white bg-gray-800"
                >
                    Contact
                </ScrollLink>
            </li>
        </>
    );

    return (
        <div>
            <div className="navbar fixed z-50 bg-opacity-30 bg-base-100 w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <Link to={`/`}>
                        <img className="w-10" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-purple-500 text-white">Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
