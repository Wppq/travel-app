export default function PopupCard({message}) {
    return (
        <>
            <div className="w-80 border-2 bg-gray-100 text-center">
                <h1 className="py-6 px-10">{message}</h1>
            </div>
        </>
    )
}

