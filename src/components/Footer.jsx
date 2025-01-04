const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-300 text-base-content p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} <span className="text-teal-400 font-bold">Towsif</span> - All Right Reserved.</p>
            </aside>
        </footer>
    );
};

export default Footer;