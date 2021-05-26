import SocialItem from "./SocialItem";


function Social() {
    return (
        <div className="flex flex-grow mt-12 justify-evenly max-w-1xl items-center">
            <SocialItem title="@apeiroxHQ" image="/facebook.png" url="https://facebook.com/apeiroxcom"/>
            <SocialItem title="@apeiroxHQ" image="/twitter.png" url="https://twitter.com/apeiroxcom"/>
            <SocialItem title="@apeiroxHQ" image="/instagram.png" url="https://instagram.com/apeiroxcom"/>
        </div>
    )
}

export default Social;