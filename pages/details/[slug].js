import Head from "next/head"
import { API_URL } from "../../utils/urls"
import Nav from "../../components/layout/Nav"
import Footer from "../../components/layout/Footer"
import axios from "axios"


export default function Product({ product }) {
    console.log(product)
    return (
        <div>
            <Head>
                **Fonts**
                <link rel="stylesheet" href="https://use.typekit.net/apm7ucf.css"></link>
                <title>Hotel</title>
                
            </Head>
            <Nav></Nav>
            <h1>{product.attributes.name}</h1>

            <Footer></Footer>

        </div>
        
    )
}



export async function getStaticPaths() {
    
    const product_res = await fetch(`${API_URL}/api/hotels/`)
    const products = await product_res.json()

    
    const paths = products.data.map((product) => ({
        params: {slug: product.attributes.slug},
    }));

    return {
        paths,
        fallback: false

    }

}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const product_res = await fetch (`${API_URL}/api/hotels?slug=${slug}`)
    const data =  await product_res.json()
    const found = data.data[0]

    return {
        props: {
            product: found
        }
    }
}