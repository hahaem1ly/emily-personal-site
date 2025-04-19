import { motion } from "framer-motion";

export default function IntroLogo() {
    const name = "E m i l y  H a".split("");

    return (
        <div style={{ display: "flex", gap: "0.2rem", fontSize: "3.5rem", fontWeight: "bold", fontFamily: "Inter, sans-serif", color: "white" }}>
            {name.map((letter, index) => (
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
            ))}
        </div>
    );
}
