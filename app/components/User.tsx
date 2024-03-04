import owl from "/owl.png";
import skunk from "/skunk.png";
import sonic from "/sonic.png";
import deer from "/deer.png";
import hat from "/hat.png";
import glasses from "/glasses.png";

const AVATAR = "relative z-0 w-48 h-48";


export default function User() {
    return (<>
        <picture className="relative inline w-96 h-96 top-5">
            <div>
                <img className="absolute z-10 w-36 h-36 left-6 -top-5" src={hat}/>
                <img className="absolute z-10 w-36 h-36 left-6 top-5" src={glasses}/>
                <img className="relative z-0 w-48 h-48" src={owl}/>
            </div>
        </picture>
        <picture className="relative inline w-96 h-96 top-24">
            <div>
                <img className="absolute z-10 w-36 h-36 left-6 -top-3" src={hat}/>
                <img className="absolute z-10 w-36 h-36 left-6 top-6" src={glasses}/>
                <img className="relative z-0 w-48 h-48" src={deer}/>
            </div>
        </picture>
        <picture className="relative inline w-96 h-96 top-48">
            <div>
                <img className="absolute z-10 w-36 h-36 left-6 -top-2" src={hat}/>
                <img className="absolute z-10 w-36 h-36 left-6 top-8" src={glasses}/>
                <img className="relative z-0 w-48 h-48" src={sonic}/>
            </div>
        </picture>
        <picture className="relative inline w-96 h-96 top-64">
            <div>
                <img className="absolute z-10 w-36 h-36 left-6 -top-5" src={hat}/>
                <img className="absolute z-10 w-36 h-36 left-6 top-4" src={glasses}/>
                <img className="relative z-0 w-48 h-48" src={skunk}/>
            </div>
        </picture>
    </>);
}