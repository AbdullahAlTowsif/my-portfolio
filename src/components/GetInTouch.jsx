import { FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa';

const GetInTouch = () => {
    return (
        <div className="bg-gray-50 py-16 px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Address Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">ADDRESS</h3>
                        <p className="text-gray-600 mb-2">3rd Floor, Foysal Tower</p>
                        <p className="text-gray-600 mb-2">Arakan Road</p>
                        <p className="text-gray-600 mb-4">Bahaddarhat, Chittagong</p>
                        <div className="flex items-center mb-2">
                            <FaPhoneAlt className="text-green-500 mr-2" />
                            <p>(+88) 01641413635</p>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="text-green-500 mr-2" />
                            <p>abdullah.al.towsif2002@gmail.com</p>
                        </div>

                        {/* Social Media Links */}
                        <h3 className="text-xl font-semibold mt-8 mb-4">FOLLOW ME</h3>
                        <div className="flex space-x-4 text-2xl">
                            <a
                                href="https://x.com/towsif635"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-800">
                                <FaTwitter />
                            </a>
                            <a
                                href="https://www.facebook.com/abdullah.towsif/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-800">
                                <FaFacebook />
                            </a>
                            <a href="https://github.com/AbdullahAlTowsif"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-800">
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">SEND ME A NOTE</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered w-full"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <textarea
                                placeholder="Tell me more about your needs..."
                                className="textarea textarea-bordered w-full h-24"
                            ></textarea>
                            <button className="btn btn-primary w-full md:w-auto">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;
