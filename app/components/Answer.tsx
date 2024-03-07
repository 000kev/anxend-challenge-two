export default function Answer(props: { correct: boolean, score: any, children: any, next: any }) {

    function calculateScore(time: number): number {
        if ( time <= 6000) return 10;
        else if ( time <= 8000) return 8;
        else if ( time <= 10000) return 6;
        else if (time <= 12500) return 4;
        else if (time <=15000) return 2;
        else return 1;
    }
    const clickHandler = (e) => {
        if (props.correct) {
            console.log(props.children, "Correct answer!");
            props.next((prev) => prev+1);
            props.score((prev) => prev+calculateScore(e.timeStamp));
            console.log(e.timeStamp);
        }
        console.log("Score",calculateScore(e.timeStamp));
    }
    return <button
        className="mt-8 inline-block rounded-full bg-anxpurple-700 px-16 py-4 font-montserrat text-white hover:bg-anxwhite-300 hover:text-anxgreen-300 hover:shadow-xl"
        onClick={clickHandler}
    >
        {props.children}
    </button>
}