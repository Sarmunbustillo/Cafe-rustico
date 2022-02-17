import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { gql, GraphQLClient } from 'graphql-request';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Bonita Cafe</title>
                <meta name="Bonita Cafe" content="Bonita Cafe" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}></main>

            <footer className={styles.footer}></footer>
        </div>
    );
}

const query = gql`
    query MyQuery {
        intro {
            name
            id
            introDetails {
                ... on IntroElementRecord {
                    bigImage {
                        id
                    }
                    bigTitle
                    subtitle
                    bigImage {
                        id
                        blurhash
                    }
                }
            }
        }
    }
`;
