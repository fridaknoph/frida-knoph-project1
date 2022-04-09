import Head from "next/head"

export default function Footer() {

    return (
        <div>
            <Head>
                //Fonts//
                <link rel="stylesheet" href="https://use.typekit.net/apm7ucf.css"></link>
                
            </Head>
            <div className="nav__row__footer">
            <div className="nav__links__row">
                <div className="nav__links">
                    <a href="/" className="nav__logo">
                    Holidaze
                    </a>
                    <a href="/hotels">
                    Our Hotels
                    </a>
                    <a href="/contact">
                    Contact
                    </a>
                    <a href="">
                    Visit Bergen
                    </a> 
                    <a href="">
                    Log in
                    </a>   
                    </div>
                </div>


            </div>





        </div>
    )
};

