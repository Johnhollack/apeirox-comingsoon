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
import BoxItem from "./BoxItem";
import Social from "./Social";
import Footer from "./Footer";



function BodyBox() {
    return (
        <div className="flex flex-col my-5 mx-5 justify-between items-center h-auto">
            <div className="flex flex-col sm:flex-row flex-grow justify-evenly items-center ">
                <BoxItem className="bg-white w-80 md:w-96 rounded-sm px-3 md:px-5 p-1 sm:p-2 md:p-3 m-3" text="Email address"/>
                <BoxItem className="bg-yellow-600 text-white rounded p-1 sm:p-2 md:p-3 w-20 sm:w-28 text-center " text="Sign up"/>
            </div>

            <Social />
        </div>
    )
}

export default BodyBox;