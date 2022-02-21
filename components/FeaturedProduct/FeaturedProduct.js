import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './FeatureProduct.module.scss';

export default function FeaturedProduct({ featuredProduct }) {
    const { product, ingredients } = featuredProduct;

    return (
        <section className={styles.featuredProduct}>
            <div>
                <h2 className={`${styles.name} headline`}>
                    {product[0].productName}
                </h2>

                <Image
                    src={product[0].productImage.url}
                    alt={product[0].name}
                    layout="responsive"
                    width={300}
                    height={600}
                />
                <div className={styles.left}>
                    {ingredients.map(({ id, ingredient }, i) => {
                        if (i % 2 == 0) {
                            return (
                                <div className={styles.ingredient} key={id}>
                                    <p>{ingredient}</p>
                                </div>
                            );
                        }
                    })}
                </div>
                <div className={styles.right}>
                    {ingredients.map(({ id, ingredient }, i) => {
                        if (i % 2 != 0) {
                            return (
                                <div className={styles.ingredient} key={id}>
                                    <p>{ingredient}</p>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </section>
    );
}
