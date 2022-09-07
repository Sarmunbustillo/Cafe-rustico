/* eslint-disable react/no-unknown-property */
import Head from 'next/head';
import { gql } from 'graphql-request';
import { request } from '../lib/datocms';
import { Menu } from '../components/Menu/Menu';
import Link from 'next/link';

const MENU_QUERY = gql`
    query MENU_QUERY {
        allMenus {
            id
            menuOf
            menu {
                id
                menuItemName
                menuItemPrice
                prices {
                    singleShotPrice
                    doubleShotPrice
                }
                menuItemIngredient {
                    id
                    ingredient
                }
            }
        }
    }
`;

export async function getStaticProps() {
    const data = await request({
        query: MENU_QUERY,
    });

    return {
        props: data,
    };
}

export default function MenuPage({ allMenus }) {
    return (
        <>
            <Head>
                <title>Cafe Rustico Menu</title>
            </Head>
            <section className="menus span-cols">
                {allMenus.map((menu) => (
                    <Menu key={menu.id} menu={menu} />
                ))}

                <div className="links">
                    <Link href="/">
                        <a className={'button button-tertiary'}>Go back</a>
                    </Link>
                </div>
                <style jsx>{`
                    .menus {
                        background-color: var(--black);
                        margin-bottom: 0 !important;
                        position: relative;
                    }

                    .menus::before {
                        content: '';
                        position: absolute;
                        background-color: var(--black);
                        z-index: -1;
                        pointer-events: none;
                        width: 150vw;
                        height: 100%;
                        transform: translate(-25vw, 0);
                    }

                    .links {
                        margin-top: var(--size-8);
                        margin-bottom: var(--size-10);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: var(--size-8);
                        padding: 0 var(--size-6);
                    }

                    @media screen and (max-width: 598px) {
                        .links {
                            flex-direction: column;
                        }

                        .links a {
                            width: 100%;
                        }
                    }
                `}</style>
            </section>
        </>
    );
}
