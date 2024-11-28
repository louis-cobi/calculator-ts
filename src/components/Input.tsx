import { useState } from "react"

interface InputProps {
    input: string
    error: boolean
    history: Array<string>
}

export default function Input({ input, error, history }: InputProps) {
    const [showHistory, setShowHistory] = useState(false)

    return (
        <div className="relative h-[20dvh] overflow-hidden">
            <a
                className="absolute top-2 right-2 z-10 px-4 py-2 "
                onClick={() => {
                    setShowHistory(!showHistory)
                }}
            >
                {showHistory ? "hide" : "show"} history
            </a>
            <div className="flex h-full">
                {showHistory && (
                    <div className="flex-1 overflow-y-auto p-2 scrollbar-left">
                        <ul>
                            {history.map((entry, index) => (
                                <li key={index} className="mb-1">
                                    {entry}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="relative flex-1 flex items-end justify-end p-2">
                    {error ? (
                        <h1 className="text-red-500">Error</h1>
                    ) : (
                        <h1 className="text-gray-800">{input ? input : "0"}</h1>
                    )}
                </div>
            </div>
        </div>
    )
}
