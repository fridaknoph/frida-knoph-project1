import Head from "next/head"
import Link from "next/link"
import { API_URL } from "../utils/urls.js"
import Nav from "../components/layout/Nav.js"
import Login from "../components/layout/Login.js"
import Footer from "../components/layout/Footer.js"


export default function Contact() {

    return (

        <div>
            <Head>
                //Fonts//
                <link rel="stylesheet" href="https://use.typekit.net/apm7ucf.css"></link>
                <title>Log in</title>
            </Head>

            <Nav></Nav>
            <div className="main__container">
            <h2>Log in</h2>
            <Login></Login>
            </div>

            <Footer></Footer>

        </div>
    )
};


