/* eslint-disable react/no-unknown-property */
import Image from 'next/image';
import React, { useRef } from 'react';
import styles from './ProductCard.module.scss';
import { useOnVieport } from '../../lib/useOnVieport';
import Link from 'next/link';

export const ProductCard = ({ products }) => {
    const ref = useRef(null);
    useOnVieport(ref);
    return (
        <section className={styles.productCards}>
            <h2 className={styles.headline}>Our Coffee</h2>
            <div className={styles.productCardWrapper} ref={ref}>
                {products.map((product, i) => {
                    return (
                        <div
                            key={product.id}
                            className={styles.productCard}
                            style={{ '--delay': `calc(${0.3 * i}s)` }}
                        >
                            <div>
                                <Image
                                    src={product.productImage.url}
                                    alt={
                                        product.productName !== undefined
                                            ? product.productName
                                            : ' Product'
                                    }
                                    layout="responsive"
                                    width={400}
                                    height={600}
                                />
                            </div>
                            <h3 className="like-h4">{product.productName}</h3>
                        </div>
                    );
                })}
            </div>
            <style jsx>{`
                .animate > div {
                    transform: translate3d(0, 0%, 0);
                    opacity: 1;
                }
            `}</style>
        </section>
    );
};
