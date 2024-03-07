import React from 'react';
import data from "../utils/data.json";
import Answer from "../components/Answer"
import { ActionFunctionArgs, redirect } from '@remix-run/node';
import displayUser from "../utils/user.util";
import { useActionData } from '@remix-run/react';


export async function action({ request }: ActionFunctionArgs) {
    console.log("Quiz action");
    
    const data = await request.formData();
    const image = data?.get("image").toString() ?? "placeholder";
    const hat = data?.get("hat").toString() === "true" ? true : false;
    const glasses = data?.get("glasses").toString() === "true" ? true : false;
    // const hat = Boolean(data.get("hat").toString());
    // const glasses = Boolean(data.get("glasses").toString());
    // const hat = (data.get("hat").toString() === 'false' ? Boolean('false') : Boolean('true')) ?? false ;
    // const glasses = (data.get("glesses").toString() === 'false' ? Boolean('false') : Boolean('true')) ?? false;
    // console.log(image, hat, glasses);
    const user = {image: image, hat: hat, glasses: glasses}
    redirect('/quiz');
    return user;
}


export default function Quiz() {
    // console.log(data);
    // let quiz_id = Math.floor(Math.random() * 4);
    const [quiz_id, setID] = React.useState(0);
    const [score, setScore] = React.useState(0);
    // console.log(data.mcq[quiz_id])
    // console.log(data.mcq);
    const action_data = useActionData<typeof action>();
    console.log("ACTION DATA", action_data);

    return (
        <main className="flex flex-col">
            <section id="info" className="flex flex-row">
                <h1 className="basis-1/2 text-center mt-10 font-montserrat text-5xl text-white drop-shadow-xl">{ quiz_id < data.mcq.length ? data.mcq[quiz_id].question : "Fin"! }</h1>
                <div className="mt-5">
                    {displayUser(action_data)}
                    <p className="text-center mt-8 font-montserrat text-xl text-white">{score}</p>
                </div>
            </section>
            <section id="mcq" className="flex flex-col w-1/2">
                {
                    quiz_id < data.mcq.length 
                    ? data.mcq[quiz_id].options.map( (item, index) => {
                        // return <div key={index}>{item[0]}</div>
                        return <Answer correct={Boolean(item[1])} score={setScore} next={setID} >{item[0]}</Answer>
                    })
                    : <p className='mt-8 font-montserrat text-xl text-center text-white'>You have reached the end of the Quiz! Your final score is {score}/40</p>
                }
            </section>
        </main>
    );
}