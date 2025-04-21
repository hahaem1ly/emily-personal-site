import { useEffect, useRef } from "react";
import "../styles/Home.css";


export default function ColorCursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX, clientY } = e;
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
            }
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <div
            ref={cursorRef}
            className="color-cursor"
        >

        </div>
    );
}