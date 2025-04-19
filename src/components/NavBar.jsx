import "../styles/NavBar.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import Theme from "./Theme";


export default function NavBar() {


    return (
        <div id="navbar">
            <ul>
                <li className="navbar-item"><Link to="/">/home</Link></li>
                <li className="navbar-item"><Link to="/about">/about</Link></li>
                <li className="navbar-item"><Link to="/hobbies">/hobbies</Link></li>
                <li>
                    <div className="socials">
                        <a href="https://github.com/hahaem1ly" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon style={{ fontSize: 22 }} />
                        </a>
                        <a href="https://www.linkedin.com/in/emily-ha-885605210/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon style={{ fontSize: 22 }} />
                        </a>
                    </div>
                </li>
                <li>
                    <Theme />
                </li>

            </ul>
        </div>
    );
}
