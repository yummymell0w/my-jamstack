import {CldImage} from 'next-cloudinary';

import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';

import Layout from '@components/Layout';
import Container from '@components/Container';
import Button from '@components/Button';

import products from '@data/products';

import styles from '@styles/Page.module.scss';

const FEATURED_PRODUCTS = [
    'cosmo-hat-model',
    'cosmo-hat',
    'cosmo-mousepad',
    'cosmo-tshirt-model',
];

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Space Jelly Gear</title>
                <meta name="description" content="Get your Space Jelly gear!"/>
            </Head>

            <Container>
                <h1 className="sr-only">Space Jelly Gear</h1>

                <div className={styles.hero}>
                    <Link href="#">
                        <div className={styles.heroContent}>
                            <h2>Prepare for liftoff.</h2>
                            <p>Apparel that&apos;s out of this world!</p>
                        </div>
                        <CldImage deliveryType="fetch"
                                  className={styles.heroImage}
                                  width="1200"
                                  height="400"
                                  sizes="100w"
                                  src="https://user-images.githubusercontent.com/1045274/199860681-7f8c1de4-04fc-4015-9e0f-b351af53b4b4.jpg"
                                  alt=""
                        />
                    </Link>
                </div>

                <h2 className={styles.heading}>Featured Gear</h2>

                <ul className={styles.products}>
                    {products.slice(0, 4).map(product => {
                        const overlays = [];

                        if ( product.sale > 0 ) {
                            overlays.push({
                                url: 'https://user-images.githubusercontent.com/1045274/199872380-ced2b84d-fce4-4fc9-9e76-48cb4a7fb35f.png',
                                width: 400,
                                height: 400,
                                position: {
                                    gravity: 'north_east',
                                    x: 50,
                                    y: 50,
                                    angle: 15
                                }
                            });
                        }

                        return (
                            <li key={product.id}>
                                <Link href={`/products/${product.id}`}>
                                    <div className={styles.productImage}>
                                        <CldImage
                                            deliveryType="fetch"
                                            width="600"
                                            height="600"
                                            crop="fill"
                                            src={product.image}
                                            alt=""
                                            sizes="(min-width: 480px ) 50vw,
        (min-width: 728px) 33vw,
        (min-width: 976px) 25vw,
        100vw"
                                            overlays={overlays}
                                        />
                                    </div>
                                    <h3 className={styles.productTitle}>
                                        {product.name}
                                    </h3>
                                    <p className={styles.productPrice}>
                                        ${product.price}
                                    </p>
                                </Link>
                                <p>
                                    <Button>
                                        Add to Cart
                                    </Button>
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </Container>
        </Layout>
    )
}
