import Image from 'next/image';
import React, { useRef } from 'react';
import styles from './FeatureProduct.module.scss';
import { useOnVieport } from '../../lib/useOnVieport';

export default function FeaturedProduct({ featuredProduct }) {
    const { product } = featuredProduct;
    const ref = useRef(null);
    useOnVieport(ref);
    return (
        <section className={styles.featuredProduct}>
            <div ref={ref}>
                <h2 className={`${styles.name} headline`}>
                    {product[0].productName}
                </h2>

                <Image
                    src={product[0].productImage.url}
                    alt={product[0].name}
                    layout="responsive"
                    width={300}
                    height={400}
                />
                <div className={styles.left}>
                    {product[0].ingredients.map(({ id, ingredient }, i) => {
                        if (i % 2 == 0) {
                            return (
                                <div
                                    style={{ '--delay': `calc(${0.3 * i}s)` }}
                                    className={styles.ingredient}
                                    key={id}
                                >
                                    <p>{ingredient}</p>
                                </div>
                            );
                        }
                    })}
                </div>
                <div className={styles.right}>
                    {product[0].ingredients.map(({ id, ingredient }, i) => {
                        if (i % 2 != 0) {
                            return (
                                <div
                                    style={{ '--delay': `calc(${0.3 * i}s)` }}
                                    className={styles.ingredient}
                                    key={id}
                                >
                                    <p>{ingredient}</p>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
            <style jsx>{`
                .animate > div div {
                    transform: translate3d(0, 0%, 0);
                    opacity: 1;
                }
            `}</style>
        </section>
    );
}
