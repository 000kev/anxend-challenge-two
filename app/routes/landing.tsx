import { useFetcher, useSubmit } from "@remix-run/react";
import { Form } from "@remix-run/react";
import React from "react";
import Select from "../components/Select";
import displayUser from "../utils/user.util";

export default function LandingPage() {

    const [default_user, setUser] = React.useState({
        image: "placeholder",
        hat: false,
        glasses: false
    })

    const clickHandler = (img: string) => {
        console.log("Click!", img);
        switch (img) {
            case "hat":
                setUser((prev) => {
                    return (
                        {
                            ...prev,
                            hat: !prev.hat
                        }
                    )
                })
                break;
            case "glasses":
                setUser((prev) => {
                    return (
                        {
                            ...prev,
                            glasses: !prev.glasses
                        }
                    )
                })
                break;
            default:
                setUser((prev) => {
                    return (
                        {
                            ...prev,
                            image: img
                        }
                    )
                })
        }
    }
    
    const submit = useSubmit();
    const submitHandler = (e) => {
        e.preventDefault();
        submit(default_user, {method: "post", action: "/quiz"});
    }

    return (<>
        <h1 className="mt-10 font-montserrat text-5xl text-white drop-shadow-xl">Who's that Pokemon?!</h1>

        <Form method="post" action="/quiz" onSubmit={submitHandler}>
            <span className="flex flex-row">
                <label className="mt-8 font-montserrat text-xl mr-3 text-white basis-1/4">
                    Your name:
                </label>
                <input className="text-white bg-anxpurple-300 border-b-2 -ml-3 text-center" name="name"></input>
            </span>

            <br />

            <span className="flex flex-row">
                <label className="mt-8 font-montserrat text-xl text-white basis-1/4">
                    Choose your avatar:
                </label>
                <picture className="basis-1/2">
                    <div>
                        {displayUser(default_user)}
                    </div>
                </picture>
            </span>

            <br />

            <span className="flex flex-row">
                <label className="mt-8 font-montserrat text-xl text-white basis-1/4">
                    Characters:
                </label>
                <span>
                    <Select name="owl" onClick={clickHandler} />
                    <Select name="deer" onClick={clickHandler} />
                    <Select name="skunk" onClick={clickHandler} />
                    <Select name="sonic" onClick={clickHandler} />
                </span>
            </span>

            <br />

            <span className="flex flex-row">
                <label className="mt-8 font-montserrat text-xl text-white basis-1/4">
                    Accessories:
                </label>
                <span>
                    <Select name="hat" onClick={clickHandler} />
                    <Select name="glasses" onClick={clickHandler} />
                </span>
            </span>

            <br />

            <button type="submit" className="mt-8 inline-block rounded-full bg-anxpurple-700 px-16 py-4 font-montserrat text-white hover:bg-anxwhite-300 hover:text-anxgreen-300 hover:shadow-xl">Submit</button>

        </Form>
    </>);
}