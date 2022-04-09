import Head from "next/head"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({
    email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
});

export default function Contact() {
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);

    return (
        <div>
            <Head>
                //Fonts//
                <link rel="stylesheet" href="https://use.typekit.net/apm7ucf.css"></link>
            </Head>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div>Email</div>
            <input className="form__input" {...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}

            <div>Password</div>
            <input className="form__input" {...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}

            <button className="default__button">Log in</button>
        </form>




        </div>
    )
};
