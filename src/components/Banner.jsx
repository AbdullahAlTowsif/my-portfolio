import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import pp from "../assets/Towsif Pic.jpeg";

const Banner = () => {
    const handleDownload = () => {
        const resumeUrl = "/Abdullah Al Towsif_Resume.pdf"; // Resume file inside public folder
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "Abdullah_Al_Towsif_Resume.pdf"; // Name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="hero bg-[#F5EFFF] min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={pp}
                    className="w-80 max-h-96 rounded-full object-cover shadow-2xl"
                    alt="Profile"
                />
                <div>
                    <h1 className="text-5xl font-bold">Hi, I&apos;m Abdullah Al Towsif</h1>
                    <p className="py-6 text-2xl">
                        I&apos;m a Frontend Developer From Bangladesh
                    </p>
                    <button onClick={handleDownload} className="btn bg-purple-500 text-white mb-6">
                        Download Resume
                    </button>

                    {/* Social Media Links */}
                    <div className="flex space-x-4">
                        {/* GitHub */}
                        <a
                            href="https://github.com/AbdullahAlTowsif"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl text-gray-600 hover:text-black"
                        >
                            <FaGithub />
                        </a>

                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/abdullah.towsif/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl text-blue-600 hover:text-blue-800"
                        >
                            <FaFacebook />
                        </a>

                        {/* Twitter */}
                        <a
                            href="https://x.com/towsif635"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl text-blue-400 hover:text-blue-600"
                        >
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
