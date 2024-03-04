import skunk from "/skunk.png";
import hat from "/hat.png";
import glasses from "/glasses.png";

export default function Skunk(props: {wearingHat?: boolean, wearingGlasses?: boolean}) {
    return (
        <picture className="relative inline w-96 h-96">
            <div>
                { props.wearingHat ? <img className="absolute z-10 w-36 h-36 left-6 -top-8" src={hat}/> : <></> }
                { props.wearingGlasses ? <img className="absolute z-10 w-36 h-36 left-6 top-4" src={glasses}/> : <></> }
                <img className="relative z-0 w-48 h-48" src={skunk}/>
            </div>
        </picture>
    )
}