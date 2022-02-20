import Image from 'next/image';
import React from 'react';

export const Store = ({ stores }) => {
    return (
        <section>
            {stores.map((store) => {
                return (
                    <a
                        target={'_blank'}
                        href={store.storeWebsite}
                        key={store.id}
                        rel="noreferrer"
                    >
                        <Image
                            src={store.storeImage.url}
                            alt={store.storeName}
                            layout="responsive"
                            width={150}
                            height={300}
                        />
                        <h4>{store.storeName}</h4>
                    </a>
                );
            })}
        </section>
    );
};
