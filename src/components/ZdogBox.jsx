import { useEffect, useRef } from 'react';
import Zdog from 'zdog';

export default function ZdogBox() {
    const illoRef = useRef(null);

    useEffect(() => {
        const illo = new Zdog.Illustration({
            element: illoRef.current,
            dragRotate: true,
            resize: true,
            zoom: 4,
        });

        // Head (sphere)
        const head = new Zdog.Shape({
            addTo: illo,
            stroke: 40,
            color: '#fdd835',
        });

        // Left Eye
        new Zdog.Ellipse({
            addTo: head,
            diameter: 4,
            quarters: 2,
            translate: { x: -6, y: -4, z: 18 },
            rotate: { z: Zdog.TAU / 4 },
            color: '#000',
            stroke: 2,
            fill: true,
        });

        // Right Eye ✅
        new Zdog.Ellipse({
            addTo: head,
            diameter: 4,
            quarters: 2,
            translate: { x: 6, y: -4, z: 18 },
            rotate: { z: Zdog.TAU / 4 },
            color: '#000',
            stroke: 2,
            fill: true,
        });

        // Smile (happy curve) ✅
        new Zdog.Ellipse({
            addTo: head,
            diameter: 12,
            quarters: 2,
            translate: { y: 6, z: 18 },
            rotate: { z: Zdog.TAU / 4 },
            closed: false,
            stroke: 2,
            color: '#000',
        });

        function animate() {
            illo.rotate.y += 0.02;
            illo.updateRenderGraph();
            requestAnimationFrame(animate);
        }

        animate();
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
            <canvas ref={illoRef} width={240} height={240}></canvas>
        </div>
    );
}
