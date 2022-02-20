import Head from 'next/head';
import { gql } from 'graphql-request';
import { request } from '../lib/datocms';
import { Intro } from '../components/Intro/Intro';
import FeaturedProduct from '../components/FeaturedProduct/FeaturedProduct';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { Store } from '../components/Store/Store';
const HOMEPAGE_QUERY = gql`
    query HOMEPAGE_QUERY {
        intro {
            id
            subtitle
            title
            bigImage {
                url
            }
        }

        productWithIngredient {
            ingredients {
                ingredient
                id
            }
            product {
                id
                productName
                productImage {
                    url
                }
            }
        }

        productCard {
            product {
                id
                productName
                productImage {
                    url
                }
            }
        }

        store {
            stores {
                id
                storeName
                storeWebsite
                storeImage {
                    url
                }
            }
        }
    }
`;

export async function getStaticProps() {
    const data = await request({
        query: HOMEPAGE_QUERY,
    });

    return {
        props: data,
    };
}

export default function Home({
    intro,
    productWithIngredient,
    productCard,
    store,
}) {
    console.log(
        'from index:',
        intro,
        productWithIngredient,
        productCard,
        store
    );
    return (
        <>
            <Head>
                <title>Bonita Cafe</title>
            </Head>
            <Intro details={intro} />
            <FeaturedProduct featuredProduct={productWithIngredient} />
            <ProductCard products={productCard.product} />
            <Store stores={store.stores} />
        </>
    );
}
