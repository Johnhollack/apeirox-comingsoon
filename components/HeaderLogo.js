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



function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between sm:items-left items-center h-auto">
            <Image
                className="object-contain"
                src="/favicon.png"
                alt="Apeirox Logo"
                width={100}
                height={100}
            />
        </header>
    )
}

export default Header;