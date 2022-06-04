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
    return (
        <>
            <Head>
                <title>Bonita Cafe</title>
                <meta property="og:title" content="Bonita Cafe" key="title" />
                <meta
                    name="description"
                    content="Bonita Café and Flowers. We have created the perfect fusion of a warm and colourful Café, serving fresh juices, smoothies, colombian coffee and a selection of delicious snacks and lunches whilst being surrounded by extraordinary fresh cut flowers and tropical plants. Basically you are escaping into a south american atmosphere in the middle of Oslo and enjoying the relaxed and fun vibe. Here are some of our delicious products that you can now order direclty online, and have delivered in a nice basket or together with some of the lovely flower arrangements we make"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <Intro details={intro} />
            <ProductCard products={productCard.product} />
            <Menu menu={menu} fullmenu={false} />
            <FeaturedProduct featuredProduct={productWithIngredient} />
            <Store stores={store} />
        </>
    );
}
