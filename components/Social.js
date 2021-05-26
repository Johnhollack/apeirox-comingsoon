import SocialItem from "./SocialItem";


function Social() {
    return (
        <div className="flex flex-grow mt-12 justify-evenly max-w-1xl items-center">
            <SocialItem title="@apeiroxcom" image="/facebook.png" url="https://facebook.com/apeiroxcom"/>
            <SocialItem title="@apeiroxcom" image="/twitter.png" url="https://twitter.com/apeiroxcom"/>
            <SocialItem title="@apeiroxcom" image="/instagram.png" url="https://instagram.com/apeiroxcom"/>
        </div>
    )
}

export default Social;