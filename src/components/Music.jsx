import { Spotify } from 'react-spotify-embed';
import "../styles/Hobbies.css";
import { motion } from 'framer-motion';


export default function Music() {
    return (
        <>
            {/* Spotify Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2>🎧 Favorites</h2>
                <Spotify className="spotify-embed" link="https://open.spotify.com/track/2mWfVxEo4xZYDaz0v7hYrN?si=7c61e1b4f3144e5a" />
                <Spotify className="spotify-embed" link="https://open.spotify.com/playlist/5eMA0Lvnpn0NhbyhL8Fz9w?si=7dc65fe9968c4ed9" />
                <Spotify className="spotify-embed" link="https://open.spotify.com/artist/4MrQDA45Gd0llLrwFUzimG?si=9b_e3M5fTAKK_45dfHnw7Q" />
            </motion.div>
        </>
    );
}
