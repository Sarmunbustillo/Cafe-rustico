import Link from 'next/link';
import React from 'react';
import styles from './Menu.module.scss';

export const Menu = ({ menu, fullmenu = true }) => {
    const { menu: singleMenu, menuOf: headline } = menu;
    // Not the best practice, in order to style the "hot drinks / coffee" menu a bit differently
    const keyWords = ['latte', 'cappuccino', 'cortado'];

    const targetMenu = singleMenu.some((menu) => {
        return keywordsMatch(menu.menuItemName, keyWords);
    });

    function keywordsMatch(string, arrayOfKeywords) {
        const matchingArray = arrayOfKeywords.filter((keyword) => {
            return string?.toLowerCase().includes(keyword?.toLowerCase());
        });

        return matchingArray.length > 0 ? true : false;
    }

    return (
        <section
            className={`${styles.menu} ${
                !fullmenu ? '' : styles.full
            } span-cols `}
        >
            <h2 className={`${styles.name} ${!fullmenu ? 'headline' : ''} `}>
                {headline}
            </h2>
            <ul
                className={`${styles.list} ${!fullmenu ? styles.center : ''} ${
                    targetMenu ? 'target-menu' : ''
                } `}
            >
                {singleMenu.map((menu) => {
                    return (
                        <li key={menu.id}>
                            <div>
                                <h3 className="like-h4">{menu.menuItemName}</h3>
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
                <style jsx>{`
                    .target-menu span {
                        font-size: var(--font-size-2);
                        color: var(--brand-2);
                    }
                `}</style>
            </ul>

            {!fullmenu && (
                <div className={styles.links}>
                    <Link href="/menu">
                        <a className={'button button-secondary'}>See Menu</a>
                    </Link>
                    <Link href="https://wolt.com/en/nor/oslo/restaurant/bonita-caf">
                        <a className={'button button-tertiary'} target="_blank">
                            Order Online
                        </a>
                    </Link>
                </div>
            )}
        </section>
    );
};
