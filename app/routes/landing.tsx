import { Form, useNavigate } from "@remix-run/react";
import React from "react";
import Select from "../components/Select";
import Owl from "../components/Owl";
import Deer from "../components/Deer";
import Skunk from "../components/Skunk";
import Sonic from "../components/Sonic";

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

    const displayUser = (user: { image: string, hat: boolean, glasses: boolean }) => {
        if (user.image === "placeholder") {
            return <img className="relative z-0 w-48 h-48" src="/placeholder.png" />
        } else if (user.image === "owl") {
            return (
                user.hat && user.glasses
                    ? <Owl wearingHat wearingGlasses />
                    : user.hat ? <Owl wearingHat /> : user.glasses ? <Owl wearingGlasses />
                    : <Owl />
            )
        } else if (user.image === "deer") {
            return (
                user.hat && user.glasses
                    ? <Deer wearingHat wearingGlasses />
                    : user.hat ? <Deer wearingHat /> : user.glasses ? <Deer wearingGlasses />
                    : <Deer />
            )
        } else if (user.image === "sonic") {
            return (
                user.hat && user.glasses
                    ? <Sonic wearingHat wearingGlasses />
                    : user.hat ? <Sonic wearingHat /> : user.glasses ? <Sonic wearingGlasses />
                    : <Sonic />
            )
        } else if (user.image === "skunk") {
            return (
                user.hat && user.glasses
                    ? <Skunk wearingHat wearingGlasses />
                    : user.hat ? <Skunk wearingHat /> : user.glasses ? <Skunk wearingGlasses />
                    : <Skunk />
            )
        }

    }

    return (<>
        <h1 className="mt-10 font-montserrat text-5xl text-white drop-shadow-xl">Who's that Pokemon?!</h1>

        <Form action="/landing">
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

            <button className="mt-8 inline-block rounded-full bg-anxpurple-700 px-16 py-4 font-montserrat text-white hover:bg-anxwhite-300 hover:text-anxgreen-300 hover:shadow-xl" type="submit">Submit</button>


        </Form>
    </>);
}