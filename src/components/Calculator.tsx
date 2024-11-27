import { useMemo, useState } from "react"
import Buttons from "./Buttons"
import Input from "./Input"
import { Operators } from "../types/operations"

export default function Calculator() {
    const [input, setInput] = useState<string | null>(null)
    const [total, setTotal] = useState<number>(0)
    const [hasError, setHasError] = useState<boolean>(false)
    const [oldInput, setOldInput] = useState<string | null>(null)
    const [showOldInput, setShowOldInput] = useState<boolean>(false)
    const [prevSymbol, setPrevSymbol] = useState<string | null>(null)
    const [equalSignClicked, setEqualSignClicked] = useState<boolean>(false)

    const currentInput: string | null = useMemo<string | null>(
        () => (showOldInput ? oldInput : input),
        [input, showOldInput, oldInput]
    )

    const operations: Operators = {
        "+": (n1, n2) => n1 + n2,
        "-": (n1, n2) => n1 - n2,
        "✕": (n1, n2) => n1 * n2,
        "÷": (n1, n2) => n1 / n2,
        "%": (_n1, n2) => n2 / 100,
        "+/-": (_n1, n2) => n2 * -1,
    }

    function clear() {
        setInput(null)
        setOldInput(null)
        setShowOldInput(false)
        setTotal(0)
        setPrevSymbol(null)
        setHasError(false)
    }

    function prepareNextOperation(symbol: string) {
        setPrevSymbol(symbol)
        setShowOldInput(true)
        setOldInput(input)
        setInput(null)
    }

    function calculate(
        buffer: number,
        currentTotal: number,
        symbol: string
    ): number {
        return operations[symbol](currentTotal, buffer)
    }

    function handleButtonClick(value: string): void {
        if (showOldInput) {
            setShowOldInput(false)
        }
        const numValue: number = parseInt(value)
        if (Number.isNaN(numValue)) {
            handleSymbol(value)
        } else {
            storeNumToScreen(value)
            if (equalSignClicked) {
                setTotal(0)
            }
        }
        if (value !== "=") {
            setEqualSignClicked(
                (value === "+/-" && equalSignClicked) ||
                    value === "%" ||
                    (value === "." && equalSignClicked)
            )
        }
    }

    function handleSymbol(symbol: string) {
        switch (symbol) {
            case "C":
                clear()
                break
            case "=":
                { setEqualSignClicked(true)
                if (input === null || prevSymbol === null) return
                const finalTotal: number = calculate(
                    parseFloat(input),
                    total,
                    prevSymbol
                )
                if (input === "0" && prevSymbol === "÷") {
                    setHasError(true)
                    return
                }
                setInput(finalTotal.toString())
                setPrevSymbol(null)
                if (showOldInput) setShowOldInput(false)
                break }
            case "%":
            case "+/-": {
                if (input === null) {
                    return
                }
                const changedValue: number = calculate(
                    parseFloat(input),
                    total,
                    symbol
                )
                setInput(changedValue.toString())
                break
            }
            case ".":
                if (!input?.includes(".")) {
                    storeNumToScreen(symbol)
                }
                break
            case "+":
            case "-":
            case "✕":
            case "÷": {
                if (input === null || prevSymbol === null) {
                    if (prevSymbol === null) {
                        if (input !== null) setTotal(parseFloat(input))
                        prepareNextOperation(symbol)
                    }
                    return
                }
                const newTotal: number = calculate(
                    parseFloat(input),
                    total,
                    prevSymbol
                )
                setTotal(newTotal)
                prepareNextOperation(symbol)
                break
            }
            default:
                break
        }
    }

    function storeNumToScreen(num: string) {
        setInput((prev) =>
            prev === "0" ||
            prev === null ||
            (equalSignClicked && input?.charAt(0) !== ".")
                ? num
                : prev + num
        )
    }

    return (
        <div className="">
            <Input error={hasError} input={currentInput ?? "0"} />
            <Buttons handleOnClick={handleButtonClick} />
        </div>
    )
}
