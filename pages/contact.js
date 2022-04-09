import Head from "next/head"
import Link from "next/link"
import { API_URL } from "../utils/urls.js"
import Nav from "../components/layout/Nav.js"
import Form from "../components/layout/Form.js"
import Footer from "../components/layout/Footer.js"


export default function Contact() {

    return (

        <div>
            <Head>
                //Fonts//
                <link rel="stylesheet" href="https://use.typekit.net/apm7ucf.css"></link>
                <title>Contact</title>
            </Head>

            <Nav></Nav>
            <div className="main__container">
            <h2>Contact</h2>
            <Form></Form>
            </div>

            <Footer></Footer>

        </div>
    )
};


