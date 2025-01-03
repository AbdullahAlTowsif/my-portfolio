import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Container>
                <Navbar></Navbar>
                <Banner></Banner>
                <AboutMe></AboutMe>
            </Container>
        </div>
    );
};

export default MainLayout;