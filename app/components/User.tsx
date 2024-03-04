import Owl from "../components/Owl";
import Deer from "../components/Deer";
import Sonic from "../components/Sonic";
import Skunk from "../components/Skunk";

export default function User() {
    return (<>
        <Owl wearingHat wearingGlasses/>
        <Deer/>
        <Sonic wearingGlasses/>
        <Skunk wearingHat/>
    </>);
}