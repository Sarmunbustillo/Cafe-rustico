import React, { useEffect, useState } from 'react';

const useParallax = (ref) => {
    useEffect(() => {
        const handler = () => {
            if (!ref.current) return;
            ref.current.style.setProperty(
                '--parallax-y',
                `${window.pageYOffset * 0.8}px`
            );

            // ref.current.style.transform = `translate(0, ${
            //   window.pageYOffset * 0.8
            // }px)`;
        };
        window.addEventListener('scroll', handler);
        return () => {
            window.removeEventListener('scroll', handler);
        };
    }, [ref]);
};

export { useParallax };
