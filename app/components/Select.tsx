export default function Select(props: any) {
    const filename = `/${props.name}.png`;
    const clickHandler = () => {
        props.onClick(props.name);
    }
    return (
        <button type="button" onClick={clickHandler}>
            <img className="relative z-0 w-36 h-36" src={filename} />
        </button>
    );
}