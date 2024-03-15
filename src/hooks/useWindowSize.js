import { useState, useEffect } from "react"

export default function useWindowSize(){
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    useEffect(() => {
        function handleRezise (){
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handleRezise)
        handleRezise()
        return() => window.removeEventListener('resize', handleRezise)
    }, [])

    return windowSize
}