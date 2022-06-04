import Image from 'next/image';
import React from 'react';
import styles from './Intro.module.scss';

export const Intro = ({ details }) => {
    return (
        <section className={`${styles.intro}  span-cols `}>
            <div className={styles.image}>
                <Image
                    src={details.bigImage.url}
                    alt={
                        details.title !== undefined
                            ? details.title
                            : 'Bonita Cafe'
                    }
                    layout="responsive"
                    width={900}
                    height={1600}
                    loading="eager"
                />
            </div>
            <div className={styles.textbox}>
                <h1>{details.title}</h1>
                <p>{details.subtitle}</p>
            </div>

            <style jsx>{`
                * {
                    --focal-x: ${details.bigImage.focalPoint.x};
                    --focal-y: ${details.bigImage.focalPoint.y};
                }
            `}</style>
        </section>
    );
};
