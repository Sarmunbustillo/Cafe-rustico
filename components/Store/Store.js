import Image from 'next/image';
import React from 'react';
import styles from './Store.module.scss';

export const Store = ({ stores }) => {
    return (
        <section className={`${styles.stores}  span-cols `}>
            <h2 className={`${styles.name} headline`}>{stores.headline}</h2>
            <div>
                {stores.stores.map((store) => {
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

                                <p className="button  button-secondary">
                                    See Website
                                    <style jsx>{`
                                        .button {
                                            margin-top: var(--size-5);
                                            margin-left: auto;
                                            margin-right: auto;
                                            max-width: max-content;
                                        }
                                    `}</style>
                                </p>
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    );
};
