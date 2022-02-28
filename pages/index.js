import Head from 'next/head';
import { gql } from 'graphql-request';
import { request } from '../lib/datocms';
import { Intro } from '../components/Intro/Intro';
import FeaturedProduct from '../components/FeaturedProduct/FeaturedProduct';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { Store } from '../components/Store/Store';
import { Menu } from '../components/Menu/Menu';
const HOMEPAGE_QUERY = gql`
    query HOMEPAGE_QUERY {
        intro {
            id
            subtitle
            title
            bigImage {
                url
                height
                width
                focalPoint {
                    x
                    y
                }
            }
        }

        productWithIngredient {
            product {
                id
                productName
                productImage {
                    url
                    height
                    width
                }

                ingredients {
                    ingredient
                    id
                }
            }
        }

        productCard {
            headline
            product {
                id
                productName
                productImage {
                    url
                    height
                    width
                }
            }
        }

        store {
            headline
            stores {
                id
                storeName
                storeAddress
                storeWebsite
                storeImage {
                    url
                    focalPoint {
                        x
                        y
                    }
                }
            }
        }
        menu {
            menu {
                id
                menuItemName
                menuItemPrice
                prices {
                    singleShotPrice
                    doubleShotPrice
                }
                menuItemIngredient {
                    ingredient
                    id
                }
            }
            menuOf
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
    menu,
}) {
    console.log(
        'from index:',
        intro,
        productWithIngredient,
        productCard,
        store,
        menu
    );
    return (
        <>
            <Head>
                <title>Bonita Cafe</title>
            </Head>
            <Intro details={intro} />
            <ProductCard products={productCard.product} />
            <Menu menu={menu} fullmenu={false} />
            <FeaturedProduct featuredProduct={productWithIngredient} />
            <Store stores={store} />
        </>
    );
}
