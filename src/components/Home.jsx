import "../styles/home.css";
import Intro from "./Intro";
import Projects from "./Projects";
import { Divider } from "@mui/material";



export default function Home() {
    return (
        <div className="home-page-container">
            <Intro></Intro>
            <div className="divider-wrapper">
                <Divider
                    className="divider"
                />
            </div>

            <Projects></Projects>
        </div>

    );
}