import { useState } from "react"

interface InputProps {
    input: string
    error: boolean
    history: Array<string>
}

export default function Input({ input, error, history }: InputProps) {
    const [showHistory, setShowHistory] = useState(false)

    return (
        <div className="input-container">
            {showHistory ? (
                <div>
                    <ul>
                        {history.map((entry, index) => (
                            <li key={index}>{entry}</li>
                        ))}
                    </ul>
                </div>
            ) : null}
            {error ? <h1>Error</h1> : <h1>{input ? input : "0"}</h1>}
            <button
                onClick={() => {
                    setShowHistory(!showHistory)
                }}
            >
                show history
            </button>
        </div>
    )
}
