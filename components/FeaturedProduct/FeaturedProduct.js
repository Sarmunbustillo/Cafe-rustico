import Image from 'next/image';
import React from 'react';

export default function FeaturedProduct({ featuredProduct }) {
    const { product, ingredients } = featuredProduct;
    return (
        <div>
            <Image
                src={product[0].productImage.url}
                alt={product[0].name}
                layout="responsive"
                width={600}
                height={900}
            />
            <h4>{product[0].productName}</h4>
            <ul>
                {ingredients.map(({ id, ingredient }) => {
                    return <li key={id}>{ingredient}</li>;
                })}
            </ul>
        </div>
    );
}
