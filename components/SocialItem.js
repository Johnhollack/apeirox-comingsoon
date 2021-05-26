import Image from "next/image";
import Link from "next/link";


function SocialItem({title, image, url}) {
    return (
        <Link href={url}>
            <div className="flex flex-col items-center cursor-pointer group w-14 sm:w-20 hover:text-white">
                <Image
                    className=" m-5 group-hover:animate-bounce object-contain"
                    src={image}
                    alt="facebook"
                    width={35}
                    height={35}
                />
                <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
            </div>
        </Link>

    )
}

export default SocialItem;