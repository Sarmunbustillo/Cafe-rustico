import Image from 'next/image';
import React from 'react';
import styles from './Store.module.scss';

export const Store = ({ stores }) => {
    return (
        <section className={styles.stores}>
            <h2 className={`${styles.name} headline`}>Our Branches</h2>
            <div>
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
                            <div className={styles.textbox}>
                                <h3>{store.storeName}</h3>
                                <p>{store.storeAddress}</p>
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    );
};
