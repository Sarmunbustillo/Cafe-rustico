import React, { useEffect } from 'react';

const useOnVieport = (ref) => {
    useEffect(() => {
        const handler = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();

            const visible =
                rect.bottom - rect.height / 2 <=
                (window.innerHeight || document.documentElement.clientHeight);

            return visible ? ref?.current.classList.add('animate') : '';
        };
        window.addEventListener('scroll', handler);
        return () => {
            window.removeEventListener('scroll', handler);
        };
    }, [ref]);
};

export { useOnVieport };
