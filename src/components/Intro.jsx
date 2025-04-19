import "../styles/Intro.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Avatar } from "@mui/material";

export default function Intro() {
    return (
        <div className="intro-container">
            <Avatar
                alt="Emily"
                src="/profile.jpeg"
                sx={{ width: 190, height: 190 }}
            />

            <div>
                <motion.div
                    className="intro-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Hello, I'm Emily!
                </motion.div>

                <div className="intro-typewriter">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("I'm a Computer Science Engineering student. asdasdasdsadasdasd adas sadas")
                                .start();
                        }}
                        options={{
                            autoStart: true,
                            loop: false,
                            cursor: '|',
                            delay: 50,
                        }}
                    />
                </div>
            </div>
        </div>

    );
}
