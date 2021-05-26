import Image from "next/image";
import HeaderItem from "./SocialItem";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";
import TextItem from "./TextItem";



function BodyText() {
    return (
        <div className="flex flex-col my-8 mx-5 justify-between items-center h-auto">
            <div className="flex flex-col flex-grow justify-evenly items-center ">
                <TextItem title="SOMETHING AWESOME IS COMING SOON" className={"text-white tracking-tight sm:tracking-wide md:tracking-widest text-2xl sm:text-2xl md:text-3xl font-semibold md:font-bold antialiased sm:subpixel-antialiased md:antialiased text-center "}/>
                <TextItem title="It's going to be amazing! Sign up or follow our social handles to find out when it's ready" className={"tracking-tight sm:tracking-wide md:tracking-widest text-xs sm:text-sm md:text-sm text-center md:text-base antialiased sm:subpixel-antialiased md:antialiased "}/>
            </div>

        </div>
    )
}

export default BodyText;