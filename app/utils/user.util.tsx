import Deer from "../components/Deer";
import Owl from "../components/Owl";
import Skunk from "../components/Skunk";
import Sonic from "../components/Sonic";

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

export default displayUser;