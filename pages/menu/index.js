import Head from 'next/head';
import { gql } from 'graphql-request';
import { request } from '../../lib/datocms';
import { Menu } from '../../components/Menu/Menu';

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
    console.log('from menu:', allMenus);
    return (
        <>
            <Head>
                <title>Bonita Cafe Menu</title>
            </Head>
            <section className="menus span-cols">
                {allMenus.map((menu) => (
                    <Menu key={menu.id} menu={menu} />
                ))}
                <style jsx>{`
                    .menus {
                        background-color: var(--black);
                        margin-bottom: 0 !important;
                    }
                `}</style>
            </section>
        </>
    );
}
