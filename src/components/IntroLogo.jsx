import { motion } from "framer-motion";

export default function IntroLogo() {
    const name = "E m i l y  H a".split("");

    return (
        <div
            style={{
                fontFamily: 'Amoria',
                fontSize: '5rem',
                fontWeight: 'normal',
                color: 'white',
                display: 'flex',
                gap: '0.3rem',
            }}
        >
            {
                name.map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: index * 0.15,
                            duration: 1,
                            ease: "easeOut"
                        }}
                    >
                        {letter}
                    </motion.span>
                ))
            }
        </div >
    );
}
