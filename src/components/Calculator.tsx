import { useMemo, useState } from "react"
import Buttons from "./Buttons"
import Input from "./Input"

export default function Calculator() {
    const [input, setInput] = useState<string>("")
    const [total, setTotal] = useState<number>(0)
    const [hasError, setHasError] = useState<boolean>(false)
    const [oldInput, setOldInput] = useState<string | null>(null)
    const [showOldInput, setShowOldInput] = useState<boolean>(false)
    const [prevSymbol, setPrevSymbol] = useState<string | null>(null)
    const [equalSignClicked, setEqualSignClicked] = useState<boolean>(false)

    const currentInput: string | null = useMemo<string | null>( () => (showOldInput ? oldInput : input), [input, showOldInput, oldInput])

    function handleButtonClick(value: string): void {
        if (showOldInput) {
            setShowOldInput(false);
          }
          const numValue: number = parseInt(value);
          if (Number.isNaN(numValue)) {
            handleSymbol(value);
          } else {
            storeNumToScreen(value);
            if(equalSignClicked){
              setTotal(0)
            } 
          }
          if(value !== '='){
            setEqualSignClicked((value === '+/-' && equalSignClicked || value === '%' || value === '.' && equalSignClicked))
          }
    }

    function handleSymbol(symbol: string) {
        // todo handle calculation logic
    }

    function storeNumToScreen(num: string) {
        setInput(prev => prev === '0' || prev === null || equalSignClicked && input?.charAt(0) !== '.'? num : prev + num)
    }

    return (
        <div className="">
            <Input error={hasError} input={currentInput  ?? "0"} />
            <Buttons handleOnClick={handleButtonClick} />
        </div>
    )
}
