function TextItem({title, className}) {
    return (
        <div className="flex flex-grow items-center w-100 sm:w-auto m-1">
            <p className={className}>{title}</p>
        </div>
    )
}

export default TextItem;