import Image from 'next/image';
import React from 'react';
import styles from './ProductCard.module.scss';

export const ProductCard = ({ products }) => {
    return (
        <section className={styles.productCards}>
            <h2 className={styles.headline}>Our Coffee</h2>
            <div>
                {products.map((product) => {
                    return (
                        <div key={product.id} className={styles.productCard}>
                            <Image
                                src={product.productImage.url}
                                alt={product.productName}
                                layout="responsive"
                                width={400}
                                height={600}
                            />
                            <h4>{product.productName}</h4>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
