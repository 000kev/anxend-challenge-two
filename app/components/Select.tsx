import owl from "/owl.png";
import skunk from "/skunk.png";
import sonic from "/sonic.png";
import deer from "/deer.png";

export default function Select(props: any) {
    const filename = `/${props.name}.png`
    return (
        <button onClick={props.onClick}>
            <img className="relative z-0 w-36 h-36" src={filename} />
        </button>
    );
}