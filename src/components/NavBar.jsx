import "../styles/NavBar.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';


export default function NavBar() {


    return (
        <div id="navbar">
            <ul>
                <li className="navbar-item"><Link to="/">/home</Link></li>
                <li className="navbar-item"><Link to="/about">/about</Link></li>
                <li className="navbar-item"><Link to="/hobbies">/hobbies</Link></li>
                <li>
                    <div className="socials">
                        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon style={{ fontSize: 22 }} />
                        </a>
                        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon style={{ fontSize: 22 }} />
                        </a>
                    </div>
                </li>

            </ul>
        </div>
    );
}
