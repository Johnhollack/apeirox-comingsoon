import SocialItem from "./SocialItem";
import Image from "next/image";


function Footer() {
    return (
        <div className="flex flex-grow flex-col sm:flex-row mt-5 justify-evenly items-center">
            <Image
                className="w-screen"
                src="/line-diagram.png"
                alt="facebook"
                width={500}
                height={150}
            />
            <Image
                className="w-screen"
                src="/line-diagram.png"
                alt="facebook"
                width={500}
                height={150}
            />
            <Image
                className="w-screen"
                src="/line-diagram.png"
                alt="facebook"
                width={500}
                height={150}
            />
        </div>


    )
}

export default Footer;