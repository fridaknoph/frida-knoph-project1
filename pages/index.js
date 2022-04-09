import Head from "next/head"
import Link from "next/link"
import { API_URL } from "../utils/urls.js"
import Nav from "../components/layout/Nav.js"
import Footer from "../components/layout/Footer.js"


export default function Home() {

    return (

        <div>
            <Head>
                //Fonts//
                <link rel="stylesheet" href="https://use.typekit.net/apm7ucf.css"></link>
                <title>Hotel</title>
                
            </Head>
            <Nav></Nav>

            <Footer></Footer>

        </div>
    )
};

