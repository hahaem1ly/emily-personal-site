import "../styles/Home.css";
import Intro from "./Intro";
import Projects from "./Projects";
import { Divider } from "@mui/material";
import ZdogBox from "./ZdogBox";



export default function Home() {
    return (
        <div className="home-page-container">
            <Intro></Intro>
            <div className="divider-wrapper">
                <Divider
                    className="divider"
                />
            </div>

            {/* <Projects></Projects> */}
            <ZdogBox />
        </div>

    );
}