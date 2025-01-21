import {useEffect, useState} from "react";

export const useDebounce = <T,>(value: T, interval: number) => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, interval)
        return () => {
            clearTimeout(timer)
        }
    })

    return debouncedValue
}