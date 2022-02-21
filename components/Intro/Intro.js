import Image from 'next/image';
import React from 'react';
import styles from './Intro.module.scss';

export const Intro = ({ details }) => {
    return (
        <section className={`${styles.intro}  span-cols `}>
            <div className={styles.image}>
                <Image
                    src={details.bigImage.url}
                    alt={details.bigTitle}
                    layout="responsive"
                    width={1600}
                    height={900}
                />
            </div>
            <div className={styles.textbox}>
                <h1>{details.title}</h1>
                <p>{details.subtitle}</p>
            </div>
        </section>
    );
};
