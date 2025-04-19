import { useEffect, useState } from 'react';

export default function Theme() {
    const [dark, setDark] = useState(() =>
        window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded bg-gray-200 dark:bg-gray-800"
        >
            {dark ? '☀️ Light' : '🌙 Dark'}
        </button>
    );
}
