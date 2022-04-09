import Head from "next/head"

export default function Nav() {

    return (
        <div>
            <Head>
                //Fonts//
                <link rel="stylesheet" href="https://use.typekit.net/apm7ucf.css"></link>
                
            </Head>
            <div className="nav__row">
            <div className="nav__logo">
            <h1 className="logo">Holidaze</h1>
            </div>
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
                    </div>
                <div className="nav__search">
                        <a href="/login">Log In</a>
                    <input placeholder="Search..."></input>
                </div>
                </div>


            </div>





        </div>
    )
};

