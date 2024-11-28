interface ButtonsProp {
    handleOnClick: (value: string) => void
}

export default function Buttons({ handleOnClick }: ButtonsProp) {
    function onClick(event: React.MouseEvent<HTMLButtonElement>) {
        const value: string = (event.currentTarget as HTMLButtonElement)
            .innerText
        handleOnClick(value)
    }

    return (
        <div className="grid grid-cols-4 ">
            <button
                className="bg-gray-700 text-white py-4 "
                onClick={onClick}
            >
                C
            </button>
            <button
                className="bg-gray-700 text-white py-4 "
                onClick={onClick}
            >
                +/-
            </button>
            <button
                className="bg-gray-700 text-white py-4 "
                onClick={onClick}
            >
                %
            </button>
            <button
                className="bg-orange-500 text-white py-4 "
                onClick={onClick}
            >
                ÷
            </button>
            <button
                className="bg-gray-600 text-white py-4 "
                onClick={onClick}
            >
                7
            </button>
            <button
                className="bg-gray-600 text-white py-4 "
                onClick={onClick}
            >
                8
            </button>
            <button
                className="bg-gray-600 text-white py-4 "
                onClick={onClick}
            >
                9
            </button>
            <button
                className="bg-orange-500 text-white py-4 "
                onClick={onClick}
            >
                ✕
            </button>
            <button
                className="bg-gray-600 text-white py-4 "
                onClick={onClick}
            >
                4
            </button>
            <button
                className="bg-gray-600 text-white py-4 "
                onClick={onClick}
            >
                5
            </button>
            <button
                className="bg-gray-600 text-white py-4 "
                onClick={onClick}
            >
                6
            </button>
            <button
                className="bg-orange-500 text-white py-4 "
                onClick={onClick}
            >
                -
            </button>
            <button
                className="bg-gray-600 text-white py-4 "
                onClick={onClick}
            >
                1
            </button>
            <button
                className="bg-gray-600 text-white py-4 "
                onClick={onClick}
            >
                2
            </button>
            <button
                className="bg-gray-600 text-white py-4 "
                onClick={onClick}
            >
                3
            </button>
            <button
                className="bg-orange-500 text-white py-4 "
                onClick={onClick}
            >
                +
            </button>
            <button
                className="col-span-2 bg-gray-600 text-white py-4 "
                onClick={onClick}
            >
                0
            </button>
            <button
                className="bg-gray-500 text-white py-4 backdrop-blur-md"
                onClick={onClick}
            >
                .
            </button>
            <button
                className="bg-orange-500 text-white py-4 "
                onClick={onClick}
            >
                =
            </button>
        </div>
    )
}
