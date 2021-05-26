function BoxItem({text, className}) {
    return (
        <div className="flex flex-grow items-center m-1">
            <p className={className}>{text}</p>
        </div>
    )
}

export default BoxItem;