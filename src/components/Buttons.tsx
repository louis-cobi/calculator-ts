interface ButtonsProp {
    handleOnClick: (value: string) => void
}

export default function Buttons({ handleOnClick }: ButtonsProp) {
    function onClick(event: React.MouseEvent<HTMLButtonElement>) {
        const value: string = (event.currentTarget as HTMLButtonElement).innerText
        handleOnClick(value)
    }

    return (
        <div className="button-container">
            <div className="button-row">
                <button className="top" onClick={onClick}>
                    C
                </button>
                <button className="top" onClick={onClick}>
                    +/-
                </button>
                <button className="top" onClick={onClick}>
                    %
                </button>
                <button className="last-button" onClick={onClick}>
                    ÷
                </button>
            </div>
            <div className="button-row">
                <button onClick={onClick}>7</button>
                <button onClick={onClick}>8</button>
                <button onClick={onClick}>9</button>
                <button className="last-button" onClick={onClick}>
                    ✕
                </button>
            </div>
            <div className="button-row">
                <button onClick={onClick}>4</button>
                <button onClick={onClick}>5</button>
                <button onClick={onClick}>6</button>
                <button className="last-button" onClick={onClick}>
                    -
                </button>
            </div>
            <div className="button-row">
                <button onClick={onClick}>1</button>
                <button onClick={onClick}>2</button>
                <button onClick={onClick}>3</button>
                <button className="last-button" onClick={onClick}>
                    +
                </button>
            </div>
            <div className="button-row">
                <button className="zero-btn" onClick={onClick}>
                    0
                </button>
                <button className="decimal-btn" onClick={onClick}>
                    .
                </button>
                <button
                    className="last-button equal-sign-btn"
                    onClick={onClick}
                >
                    =
                </button>
            </div>
        </div>
    )
}
