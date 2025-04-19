import Intro from "./Intro";
import Projects from "./Projects";

export default function Home() {
    return (
        <div className="home-page-container">
            <Intro></Intro>
            <Projects></Projects>
        </div>

    );
}