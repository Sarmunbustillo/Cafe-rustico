import Head from 'next/head';
import { gql } from 'graphql-request';
import { request } from '../../lib/datocms';
const MENU_QUERY = gql`
    query MENU_QUERY {
        allMenus {
            menuOf
            menu {
                id
                menuItemIngredient {
                    id
                    ingredient
                }
                menuItemPrice
                menuItemName
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

export default function Home({ allMenus }) {
    console.log('from menu:', allMenus);
    return (
        <>
            <Head>
                <title>Bonita Cafe Menu</title>
            </Head>
        </>
    );
}
