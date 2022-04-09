import Head from "next/head"
import Link from "next/link"
import { API_URL } from "../utils/urls.js"
import Footer from "../components/layout/Footer.js"
import Nav from "../components/layout/Nav.js"
import Image from 'next/image'



export default function Home({ products }) {
    console.log(products)

    return (

        <div>
            <Head>
                //Fonts//
                <link rel="stylesheet" href="https://use.typekit.net/apm7ucf.css"></link>
                <title>Hotel</title>
                
            </Head>
            <Nav></Nav>
            <div className="main__container">
            <div className="hotels__row">
            <h1 className="hotels__h1">Our Hotels</h1>
            {products.data.map(product => (
                <><a href="">
                    <h2 className="hotels__name">
                        {product.attributes.name}
                    </h2>
                    <div className="img__wrapper">
                        <Image className="my_img" src={`${API_URL}${product.attributes.image.data.attributes.url}`} width={500} height={320} />
                    </div>
                </a><a className="a__link" href={``}>About the hotel</a></>


            ))}
            </div>
            </div>
        <Footer></Footer>
        </div>
    )
};


export async function getStaticProps() {

    const product_res = await fetch(`${API_URL}/api/hotels?populate=image`)
    const products = await product_res.json()


    return {
        props: {
            products: products
        }
        
    }


}