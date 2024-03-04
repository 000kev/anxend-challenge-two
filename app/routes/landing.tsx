import { Form } from "@remix-run/react";
import Select from "../components/Select";
import owl from "/owl.png";

export default function LandingPage() {
    const clickHandler = () => {
        console.log("Click!");
    }

    return (<>
        <h1 className="mt-10 font-montserrat text-5xl text-white drop-shadow-xl">Who's that Pokemon?!</h1>
        <p className="mt-8 font-montserrat text-xl text-white">Do you have what it takes???</p>
        <Form action="/landing">
            <label>
                Your name:
                <input name="name"></input>
            </label>

            <br/>

            <span>
                <label>
                    Choose your avatar:
                </label>
                <picture>
                    <div>
                        <img className="relative z-0 w-48 h-48" src={owl}/>
                    </div>
                </picture>
            </span>

            <br/>

            <label className="flex flex-col">
                Characters: 
                <span>
                    <Select name="owl" onClick={clickHandler}/>
                    <Select name="deer" onClick={clickHandler}/>
                    <Select name="skunk" onClick={clickHandler}/>
                    <Select name="sonic" onClick={clickHandler}/>
                </span>
            </label>

            <br/>

            <label className="flex flex-col">
                Accessories: 
                <span>
                    <Select name="hat" onClick={clickHandler}/>
                    <Select name="glasses" onClick={clickHandler}/>
                </span>
            </label>

        </Form>
    </>);
}