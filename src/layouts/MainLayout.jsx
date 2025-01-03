import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

const MainLayout = () => {
    return (
        <div>
            <Container>
                <Navbar></Navbar>
                <Banner></Banner>
                <AboutMe></AboutMe>
                <Skills></Skills>
            </Container>
        </div>
    );
};

export default MainLayout;