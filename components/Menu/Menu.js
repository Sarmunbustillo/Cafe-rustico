import Link from 'next/link';
import React from 'react';
import styles from './Menu.module.scss';

export const Menu = ({ menu, fullmenu = true }) => {
    console.log(menu);
    const { menu: singleMenu, menuOf: headline } = menu;
    // // console.log(singleMenu, headline);
    return (
        <section
            className={`${styles.menu} ${
                !fullmenu ? '' : styles.full
            } span-cols `}
        >
            <h2 className={`${styles.name} ${!fullmenu ? 'headline' : ''} `}>
                {headline}
            </h2>
            <ul className={`${styles.list} ${!fullmenu ? styles.center : ''} `}>
                {singleMenu.map((menu) => {
                    return (
                        <li key={menu.id}>
                            <div>
                                <h4>{menu.menuItemName}</h4>
                                <div className={styles.prices}>
                                    <span className={styles.price}>
                                        {menu.menuItemPrice}
                                        {menu.menuItemPrice ? ',-' : null}
                                    </span>
                                    {menu.prices?.map(
                                        (
                                            {
                                                singleShotPrice,
                                                doubleShotPrice,
                                            },
                                            i
                                        ) => {
                                            return (
                                                <div
                                                    key={`prices-${i}`}
                                                    className={styles.prices}
                                                >
                                                    <span
                                                        className={styles.price}
                                                    >
                                                        {singleShotPrice}
                                                        {singleShotPrice
                                                            ? ',-'
                                                            : null}
                                                    </span>
                                                    <span
                                                        className={styles.price}
                                                    >
                                                        {doubleShotPrice}
                                                        {doubleShotPrice
                                                            ? ',-'
                                                            : null}
                                                    </span>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                            <ul className={styles.ingredients}>
                                {menu.menuItemIngredient.map((item, i) => (
                                    <li
                                        className={styles.ingredient}
                                        key={item.id}
                                    >
                                        {item.ingredient.replace(
                                            /((\s*\S+)*)\s*/,
                                            '$1'
                                        )}
                                        {menu.menuItemIngredient.length >
                                            i + 1 && ','}
                                        &nbsp;
                                    </li>
                                ))}
                            </ul>
                        </li>
                    );
                })}
            </ul>
            {!fullmenu && (
                <Link href="/menu">
                    <a className={'button button-secondary'}>See Menu</a>
                </Link>
            )}
        </section>
    );
};
