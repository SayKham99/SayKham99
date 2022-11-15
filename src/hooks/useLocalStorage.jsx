import {useEffect, useState} from "react";

function useLocalStorage(initialValue, key) {
    const getValue = () => {
        const storage = localStorage.getItem(key)
        if (storage) {
            return storage
        }
        return initialValue
    }
    const [value, setValue] = useState(getValue)

    useEffect(() => {
        localStorage.setItem(key, value)
    }, [value])

    return [value, setValue]
}

export {useLocalStorage}