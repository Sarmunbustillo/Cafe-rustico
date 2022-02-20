import Image from 'next/image';
import React from 'react';

export const ProductCard = ({ products }) => {
    return (
        <section>
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <Image
                            src={product.productImage.url}
                            alt={product.productName}
                            layout="responsive"
                            width={150}
                            height={300}
                        />
                        <h4>{product.productName}</h4>
                    </div>
                );
            })}
        </section>
    );
};
