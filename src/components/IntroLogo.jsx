import { motion } from "framer-motion";

export default function IntroLogo() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            style={{
                fontSize: "3rem",
                fontWeight: "bold",
                fontFamily: "Inter, sans-serif",
            }}
        >
            Emily Ha
        </motion.div>
    );
}
