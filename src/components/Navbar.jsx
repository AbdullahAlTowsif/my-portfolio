import { Link } from 'react-router-dom';
import logo from '../assets/towsif-logo.jpg'
// FFE2E2
const Navbar = () => {
    const links = <>
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
    </>
    return (
        <div>
            <div className="navbar sticky top-0 z-0 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link to={`/`}>
                        <img className='w-10' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-purple-500 text-white">Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;