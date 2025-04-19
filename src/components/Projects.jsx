import projectData from '../data/projectData.json';
import { Fade } from 'react-awesome-reveal';
import {
    Typography,
} from '@mui/material';

export default function Projects() {
    return (
        <Fade cascade>
            <Typography variant="h5" gutterBottom>
                Projects
            </Typography>

            <div>
                {Object.entries(projectData).map(([name, item], index) => (
                    <div key={index} sx={{ mb: 2 }}>
                        <div>
                            <Typography variant="h6">{name}</Typography>
                            <Typography variant="body2">{item.description}</Typography>
                            <Typography variant="caption" display="block">
                                {item.tech}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </Fade>
    );
}
