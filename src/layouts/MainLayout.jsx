import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Container from "../components/Container";
import EducationExperience from "../components/EducationExperience";
import MyProjects from "../components/MyProjects";
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
                <EducationExperience></EducationExperience>
                <MyProjects></MyProjects>
            </Container>
        </div>
    );
};

export default MainLayout;